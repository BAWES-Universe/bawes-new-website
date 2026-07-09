# MCP Admin UI

The MCP management interface inside [Orbit](../01-platform/orbit/). Lets operators manage bot MCP server configurations without touching code.

## States

| State | Shows |
|---|---|
| Loading | Spinner |
| Empty | "No MCP servers" + add button |
| Connected | ✅ green indicator |
| Error | ❌ red indicator + message |
| Testing | 🕑 spinner during connection test |
| Removing | Progress during deletion |

## Features

- Per-bot server list (name, URL, status, tool count, last-checked)
- Add/edit/remove servers
- Test connection with raw tool discovery preview
- Super-admin bypass — access all bot MCP configs

## Related

- [MCP server management](./mcp-server-management/) — the API layer behind this UI
- [Orbit](../01-platform/orbit/) — parent admin dashboard