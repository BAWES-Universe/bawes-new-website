# Area Zones

**Status:** 🟢 LIVE

Spatial zones on maps that trigger actions when players enter, exit, or stay. Drawn using the Area Editor in the in-game Map Editor. Universe's permission and interaction system for the virtual world.

## Area Properties (Actions)

When drawing an area in the Area Editor, you can assign one or more of these properties:

| Property | What it does |
|----------|-------------|
| **Start Area** | Sets where players spawn when entering the map |
| **Exit Area** | Teleports player to another map and start zone |
| **Open Website** | Opens a URL (immediately on enter, or as a press-[SPACE] prompt) |
| **Open File** | Opens an uploaded file (PDF, etc.) |
| **Google Workspace** | Pre-configured Google Docs, Sheets, Slides, Drive integrations |
| **Klaxoon** | Embedded Klaxoon board |
| **LiveKit Room** | Activates spatial audio/video in the zone (with audio/video mute options) |
| **Megaphone (Speaker)** | Designates area as megaphone broadcast origin |
| **Megaphone (Listener)** | Designates area as megaphone reception zone |
| **Highlight** | Visually highlights the area on the map |
| **Focusable** | Makes the area focusable/interactive |
| **Play Audio** | Plays an audio file on zone entry |
| **Restricted Rights** | Gates access by read/write membership tags |
| **Searchable** | Makes the area discoverable in Orbit's exploration view |
| **Matrix Chat Room** | Creates an optional persistent chat room for the area |

## Access Control

Area permissions are managed in [Orbit](../01-platform/orbit/). Draw a zone on the map, assign read/write tags, and only users with the matching tags can enter or interact. Tags come from [OIDC roles](../01-platform/oidc-auth/) or direct membership assignment.

## Related

- [Entity Editor](#) — objects placed on maps can also trigger actions
- [Scripting API](./scripting-api/) — programmatic zone triggers via WA.room.onEnterLayer
- [Avatar platform](./avatar-platform/) — membership-gated sets use same tag system
- `docs/map-building/inline-editor/area-editor/`
