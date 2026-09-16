# 中継サーバー（協力プレイ）

部屋コード（4 桁）で 2 台を繋ぎ、メッセージを相手へ転送するだけの Node サーバー。永続化なし。

## ローカルで動かす（LAN テスト）
```bash
cd server && npm i && npm start
```
`ws://<Mac の LAN IP>:8787` が接続先。LAN IP は
```bash
ipconfig getifaddr en0
```
（Wi‑Fi が en0 でない場合は `ifconfig | grep "inet "`）。
ゲーム側は **調整パネル（DEBUG）→「サーバーURL」** に `ws://192.168.x.x:8787` を入れる（`localStorage["haitatsu.net.url"]`）。
iOS 実機は `Info.plist` の `NSAllowsLocalNetworking` で LAN の平文 `ws://` を許可済み。

## Render に置く（ユーザー操作）
1. GitHub Pages 用リポジトリ **`Capybaragames0408/Haitatsu`** に **この `server/` フォルダごと**アップロード（`dist` の手動アップロードと同じ要領。ルートの `index.html`・`assets`・`models` はそのまま）。
2. Render → **New Web Service** → `Haitatsu` を選択。サービス名は `haitatsu-relay`。
   - **Root Directory**: `server`
   - Runtime: Node ／ Build Command: `npm install` ／ Start Command: `npm start`
   - Health Check Path: `/health`
   - Plan: Free（15 分無操作で寝る。初回接続に 30 秒ほどかかる）
3. 発行された `https://xxx.onrender.com` を **`wss://xxx.onrender.com`** としてゲームの「サーバーURL」に設定（既定値は `src/net/config.js` の `DEFAULT_URL` ＝ `wss://haitatsu-relay.onrender.com`）。
- **`server/index.js` を変えたら**：同じ手順で `Haitatsu` の `server/` を上書きアップロード → Render の `haitatsu-relay` → **Manual Deploy → Deploy latest commit**。ゲームのロビーに「サーバーが古いです」と出るのは Render 上が旧版（v1＝4KB 上限）のまま。
- Root Directory を `server` にしていれば、`server/` 以外の変更（dist の更新）では再デプロイされない。もし再デプロイされるなら Auto-Deploy を Off にして手動 Deploy に。
- 本体リポジトリ（このフォルダ）は push しない。`server/` はここで作ってユーザーが `Haitatsu` へコピーする。

## 仕様（docs/38 §10-3）
- `GET /health` → `ok`。同じポートで WebSocket。`PORT` 環境変数。
- `GET /stats` → `{rooms, players, list:[{code, names, since}]}`（JSON）。`https://haitatsu-relay.onrender.com/stats` を開けば今遊んでいる人が分かる（切断中の席は名前に「（切断）」）。
- 部屋の作成（create）・参加（join）・復帰（rejoin）・退室（leave）・切断（disconnect）・消滅（expire）を `console.log`（ISO 時刻・部屋コード・役割・名前）。Render の **Logs** タブで見える。
- `hello {room?, clientId, name, equipped, paint, build}`：`room` なしで作成（`welcome{v, role:"host", code}`）、ありで参加（`welcome{v, role:"guest", code, peer}`）。相手には `peer{...}`（`build` も含む。アプリの版違い警告用）。`v` はプロトコル版（現在 3。無ければ旧版）。
- `hello` 以外は中身を見ずに相手へ転送。相手不在なら捨てる。`pose` は相手の送信バッファが 64KB を超えていれば捨てる。
- 64KB 上限（`sync` は荷物 150 件で約 20KB）、JSON 以外は切断。ping 5s、無応答で terminate。席は切断後 30s 保持（同じ `clientId` で復帰。古い半開きは閉じる）。
- `peerLeft{role, hold}`／`error{code: no_room | full | no_host | bad_hello}`。両方不在 30s か作成 2h で部屋削除。
