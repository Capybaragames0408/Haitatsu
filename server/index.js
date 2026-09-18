/* 協力／バトルの中継サーバー（docs/38 §10-3、指示書 #26 §1、#44 §1 で N 席に）
   - GET /health → 200 "ok"。同じポートで WebSocket に upgrade
   - 部屋 Map(code → { code, mode:"coop"|"battle", max:2|4, seats:[Seat|null ×max], locked, createdAt, lastActive })。seats[0] がホスト。4 桁コード
   - hello で作成（create:{mode}）／参加（room）。空席が無ければ error{full}、locked（バトル開始後）なら error{in_progress}（再入室も不可・#43 §4）
   - hello 以外は中身を見ずに転送：from:seat を付けて、to 無しは部屋の他の全員へ、to:n はその席だけへ（要求は to:0＝ホスト）
   - mode（ホストのみ）：部屋の mode と max を切替。lock／unlock（ホストのみ）：locked の切替（終了か全員退室で false）
   - ping/pong 5s、30s 無応答で terminate。席は切断後 30s 保持（clientId で復帰。古い半開きは閉じて新しい方に席）
   - 全員不在 30s か作成 2h で部屋削除。ホストが切断のまま 30s → 全員へ peer{kind:"leave", seat:0} を送って部屋削除
   - 64KB 上限（sync のため）・JSON 以外は切断・bufferedAmount > 64KB で pose を捨てる（宛先ごと）
   - welcome{v, role, seat, code, mode, max, locked, peers:[seatInfo…]}／peer{kind:join|leave|back, seat, info, bye}／error{code}（no_room / full / no_host / in_progress / bad_hello）
   - bye（#27 §8）：席を即座に空ける（30s の保持なし）。全員へ peer{kind:"leave", bye:true}
   - console.log：部屋の作成・参加・復帰・退室・切断（時刻・部屋コード・席・名前）→ Render の Logs タブ
   - GET /stats → {rooms, players, list:[{code, mode, names, since}]}（今遊んでいる人）
   - welcome の v（プロトコル版）：2＝64KB＋bye、3＝build の中継、4＝N 席（#44）。クライアントは v が違うと「サーバーが古い／新しい」を出す
   永続化なし。認証なし（友達限定・4 桁コード。docs/38 §10-1） */
"use strict";
const http = require("http");
const { WebSocketServer } = require("ws");

const PORT = Number(process.env.PORT) || 8787;
const PROTO_V = 4;   // welcome{v}。1＝初版、2＝64KB 上限＋bye（#28）、3＝seatInfo に build（#29 §1）、4＝N 席・from/to（#44）
const PING_MS = 5000, DEAD_MS = 30000, SEAT_HOLD_MS = 30000, ROOM_TTL_MS = 2 * 60 * 60 * 1000;
const MAX_BYTES = 64 * 1024, MAX_BUFFERED = 64 * 1024;   // sync（荷物 150 件 ≈ 20KB）が通るよう 64KB（docs/38 の 4KB から変更。#28）
const MAX_OF = mode => mode === "battle" ? 4 : 2;

const rooms = new Map();   // code → room
// Seat: { seat, clientId, name, equipped, paint, build, ws|null, leftAt|null }

const log = (ev, room, seat, name) => console.log(`${new Date().toISOString()} ${ev} room=${room ? room.code : "-"} seat=${seat === undefined || seat === null ? "-" : seat} name=${name || "-"}`);
const online = s => !!(s && s.ws && s.ws.readyState === s.ws.OPEN);
const seatsOf = room => room.seats.filter(Boolean);
function stats(){
  const list = [];
  let players = 0;
  for(const room of rooms.values()){
    const seats = seatsOf(room);
    const n = seats.filter(online).length; players += n;
    list.push({ code:room.code, mode:room.mode, names: seats.map(s => s.name + (online(s) ? "" : "（切断）")), since: new Date(room.createdAt).toISOString() });
  }
  return { rooms: rooms.size, players, list };
}
const server = http.createServer((req, res) => {
  if(req.url === "/health" || req.url === "/"){ res.writeHead(200, { "Content-Type":"text/plain" }); res.end("ok"); return; }
  if(req.url === "/stats"){ res.writeHead(200, { "Content-Type":"application/json; charset=utf-8" }); res.end(JSON.stringify(stats(), null, 2)); return; }
  res.writeHead(404); res.end();
});
const wss = new WebSocketServer({ server, maxPayload: MAX_BYTES });

