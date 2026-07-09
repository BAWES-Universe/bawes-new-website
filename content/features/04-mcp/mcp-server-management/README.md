# MCP Server Management

Add, configure, and monitor MCP servers attached to each bot. Every bot can have multiple servers, each exposing a set of tools.

## What You Can Do

- **Add** — name + URL, pick auth type ([OAuth](./mcp-oauth/), [bearer](./mcp-auth-bearer/), [API key](./mcp-auth-api-key/))
- **Test** — test connection shows raw `tools/list` response
- **Monitor** — status indicators per server: ✅ connected, ❌ error, 🕑 testing
- **View** — tool count, last-checked timestamp, connection log

## Limits

- 5 servers per bot (soft cap)
- Admin API write path only — no public creation

## Related

- [MCP admin UI](./mcp-admin-ui/) — the Orbit interface
- [MCP tool discovery](./mcp-tool-discovery/) — how tools are listed
- [Bot tool calling](../03-ai-bots/bot-tool-calling/) — using tools in conversation
- `BotMcpServersEditor.svelte` in `play/src/front/external-modules/bots/components/`