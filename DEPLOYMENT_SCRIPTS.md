# Deployment Scripts

## autorun.sh
Deploys containers from pulled GHCR images. Creates network (tiktok-network) and volume (tiktok-db) if not exist. Runs backend on 3060, frontend on 3061.

Usage: `./autorun.sh`

## rebuild-and-redeploy.sh
Updates containers with latest images. Stops/removes old, pulls new, redeploys.

Usage: `./rebuild-and-redeploy.sh`

## Prerequisites
- Docker installed and running.
- Images available on GHCR (after GitHub push/build).

## Notes
- Volume persists DB data across redeploys.
- Use `docker logs tiktok-backend` for debugging.