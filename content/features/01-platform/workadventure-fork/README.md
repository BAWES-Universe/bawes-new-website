# WorkAdventure Fork

> Universe is a fork of WorkAdventure by TheCodingMachine.

**Status:** 🔵 INHERITED

## What We Forked

An open-source (MIT) virtual world platform — proximity-based audio/video chat, Tiled maps, WAM format, scripting API, avatar system, self-hosting with Docker Compose or Helm.

**Upstream:** github.com/thecodingmachine/workadventure
**Website:** workadventu.re

## What We Inherited

- Proximity-based audio/video chat via WebRTC
- Tiled map editor + WAM JSON format
- Inline map editor (in-game)
- Scripting API (WA.ui, WA.room, WA.player, WA.state)
- Woka avatar system (pipoya sprites)
- Area/zone system (entry/exit, meeting rooms, silent, broadcast)
- Megaphone broadcast system
- Matrix chat integration
- OIDC authentication
- Self-hosting via Docker Compose or Helm
- White label / rebranding (custom domain, logos)
- Jitsi/BBB meeting room integration

## What Universe Built (on top)

- AI agent system with configurable behaviors (idle, patrol, social)
- MCP server integration (streamable HTTP)
- Streaming token-by-token bot conversations
- Encrypted credential storage (AES-256-GCM per row)
- Bot avatar system
- Recursive self-architecture (bots spawning bots)
- Admin API for bot/MCP management (separate repo)
- PostHog + Sentry observability for AI traces
- MCP OAuth with PKCE and auto-discovery

## Code

- Fork repo: github.com/BAWES-Universe/workadventure-universe
- Branch model: universe-develop -> universe (production via release PRs)
- Admin repo: github.com/BAWES-Universe/workadventure-universe-admin
