# Bot Memory

Every bot has persistent memory that survives across sessions. A visitor who asked about something last week is recognized this week.

## How It Works

- Stores conversation history, user interactions, learned facts
- Loaded on bot spawn, restored when a user re-enters the bot's room
- Enables coherent long-term conversations

## Code

`bots/memory/PersistentMemory.ts` — stored in PostgreSQL, loaded on demand with caching.

## Related

- [Bot provider config](./bot-provider-config/) — the AI model that uses this memory
- [Recursive bots](./recursive-bots/) — spawned bots inherit their own memory