const now = () => Date.now();
const send = (ws, obj) => { if(ws && ws.readyState === ws.OPEN) ws.send(JSON.stringify(obj)); };
const sendAll = (room, obj, except) => { for(const s of seatsOf(room)) if(s !== except && online(s)) send(s.ws, obj); };

function newCode(){
  for(let i = 0; i < 100; i++){
    const c = String(1000 + Math.floor(Math.random() * 9000));
    if(!rooms.has(c)) return c;
  }
  return null;
}
const seatInfo = s => s ? { seat:s.seat, name:s.name, equipped:s.equipped, paint:s.paint, build:s.build, clientId:s.clientId, online: online(s) } : null;
const gone = s => !s || (!s.ws && s.leftAt && now() - s.leftAt > SEAT_HOLD_MS);

function attach(ws, room, seat, back){
  ws.room = room; ws.seat = seat; seat.ws = ws; seat.leftAt = null;
  room.lastActive = now();
  send(ws, { t:"welcome", v:PROTO_V, role: seat.seat === 0 ? "host" : "guest", seat:seat.seat, code:room.code, mode:room.mode, max:room.max, locked:room.locked,
             peers: seatsOf(room).filter(s => s !== seat).map(seatInfo) });
  sendAll(room, { t:"peer", kind: back ? "back" : "join", seat:seat.seat, info: seatInfo(seat) }, seat);   // 合流・復帰を全員へ
}

function onHello(ws, m){
  const { room: code, clientId, name, equipped, paint, build } = m;
  if(typeof clientId !== "string" || !clientId){ send(ws, { t:"error", code:"bad_hello" }); return ws.close(); }
  const info = { seat:0, clientId, name: String(name || "").slice(0, 8), equipped: equipped || null, paint: paint || null, build: build || null, ws:null, leftAt:null };
  if(!code){
    const c = newCode();
    if(!c){ send(ws, { t:"error", code:"full" }); return ws.close(); }
    const mode = (m.create && m.create.mode === "battle") ? "battle" : "coop";
    const room = { code:c, mode, max:MAX_OF(mode), seats:[info], locked:false, createdAt: now(), lastActive: now() };
    rooms.set(c, room);
    log("create", room, 0, info.name);
    return attach(ws, room, info, false);
  }
  const room = rooms.get(String(code));
  if(!room){ send(ws, { t:"error", code:"no_room" }); return ws.close(); }
  // 同じ clientId の席があれば復帰（古い半開きソケットは閉じて新しい方に席）。バトル開始後（locked）は復帰も不可（#43 §4）
  for(const s of seatsOf(room)){
    if(s.clientId === clientId){
      if(room.locked && !online(s) && room.mode === "battle"){ send(ws, { t:"error", code:"in_progress" }); return ws.close(); }
      if(s.ws && s.ws !== ws){ try{ s.ws.seat = null; s.ws.terminate(); }catch(e){} }
      s.name = info.name; s.equipped = info.equipped; s.paint = info.paint; s.build = info.build;
      log("rejoin", room, s.seat, s.name);
      return attach(ws, room, s, true);
    }
  }
  if(gone(room.seats[0])){ send(ws, { t:"error", code:"no_host" }); return ws.close(); }
  if(room.locked){ send(ws, { t:"error", code:"in_progress" }); return ws.close(); }
  let idx = -1;
  for(let i = 1; i < room.max; i++){ if(gone(room.seats[i])){ idx = i; break; } }   // 空席（保持切れの席も空き）
  if(idx < 0){ send(ws, { t:"error", code:"full" }); return ws.close(); }
  info.seat = idx; room.seats[idx] = info;
  log("join", room, idx, info.name);
  attach(ws, room, info, false);
}

