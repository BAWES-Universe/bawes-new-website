import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export const metadata: Metadata = {
  title: 'Bot Tool Calling — MCP Integration',
  description: 'Bots interact with APIs and external tools through MCP. Generate images and video, research the web, and more, with approvals for anything that changes or sends.',
  openGraph: {
    title: 'Bot Tool Calling — MCP Integration',
    description: 'Bots interact with APIs and external tools through MCP. Generate images and video, research the web, and more, with approvals for anything that changes or sends.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Tool Calling — MCP Integration',
    description: 'Bots interact with APIs and external tools through MCP. Generate images and video, research the web, and more, with approvals for anything that changes or sends.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotToolsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Tool Calling"
        title={<>Bots that <span className="text-gradient-accent">do things</span></>}
        lead={<>Bots can use tools and outside services to get real work done for you, not just talk about it.</>}
        detail={[<>Bots connect to APIs and outside tools through MCP, the Model Context Protocol. You decide which tools a bot uses right away, which it asks about first, and which it never touches.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_tools"
      />

      <PartSteps
        eyebrow="How it works"
        title="Connect, sort, done"
        steps={[
          { title: "Connect a server", text: "Add an MCP server to your bot. Universe reads the list of tools it offers." },
          { title: "Tools are sorted", text: "Each tool lands under a heading by what it does. Move any tool if you see it differently." },
          { title: "Choose for each heading", text: "The bot uses those tools right away, asks first, or never." },
        ]}
      />

      <PartCards
        eyebrow="The four headings"
        title="Sorted by what a tool can do"
        cards={[
          { icon: "search", title: "Looks things up", text: "Reads and finds things. Changes nothing." },
          { icon: "auto_awesome", title: "Makes new things", text: "Makes something new, like an image or a song.", more: { label: "Bot media sending", href: "/features/bot-media-sending" } },
          { icon: "edit", title: "Changes things", text: "Creates or edits things in another app, like an issue or a post." },
          { icon: "send", title: "Deletes or sends out", text: "Deletes things, or sends email and messages outside Universe." },
        ]}
      />

      <PartCards
        eyebrow="You stay in charge"
        title="A bot that asks before it acts"
        cards={[
          { icon: "fact_check", title: "Asking for approvals", text: "Before a bot changes, deletes or sends, it shows a card and waits for your OK. No answer means nothing is done.", more: { label: "Residents ask first", href: "/guide/residents-ask-first" } },
          { icon: "shield_person", title: "Who may ask for what", text: "Choose who can have the bot change things, and who can have it delete or send." },
          { icon: "visibility", title: "Show tool calls", text: "Show the names of the tools a bot uses in the chat, or keep them hidden." },
          { icon: "description", title: "Files in, media out", text: "Bots also read the files you send and deliver what their tools make.", more: { label: "Bot file parsing", href: "/features/bot-file-parsing" } },
        ]}
      />

      <PartBuilders
        title="Built on MCP"
        body={[
          <>MCP, the Model Context Protocol, is an open standard for giving tools to AI models. Any MCP server works, whichever AI model the bot runs on.</>,
          <>You can set how long a bot waits for a tool to answer and how many tools it may use before it replies.</>,
        ]}
        facts={[
          ["Protocol", "MCP"],
          ["Works with", "Any model that can use tools"],
          ["Approvals", "For each heading"],
          ["Set in", "Map editor, Bots, Tools"],
        ]}
        links={[{ label: "MCP integration", href: "/mcp-integration" }, { label: "Bot media sending", href: "/features/bot-media-sending" }, { label: "Bot file parsing", href: "/features/bot-file-parsing" }]}
      />

      <PartRelated
        links={[
          { label: "Apps", href: "/features/apps", note: "Connect an app once, then pick which Bricks use it." },
          { label: "MCP integration", href: "/mcp-integration", note: "How tools plug into Universe." },
          { label: "Bot media sending", href: "/features/bot-media-sending", note: "Bots that send pictures." },
          { label: "Bot file parsing", href: "/features/bot-file-parsing", note: "Bots that read your files." },
          { label: "Residents ask first", href: "/guide/residents-ask-first", note: "The approval card, in the Guide." },
        ]}
      />

      <PageClosing
        title={<>Ready to give your bots tools?</>}
        body={<>Connect an MCP server to your bot and choose what it may do.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_tools"
      />
    </div>
  )
}
