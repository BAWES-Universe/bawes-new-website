# Meeting Rooms

**Status:** 🟢 LIVE (Jitsi/BBB supported)

Video conference rooms embedded in maps. Walk your avatar into a meeting room zone to join a scheduled call.

## How It Works

- Designate an area zone as a meeting room
- Zone is linked to a Jitsi or BigBlueButton URL
- When player walks in, they auto-join the call
- Supports multiple simultaneous meetings

> **Note:** Jitsi and BBB are supported integrations. Universe's core real-time communication infrastructure is LiveKit WebRTC + Coturn, which powers [proximity chat](./proximity-chat/). Meeting rooms use external providers for scheduled calls.

## Related

- [Area zones](./area-zones/) — meeting room is a zone type with LiveKit room property
- [Proximity chat](./proximity-chat/) — spontaneous alternative using LiveKit core
