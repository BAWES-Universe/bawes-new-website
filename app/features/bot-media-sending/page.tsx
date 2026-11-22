import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export const metadata: Metadata = {
  title: 'Bot Media Sending — Auto-Send Tool-Generated Images',
  description: 'When a bot calls a tool that returns media (images, video, files), the result is auto-sent to the user in the chat. No extra prompts, no manual steps.',
  openGraph: {
    title: 'Bot Media Sending — Auto-Send Tool-Generated Images',
    description: 'When a bot calls a tool that returns media (images, video, files), the result is auto-sent to the user in the chat. No extra prompts, no manual steps.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Media Sending — Auto-Send Tool-Generated Images',
    description: 'When a bot calls a tool that returns media (images, video, files), the result is auto-sent to the user in the chat. No extra prompts, no manual steps.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotMediaSendingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Media Sending"
        title={<>Bots that <span className="text-gradient-accent">send pictures</span></>}
        lead={<>Ask a bot for a picture, a video or a file and it arrives in your chat. No extra steps.</>}
        detail={[<>When a bot uses a tool that returns media, such as images, video or files, the result is sent to you automatically. No extra prompts and no manual steps.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_media_sending"
      />

      <PartSteps
        eyebrow="How it works"
        title="Ask, wait a moment, there it is"
        steps={[
          { title: "You ask", text: "Tell the bot what you want: a logo idea, a short clip, a chart as a file." },
          { title: "The bot uses a tool", text: "It calls a tool that makes the picture, the video or the file." },
          { title: "It lands in your chat", text: "The result is sent to you as a message. The bot does not just paste a link for you to chase." },
        ]}
      />

      <PartCards
        eyebrow="What you get"
        title="Results you can see"
        cards={[
          { icon: "image", title: "Pictures", text: "Shown right in the chat. Several at once arrive as a gallery.", more: { label: "Bot gallery", href: "/features/bot-gallery" } },
          { icon: "movie", title: "Video and sound", text: "Play them in the chat." },
          { icon: "attach_file", title: "Files", text: "Documents arrive as a card you can open or save." },
          { icon: "schedule", title: "Nothing lost", text: "Walk away before it is ready and the bot keeps it for you.", more: { label: "Bot pending media", href: "/features/bot-pending-media" } },
        ]}
      />

      <PartBuilders
        title="Any tool that returns media"
        body={[
          <>A bot gets its tools over MCP, the Model Context Protocol. When a tool answers with an image, a video or a file, the bot server sends it to the chat by itself, so the model does not have to remember to.</>,
        ]}
        facts={[
          ["Tools over", "MCP"],
          ["Sent", "Automatically"],
          ["Shown as", "Picture, video, sound or file card"],
        ]}
        links={[{ label: "Bot tool calling", href: "/features/bot-tools" }, { label: "MCP integration", href: "/mcp-integration" }]}
      />

      <PartRelated
        links={[
          { label: "Bot gallery", href: "/features/bot-gallery", note: "Many pictures in one message." },
          { label: "Bot pending media", href: "/features/bot-pending-media", note: "Pictures that wait for you." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
          { label: "Bot file parsing", href: "/features/bot-file-parsing", note: "Bots that read your files." },
        ]}
      />

      <PageClosing
        title={<>Ready to give your bots media?</>}
        body={<>Connect a tool that makes images, video or files, and ask for one.</>}
        links={[{ label: 'See gallery messages', href: '/features/bot-gallery' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_media_sending"
      />
    </div>
  )
}
