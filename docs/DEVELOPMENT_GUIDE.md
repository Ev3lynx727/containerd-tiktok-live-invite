# TikTok Live Invite App - Development Guide

## Getting Started
1. Clone repo.
2. Install: `npm install` (includes backend deps like sqlite3 for DB).
3. Setup TikTok app: Get client ID/secret from https://developers.tiktok.com/.
4. Add .env: `TIKTOK_CLIENT_ID=your_id`, `TIKTOK_CLIENT_SECRET=your_secret`, `JWT_SECRET=your_secret`, `DB_PATH=./database.db`.
5. Run dev: `npm run dev` (frontend); `npm run server` (backend).

## Code Structure
- `/src/components`: UI components (Login, InviteForm).
- `/src/api`: TikTok SDK integrations.
- `/src/utils`: Helpers (e.g., post composer).

## Best Practices
- Use TypeScript.
- Lint: `npm run lint`.
- Test: `npm test` (add unit tests for SDK).

## Deployment
- Build: `npm run build`.
- Deploy to Vercel.