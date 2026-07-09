# MCP Encryption

> Encrypted storage for MCP credentials at rest.

**Status:** 🟢 LIVE

AES-256-GCM encryption per row. Scoped per creator. Encryption key in env vars. Covers: bearer tokens, OAuth tokens, API keys. Row-level encryption for multi-tenant isolation.