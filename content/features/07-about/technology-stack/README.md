# Technology Stack

> The tools and technologies behind Universe.

**Status:** 🟢 LIVE

## Frontend
- **Framework:** Next.js 14 (marketing site), Phaser.js (virtual world)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **UI:** Svelte (in-game components like BotMcpServersEditor)

## Backend
- **Runtime:** TypeScript/Node.js
- **API:** Next.js API routes, WebSocket (Pusher)
- **Database:** PostgreSQL (Prisma ORM)
- **Cache:** Redis
- **Chat:** Matrix / chat.bawes.net (optional)
- **Auth:** OIDC, OAuth 2.0

## AI
- **AI Providers:** OpenAI, Anthropic, Deepseek, LMStudio, Qwen 3B, any OpenAI-compatible
- **Default model:** LMStudio + Qwen 3B (runs offline-capable)
- **Protocol:** MCP (Model Context Protocol) — streamable HTTP
- **Agent Framework:** Custom-built agent runtime
- **Memory:** Per-bot persistent memory

## Video/Audio
- **Engine:** LiveKit (spatial audio & video via WebRTC)
- **Proximity:** WebRTC-based audio/video bubbles

## Infrastructure
- **Hosting:** Coolify on Hetzner
- **Containers:** Docker Compose
- **Orchestration:** Helm chart (Kubernetes)
- **Reverse Proxy:** Traefik

## Observability
- **Analytics:** PostHog
- **Error Tracking:** Sentry
- **AI Observability:** PostHog $ai_trace, $ai_generation

## Source Control
- **Repos:** BAWES-Universe (GitHub)
- **CI/CD:** GitHub Actions + Release PRs

## Commerce (Inactive)
- **Platform:** Plugn (ecommerce — currently down)
- **Integration:** Shopify connector (via Plugn, not currently active)
