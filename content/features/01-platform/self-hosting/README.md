# Self-Hosting

How Universe is deployed and how others can run their own instance.

## Production

- **Hosting:** Coolify on Hetzner (bare metal)
- **Containers:** Docker Compose — admin-api, pusher, front, map-storage, uploader, Redis, Matrix, Traefik
- **Database:** PostgreSQL (encrypted at rest for MCP credentials — see [mcp-encryption](../04-mcp/mcp-encryption/))
- **Auth:** [OIDC](./oidc-auth/) provider (production) / Keycloak mock (dev)

## For Others

Two options documented in `docs/others/self-hosting/install.md`:
- **Docker Compose** — standard setup
- **Helm chart** — Kubernetes deployment

Environment variables: `docs/others/self-hosting/env-variables.md`
Matrix (optional): `docs/others/self-hosting/matrix.md`

## Development

`docker compose up` with `.env.template`. Requires ~14 subdomains in `/etc/hosts`. See [workadventure-fork](./workadventure-fork/) for the upstream README setup instructions.

## Related

- [Admin API](./admin-api/) — REST layer
- [Orbit](./orbit/) — operator UI