import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function AppsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Apps"
        title={<>Hook up <span className="text-gradient-accent">anything.</span></>}
        lead={<>Connect an App once, then choose which of your Bricks can use it. Email, calendar, GitHub and 1,700+ more.</>}
        detail={[<>You sign in on the App’s own page, so Universe never sees your password.</>]}
        scene="desks"
        actions={[{ label: 'Guide: Apps', href: '/guide/apps' }, { label: 'See all features', href: '/features-overview' }]}
        source='feature_apps'
      />

      <PartSteps
        eyebrow="How it works"
        title="Connect once, use everywhere"
        steps={[
          { title: "Connect", text: "Open Apps, search, and press Connect. Or just ask a Brick: connect my Notion." },
          { title: "Pick the Bricks", text: "Choose which of your Bricks can use it. A Brick you did not pick cannot touch it." },
          { title: "Set what it may do", text: "For each Brick, each kind of action runs right away, asks first, or is off." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Your Apps, on your terms"
        cards={[
          { icon: "apps", title: "1,700+ Apps", text: "Search the list and connect in a tap." },
          { icon: "bolt", title: "Instant Apps", text: "Some Apps work without connecting anything. They are ready the moment you ask." },
          { icon: "add_link", title: "Add your own App", text: "Not on the list? Paste its link and Universe checks how it signs in." },
          { icon: "front_hand", title: "It asks first", text: "Four kinds of action: looks things up, makes new things, changes things, deletes or sends out. You decide which run right away.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "contact_support", title: "Your Brick offers", text: "When a job needs an App, your Brick offers to connect it on a small card. Say Not now and it helps another way." },
          { icon: "key", title: "Keys", text: "Some services work with a key. Add it in Apps, where it is stored encrypted. If you paste a key into a chat, the message is not sent." },
          { icon: "handshake", title: "Lend to a universe", text: "Lend an App to a universe where you manage bots. Choose what bots there may do, and take it back any time. Nobody there ever sees its key." },
          { icon: "groups", title: "Team Apps", text: "A universe can have Apps of its own, signed in with the team account. They stay when someone leaves." },
          { icon: "share", title: "Let others ask", text: "Let people who chat with your Brick ask for the jobs you pick. Nothing else of the App can be reached." },
        ]}
      />

      <PartBuilders
        title="What is under it"
        body={[
          <>Add your own App by pasting its MCP link. Universe checks how it signs in: a sign-in page (OAuth), a key or token, or nothing at all.</>,
          <>With GitHub your Bricks work as you. What they push, open and merge shows under your name.</>,
          <>An App signed in as you is only for you. A Brick never uses it for anyone else, unless you choose what others can ask for.</>,
          <>Disconnect an App and every Brick and bot stops using it at once. Nothing in the App itself is deleted.</>,
        ]}
        facts={[
          ["Apps", "1,700+"],
          ["Your own", "Any MCP link"],
          ["Sign-in", "OAuth, key or token, or none"],
          ["For each Brick", "Right away, asks first, or off"],
          ["Disconnect", "Stops everywhere at once"],
        ]}
        links={[{ label: "MCP integration", href: "/mcp-integration" }, { label: "Bot tool calling", href: "/features/bot-tools" }]}
      />

      <PartRelated
        links={[
          { label: "Brick", href: "/features/brick", note: "The one who uses your Apps." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Right away, asks first, or off." },
          { label: "MCP integration", href: "/mcp-integration", note: "The open standard under Apps." },
          { label: "Residents ask first", href: "/guide/residents-ask-first", note: "How approvals look in the chat." },
        ]}
      />

      <PageClosing
        title={<>What should your Brick reach?</>}
        body={<>Connect your first App. It takes one sign-in.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Guide: Apps', href: '/guide/apps' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_apps'
      />
    </div>
  )
}
