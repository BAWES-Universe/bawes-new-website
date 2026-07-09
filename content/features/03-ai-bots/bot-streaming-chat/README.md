# Bot Streaming Chat

AI responses stream word-by-word into the [text chat](../02-spatial-world/text-chat/) bubble as they're generated. Instead of waiting for a full response, you see the bot "thinking" in real time.

## How It Works

- Token-by-token rendering in the chat bubble
- 🔍 magnifying-glass indicator appears mid-stream when the bot calls an [MCP tool](./bot-tool-calling/)
- [Emotion blocks](./bot-emotions/) (`[EMOTION_UPDATE]`) are stripped from display and routed to backend
- Real-time protocol — not request-response

## Related

- [Bot emotions](./bot-emotions/) — parsed from same stream
- [Bot tool calling](./bot-tool-calling/) — indicators in stream
- [Text chat](../02-spatial-world/text-chat/) — the chat UI rendering