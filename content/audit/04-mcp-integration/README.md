# 04 — MCP Integration

> Model Context Protocol layer — how bots connect to external tools and data sources.

## MCP Server Management

- **Transport:** Streamable HTTP only
- **Configuration:** Per-bot server list with name + URL
- **Status:** Connected (✅), error (❌), testing (🕑) indicators
- **Tool discovery:** Auto-discovery via `tools/list` handshake, cached 1-hour TTL
- **Execution:** `tools/call` with 5s per-call timeout, 10s total budget per turn
- **Admin API:** CRUD operations for MCP server configuration

## Authentication Methods

- **OAuth 2.0** — Full authorization code flow with PKCE
  - Auto-discovery via RFC 9728 authorization server metadata
  - Provider-agnostic (Attio, Xero, any OAuth-compatible MCP server)
  - Token refresh on 401 responses
- **Bearer tokens** — Simple token-based auth
- **API keys** — Header-based authentication

## Security

- **Encryption:** AES-256-GCM per-row, scoped per creator
- **Rate limiting:** 5 MCP servers per bot soft cap
- **No tool output sanitization** — risk noted
- **No creator-side validation** — creators host their own MCP servers
- **SSRF validation:** URL validation on token URLs (PR #122)
- **Admin API write path only** — no public creation

## OAuth Flow

- **Components:** MCP OAuth form in Svelte, OAuth endpoints in admin API
- **State token:** Contains redirectUrl for callback routing
- **Callback:** `mcp-callback/route.ts` in play API
- **Popup flow:** Clean popup window with auto-close on success
- **User configurable:** Any OAuth provider via form (authorize URL, token URL, client ID/secret, scopes)

## Observability

- **PostHog:** `$ai_trace`, `$ai_generation` tagged with `mcp_tool_count`, `mcp_latency`
- **Sentry:** Spans for MCP tool calls
- **Error tracking:** Graceful degradation logged

## Administration UI

- **BotMcpServersEditor.svelte** — In-game editor for managing bot MCP servers
  - Server list with status
  - Add Server button
  - Add/edit modal (Server Name, Server URL)
  - States: loading, empty, connected, error, testing, removing
- **Admin Panel (Next.js)** — MCP management in admin
  - Server list with status, tool count, last-checked
  - Test connection with raw preview
  - Super-admin bypass

## Documentation

- **Developer docs:** `docs/developer/bots/mcp-servers.md`
- **MCP requirements:** PR #216 (5-phase plan)
- **Implementation:** PRs #212, #218, #222, #223, #225, #231, #233, #234, #235, #237, #238, #239
