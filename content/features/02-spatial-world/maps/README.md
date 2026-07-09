# Maps

The spatial canvas of Universe. Maps are built with [Tiled](https://www.mapeditor.org/) and use the **WAM** (Web Avatar Map) format — JSON. They define the layout, collision, zones, and interactions of every room.

## How It Works

- **Editor:** Tiled (desktop). Place tiles, objects, zones on layers
- **Format:** WAM schema at `docs/schema/2.0.0/wam.json`
- **Publishing:** WA hosted, GitHub Pages, or self-hosted (see [self-hosting](../01-platform/self-hosting/))
- **Hot-reload:** Maps reload on save — no server restart

## What's on a Map

- [Area zones](./area-zones/) — entry/exit triggers, silent zones, broadcast zones
- [Meeting rooms](./meeting-rooms/) — Jitsi/BBB zones for scheduled calls
- Embedded websites as interactive objects
- Animated tiles, cameras, text displays
- Collision layers, teleport points

## Related

- [Inline map editor](./inline-map-editor/) — modify maps in-game
- [Map templates](./map-templates/) — reusable room layouts
- `docs/map-building/tiled-editor/` — full docs