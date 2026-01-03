# TikTok Live Invite App - n8n Integration Guide

## Overview
Integrate with n8n (automation platform) to schedule or trigger live invites externally. Use n8n workflows to call the app's backend API endpoints for automated posting.

## Prerequisites
- n8n instance (self-hosted or cloud).
- App backend deployed with `/trigger-invite` endpoint.
- User JWT token from app login.

## Setting Up Workflow
1. **Install n8n**: Follow https://docs.n8n.io/.
2. **Create Workflow**:
   - Add "Schedule Trigger" node for time-based (e.g., every hour).
   - Add "HTTP Request" node: POST to `https://your-app.com/trigger-invite`.
     - Headers: `Authorization: Bearer [jwt]`
     - Body: `{"liveUrl": "tiktok.com/@username/live", "usernames": ["user1", "user2"]}`
   - Add error handling (e.g., "If" node for failed responses).

## Example Workflow
- Schedule → HTTP Request → Email (notify success) → If Error → Slack Alert.

## Best Practices
- Limit triggers (e.g., 1/hour) to stay organic.
- Test with dummy data.
- Monitor TikTok for violations.

## Troubleshooting
- Invalid JWT: Re-login in app.
- API errors: Check backend logs.