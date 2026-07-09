# Orbit

> Operator Admin — Universe's management dashboard for operators.

**Status:** 🟢 LIVE

Orbit is the branded name for the operator admin dashboard. It's the UI layer on top of the admin API — the place where universe operators manage everything without touching code.

## Capabilities

- **Per-universe dashboard** — every universe gets its own Orbit admin panel
- **World & room management** — create, edit, archive worlds and rooms. Set capacity, maps, bots, access rules
- **Member & role system** — assign membership tags, control space access based on role
- **Area permission editor** — define protected areas within maps
- **Avatar set management** — create and assign avatar sets per world or universe
- **Bot configuration** — set bot name, persona, model, memory settings, assigned avatar
- **MCP server management** — add/edit MCP servers per bot with connection testing
- **Audit logs** — full action trail for governance

## Difference from Admin API

The admin API (`01-platform/admin-api/`) is the REST API layer (Prisma + Next.js API routes). Orbit is the UI that operators use to interact with that API. They ship together but are separate concerns.

## Code

- **UI:** Components in `workadventure-universe/play/src/front/` (BotMcpServersEditor, BotDetailView, etc.)
- **API:** `workadventure-universe-admin/` repo
- **Docs:** `docs/others/self-hosting/adminAPI.md`
