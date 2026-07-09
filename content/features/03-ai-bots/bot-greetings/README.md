# Bot Greetings

When a player walks near a bot, the bot sends a customizable greeting message. The starting point for every bot interaction.

## How It Works

- Triggers on spatial proximity ([bot-behaviors](./bot-behaviors/))
- Greeting content customizable per bot (set in [Orbit](../01-platform/orbit/))
- Works with all behavior modes — Social greets proactively, Idle greets when approached

## Related

- [Bot behaviors](./bot-behaviors/) — the trigger system
- `bots/memory/PersistentMemory.ts` — greeting memory