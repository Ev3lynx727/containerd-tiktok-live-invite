#!/bin/bash

# autorun.sh - Deploy containers from pulled GHCR images, create volume and network

set -e

echo "Creating Docker network..."
docker network create tiktok-network || echo "Network already exists"

echo "Creating Docker volume for DB..."
docker volume create tiktok-db || echo "Volume already exists"

echo "Pulling backend image..."
docker pull ghcr.io/ev3lynx727/containerd-tiktok-live-invite/backend:latest

echo "Pulling frontend image..."
docker pull ghcr.io/ev3lynx727/containerd-tiktok-live-invite/frontend:latest

echo "Starting backend container..."
docker run -d --name tiktok-backend \
  --network tiktok-network \
  -p 3060:3060 \
  -v tiktok-db:/app/database \
  ghcr.io/ev3lynx727/containerd-tiktok-live-invite/backend:latest

echo "Starting frontend container..."
docker run -d --name tiktok-frontend \
  --network tiktok-network \
  -p 3061:80 \
  --depends-on tiktok-backend \
  ghcr.io/ev3lynx727/containerd-tiktok-live-invite/frontend:latest

echo "Deployment complete. Backend: http://localhost:3060, Frontend: http://localhost:3061"