# Orbit — Operator Admin

Orbit is the brand name for the operator admin dashboard. It's the UI that universe operators use to manage everything without touching code — worlds, rooms, bots, avatar sets, members, and access rules.

## Capabilities

- **Per-universe dashboard** — every universe instance gets its own Orbit panel
- **World & room management** — create, archive; set capacity, maps, bots, access rules
- **Member & role system** — assign membership tags that gate rooms and avatar sets
- **Area permission editor** — draw restricted zones on maps via UI (see [area-zones](../02-spatial-world/area-zones/))
- **Avatar set management** — create and assign avatar sets per world, universe, or role (see [avatar-platform](../02-spatial-world/avatar-platform/))
- **Bot configuration** — name, persona, model, memory, assigned avatar (see [bot-avatars](../03-ai-bots/bot-avatars/), [bot-provider-config](../03-ai-bots/bot-provider-config/))
- **MCP server management** — add/edit servers per bot, test connections (see [mcp-admin-ui](../04-mcp/mcp-admin-ui/))
- **Audit logs** — full action trail for governance

## Related

- [Admin API](./admin-api/) — Orbit is the UI layer on top of this API
- [Orbit Model](./orbit-model/) — the conceptual community gravity framework (separate from the dashboard; they share the "Orbit" name)
- All [03-ai-bots](../03-ai-bots/) and [04-mcp](../04-mcp/) features