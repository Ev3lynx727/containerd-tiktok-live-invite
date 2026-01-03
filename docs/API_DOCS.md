# TikTok Live Invite App - API Documentation

## Base URL
- Local: `http://localhost:3060/api`
- Production: `https://your-vercel-url.vercel.app/api`

## Authentication
All protected endpoints require JWT token in `Authorization: Bearer [jwt]` header. Obtain token via OAuth flow (not implemented in API yet).

## Error Responses
- `400`: Invalid input (e.g., missing fields).
- `401`: Invalid or missing token.
- `500`: Internal server error (check logs).

## Endpoints

### GET /health
- **Description**: Check server uptime and health.
- **Method**: GET
- **Response**: `OK` (200)
- **Example**:
  ```
  curl http://localhost:3060/health
  # Response: OK
  ```

### POST /trigger-invite
- **Description**: Trigger automated invite post via Content Posting API (mock for testing; logs to DB).
- **Method**: POST
- **Headers**: `Authorization: Bearer [jwt]`, `Content-Type: application/json`
- **Body**:
  ```json
  {
    "liveUrl": "tiktok.com/@username/live",
    "usernames": ["user1", "user2"]
  }
  ```
- **Response**:
  ```json
  {
    "status": "posted",
    "result": {
      "postId": "mock_id_123",
      "text": "Join my live: tiktok.com/@username/live @user1 @user2"
    }
  }
  ```
- **Errors**: 400 (invalid input), 401 (invalid token), 500 (post failure).
- **Notes**: Logs success/failure to DB; retries on API errors.

### GET /invites
- **Description**: Get user's invite history from DB.
- **Method**: GET
- **Headers**: `Authorization: Bearer [jwt]`
- **Response**:
  ```json
  {
    "invites": [
      {
        "id": 1,
        "userId": "test_user",
        "liveUrl": "tiktok.com/@username/live",
        "usernames": "[\"user1\",\"user2\"]",
        "status": "success",
        "createdAt": "2026-01-03 08:37:31"
      }
    ]
  }
  ```
- **Errors**: 401 (invalid token), 500 (DB error).

### POST /webhook/live-start
- **Description**: Receive webhooks for live start events (logs; future: auto-trigger invites).
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "userId": "string",
    "liveUrl": "string"
  }
  ```
- **Response**: `{"status": "webhook received"}` (200)
- **Errors**: 400 (invalid data), 500 (log error).
- **Notes**: No auth; for external triggers like n8n.

## Integrations
- **TikTok Login Kit**: For user authentication via OAuth.
- **TikTok Share Kit**: For manual sharing.
- **TikTok Content Posting API**: For automated posting (via backend).
- **n8n**: For external scheduling (see [N8N_GUIDE.md](N8N_GUIDE.md)).

## Usage
- **Login Kit**: Initialize OAuth flow for JWT.
- **Share Kit**: Manual shares in frontend.
- **Content Posting**: Automated posts via /trigger-invite.
- **Testing**: Use curl/Postman with dummy JWT (e.g., generated via `jwt.sign({ id: 'test' }, 'secret')`).

## Notes
- Rate limiting removed for testing; add in production.
- DB: SQLite for logs; no sensitive data.
- Future: Replace mock API with real TikTok endpoints.