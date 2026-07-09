# Bot Provider Configuration

> Per-bot AI provider setup — each bot can use a different LLM.

**Status:** 🟢 LIVE

Supported: OpenAI-compatible APIs, LM Studio (local), more. Provider credentials stored encrypted in PostgreSQL (AES-256-GCM). Fetched on-demand with 1-hour caching. Different bots get different models (fast/cheap, powerful, safety-guarded).