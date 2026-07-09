# Bot Avatars

Bots have their own visual identity, separate from user [Wokas](../02-spatial-world/woka-avatars/). This helps users immediately distinguish between people and AI agents.

## NPC-Only Sets

Bot avatars come from **NPC-only** [avatar sets](../02-spatial-world/avatar-platform/). These are hidden from the user avatar picker — players can never accidentally become a bot.

Examples:
- Museum lion mascot → lion avatar from "Animal Guides" set
- Store guide → branded uniform avatar
- Chef bot → chef avatar for food hall

## Features

- Separate catalog from user Wokas
- Texture picker uses `&context=bot` URL param ([PR #210](https://github.com/BAWES-Universe/workadventure-universe/pull/210))
- Status indicators (connected, thinking, idle)
- Avatar assignment via [Orbit](../01-platform/orbit/) admin

## Related

- [Woka avatars](../02-spatial-world/woka-avatars/) — user avatar system
- [Avatar platform](../02-spatial-world/avatar-platform/) — NPC-only set management