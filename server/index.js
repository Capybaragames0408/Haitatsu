/* 協力プレイの中継サーバー（docs/38 §10-3、指示書 #26 §1）
   - GET /health → 200 "ok"。同じポートで WebSocket に upgrade
   - 部屋 Map(code → {host, guest, createdAt, lastActive})。4 桁コード（生存部屋と衝突しないよう再抽選）
   - hello で作成／参加。hello 以外は中身を見ずに相手へ転送（相手不在なら捨てる）
   - ping/pong 5s、30s 無応答で terminate。席は切断後 30s 保持（clientId で復帰。古い半開きは閉じて新しい方に席）
   - 両方不在 30s か作成 2h で部屋削除。4KB 上限・JSON 以外は切断・bufferedAmount > 64KB で pose を捨てる
   - peerLeft / error{code}（no_room / full / no_host / bad_hello）
   永続化なし。認証なし（友達限定・4 桁コード。docs/38 §10-1） */
"use strict";
const http = require("http");
const { WebSocketServer } = require("ws");

const PORT = Number(process.env.PORT) || 8787;
const PING_MS = 5000, DEAD_MS = 30000, SEAT_HOLD_MS = 30000, ROOM_TTL_MS = 2 * 60 * 60 * 1000;
const MAX_BYTES = 4096, MAX_BUFFERED = 64 * 1024;

const rooms = new Map();   // code → { code, host:Seat|null, guest:Seat|null, createdAt, lastActive }
// Seat: { clientId, name, equipped, paint, ws|null, leftAt|null }

const server = http.createServer((req, res) => {
  if(req.url === "/health" || req.url === "/"){ res.writeHead(200, { "Content-Type":"text/plain" }); res.end("ok"); return; }
  res.writeHead(404); res.end();
});
const wss = new WebSocketServer({ server, maxPayload: MAX_BYTES });

const now = () => Date.now();
const send = (ws, obj) => { if(ws && ws.readyState === ws.OPEN) ws.send(JSON.stringify(obj)); };
const other = (room, role) => role === "host" ? room.guest : room.host;

function newCode(){
  for(let i = 0; i < 100; i++){
    const c = String(1000 + Math.floor(Math.random() * 9000));
    if(!rooms.has(c)) return c;
  }
  return null;
}
const seatInfo = s => s ? { name:s.name, equipped:s.equipped, paint:s.paint, clientId:s.clientId, online: !!(s.ws && s.ws.readyState === s.ws.OPEN) } : null;

function attach(ws, room, role, seat){
  ws.room = room; ws.role = role; ws.seat = seat; seat.ws = ws; seat.leftAt = null;
  room.lastActive = now();
  const peer = other(room, role);
  send(ws, { t:"welcome", role, code:room.code, peer: seatInfo(peer) });
  if(peer && peer.ws) send(peer.ws, { t:"peer", peer: seatInfo(seat) });   // 合流・復帰を相手へ
}

function onHello(ws, m){
  const { room: code, clientId, name, equipped, paint } = m;
  if(typeof clientId !== "string" || !clientId){ send(ws, { t:"error", code:"bad_hello" }); return ws.close(); }
  const info = { clientId, name: String(name || "").slice(0, 8), equipped: equipped || null, paint: paint || null, ws:null, leftAt:null };
  if(!code){
    const c = newCode();
    if(!c){ send(ws, { t:"error", code:"full" }); return ws.close(); }
    const room = { code:c, host:info, guest:null, createdAt: now(), lastActive: now() };
    rooms.set(c, room);
    return attach(ws, room, "host", info);
  }
  const room = rooms.get(String(code));
  if(!room){ send(ws, { t:"error", code:"no_room" }); return ws.close(); }
  // 同じ clientId の席があれば復帰（古い半開きソケットは閉じて新しい方に席）
  for(const role of ["host", "guest"]){
    const s = room[role];
    if(s && s.clientId === clientId){
      if(s.ws && s.ws !== ws){ try{ s.ws.seat = null; s.ws.terminate(); }catch(e){} }
      s.name = info.name; s.equipped = info.equipped; s.paint = info.paint;
      return attach(ws, room, role, s);
    }
  }
  if(!room.host || (room.host.leftAt && now() - room.host.leftAt > SEAT_HOLD_MS)){ send(ws, { t:"error", code:"no_host" }); return ws.close(); }
  if(room.guest && !(room.guest.leftAt && now() - room.guest.leftAt > SEAT_HOLD_MS)){ send(ws, { t:"error", code:"full" }); return ws.close(); }
  room.guest = info;
  attach(ws, room, "guest", info);
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
    const room = ws.room; if(!room || !ws.seat) return;
    room.lastActive = now();
    const peer = other(room, ws.role);
    if(!peer || !peer.ws || peer.ws.readyState !== peer.ws.OPEN) return;   // 相手不在なら捨てる
    if(m.t === "pose" && peer.ws.bufferedAmount > MAX_BUFFERED) return;     // 溜まっていたら pose は捨てる
    peer.ws.send(data.toString());                                             // 中身は見ずに転送
  });
  ws.on("close", () => detach(ws));
  ws.on("error", () => detach(ws));
});

function detach(ws){
  const room = ws.room, seat = ws.seat;
  if(!room || !seat || seat.ws !== ws) return;
  seat.ws = null; seat.leftAt = now();
  ws.seat = null;
  const peer = other(room, ws.role);
  if(peer && peer.ws) send(peer.ws, { t:"peerLeft", role: ws.role, hold: SEAT_HOLD_MS });
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
    const gone = s => !s || (!s.ws && s.leftAt && t - s.leftAt > SEAT_HOLD_MS);
    if((gone(room.host) && gone(room.guest)) || t - room.createdAt > ROOM_TTL_MS){
      for(const s of [room.host, room.guest]) if(s && s.ws){ try{ s.ws.close(); }catch(e){} }
      rooms.delete(code);
    }
  }
}, 5000);

server.listen(PORT, () => console.log(`hdsim relay listening on :${PORT}`));
