import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export const metadata: Metadata = {
  title: 'Bot Pending Media — Reliable Delivery on Re-Entry',
  description: 'If you walk away while a bot is generating media, it queues the result and delivers it when you return. Nothing gets lost.',
  openGraph: {
    title: 'Bot Pending Media — Reliable Delivery on Re-Entry',
    description: 'If you walk away while a bot is generating media, it queues the result and delivers it when you return. Nothing gets lost.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Pending Media — Reliable Delivery on Re-Entry',
    description: 'If you walk away while a bot is generating media, it queues the result and delivers it when you return. Nothing gets lost.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotPendingMediaPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Pending Media"
        title={<>Nothing <span className="text-gradient-accent">gets lost</span></>}
        lead={<>Walk away while a bot is still making your picture? It keeps it safe and hands it over the moment you are back.</>}
        detail={[<>If you walk away while a bot is making something, it keeps the result and delivers it when you return. No lost images and no repeated requests.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_pending_media"
      />

      <PartSteps
        eyebrow="How it works"
        title="Made while you were gone, handed over when you are back"
        steps={[
          { title: "You ask and walk off", text: "Pictures and videos can take a while. You do not have to stand there." },
          { title: "The bot keeps it", text: "When the result is ready and you are gone, the bot puts it aside under your name." },
          { title: "You come back", text: "Walk up to the bot again and it hands the result over." },
        ]}
      />

      <PartCards
        eyebrow="Good to know"
        title="Nothing to do on your side"
        cards={[
          { icon: "inventory_2", title: "Kept for you", text: "The result waits for the person who asked. Nobody else gets it." },
          { icon: "chat_bubble", title: "The bot knows", text: "It is told that something is waiting for you, so it can say so when you return." },
          { icon: "replay", title: "No asking twice", text: "You do not have to repeat the request." },
        ]}
      />

      <PartBuilders
        title="A safety net on the bot server"
        body={[
          <>Media from a tool is put on a waiting list for that person before it is sent. If sending fails because the person left, it stays on the list and goes out the next time they are with the bot.</>,
        ]}
        facts={[
          ["Kept", "For each person"],
          ["Delivered", "When you are back with the bot"],
          ["Set up", "Nothing"],
        ]}
        links={[{ label: "Bot media sending", href: "/features/bot-media-sending" }]}
      />

      <PartRelated
        links={[
          { label: "Bot media sending", href: "/features/bot-media-sending", note: "Bots that send pictures." },
          { label: "Bot gallery", href: "/features/bot-gallery", note: "Many pictures in one message." },
          { label: "Bot memory", href: "/features/bot-memory", note: "What a bot remembers." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
        ]}
      />

      <PageClosing
        title={<>Reliable by design</>}
        body={<>Walk away, come back, and your media is waiting.</>}
        links={[{ label: 'See bot media sending', href: '/features/bot-media-sending' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_pending_media"
      />
    </div>
  )
}
