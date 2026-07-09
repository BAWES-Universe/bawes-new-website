# Matrix Chat

Optional persistent chat via Matrix/Synapse. Gives every room a permanent chat history across sessions.

## How It Works

- Synapse container runs alongside the main stack
- Chat history persists when users leave and re-enter
- Federates with the broader Matrix network

## When to Use

Skip if you only need per-session [proximity chat](./proximity-chat/) and ephemeral [text chat](./text-chat/). Enable if users need to revisit conversations from previous sessions.

## Docs

`docs/others/self-hosting/matrix.md`