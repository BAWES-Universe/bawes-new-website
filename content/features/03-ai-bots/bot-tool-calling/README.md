# Bot Tool Calling

Bots use MCP tools during conversations — querying databases, checking inventory, creating tickets, or interacting with any [MCP-connected](../04-mcp/) service.

## How It Works

1. Bot discovers tools via [MCP tool discovery](../04-mcp/mcp-tool-discovery/) handshake
2. During conversation, the AI decides when to call a tool based on context
3. 🔍 indicator appears mid-stream in [streaming chat](./bot-streaming-chat/)
4. Tool results feed back into the AI for response generation
5. Timeout: 5s per call, 10s total budget per turn

## Examples

- **ComfyUI** (image generation) — "Generate an image of a dragon" → bot sends the image
- **Higgsfield** (video generation) — "Create a 5-second video clip" → bot delivers the video
- **Firecrawl** (web scraping) — "Read this article and tell me the key points" → bot scrapes and summarizes
- **Tavily** (web search) — "Research this topic" → bot searches, synthesizes, and links sources
- **Linear / Attio** (CRM/PM) — "Create an issue for this bug" / "What's the status of deal X?"
- **FileParser** (built-in) — "Summarize this PDF" → bot extracts text and answers questions

## File Analysis

Bots can analyze PDF, Word, Excel, and web pages. See [bot-file-parsing](./bot-file-parsing/) for details.

## Media Output

Tools can return images and video — auto-sent to users as chat messages or galleries. See [bot-media-sending](./bot-media-sending/) for details.

## Graceful Degradation

If a tool call times out or the MCP server is unreachable, the bot responds without crashing. The tool is simply unavailable for that turn.

## Related

- [MCP server management](../04-mcp/mcp-server-management/) — configure which servers a bot connects to
- [MCP tool discovery](../04-mcp/mcp-tool-discovery/) — how tools are found
- [Bot provider config](./bot-provider-config/) — the AI model making the decision