wss.on("connection", ws => {
  ws.lastPong = now();
  ws.on("pong", () => { ws.lastPong = now(); });
  ws.on("message", (data, isBinary) => {
    if(isBinary) return ws.close();
    let m;
    try{ m = JSON.parse(data.toString()); }catch(e){ return ws.close(); }
    if(!m || typeof m.t !== "string") return ws.close();
    if(m.t === "hello") return onHello(ws, m);
    if(m.t === "pong"){ ws.lastPong = now(); return; }
    if(m.t === "bye"){ detach(ws, true); return ws.close(); }
    const room = ws.room, seat = ws.seat; if(!room || !seat) return;
    room.lastActive = now();
    if(seat.seat === 0){                                                        // ホストだけの操作
      if(m.t === "lock"){ room.locked = true; log("lock", room, 0, seat.name); return; }
      if(m.t === "unlock"){ room.locked = false; log("unlock", room, 0, seat.name); return; }
      if(m.t === "mode"){ room.mode = m.mode === "battle" ? "battle" : "coop"; room.max = MAX_OF(room.mode); room.seats.length = Math.max(room.seats.length, 1); }   // 切替（max は次の参加から効く）
    }
    m.from = seat.seat;
    const text = JSON.stringify(m);
    const targets = (m.to === undefined || m.to === null) ? seatsOf(room).filter(s => s !== seat) : [room.seats[m.to]].filter(s => s && s !== seat);
    for(const s of targets){
      if(!online(s)) continue;                                                  // 不在なら捨てる
      if(m.t === "pose" && s.ws.bufferedAmount > MAX_BUFFERED) continue;        // 溜まっていたら pose は捨てる
      s.ws.send(text);                                                          // 中身は見ずに転送（from を付けただけ）
    }
  });
  ws.on("close", () => detach(ws));
  ws.on("error", () => detach(ws));
});

function detach(ws, bye = false){
  const room = ws.room, seat = ws.seat;
  if(!room || !seat || seat.ws !== ws) return;
  seat.ws = null; seat.leftAt = now();
  ws.seat = null; ws.room = null;
  log(bye ? "leave" : "disconnect", room, seat.seat, seat.name);
  if(bye) room.seats[seat.seat] = null;                                        // 精算＝退室：席を即座に空ける（再入室は新しい席で）
  sendAll(room, { t:"peer", kind:"leave", seat:seat.seat, hold: bye ? 0 : SEAT_HOLD_MS, bye }, seat);
  if(seatsOf(room).length === 0){ rooms.delete(room.code); return; }
  if(bye && seat.seat === 0){ room.locked = false; }                            // ホスト退室：部屋は残る（協力の相手は 30 秒続行→精算。#27 §8）。バトルはクライアント側で全員終了
  if(!seatsOf(room).some(online)) room.locked = false;                         // 全員いなくなったら解錠
}

// ハートビートと掃除
setInterval(() => {
  const t = now();
  for(const ws of wss.clients){
    if(t - ws.lastPong > DEAD_MS){ try{ ws.terminate(); }catch(e){} continue; }   // 30s 無応答で切る
    try{ ws.ping(); }catch(e){}
  }
}, PING_MS);
setInterval(() => {
  const t = now();
  for(const [code, room] of rooms){
    const seats = seatsOf(room);
    if(seats.every(gone) || t - room.createdAt > ROOM_TTL_MS){
      for(const s of seats) if(s && s.ws){ try{ s.ws.close(); }catch(e){} }
      log("expire", room);
      rooms.delete(code);
      continue;
    }
    if(gone(room.seats[0]) && room.seats[0]){                                  // ホストが切断のまま 30s：全員へ leave seat:0 → 部屋削除（クライアントは全員終了）
      room.seats[0] = null;
      sendAll(room, { t:"peer", kind:"leave", seat:0, hold:0, bye:false, no_host:true });
      log("no_host", room, 0);
      if(!seatsOf(room).some(online)) rooms.delete(code);
    }
  }
}, 5000);

server.listen(PORT, () => console.log(`hdsim relay listening on :${PORT}`));
