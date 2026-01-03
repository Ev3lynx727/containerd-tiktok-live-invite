# GitHub Container Registry (GHCR) Setup

## Overview
Docker images are built and pushed to GHCR via GitHub Actions CI/CD, avoiding local Docker issues.

## Setup
1. Push code to GitHub repository.
2. Enable GitHub Actions.
3. Images will be available at:
   - Backend: `ghcr.io/{username}/containerd-tiktok-live-invite/backend:latest`
   - Frontend: `ghcr.io/{username}/containerd-tiktok-live-invite/frontend:latest`

## Usage
- Pull images: `docker pull ghcr.io/{username}/containerd-tiktok-live-invite/backend:latest`
- Run with docker-compose: Update `docker-compose.yml` with your repo name.
- CI/CD: Triggers on push to main; builds and pushes automatically.

## Security
- Uses GITHUB_TOKEN for auth.
- Images are public by default; make private if needed.