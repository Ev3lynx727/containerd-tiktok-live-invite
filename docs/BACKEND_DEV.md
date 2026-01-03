# TikTok Live Invite App - Backend Development

## Setup
1. Install backend deps: `npm install`.
2. Create .env with required vars.
3. Run: `npm run server`.

## Structure
- `/server/app.js`: Main app with error handling.
- `/server/routes/`: API endpoints with validation.
- `/server/middleware/`: Auth with logging.
- `/server/utils/`: TikTok API helpers with retries.

## Stability Features
- Error handling and logging.
- Input validation.
- API retries for failures.
- No rate limit for testing.

## Current Status
- DB (SQLite) added for invite logs.
- Mock TikTok API with retries; ready for real integration.
- Next: Deploy to Vercel, integrate real APIs.