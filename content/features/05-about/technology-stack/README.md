# Technology Stack

## Frontend
- **Marketing site:** Next.js 14, Tailwind CSS, Framer Motion
- **Virtual world:** Phaser.js
- **In-game UI:** Svelte (BotMcpServersEditor, BotDetailView)

## Backend
- **Runtime:** TypeScript/Node.js
- **API:** Next.js API routes + WebSocket (Pusher)
- **Database:** PostgreSQL (Prisma ORM)
- **Cache:** Redis
- **Chat:** Matrix / chat.bawes.net (optional)

## AI
- **Models:** OpenAI, Anthropic, Deepseek, LMStudio, Qwen 3B (default)
- **Protocol:** MCP (Model Context Protocol) — streamable HTTP
- **Agent runtime:** Custom-built

## Video/Audio
- **Engine:** LiveKit (spatial audio/video via WebRTC)

## Infrastructure
- **Hosting:** Coolify on Hetzner
- **Containers:** Docker Compose / Helm (Kubernetes)
- **Proxy:** Traefik

## Observability
- **Analytics:** PostHog ($ai_trace, $ai_generation)
- **Error tracking:** Sentry
- **CI/CD:** GitHub Actions + Release PRs