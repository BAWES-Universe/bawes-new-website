# MCP Encryption

All MCP credentials are encrypted at rest using AES-256-GCM, per row, scoped per creator.

## What's Encrypted

- Bearer tokens ([mcp-auth-bearer](./mcp-auth-bearer/))
- OAuth access + refresh tokens ([mcp-oauth](./mcp-oauth/))
- API keys ([mcp-auth-api-key](./mcp-auth-api-key/))
- AI provider credentials ([bot-provider-config](../03-ai-bots/bot-provider-config/))

## Security Model

- Row-level encryption for multi-tenant isolation
- Encryption key in environment variables
- Admin API write path only — no public creation
- Risks noted: no tool output sanitization, no creator-side server validation

## Related

- All MCP auth feature folders
- [Bot provider config](../03-ai-bots/bot-provider-config/) — similarly encrypted