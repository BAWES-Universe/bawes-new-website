# 01 — Platform

Core infrastructure — the fork, how it's deployed, auth, management APIs, and admin dashboard.

| Feature | Status | What it is |
|---|---|---|
| [workadventure-fork](./workadventure-fork/) | 🔵 INHERITED | What we forked from WorkAdventure, what changed |
| [self-hosting](./self-hosting/) | 🟢 LIVE | Docker Compose, Coolify, env vars, Helm chart |
| [oidc-auth](./oidc-auth/) | 🟢 LIVE | Authentication via OpenID Connect |
| [admin-api](./admin-api/) | 🟢 LIVE | REST API for rooms, maps, bots, MCP servers |
| [orbit](./orbit/) | 🟢 LIVE | Operator admin dashboard — the UI on top of admin-api |
| [orbit-model](./orbit-model/) | 🟢 LIVE | Community gravity framework — Love × Reach, adapted for Universe |

See also: [02-spatial-world](../02-spatial-world/), [03-ai-bots](../03-ai-bots/), [04-mcp](../04-mcp/)