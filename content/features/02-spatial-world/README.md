# 02 — Spatial World

Virtual environment features — maps, zones, communication tools, avatars, editors, and the scripting API. Mostly inherited from WorkAdventure, extended by Universe with AI-specific additions.

| Feature | Status | What it is |
|---|---|---|
| [maps](./maps/) | 🟢 LIVE | Tiled editor, WAM format, publishing |
| [inline-map-editor](./inline-map-editor/) | 🟢 LIVE | In-game map editing |
| [area-zones](./area-zones/) | 🟢 LIVE | Zones with triggerable actions (website, file, LiveKit, megaphone, etc.) |
| [entity-editor](./entity-editor/) | 🟢 LIVE | Place and configure interactive objects on maps |
| [bot-editor](./bot-editor/) | 🟢 LIVE | Place, configure, and manage bots on the map |
| [proximity-chat](./proximity-chat/) | 🟢 LIVE | Audio/video bubbles via LiveKit WebRTC + Coturn. P2P → LiveKit scaling |
| [text-chat](./text-chat/) | 🟢 LIVE | In-world text + bot streaming |
| [phone-chat](./phone-chat/) | 🟡 PLANNED | Direct calls between any two users (not yet implemented) |
| [screen-sharing](./screen-sharing/) | 🟢 LIVE | Share screen in conversation bubbles |
| [follow](./follow/) | 🟢 LIVE | Follow another player through the map |
| [megaphone](./megaphone/) | 🔵 INHERITED | Broadcast audio/video to room or world |
| [woka-avatars](./woka-avatars/) | 🟢 LIVE | Pipoya-style user avatars |
| [avatar-platform](./avatar-platform/) | 🟢 LIVE | Avatar sets, entitlements, catalog governance |
| [meeting-rooms](./meeting-rooms/) | ⚠️ SUPPORTED | Jitsi/BBB zones (core infra is LiveKit WebRTC) |
| [scripting-api](./scripting-api/) | 🔵 INHERITED | WA.ui, WA.room, WA.player, WA.state |
| [white-label-rebranding](./white-label-rebranding/) | 🔵 INHERITED | Custom domain, logos |
| [matrix-chat](./matrix-chat/) | 🟡 OPTIONAL | Persistent chat via Synapse |
| [map-templates](./map-templates/) | 🔵 INHERITED | Reusable room layouts |

See also: [01-platform/workadventure-fork](../01-platform/workadventure-fork/), [03-ai-bots/bot-streaming-chat](../03-ai-bots/bot-streaming-chat/)
