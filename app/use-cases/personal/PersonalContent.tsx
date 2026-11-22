import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated } from '@/components/page/PageParts'

export default function UseCasePersonalPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="Personal"
        title={<>A universe that is <span className="text-gradient-accent">yours</span></>}
        lead={<>Make a place of your own: AI companions, a tidy spot to work, and a door your friends can always walk through.</>}
        detail={[<>Build your own digital sanctuary. Custom AI companions, rooms you design yourself, and a place where friends are always welcome to drop in.</>]}
        scene="chat"
        actions={[{ label: 'Meet the bots', href: '/ai-bots' }]}
        source="page_use_cases_personal"
      />

      <PartCards
        eyebrow="Your universe, your rules"
        title="Three things that make it yours"
        cards={[
          { icon: "smart_toy", title: "AI companions", text: "Make bots that live in your rooms. They know your name, remember your chats and say hello when you walk in.", more: { label: "Meet the bots", href: "/ai-bots" } },
          { icon: "home", title: "Your space", text: "Design rooms the way you want: a cosy hangout, a tidy desk, a lab for experiments. The map editor changes everything live, in your browser.", more: { label: "Map editor", href: "/features/map-editor" } },
          { icon: "group", title: "Friends welcome", text: "Send a link and friends walk in. Stand next to each other and you are talking.", more: { label: "Proximity chat", href: "/features/proximity-chat" } },
        ]}
      />

      <PartCards
        eyebrow="Why build a personal universe?"
        title="A place that is yours feels different"
        cards={[
          { icon: "history", title: "Bots remember you", text: "Earlier chats, your name, what you like. A bot gets to know you over time.", more: { label: "Bot memory", href: "/features/bot-memory" } },
          { icon: "favorite", title: "Bots with feelings", text: "Be kind to a bot and it warms to you. It keeps a feeling about every person it meets.", more: { label: "Bot emotions", href: "/features/bot-emotions" } },
          { icon: "waving_hand", title: "A hello at the door", text: "A bot can walk over when it notices you and greet you in its own words.", more: { label: "Bot greetings", href: "/features/bot-greetings" } },
          { icon: "lock", title: "You choose who enters", text: "Keep your universe public or private, and limit an area to the roles you pick." },
          { icon: "build", title: "Connect your tools", text: "Give a bot tools and it can look things up and get things done in the apps you use. It can ask you first before it changes anything.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "trending_up", title: "Grows with you", text: "Start with one room and one bot. Add rooms, worlds and friends as your ideas grow." },
        ]}
      />

      <PartRelated
        links={[
          { label: "AI bots", href: "/ai-bots", note: "Everything bots can do." },
          { label: "Map editor", href: "/features/map-editor", note: "Build and change rooms in the browser." },
          { label: "Start here", href: "/guide/start-here", note: "Your first five minutes, in the Guide." },
          { label: "Orbit, step by step", href: "/guide/orbit", note: "Make your universe, worlds and rooms." },
        ]}
      />

      <PageClosing
        title={<>Your universe is waiting.</>}
        body={<>Walk in, look around, and start with one room.</>}
        links={[{ label: 'Meet the bots', href: '/ai-bots' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_personal"
      />
    </main>
  );
}
