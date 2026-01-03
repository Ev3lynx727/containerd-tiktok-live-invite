# TikTok Live Invite App - Project Specification

## Project Name
TikTok Live Invite

## Description
A web app that helps TikTok creators organically invite specific users to join their live streams by composing and sharing posts via TikTok's official APIs.

## Goals
- Enable organic invites without spam.
- Use only TikTok official APIs (Login Kit, Share Kit).
- Simple, user-friendly interface.

## Requirements
- **Functional**:
  - User authentication via TikTok OAuth.
  - Input live stream URL/username.
  - Select/add invitee usernames (up to 5).
  - Generate invite post text with @mentions and link.
  - Share post via Share Kit (manual) or Content Posting API (automated via backend).
  - Backend endpoints/webhooks for external triggers (n8n/cron); standalone or connected.
  - User dashboard for invite history/analytics (stored in DB).
- **Non-Functional**:
  - Organic: Limits on automation; manual shares prioritized.
  - Secure: OAuth; audit logs in DB.
  - Responsive: Web app (React); optional PWA.
  - Compliant: TikTok terms; anti-abuse measures (CAPTCHA, disclaimers).
  - Extensible: Modular for future features (e.g., notifications, multi-platform).

## User Stories
- As a creator, I want to log in with TikTok so I can access invite features.
- As a creator, I want to enter my live details so invites reference my stream.
- As a creator, I want to add usernames so I can tag them in posts.
- As a creator, I want to share invites organically so it's spam-free.

## Tech Stack
- Frontend: React, TypeScript.
- Backend: Node.js/Express (for automation endpoints, webhooks).
- Database: SQLite (for history/logs; MariaDB if scaled).
- APIs: TikTok Login Kit, Share Kit, Content Posting API.
- Hosting: Vercel (free tier).
- External: n8n for scheduling; backend standalone or connected.

## Risks
- API changes: Monitor TikTok docs.
- Abuse: Rate limits; potential violations from automation.
- Mitigations: Disclaimers, user consents, logging.

## Milestones
1. Docs complete (including enhancements).
2. Auth integration (Login Kit).
3. UI build (dashboard, forms).
4. Backend & automation (endpoints, n8n).
5. Testing & monitoring (CI/CD, logs).
6. Enhancements (notifications, PWA).
7. Launch & audit.