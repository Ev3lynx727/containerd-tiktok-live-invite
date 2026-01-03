# TikTok Live Invite App - Enhancements Scheme

## Proposed Additions
- **User Dashboard**: View invite history, post analytics (via Display API; stored in DB).
- **Notifications**: In-app alerts for triggered invites.
- **Advanced Automation**: Webhooks for event-based triggers (e.g., live start); DB for logs (implemented).
- **UI Enhancements**: Dark mode, drag-and-drop, accessibility.
- **Testing/Monitoring**: Jest tests, CI/CD, error logging (Sentry).
- **Security**: CAPTCHA, audit logs in DB.
- **Optional**: PWA for mobile feel; scale DB to MariaDB if needed.

## Rationale
- Builds robustness without complexity.
- Keeps organic focus with safeguards.
- Follows project structure (modular, scalable); backend standalone or n8n-connected.

See [PROJECT_SPEC.md](PROJECT_SPEC.md) for integrated requirements.