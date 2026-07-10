# Bot Editor

**Status:** 🟢 LIVE

Place, configure, and manage AI bots directly on the map. Part of the in-game Map Editor with bindings to the Admin API.

## Modes

The Bot Editor has four modes:

| Mode | What it does |
|------|-------------|
| **List** | View all bots on the current map, their status, and behavior type |
| **Detail** | Edit a single bot's configuration — name, behavior, radius, avatar |
| **Placing** | Click on the map to set a bot's spawn position |
| **Waypoint Edit** | Draw patrol waypoints for bots in Patrol mode |

## Configuration

Per-bot settings available in the editor:

- **Name** — display name in the world
- **Behavior Type** — idle (stationary), patrol (follows waypoints), social (proactive greeting)
- **Radius** — proximity detection range
- **Conversation Radius** (social bots) — how far the bot reaches out to greet people
- **Patrol Waypoints** — click on the map to add waypoints the bot walks between
- **Assigned Space** — bot's current position on the map

## Live Updates

Changes made in the Bot Editor are sent to running bots in real-time via the Admin API:
- Move a bot → it teleports instantly
- Change behavior type → bot switches mode immediately
- Add waypoints → patrol path updates live

## Related

- [Bot behaviors](../03-ai-bots/bot-behaviors/) — idle, patrol, social behavior documentation
- [Admin API](../01-platform/admin-api/) — the REST API behind the bot editor
- [Orbit](../01-platform/orbit/) — operator dashboard for bot management
