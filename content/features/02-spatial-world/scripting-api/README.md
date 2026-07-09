# Scripting API

The `WA.*` namespace — programmatic control of the virtual world. Lets map creators add interactive behavior.

## API Reference

| API | Purpose |
|---|---|
| `WA.room` | Room state, layers, onEnterLayer, onLeaveLayer |
| `WA.state` | Persistent key-value store (survives map reloads) |
| `WA.player` | Player position, tags, UUID, state |
| `WA.ui` | Popups, custom menus, iframes, modals, action bar buttons |
| `WA.chat` | Send/receive chat messages programmatically |
| `WA.mapEditor` | Programmatic map editing |
| `WA.iframeId` | Self-identification for iframe scripts |

## Capabilities

- Open popups on zone entry ([area-zones](./area-zones/))
- Register custom menu items in the navbar
- Display "press space to confirm" action messages
- Embed interactive iframes (positioned on viewport)
- Open modals (center, left, right)
- Add/remove action bar buttons
- Listen for `onRemotePlayerClicked` for custom interactions
- Pre-registered menu keys: settings, profile, invite, credit, globalMessages, contact, report

## Related

- [Area zones](./area-zones/) — scripting triggers on zone entry
- `docs/developer/map-scripting/` — full API docs