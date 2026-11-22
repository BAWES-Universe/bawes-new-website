import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function BotMemoryPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Memory"
        title={<>Bots that <span className="text-gradient-accent">remember</span></>}
        lead={<>Your bot remembers earlier chats, what people told it, and how they got along, so nobody has to repeat themselves.</>}
        detail={[<>Persistent conversation memory for your bot. It remembers past interactions, preferences and important context across sessions.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_memory"
      />

      <PartCards
        eyebrow="What it remembers"
        title="A memory for each person"
        cards={[
          { icon: "history", title: "Your recent chats", text: "The bot keeps the latest part of your conversation, so it can pick up where you left off." },
          { icon: "person", title: "Things you told it", text: "Your name, what you like, your birthday, small facts you mentioned along the way." },
          { icon: "favorite", title: "How you get along", text: "When you first met, how often you talk, and how it feels about you.", more: { label: "Bot emotions", href: "/features/bot-emotions" } },
        ]}
      />

      <PartCards
        eyebrow="Good to know"
        title="You stay in charge of it"
        cards={[
          { icon: "toggle_on", title: "Always on", text: "Bots always save their chats and remember people. There is nothing to switch on." },
          { icon: "person_remove", title: "Forget one person", text: "The owner of a bot can make it forget everything about one person: their name, facts and feelings." },
          { icon: "delete_sweep", title: "Forget everyone", text: "One button wipes what the bot remembers about everybody. It cannot be undone." },
          { icon: "lock", title: "Kept private", text: "What a bot remembers about a person is never shown on a page." },
        ]}
      />

      <PartBuilders
        title="Where the memory lives"
        body={[
          <>Each bot keeps its own memory, apart from every other bot. It is saved through Orbit, so it is still there after a restart or a new visit.</>,
          <>A person is recognised again on their next visit, so the bot carries on from last time.</>,
        ]}
        facts={[
          ["Kept", "For each bot and each person"],
          ["Saved in", "Orbit"],
          ["Survives", "Restarts and new visits"],
          ["Forget", "One person or everyone"],
        ]}
        links={[{ label: "Bot emotions", href: "/features/bot-emotions" }, { label: "Bot editor", href: "/features/bot-editor" }]}
      />

      <PartRelated
        links={[
          { label: "Bot emotions", href: "/features/bot-emotions", note: "How a bot feels about you." },
          { label: "Bot greetings", href: "/features/bot-greetings", note: "How a bot says hello." },
          { label: "Bot file parsing", href: "/features/bot-file-parsing", note: "Bots that read your files." },
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
        ]}
      />

      <PageClosing
        title={<>Ready for a bot that remembers?</>}
        body={<>Memory is always on. Make a bot and it starts remembering.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_memory"
      />
    </div>
  )
}
