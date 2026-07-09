# 06 — Admin API

> Management APIs and deployment tooling for Universe.

## API Surface

### Room/Map Management
- **Room CRUD** — create, read, update, delete rooms
- **Map CRUD** — manage WAM files
- **Authentication:** API key-based
- **Docs:** `docs/others/self-hosting/adminAPI.md`
- **Requirements:** `docs/requirements/admin-api-map-requirements.md`
- **Implementation guide:** `docs/requirements/admin-api-implementation-guide.md`
- **Quick reference:** `docs/requirements/admin-api-map-quick-reference.md`

### User Management
- **OIDC integration** — OpenID Connect for authentication
- **Tag-based access control** — assign tags to users for role-based permissions
- **CORS** — Configured via `CORS_ALLOWED_ORIGINS` env var

### Bot Management
- **Bot CRUD** — create, update, delete bots
- **Bot configuration** — AI provider, system prompt, behavior, avatar
- **MCP server management** — CRUD for per-bot MCP server configs
- **Bot avatar** — texture set assignment via API

### MCP Admin
- **Server list** — name, URL, status, tool count, last-checked
- **Test connection** — raw tool discovery preview
- **Super-admin bypass** — access all bot MCP configs

## Deployment

- **Docker Compose** — primary deployment method
  - `docker compose up -d` for individual containers
  - Environment variables in `.env` file
- **Coolify** — self-hosted on Hetzner
- **Environment variables** — documented at `docs/others/self-hosting/env-variables.md`

## Application Details

- **Client name:** "Universe" (PR #120, commit a92fbae)
- **Greeting messages:** Customizable per bot
- **Error handling:** CORS middleware, SSRF validation, rate limiting

## Repositories

- **Main universe:** `github.com/BAWES-Universe/workadventure-universe`
- **Admin API:** `github.com/BAWES-Universe/workadventure-universe-admin`
- **Local paths:** `~/workadventure/workadventure-universe/`, `~/workadventure/workadventure-universe-admin/`
