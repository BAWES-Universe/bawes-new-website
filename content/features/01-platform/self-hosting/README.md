# Self-Hosting

> How Universe is deployed and how others can self-host.

**Status:** 🟢 LIVE

### Production
- Hosting: Coolify on Hetzner
- Containers: Docker Compose — admin-api, pusher, front, map-storage, uploader, Redis, Matrix, Traefik
- Database: PostgreSQL
- Auth: OIDC (production)
- CI/CD: Release PRs from universe-develop -> universe

### Self-Hosting (for others)
- Options: Docker Compose or Helm chart (Kubernetes)
- Docs: docs/others/self-hosting/install.md
- Env vars: Documented at docs/others/self-hosting/env-variables.md
- Matrix: Optional Synapse container
- Custom domain: White label / rebranding

### Development
- Local setup: docker compose up with .env.template
- Local URLs: play.workadventure.localhost, oidc.workadventure.localhost, etc.
- Hosts file: ~14 subdomains need /etc/hosts entries
