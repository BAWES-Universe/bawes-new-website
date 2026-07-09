# 04 — MCP Integration

The Model Context Protocol layer — how bots connect to external tools and data sources. Every feature here was built on top of the WorkAdventure fork.

| Feature | Status | What it is |
|---|---|---|
| [mcp-server-management](./mcp-server-management/) | 🟢 LIVE | CRUD, status, per-bot server config |
| [mcp-oauth](./mcp-oauth/) | 🟢 LIVE | OAuth 2.0 + PKCE for MCP servers |
| [mcp-auth-bearer](./mcp-auth-bearer/) | 🟢 LIVE | Bearer token auth |
| [mcp-auth-api-key](./mcp-auth-api-key/) | 🟢 LIVE | API key header auth |
| [mcp-tool-discovery](./mcp-tool-discovery/) | 🟢 LIVE | tools/list, caching, graceful degradation |
| [mcp-admin-ui](./mcp-admin-ui/) | 🟢 LIVE | Orbit admin panel for MCP |
| [mcp-observability](./mcp-observability/) | 🟢 LIVE | PostHog + Sentry traces |
| [mcp-encryption](./mcp-encryption/) | 🟢 LIVE | AES-256-GCM credential storage |

See also: [03-ai-bots/bot-tool-calling](../03-ai-bots/bot-tool-calling/)