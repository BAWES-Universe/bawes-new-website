# 03 — AI Bots

> The Universe AI agent system — bots as first-class citizens of the spatial environment.

## Bot Architecture

- **Source:** `play/src/front/external-modules/bots/`
- **Bot server:** Separate WebSocket-connected service (not Pusher)
- **Bot memory:** `bots/memory/PersistentMemory.ts` — per-bot memory persistence

## Bot Behaviors

Three behavior modes that determine how/when bots initiate conversation:

- **Idle** — waits for player interaction, silent until approached
- **Patrol** — walks a set of waypoints around the room
- **Social** — greets nearby users proactively

## Bot Configuration

- **AI Provider:** Configurable per-bot (OpenAI-compatible, LM Studio, more)
- **Provider storage:** Encrypted in PostgreSQL, fetched on-demand with 1-hour caching
- **System prompt:** Customizable per bot personality
- **Greeting system:** Customizable greeting message on proximity
- **Bot avatar:** Visual identity separate from user Wokas (texture picker fix PR #210)
- **Bot detail view:** `BotDetailView.svelte` — full bot management UI in play

## Streaming Conversations

- **Token-by-token streaming** — AI responses rendered in real-time chat bubbles
- **Tool call indicators** — magnifying-glass emoji shown mid-stream when bot calls MCP tools
- **Emotion blocks** — `[EMOTION_UPDATE]` tags parsed from bot output and routed to backend; not shown in UI
- **Real-time protocol** — designed for continuous streaming, not request-response

## Bot UI

- **BotCard.svelte** — card component in bot lists
- **BotDetailView.svelte** — detailed bot view with settings, MCP server management
- **BotMcpServersEditor.svelte** — MCP server management component (list, add/edit modal, status indicators)

## Recursive Self-Architecture

- **Bots can create bots** — manager bot spawns worker bots via admin API or in-game editor
- **Spawned bots** — get assigned MCP servers, behavior, personality, and operate autonomously
- **Closed loop** — AI provisioning AI on real infrastructure
- **Request-triggered** — bot encountering unsolved problem can request new MCP server or spawn specialized sub-agent

## Bot Tool Calling

- **Tool discovery** — auto-discover tools via MCP `tools/list` handshake
- **Tool caching** — cached per MCP server with 1-hour TTL
- **Graceful degradation** — when MCP server is unreachable, tools list returns empty (no crash)
- **Per-call timeout:** 5 seconds per MCP tool call, 10 seconds total per conversation turn

## Bot List View

- **Status indicators:** Connected (✅), error (❌), testing (🕑)
- **Server count:** 5 MCP servers per bot soft cap
- **Connection log** — testing and diagnostics

## Bot Authentication

- **OAuth 2.0** — Full authorization code flow with PKCE
- **Bearer tokens** — Simple token auth for MCP servers
- **API keys** — Header-based authentication
- **Auto-refresh** — Tokens refreshed automatically on 401 responses
- **Encrypted storage** — AES-256-GCM at rest, per-server, per-creator

## Bot Release (MCP for Bots — July 2026)

- MCP for Bots launched July 1, 2026 via PR #218 (universe-develop→universe) and PR #104 (develop→main for admin)
- Includes: bot MCP servers, OAuth support, admin MCP UI, encryption
