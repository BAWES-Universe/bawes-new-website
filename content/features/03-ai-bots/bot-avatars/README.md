# Bot Avatars

> Visual identity for bots — NPC-only sets, custom assignment.

**Status:** 🟢 LIVE

Bots have distinct visual identities separate from human user avatars. This helps users immediately distinguish between real people and AI agents.

## NPC-Only Avatar Sets

Bot avatars come from **NPC-only sets** — avatar collections that are hidden from the player avatar picker. Players can never accidentally select a bot avatar.

Examples:
- A museum lion mascot bot assigned a lion avatar from the "Animal Guides" set
- A branded store guide with a company-uniform avatar
- A chef bot for a food hall

## Features

- Separate avatar catalog from user Wokas
- Bot texture picker (PR #210 — fixed woka context fetching with `&context=bot`)
- Visual status indicators (connected, thinking, idle)
- Avatar assignment via Orbit admin (bot name, persona, model, avatar, memory settings)
- NPC-only sets marked as bot-only — invisible to player picker

## Code

- `BotCard.svelte` — bot card display
- `BotDetailView.svelte` — bot detail view with avatar picker
- Texture fetching uses `&context=bot` to differentiate from user avatars
