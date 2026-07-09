# Bot Tool Calling

> MCP tool execution in conversations — bots use external tools in real-time.

**Status:** 🟢 LIVE

Bots discover available tools via MCP tools/list handshake. During conversation, the AI decides when to call a tool. Tool results feed back into the AI for response generation. Per-call timeout: 5s, total budget: 10s per turn. Examples: CRM query (Attio), analytics, e-commerce orders.