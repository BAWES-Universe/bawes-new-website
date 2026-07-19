# Bot Gallery Messages

**Status:** 🟢 LIVE

Gallery messages display multiple images in a responsive grid with a full-screen lightbox. Works for both user-uploaded files and bot-generated images.

## Layout

- **2 images** — Two-column layout, equal space
- **3 images** — Mosaic layout (one large + two small)
- **4+ images** — Grid layout with +N overflow overlay on the 6th cell

## Lightbox

- Keyboard navigation (ArrowLeft/Right)
- Swipe gestures (left/right on mobile)
- Prev/next buttons
- Fade transitions on image change
- Zoom, pan, double-tap, pinch zoom
- Character movement auto-disabled while lightbox is open

## Sender-Agnostic

- **User uploads** — multiple files batched into a single gallery message
- **Bot-generated images** — auto-batched when a tool call returns 2+ images

## Code

`play/src/front/Chat/Components/Room/Message/MessageGallery.svelte`, `Lightbox.svelte`

## Related

- [Bot media sending](./bot-media-sending/) — how bot-generated images reach the gallery
- [Bot file parsing](./bot-file-parsing/) — file analysis that may produce gallery output
- [Text chat](../02-spatial-world/text-chat/) — the chat UI that renders galleries
