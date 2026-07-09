# MCP OAuth

Full OAuth 2.0 authorization code flow with PKCE for MCP server authentication. Provider-agnostic — any OAuth-compatible MCP server works with zero hardcoded integrations.

## Flow

1. Bot admin configures OAuth provider (authorize URL, token URL, client ID/secret, scopes) in [Orbit](../01-platform/orbit/) or [admin API](../01-platform/admin-api/)
2. Bot initiates OAuth via popup window
3. User authorizes in provider's consent screen
4. Callback routes token to Universe via `mcp-callback/route.ts`
5. Token encrypted at rest per-server ([mcp-encryption](./mcp-encryption/))
6. Automatic refresh on 401 responses

## Features

- PKCE for public clients
- Auto-discovery via RFC 9728 authorization server metadata
- Works with Attio, Xero, any OAuth MCP server
- State token contains redirectUrl for correct callback routing

## Related

- [MCP bearer auth](./mcp-auth-bearer/) — simpler alternative
- [MCP API key auth](./mcp-auth-api-key/) — simpler alternative
- [MCP encryption](./mcp-encryption/) — token storage