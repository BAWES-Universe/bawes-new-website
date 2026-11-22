import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function ArtifactsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Artifacts"
        title={<>Ask for anything. <span className="text-gradient-accent">Keep what it makes.</span></>}
        lead={<>Ask your Brick or any resident for a page, a mini app, a document or a drawing. It is made right in the chat, and it is yours.</>}
        detail={[<>Every change is a new version, so nothing is lost.</>]}
        scene="build"
        actions={[{ label: 'Guide: artifacts', href: '/guide/artifacts' }, { label: 'See all features', href: '/features-overview' }]}
        source='feature_artifacts'
      />

      <PartSteps
        eyebrow="How it works"
        title="From a sentence to something you can open"
        steps={[
          { title: "Ask", text: "Say what you want in your own words." },
          { title: "Open it", text: "A card appears in the chat. Tap it and the artifact opens." },
          { title: "Share or publish", text: "Choose who can open it, copy its link, or make it public." },
        ]}
      />

      <PartCards
        eyebrow="Four kinds"
        title="What a resident can make"
        cards={[
          { icon: "widgets", title: "Mini app", text: "Small working apps: a quiz, a tracker, a game, a calculator." },
          { icon: "web", title: "Page", text: "Pages people can visit: an invite, a portfolio, a menu." },
          { icon: "description", title: "Document", text: "Plans, notes, reports and guides you can keep editing." },
          { icon: "draw", title: "Drawing", text: "Logos, diagrams and posters, drawn to order." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Yours to change, share and show"
        cards={[
          { icon: "history", title: "Versions", text: "Ask for a change and you get a new version. Look at an older one, and restore it if you like it better." },
          { icon: "group", title: "Who can open it", text: "People in this chat, just you, anyone with the link, or public." },
          { icon: "publish", title: "Publish", text: "Publish a finished version and keep working on the next one in private. People see the published one until you publish again." },
          { icon: "collections", title: "Your artifacts", text: "Everything you made, from every bot and every chat, in one list." },
          { icon: "payments", title: "Pages that take a payment", text: "Add your payment service key in Apps and ask for a page that takes a payment. Buyers pay on the service’s own page." },
          { icon: "public", title: "Community", text: "Make an artifact public and it goes on your page, where anyone can find it.", more: { label: "Community", href: "/features/artifact-community" } },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>An artifact runs in a locked box of its own, with no access to the network.</>,
          <>A link opens the artifact full screen. Anyone with the link can open it, also without signing in.</>,
          <>Switch between Preview and Code on anything you made.</>,
        ]}
        facts={[
          ["Kinds", "Mini app, page, document, drawing"],
          ["Versions", "Every change is kept"],
          ["Open to", "Chat, just you, link, or public"],
          ["Made by", "Your Brick, or any resident"],
        ]}
        links={[{ label: "Guide: artifacts", href: "/guide/artifacts" }, { label: "Community", href: "/features/artifact-community" }]}
      />

      <PartRelated
        links={[
          { label: "Community", href: "/features/artifact-community", note: "Show your work and find everyone else’s." },
          { label: "Brick", href: "/features/brick", note: "Your own AI companion makes them for you." },
          { label: "Apps", href: "/features/apps", note: "Where a payment key lives." },
          { label: "Bot gallery", href: "/features/bot-gallery", note: "Pictures and video a bot sends you." },
        ]}
      />

      <PageClosing
        title={<>What will you ask for first?</>}
        body={<>A quiz for Friday, a page for your shop, a plan for the trip.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Guide: artifacts', href: '/guide/artifacts' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_artifacts'
      />
    </div>
  )
}
