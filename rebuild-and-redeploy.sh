#!/bin/bash

# rebuild-and-redeploy.sh - Rebuild existing containers with latest pulled images

set -e

echo "Pulling latest backend image..."
docker pull ghcr.io/ev3lynx727/containerd-tiktok-live-invite/backend:latest

echo "Pulling latest frontend image..."
docker pull ghcr.io/ev3lynx727/containerd-tiktok-live-invite/frontend:latest

echo "Starting updated backend container..."
docker run -d --name tiktok-backend \
  --network tiktok-network \
  -p 3060:3060 \
  -v tiktok-db:/app/database \
  ghcr.io/ev3lynx727/containerd-tiktok-live-invite/backend:latest

echo "Starting updated frontend container..."
docker run -d --name tiktok-frontend \
  --network tiktok-network \
  -p 3061:80 \
  ghcr.io/ev3lynx727/containerd-tiktok-live-invite/frontend:latest

echo "Redeployment complete. Backend: http://localhost:3060, Frontend: http://localhost:3061"