# Proximity Chat

**Status:** 🟢 LIVE

Audio/video communication triggered by spatial proximity. Uses **direct peer-to-peer WebRTC by default** (via `simple-peer`), with automatic scaling to a LiveKit server when rooms grow beyond the threshold (default: 4 users). Coturn provides TURN/STUN relay for NAT traversal.

The backend decides when to switch. If LiveKit isn't configured (`LIVEKIT_HOST` env var not set), the room stays on P2P regardless of user count.

## How It Works

- Walk your avatar near another player — audio/video bubble activates automatically
- **≤ 4 users:** Direct P2P WebRTC (`simple-peer`). Zero server load, minimal latency.
- **> 4 users:** Backend triggers automatic switch to LiveKit server (when configured). Clients get a `SWITCH_MESSAGE` with a LiveKit room token and connect via `livekit-client`.
- When LiveKit is unavailable or not configured, P2P is used at any scale.
- **Scaling back:** When users drop back to ≤ 4, a 20-second delayed transition back to P2P is scheduled (prevents thrashing on rapid join/leave).
- Hear nearby conversations (optional toggle)
- Private bubbles for small group discussions
- Muted by default — you choose who you hear
- No scheduling needed — spontaneous

## Related Features

- **Screen Sharing** — Share your screen with people in the conversation bubble via the screenShareButton
- **Follow** — Click to follow another person (API: `WA.player.proximityMeeting.followMe()`)
- [Text chat](./text-chat/) — in-world messaging
- [Megaphone](./megaphone/) — one-to-many broadcast
- [Technology stack](../05-about/technology-stack/) — LiveKit + Coturn integration
