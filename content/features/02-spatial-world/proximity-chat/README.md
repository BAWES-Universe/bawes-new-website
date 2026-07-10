# Proximity Chat

**Status:** 🟢 LIVE

Audio/video communication triggered by spatial proximity. Powered by LiveKit (WebRTC) with Coturn TURN/STUN infrastructure. Rooms auto-scale from peer-to-peer into LiveKit as participants grow. The foundation of natural interaction in Universe.

## How It Works

- Walk your avatar near another player — audio/video bubble activates automatically
- Rooms start as P2P (no server load) and scale into LiveKit when more participants join
- Hear nearby conversations (optional toggle)
- Private bubbles for small group discussions
- Muted by default — you choose who you hear
- No scheduling needed — spontaneous

## Related Features

- **Screen Sharing** — Share your screen with people in the conversation bubble via the screenShareButton
- **Follow** — Click to follow another person (API: `WA.player.proximityMeeting.followMe()`)
- [Text chat](./text-chat/) — in-world messaging
- [Megaphone](./megaphone/) — one-to-many broadcast
- [Technology stack](../07-about/technology-stack/) — LiveKit + Coturn integration
