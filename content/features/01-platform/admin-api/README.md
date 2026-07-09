# Admin API

Next.js REST API for managing rooms, maps, bots, and MCP servers. Separate repo from the main Universe fork.

## Endpoints

- **Room CRUD** — create, read, update, delete rooms
- **Map CRUD** — manage WAM file assignments per room/world
- **Bot CRUD** — AI provider, system prompt, behavior ([bot-behaviors](../03-ai-bots/bot-behaviors/)), avatar ([bot-avatars](../03-ai-bots/bot-avatars/))
- **MCP server management** — per-bot MCP server configs ([mcp-server-management](../04-mcp/mcp-server-management/))
- **Auth:** API key headers + `CORS_ALLOWED_ORIGINS` env var

## Repo

`github.com/BAWES-Universe/workadventure-universe-admin` — `develop` → `main`

Tech stack: Prisma ORM, PostgreSQL, TypeScript, Next.js API routes.

## Related

- [Orbit](./orbit/) — the admin UI that sits on top of this API
- **[bot-provider-config](../03-ai-bots/bot-provider-config/)** — AI provider config through this API
- Docs: `docs/others/self-hosting/adminAPI.md`