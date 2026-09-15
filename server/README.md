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
3. 発行された `https://xxx.onrender.com` を **`wss://xxx.onrender.com`** としてゲームの「サーバーURL」に設定（既定値は `src/net/config.js` の `DEFAULT_URL`）。
- Root Directory を `server` にしていれば、`server/` 以外の変更（dist の更新）では再デプロイされない。もし再デプロイされるなら Auto-Deploy を Off にして手動 Deploy に。
- 本体リポジトリ（このフォルダ）は push しない。`server/` はここで作ってユーザーが `Haitatsu` へコピーする。

## 仕様（docs/38 §10-3）
- `GET /health` → `ok`。同じポートで WebSocket。`PORT` 環境変数。
- `hello {room?, clientId, name, equipped, paint}`：`room` なしで作成（`welcome{role:"host", code}`）、ありで参加（`welcome{role:"guest", code, peer}`）。相手には `peer{...}`。
- `hello` 以外は中身を見ずに相手へ転送。相手不在なら捨てる。`pose` は相手の送信バッファが 64KB を超えていれば捨てる。
- 4KB 上限、JSON 以外は切断。ping 5s、無応答で terminate。席は切断後 30s 保持（同じ `clientId` で復帰。古い半開きは閉じる）。
- `peerLeft{role, hold}`／`error{code: no_room | full | no_host | bad_hello}`。両方不在 30s か作成 2h で部屋削除。
