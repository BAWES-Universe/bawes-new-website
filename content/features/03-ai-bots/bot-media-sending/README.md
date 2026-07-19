# Bot Media Sending

**Status:** 🟢 LIVE

When a bot calls an MCP tool that returns media (images, video, files), the result is auto-sent to the user's chat. No extra prompts, no manual steps — the media interceptor detects URLs in tool results and delivers them directly.

## How It Works

1. Bot calls an MCP tool that returns a URL (image, video, file)
2. Auto-send interceptor detects media URLs in tool results
3. Media is sent directly to the user's chat
4. AI continues with confirmation — no duplicate sends

## Smart Delivery

- **Auto-batching** — 2+ images from the same tool call batch into a gallery message
- **Single images** — direct send via sendImage
- **Graceful fallback** — if gallery send fails, falls back to individual sends
- **Deduplication** — originalUrl tracking prevents duplicate sends across turns

## MCP Tool Examples

- **ComfyUI** — "Generate an image of a dragon" → bot sends the image
- **Higgsfield** — "Create a 5-second video clip" → bot delivers the video
- **Firecrawl** — "Scrape this webpage and send me a screenshot" → bot scrapes and delivers
- **Tavily** — "Research this topic and send me the key sources" → bot searches and links
- **DALL·E / Stable Diffusion MCPs** — any image-generation pipeline

## Code

`bots/ai/AIService.ts` — autoSendMedia, preQueueToolResults

## Related

- [Bot tool calling](./bot-tool-calling/) — the tools that produce media
- [Bot gallery](./bot-gallery/) — how multi-image results are displayed
- [Bot pending media](./bot-pending-media/) — what happens when the user walks away
