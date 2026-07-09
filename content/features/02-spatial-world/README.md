# 02 — Spatial World

Virtual environment features — maps, zones, communication tools, avatars, and the scripting API. Mostly inherited from WorkAdventure, extended by Universe with AI-specific additions.

| Feature | Status | What it is |
|---|---|---|
| [maps](./maps/) | 🟢 LIVE | Tiled editor, WAM format, publishing |
| [inline-map-editor](./inline-map-editor/) | 🟢 LIVE | In-game map editing |
| [area-zones](./area-zones/) | 🟢 LIVE | Entry/exit, silent, broadcast, restricted zones |
| [proximity-chat](./proximity-chat/) | 🟢 LIVE | Audio/video bubbles via LiveKit WebRTC |
| [text-chat](./text-chat/) | 🟢 LIVE | In-world text + bot streaming |
| [phone-chat](./phone-chat/) | 🟢 LIVE | Direct calls between any two users |
| [megaphone](./megaphone/) | 🔵 INHERITED | Broadcast audio/video to room or world |
| [woka-avatars](./woka-avatars/) | 🟢 LIVE | Pipoya-style user avatars |
| [avatar-platform](./avatar-platform/) | 🟢 LIVE | Avatar sets, entitlements, catalog governance |
| [meeting-rooms](./meeting-rooms/) | 🔵 INHERITED | Jitsi/BBB zones |
| [scripting-api](./scripting-api/) | 🔵 INHERITED | WA.ui, WA.room, WA.player, WA.state |
| [white-label-rebranding](./white-label-rebranding/) | 🔵 INHERITED | Custom domain, logos |
| [matrix-chat](./matrix-chat/) | 🟡 OPTIONAL | Persistent chat via Synapse |
| [map-templates](./map-templates/) | 🔵 INHERITED | Reusable room layouts |

See also: [01-platform/workadventure-fork](../01-platform/workadventure-fork/), [03-ai-bots/bot-streaming-chat](../03-ai-bots/bot-streaming-chat/)