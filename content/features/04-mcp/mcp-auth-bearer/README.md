# MCP Bearer Auth

Simple bearer token authentication for MCP servers. Configure with a token, sent in the `Authorization: Bearer...` header. Token stored encrypted at rest ([mcp-encryption](./mcp-encryption/)).

## Related

- [MCP OAuth](./mcp-oauth/) — full OAuth flow for more complex auth
- [MCP API key auth](./mcp-auth-api-key/) — alternative using header-based keys