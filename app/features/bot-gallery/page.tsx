import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export const metadata: Metadata = {
  title: 'Bot Gallery — Multi-Image Messages with Lightbox',
  description: 'Gallery messages display multiple images in a responsive grid with a full-screen lightbox, with keyboard navigation, swipe gestures and pinch to zoom.',
  openGraph: {
    title: 'Bot Gallery — Multi-Image Messages with Lightbox',
    description: 'Gallery messages display multiple images in a responsive grid with a full-screen lightbox, with keyboard navigation, swipe gestures and pinch to zoom.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Gallery — Multi-Image Messages with Lightbox',
    description: 'Gallery messages display multiple images in a responsive grid with a full-screen lightbox, with keyboard navigation, swipe gestures and pinch to zoom.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotGalleryPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Gallery"
        title={<>Many pictures, <span className="text-gradient-accent">one message</span></>}
        lead={<>When a message has several pictures, they show as a tidy grid. Tap one to see it full screen.</>}
        detail={[<>Gallery messages show several images in a grid with a full-screen viewer. It works for files people upload and for images a bot makes.</>]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_gallery"
      />

      <PartSteps
        eyebrow="How it works"
        title="One message, many pictures"
        steps={[
          { title: "Send or ask", text: "Attach several pictures to one message, or ask a bot for a few." },
          { title: "They land as a grid", text: "The pictures sit together in one message and do not flood the chat." },
          { title: "Tap to open", text: "One tap opens the picture full screen. Move to the next without closing." },
        ]}
      />

      <PartCards
        eyebrow="In the viewer"
        title="Made for mouse, keyboard and fingers"
        cards={[
          { icon: "keyboard", title: "Keyboard", text: "Arrow keys move between pictures. Escape closes the viewer." },
          { icon: "swipe", title: "Swipe", text: "On a phone, swipe left or right for the next picture." },
          { icon: "zoom_in", title: "Zoom", text: "Pinch to zoom in, or double tap. Drag to look around." },
          { icon: "movie", title: "Video too", text: "Videos open in the same viewer." },
          { icon: "attach_file", title: "Other files", text: "Documents and sound files show as cards you can open or play." },
          { icon: "download", title: "Save them", text: "Save the files of a message to your device." },
        ]}
      />

      <PartBuilders
        title="Part of the chat"
        body={[
          <>The gallery is how the chat shows any message with more than one attachment. It is the same for pictures people send and pictures a bot makes.</>,
        ]}
        facts={[
          ["Pictures", "PNG, JPG, GIF, WebP, SVG"],
          ["Video", "MP4, WebM, MOV"],
          ["Opens with", "One tap"],
        ]}
        links={[{ label: "Bot media sending", href: "/features/bot-media-sending" }, { label: "Text chat", href: "/features/text-chat" }]}
      />

      <PartRelated
        links={[
          { label: "Bot media sending", href: "/features/bot-media-sending", note: "Bots that send pictures." },
          { label: "Bot pending media", href: "/features/bot-pending-media", note: "Pictures that wait for you." },
          { label: "Text chat", href: "/features/text-chat", note: "Chat with the people around you." },
          { label: "Chats, in the Guide", href: "/guide/chats", note: "Everything the chat can do." },
        ]}
      />

      <PageClosing
        title={<>See galleries in action</>}
        body={<>Send a few pictures at once, or ask a bot to make some.</>}
        links={[{ label: 'See bot media sending', href: '/features/bot-media-sending' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_gallery"
      />
    </div>
  )
}
