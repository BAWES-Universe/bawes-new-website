# MCP OAuth

> OAuth 2.0 authorization code flow for MCP server authentication.

**Status:** 🟢 LIVE

Full OAuth 2.0 flow with PKCE. Auto-discovery via RFC 9728. Provider-agnostic (Attio, Xero, any). Token refresh on 401. Tokens encrypted at rest AES-256-GCM per-server. Popup window flow with auto-close on success.