import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export const metadata: Metadata = {
  title: 'Bot Streaming Chat — Real-Time AI Responses',
  description: 'Bot responses stream into chat bubbles as the AI writes them. Watch the answer take shape in real time, with tool calls and media arriving along the way.',
  openGraph: {
    title: 'Bot Streaming Chat — Real-Time AI Responses',
    description: 'Bot responses stream into chat bubbles as the AI writes them. Watch the answer take shape in real time, with tool calls and media arriving along the way.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Streaming Chat — Real-Time AI Responses',
    description: 'Bot responses stream into chat bubbles as the AI writes them. Watch the answer take shape in real time, with tool calls and media arriving along the way.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotStreamingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Streaming Chat"
        title={<>Watch AI think <span className="text-gradient-accent">in real time</span></>}
        lead={<>An answer from a bot appears as it is written, so you are never staring at an empty bubble.</>}
        detail={[<>Bot responses stream into the chat as the model writes them. You see the answer take shape as it happens.</>]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_streaming"
      />

      <PartSteps
        eyebrow="How it works"
        title="You read while it writes"
        steps={[
          { title: "You ask", text: "Say or type your question." },
          { title: "The answer starts at once", text: "The first words show up while the rest is still being written." },
          { title: "It keeps coming", text: "When the bot stops to use a tool, it carries on from where it was." },
        ]}
      />

      <PartCards
        eyebrow="What you see"
        title="More than text"
        cards={[
          { icon: "stream", title: "Words as they come", text: "No long wait followed by a wall of text." },
          { icon: "build", title: "Tools along the way", text: "The owner of a bot can show the names of the tools it uses in the chat, or keep them hidden.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "image", title: "Pictures in the same flow", text: "When a tool makes a picture or a file, it is sent to the chat with the reply.", more: { label: "Bot media sending", href: "/features/bot-media-sending" } },
          { icon: "record_voice_over", title: "Out loud too", text: "A bot with a voice answers out loud, and the words also show in the chat.", more: { label: "Talking to residents out loud", href: "/guide/talking-out-loud" } },
        ]}
      />

      <PartBuilders
        title="Streamed from the model"
        body={[
          <>The bot server passes the reply on as the model produces it. The chat adds the words to the bubble as they arrive. If you leave in the middle, the text stops where it was.</>,
        ]}
        facts={[
          ["Reply", "Streamed as it is written"],
          ["Tool calls", "Shown or hidden, per bot"],
          ["Set up", "Nothing"],
        ]}
        links={[{ label: "Bot provider config", href: "/features/bot-provider-config" }]}
      />

      <PartRelated
        links={[
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
          { label: "Bot provider config", href: "/features/bot-provider-config", note: "Pick the model for each bot." },
          { label: "Text chat", href: "/features/text-chat", note: "Chat with the people around you." },
          { label: "Bot media sending", href: "/features/bot-media-sending", note: "Bots that send pictures." },
        ]}
      />

      <PageClosing
        title={<>Ready to see AI think in real time?</>}
        body={<>Walk up to a bot and ask it something.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_streaming"
      />
    </div>
  )
}
