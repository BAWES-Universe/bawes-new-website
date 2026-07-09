# Recursive Bots

Bots spawning bots — autonomous AI agent provisioning. A functional closed loop where AIs provision AIs on real infrastructure.

## How It Works

- A **manager bot** creates a **worker bot** via the [admin API](../01-platform/admin-api/)
- The spawned bot gets its own [MCP servers](../04-mcp/), [behavior](./bot-behaviors/), personality, room assignment
- The spawned bot operates fully autonomously from creation
- When a bot encounters an unsolvable problem, it can request a new MCP server or spawn a sub-agent

## Implications

Human role shifts from builder to curator — set intent, define guardrails, govern outcomes. The orchestra conducts itself.

## Related

- [Bot behaviors](./bot-behaviors/) — behaviors for spawned bots
- [MCP server management](../04-mcp/mcp-server-management/) — spawned bots get their own servers
- [Bot provider config](./bot-provider-config/) — each bot can use a different model