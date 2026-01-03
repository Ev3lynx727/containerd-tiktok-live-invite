# Containerized TikTok Live Invite

This project can run in a DevContainer (optional Docker) or locally.

## DevContainer Setup (Docker Optional)
1. Install VS Code + Dev Containers extension.
2. Open folder in VS Code.
3. Run "Dev Containers: Reopen in Container".
4. Project auto-setups with Node.js 18, SQLite.

## Local Setup (No Docker)
1. Ensure Node.js 18+.
2. `npm install`.
3. Set .env.
4. `npm run server`.

## Running
- Backend: `npm run server` (port 3060).
- Test: `curl http://localhost:3060/health`.