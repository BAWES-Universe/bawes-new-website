# WorkAdventure Fork

Universe is a fork of [WorkAdventure](https://workadventu.re) by TheCodingMachine — an open-source (MIT) virtual world platform. We extended it with AI agents, MCP integration, streaming conversations, encrypted storage, and a bot management system.

## What We Inherited

From upstream WorkAdventure (`github.com/thecodingmachine/workadventure`):

- Proximity-based audio/video chat via WebRTC (backed by [LiveKit](../07-about/technology-stack.md))
- Tiled map editor + WAM JSON format. See [maps](../02-spatial-world/maps/)
- Inline [map editor](../02-spatial-world/inline-map-editor/) in-game
- [Scripting API](../02-spatial-world/scripting-api/) — WA.ui, WA.room, WA.player, WA.state
- [Woka avatars](../02-spatial-world/woka-avatars/) (pipoya sprites)
- [Area zones](../02-spatial-world/area-zones/) — entry/exit, meeting rooms, silent, broadcast
- [Megaphone](../02-spatial-world/megaphone/) broadcast system
- [Matrix chat](../02-spatial-world/matrix-chat/) (optional Synapse)
- [OIDC authentication](./oidc-auth/)
- Docker Compose + Helm [self-hosting](./self-hosting/)
- [White label](../02-spatial-world/white-label-rebranding/) — custom domain, logos

## What We Built

Everything in [03-ai-bots](../03-ai-bots/) and [04-mcp](../04-mcp/), plus the [admin API](./admin-api/), [Orbit dashboard](./orbit/), and [avatar platform](../02-spatial-world/avatar-platform/).

## Repos

- **Fork:** `github.com/BAWES-Universe/workadventure-universe` (branch: `universe-develop` → `universe`)
- **Admin:** `github.com/BAWES-Universe/workadventure-universe-admin` (branch: `develop` → `main`)