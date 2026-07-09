# MCP Observability

AI trace monitoring and error tracking for MCP tool calls across Universe bots.

## PostHog

Events tagged with:
- `mcp_tool_count` — how many tools are available per server
- `mcp_latency` — execution time per tool call

## Sentry

Spans and errors for:
- Tool discovery success/failure
- Tool execution success/failure
- Timeouts
- Server connectivity issues

## Related

- [MCP tool discovery](./mcp-tool-discovery/) — what gets monitored
- [Technology stack](../07-about/technology-stack/) — observability infrastructure