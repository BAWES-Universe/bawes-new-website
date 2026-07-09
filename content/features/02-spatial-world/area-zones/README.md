# Area Zones

Spatial zones on maps that trigger actions when players enter, exit, or stay. Universe's permission system for the virtual world.

## Zone Types

| Zone | What it does | Config |
|---|---|---|
| **Entry/Exit** | Fire scripts, open popups on enter/leave | Tiled objects layer |
| **Meeting Rooms** | Walk in → join a scheduled Jitsi/BBB call | Jitsi URL, capacity |
| **Silent Zones** | Mute audio/video inside designated areas | Toggle on map |
| **Broadcast Zones** | Push notifications to players in area | Message text |
| **Restricted Areas** | Gate access by membership tag | Tag list, [OIDC role](../01-platform/oidc-auth/) |

## Access Control

Area permissions are managed in [Orbit](../01-platform/orbit/). Draw a zone on the map, assign tags, and only users with that tag can enter. Tags come from [OIDC roles](../01-platform/oidc-auth/) or direct membership assignment.

## Related

- [Scripting API](./scripting-api/) — programmatic zone triggers via WA.room.onEnterLayer
- [Avatar platform](./avatar-platform/) — membership-gated sets use same tag system
- `docs/map-building/inline-editor/area-editor/`