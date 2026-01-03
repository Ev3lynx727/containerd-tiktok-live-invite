# TikTok Live Invite App

A simple web app for creators to invite specific TikTok users to join their live streams organically, using TikTok's official Login Kit and Share Kit.

## Overview
- **Purpose**: Help users compose and share invite posts on TikTok to reach specific users organically.
- **Tech Stack**: React (web), TypeScript, TikTok APIs, Node.js backend.
- **Key Features**:
  - TikTok OAuth login.
  - Manual live stream URL input.
  - Invitee selection by TikTok username.
  - Compose invite posts with @mentions.
  - Share via Share Kit (manual) or Content Posting API (automated via external triggers).
  - Organic limits; supports external automation (e.g., n8n, cron).
  - See [N8N_GUIDE.md](N8N_GUIDE.md) for automation.

## Setup
1. Register TikTok app at https://developers.tiktok.com/ (enable Login Kit, Share Kit).
2. Clone repo and install deps: `npm install`.
3. Add env vars: `TIKTOK_CLIENT_ID=your_id`.
4. Run: `npm start`.

## Usage
1. Login with TikTok.
2. Enter live stream username/ID.
3. Add up to 5 invitee usernames.
4. Click "Compose Invite" to preview post.
5. Click "Share" to open TikTok and post.

## Compliance
- Organic invites only; no automation/spam.
- Complies with TikTok terms.
- Privacy: No data storage.

## Development
- Run lint: `npm run lint`.
- Run tests: `npm test`.

## License
MIT.