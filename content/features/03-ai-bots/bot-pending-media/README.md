# Bot Pending Media

**Status:** 🟢 LIVE

If a user walks away while a bot is generating media, the result is queued and delivered the moment they return. No lost images, no repeated requests.

## How It Works

1. **Pre-queue** — URLs from tool results are saved to `pendingMedia` immediately after the tool finishes, before the AI generates its response
2. **Re-entry detection** — when the user walks back to the bot, `flushPendingMedia` delivers all queued media
3. **Deduplication** — `originalUrl` tracking prevents re-sending the same media
4. **Greeting context** — the bot's greeting on re-entry notes that media was delivered while away, so the AI doesn't try to re-generate

## The Problem This Solves

- Bot calls a tool (e.g. ComfyUI) — generation takes 10-30 seconds
- User walks away to another part of the room
- Tool finishes, image is ready — but nobody to send it to
- Without pending media: image is lost, user has to ask again
- With pending media: image is queued, delivered on re-entry

## Code

`bots/ai/AIService.ts` — preQueueToolResults, flushPendingMedia
`bots/memory/ConversationMemory.ts` — pendingMedia lifecycle
`bots/memory/PersistentMemory.ts` — pendingMedia storage

## Related

- [Bot media sending](./bot-media-sending/) — the auto-send that pre-queues
- [Bot memory](./bot-memory/) — where pendingMedia is stored
- [Bot greetings](./bot-greetings/) — re-entry greeting with delivery context
