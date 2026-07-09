# MCP Tool Discovery

> Auto-discovery of MCP server tools via the tools/list handshake.

**Status:** 🟢 LIVE

Bot calls tools/list on each MCP server. Server responds with tool definitions. Cached per server with 1-hour TTL. Graceful degradation: if tools/list times out, returns empty list (no crash). 5s timeout per call, 10s total budget per turn.