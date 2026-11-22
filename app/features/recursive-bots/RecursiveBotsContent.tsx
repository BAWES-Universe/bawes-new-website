import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function RecursiveBotsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Recursive Bots"
        title={<>Many bots, <span className="text-gradient-accent">one team</span></>}
        lead={<>Put several bots in one room and give each its own job, its own AI model and its own memory.</>}
        detail={[<>Each bot gets its own provider config, behavior and memory. Give the simple jobs to a small model and the hard ones to a big one.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_recursive_bots"
      />

      <PartSteps
        eyebrow="How it works"
        title="Build the team one bot at a time"
        steps={[
          { title: "Add a bot", text: "In the map editor, open Bots and press New bot." },
          { title: "Give it one job", text: "Write its personality, pick its model and connect only the tools that job needs." },
          { title: "Add the next one", text: "A greeter by the door, a guide who walks a route, an expert at the desk." },
        ]}
      />

      <PartCards
        eyebrow="Every bot is its own"
        title="Specialists, side by side"
        cards={[
          { icon: "memory", title: "Its own model", text: "One bot runs on a fast, cheap model and another on a big one. You choose for each.", more: { label: "Bot provider config", href: "/features/bot-provider-config" } },
          { icon: "directions_walk", title: "Its own behavior", text: "One stays put, one wanders, one walks a route and goes to people.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
          { icon: "history", title: "Its own memory", text: "Each bot keeps its own memory of the people it meets.", more: { label: "Bot memory", href: "/features/bot-memory" } },
          { icon: "build", title: "Its own tools", text: "Give each bot only the tools it needs, with its own rules for when to ask first.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "shield_person", title: "Its own audience", text: "Open one bot to every visitor and keep another for your team." },
          { icon: "pan_tool", title: "You stay in charge", text: "A bot never adds another bot on its own. Every bot in a room was put there by someone who can edit that room." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>When two bots stand in the same conversation, they answer in text for now. Voice comes back when one of them leaves.</>,
          <>Bots load when their room opens. If one fails to start, the others still do.</>,
        ]}
        facts={[
          ["Bots in a room", "As many as you add"],
          ["Model, memory, tools", "Separate for each bot"],
          ["Who adds bots", "People who can edit the room"],
        ]}
        links={[{ label: "Bot editor", href: "/features/bot-editor" }, { label: "Map scripting", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
          { label: "Bot provider config", href: "/features/bot-provider-config", note: "A different brain for every job." },
          { label: "Bot behaviors", href: "/features/bot-behaviors", note: "How a bot moves around." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
        ]}
      />

      <PageClosing
        title={<>Ready to build your team?</>}
        body={<>Start with one bot, then add the next. Each one takes a minute.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_recursive_bots"
      />
    </div>
  )
}
