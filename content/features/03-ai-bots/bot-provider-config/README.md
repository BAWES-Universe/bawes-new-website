# Bot Provider Configuration

Every bot can use a different AI provider and model. This is configured per-bot via the [admin API](../01-platform/admin-api/) / [Orbit](../01-platform/orbit/).

## Supported Providers

- OpenAI-compatible APIs
- Anthropic
- Deepseek
- LMStudio (self-hosted, local)
- Qwen 3B (default, runs offline-capable)

## Storage

Provider credentials are encrypted at rest — see [mcp-encryption](../04-mcp/mcp-encryption/). Fetched on demand with 1-hour caching.

## Why Per-Bot

- Support bot → fast, cheap model
- Creative bot → powerful reasoning model
- Education bot → safety-guarded model
- Each tuned independently

## Related

- [MCP encryption](../04-mcp/mcp-encryption/) — credential storage
- [Recursive bots](./recursive-bots/) — spawned bots get their own provider config
- [Technology stack](../07-about/technology-stack/) — full list of supported models