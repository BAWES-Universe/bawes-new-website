# Bot Tool Calling

Bots use MCP tools during conversations — querying databases, checking inventory, creating tickets, or interacting with any [MCP-connected](../04-mcp/) service.

## How It Works

1. Bot discovers tools via [MCP tool discovery](../04-mcp/mcp-tool-discovery/) handshake
2. During conversation, the AI decides when to call a tool based on context
3. 🔍 indicator appears mid-stream in [streaming chat](./bot-streaming-chat/)
4. Tool results feed back into the AI for response generation
5. Timeout: 5s per call, 10s total budget per turn

## Examples

- **CRM** (Attio MCP) — "What's the status of deal X?"
- **Analytics** — "How many users signed up this week?"
- **E-commerce** — "Create an order for product Y"
- **Linear** — "Create an issue for this bug"

## Graceful Degradation

If a tool call times out or the MCP server is unreachable, the bot responds without crashing. The tool is simply unavailable for that turn.

## Related

- [MCP server management](../04-mcp/mcp-server-management/) — configure which servers a bot connects to
- [MCP tool discovery](../04-mcp/mcp-tool-discovery/) — how tools are found
- [Bot provider config](./bot-provider-config/) — the AI model making the decision