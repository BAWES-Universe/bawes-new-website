# MCP Tool Discovery

Auto-discovery of tools exposed by MCP servers via the `tools/list` handshake. The bridge between MCP servers and bot intelligence.

## How It Works

1. Bot calls `tools/list` on each configured [MCP server](./mcp-server-management/)
2. Server responds with tool definitions (name, description, JSON input schema)
3. Tool definitions cached per server with 1-hour TTL
4. When AI decides to use a tool, the system calls `tools/call` with the AI-generated parameters

## Graceful Degradation

- If `tools/list` times out → empty tool list returned (bot still responds, just without tools)
- If `tools/call` times out (5s per call, 10s total budget) → tool marked unavailable for that turn
- Bot never crashes due to MCP server issues

## Performance

- 1-2 extra HTTP requests per conversation turn if tools are used
- Slight increase in token cost (tool definitions in AI context)
- Near-zero memory/CPU for the bot server

## Related

- [Bot tool calling](../03-ai-bots/bot-tool-calling/) — the conversation layer that uses discovered tools
- [MCP server management](./mcp-server-management/) — configure which servers to discover from
- `MCPConnector.ts` in workadventure-universe