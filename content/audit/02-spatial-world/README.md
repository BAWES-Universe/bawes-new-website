# 02 — Spatial World

> Virtual environment features — maps, chat, avatars, areas, scripting, and communication tools inherited from WorkAdventure and extended by Universe.

## Maps

- **Tiled Editor** (`docs/map-building/tiled-editor/`)
  - WAM maps — Web Avatar Map format (JSON)
  - Special zones (entry/exit, meeting rooms, camera, animations, opening websites, text displays)
  - Publishing options: WA hosted, GitHub Pages, self-hosting
  - Troubleshooting guide
- **Inline Editor** (`docs/map-building/inline-editor/`)
  - Area editor — zones, permissions, restricted areas, entry/exit triggers
  - Area editor sub-features: broadcast, meeting rooms, silent zones
  - Megaphone configuration
- **Map templates** — reusable room templates
- **Entry/exit system** — `@/` URL format (universe/world/room) and `_/` format

## Areas & Zones

- **Entry/exit zones** — trigger on player enter/leave
- **Meeting rooms** — Jitsi/BBB integration for scheduled video calls
- **Silent zones** — mute audio/video in designated areas
- **Broadcast zones** — push messages/notifications to players in area
- **Restricted areas** — tag-based access control
- **Website-in-map** — embed websites as interactive map objects
- **Camera zones** — scripted camera movements

## Chat

- **Proximity chat** — audio/video bubbles triggered by spatial proximity
- **Text chat** (`docs/user/chat.md`) — message history, bubble display
- **Phone chat** (`docs/user/phone-chat.md`) — direct call between any two users
- **Persistent Matrix chat** — optional Matrix/Synapse integration for history
- **Bot streaming chat** — token-by-token AI responses rendered in chat bubbles (Universe extension)
- **Emotion blocks** — `[EMOTION_UPDATE]` tags parsed from bot responses

## Avatars (Woka)

- **Woka system** — pipoya-style sprite-based avatars
- **Custom textures** — upload own assets (not yet integrated in Universe fork)
- **Bot avatars** — bots have their own visual identity separate from user Wokas
- **Avatar catalog** — admin-managed avatar set lifecycle (PR #91, #103)
- **Rebranding** — white label mode for custom domains and logos

## Scripting API

- **API entry points** (documented at `docs/developer/map-scripting/`)
  - `WA.room` — room state, layers, events
  - `WA.state` — persistent key-value state
  - `WA.player` — player position, tags, UUID
  - `WA.ui` — popups, menus, iframes, modals, action bar
  - `WA.chat` — send/receive chat messages
  - `WA.mapEditor` — programmatic map editing
  - `WA.iframeId` — self-identification for iframe scripts
- **TypeScript support** — scripting can be written in TypeScript
- **Scripting internals** (`docs/developer/map-scripting/scripting-internals.md`)
- **Contributing to scripting API** (`docs/others/contributing/contributing-to-scripting-api.md`)

## Megaphone

- **Broadcast** audio/video/screen to entire room or world
- **Configurable scope** — "room" or "world" (connected rooms with same space name)
- **Tag-based access** — restrict to admins/moderators
- **Visual indicator** — orange icon, yellow camera feedback, megaphone icon on Woka

## Communication Features

- **Proximity detection** — approach to initiate conversation
- **Private bubbles** — small group discussions (text, audio, video)
- **Scheduled meetings** — via meeting room zones
- **Spontaneous interaction** — walk up and talk, no scheduling needed

## Integrations (Upstream WorkAdventure)

- Microsoft Teams
- Discord
- Element
- Google Workspace
- Jitsi Meet
- BBB (BigBlueButton)

## Resources

- Map building docs: `docs/map-building/index.md`
- Invite system: `docs/map-building/invite.md`
- Troubleshooting: `docs/others/troubleshooting.md`
