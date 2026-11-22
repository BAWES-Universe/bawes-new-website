import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function BotBehaviorsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Behaviors"
        title={<>Bot behaviors: <span className="text-gradient-accent">AI that moves through your space</span></>}
        lead={<>Bots do not just stand and wait. They can wander, walk a route, come over to say hello, show people the way, and come when called.</>}
        detail={[<>You choose how each bot gets around and how it acts with people. That makes bots active participants in your universe.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_behaviors"
      />

      <PartCards
        eyebrow="Gets around"
        title="Pick how your bot moves"
        cards={[
          { icon: "push_pin", title: "Stays put", text: "The bot keeps its spot. You choose which way it faces when nobody is around." },
          { icon: "directions_walk", title: "Wanders", text: "The bot strolls around inside a circle you draw, small or wide." },
          { icon: "route", title: "Walks a route", text: "Place the stops on the map and set how long it pauses at each one. A patrol, a tour, a round of the office." },
        ]}
      />

      <PartCards
        eyebrow="With people"
        title="What it does when someone shows up"
        cards={[
          { icon: "waving_hand", title: "Goes to people it notices", text: "Draw a soft ring on the map. When someone walks into it, the bot comes over, says hello, then goes back to its spot or its route." },
          { icon: "hourglass_empty", title: "Or waits for people", text: "A bot can also stay where it is and let people walk up to it." },
          { icon: "explore", title: "Shows the way", text: "Ask a bot to take you to a place or a person. It says Follow me and walks you there. When it brings you to someone, it introduces you." },
          { icon: "notifications_active", title: "Comes when called", text: "Summon a bot and it walks to you, anywhere in its room. The owner chooses who may summon it." },
        ]}
      />

      <PartBuilders
        title="Set on the map, no code"
        body={[
          <>Movement and people settings live in the map editor, under Bots. The circle, the route and the ring are drawn right on the map.</>,
          <>A summoned bot only moves inside its own room, and it tells you when it is busy with someone else.</>,
        ]}
        facts={[
          ["Moves", "Stays put, wanders, walks a route"],
          ["People", "Goes to them, or waits"],
          ["Summon", "Inside its own room"],
          ["Set in", "Map editor, Bots"],
        ]}
        links={[{ label: "Map editor", href: "/features/map-editor" }, { label: "Map scripting", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
          { label: "Follow", href: "/features/follow", note: "People can lead a group too." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Bot greetings", href: "/features/bot-greetings", note: "How a bot says hello." },
        ]}
      />

      <PageClosing
        title={<>Ready to bring AI into your space?</>}
        body={<>Add a bot in the map editor and choose how it moves.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_behaviors"
      />
    </div>
  )
}
