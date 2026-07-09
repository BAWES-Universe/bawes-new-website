# Bot Emotions

Bots can express moods through `[EMOTION_UPDATE]` blocks in their output. These are parsed before display and routed to the backend for state tracking — not shown in the chat UI.

## Purpose

Lets bots have internal emotional state (happy, confused, thinking, surprised, sad) that affects their avatar animation or behavior without cluttering the conversation.

## Related

- [Bot streaming chat](./bot-streaming-chat/) — emotions parsed from the same stream
- [Bot avatars](./bot-avatars/) — visual state could reflect emotions