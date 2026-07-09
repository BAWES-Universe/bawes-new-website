# Bot Behaviors

Behavior modes that determine how bots interact with players in the spatial world.

## Behavior Types

| Mode | What it does |
|---|---|
| **Idle** | Waits for player interaction. Silent until approached. |
| **Patrol** | Walks a set of waypoints around the room autonomously. |
| **Social** | Greets nearby users proactively without waiting. |

## Proximity Triggers

Bots detect when a player enters their zone and react: greeting ([bot-greetings](./bot-greetings/)), offering a tour, starting an onboarding sequence, or flagging a human handoff.

## Conversation Handoff

When a bot hits its limit, it flags the session for human takeover — sending a notification to staff or escalating to a live operator room, preserving conversation context.

## Scripted Sequences

Beyond conversation, bots can execute scripted sequences: move to a position, wait, speak, trigger an animation, open a door, play a sound, start a countdown. Useful for tours, onboarding flows, and narrative experiences.

## Related

- [Bot greetings](./bot-greetings/) — messages triggered by these behaviors
- [Recursive bots](./recursive-bots/) — manager bots spawning workers
- [Orbit](../01-platform/orbit/) — configure behavior per bot