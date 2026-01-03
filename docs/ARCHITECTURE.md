# TikTok Live Invite App - Architecture

## Components
- **Frontend**: React web app for UI (login, invite form, composer, dashboard).
- **Backend**: Express server for automation endpoints, webhooks, and logging.
- **Database**: SQLite/MariaDB for history/logs.
- **APIs**: TikTok (Login Kit, Share Kit, Content Posting, Display).
- **External**: n8n/cron for triggers; backend standalone or connected.
- **Testing**: Jest for unit tests; CI/CD for deployment.

## Data Flow
1. User logs in → TikTok OAuth → Session token.
2. User enters live details → Generate invite post text → Share via Share Kit (user confirms).

## Security
- OAuth for auth; CAPTCHA for abuse prevention.
- Input validation; audit logs in DB.
- No sensitive data storage.