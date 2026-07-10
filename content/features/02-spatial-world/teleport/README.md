# Teleport

**Status:** 🟢 LIVE (extension module)

Teleport between universes, worlds, and rooms via a custom area property. Part of the external modules system.

## How It Works

- Add a "Teleport" property to any area in the map editor
- Specify destination: Universe, World, Room, and optional Start Area
- When a player walks into the area, they're teleported to the destination
- URL format: `@/universe/world/room#startArea`

## Configuration

| Field | Required | Description |
|-------|----------|-------------|
| Universe | ✅ | e.g., `bawes-univ` |
| World | ✅ | e.g., `bawes-world` |
| Room | ✅ | e.g., `headquarters` |
| Start Area | Optional | e.g., `startSpawnArea` |

The teleport extension is enabled per-room by adding `"teleport"` to the `modules` array in room metadata.

## Related

- [Area zones](./area-zones/) — teleport is an area property
- [Maps](./maps/) — rooms that can be destinations
