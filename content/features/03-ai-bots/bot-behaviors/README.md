# Bot Behaviors

> Behavior modes that determine how and when bots initiate interaction.

**Status:** 🟢 LIVE

## Behavior Types

| Mode | What it does |
|---|---|
| **Idle** | Waits for player interaction. Silent until approached. |
| **Patrol** | Walks a set of waypoints around the room autonomously. |
| **Social** | Greets nearby users proactively without waiting. |

## Proximity Triggers

Bots detect when a player enters their zone and react:
- Greeting with a custom message
- Offering a tour
- Starting an onboarding sequence
- Flagging a transition to a human agent

No button press required — triggered automatically by spatial proximity.

## Scripted Sequences (Proposed — from PR #1)

Beyond conversation, bots can execute scripted sequences: move to a position, wait, speak, trigger an animation, open a door, play a sound, start a countdown. Useful for tours, onboarding flows, and narrative experiences.

## Conversation Handoff

When a bot reaches the limit of what it can resolve, it can flag the session for human takeover, send a notification to staff, or escalate to a live operator room — preserving conversation context throughout.

## Code

- `play/src/front/external-modules/bots/` — bot frontend components
- Configured via admin API per bot instance
- `BotDetailView.svelte` — set bot name, persona, model, memory settings, assigned avatar
