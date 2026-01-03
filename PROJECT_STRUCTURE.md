# TikTok Live Invite - Project Structure

containerd-tiktok-live-invite/
├── backend/                 # Backend service
│   ├── Dockerfile           # Backend Docker image
│   ├── package.json         # Backend dependencies
│   └── server/              # Backend source code
│       ├── app.js
│       ├── routes/
│       ├── middleware/
│       └── utils/
├── frontend/                # Frontend service
│   ├── Dockerfile           # Frontend Docker image
│   ├── package.json         # Frontend dependencies
│   ├── public/
│   └── src/                 # React source code
├── docker-compose.yml       # Docker Compose for services
├── .env.example             # Environment variables template
├── README.md                # Project overview
├── PROJECT_SPEC.md          # Requirements and specs
├── ARCHITECTURE.md          # System architecture
├── API_DOCS.md              # API documentation
├── DEVELOPMENT_GUIDE.md     # Development setup
├── USER_GUIDE.md            # User instructions
├── ENHANCEMENTS.md          # Future features
├── N8N_GUIDE.md             # n8n integration
├── BACKEND_DEV.md           # Backend development notes
├── CONTAINER_GUIDE.md       # Container setup
├── next_step.md             # Roadmap and milestones
└── FRONTEND_README.md       # Frontend notes