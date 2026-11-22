import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BotGreetingsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Greetings"
        title={<>First <span className="text-gradient-accent">impressions</span> matter</>}
        lead={<>A bot says hello when you meet. It can even walk over to you first, and it greets someone it knows differently from a stranger.</>}
        detail={[<>Greeting messages come from the personality you write for the bot. Make your bots welcoming, helpful, or delightfully mysterious.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_greetings"
      />

      <PartSteps
        eyebrow="How it works"
        title="Hello, in its own words"
        steps={[
          { title: "Someone comes close", text: "A person walks up to the bot, or steps inside the ring where it notices people." },
          { title: "The bot opens", text: "If it walked over itself, it starts by saying why it came." },
          { title: "The chat goes on", text: "Answer and you are talking. Walk away and the bot goes back to what it was doing." },
        ]}
      />

      <PartCards
        eyebrow="What shapes a greeting"
        title="You set the tone, the bot finds the words"
        cards={[
          { icon: "edit_note", title: "Personality", text: "Write who the bot is and how it talks. A shopkeeper, a guide, a riddle in a cloak. Every hello follows from that." },
          { icon: "waving_hand", title: "Who goes first", text: "Choose whether the bot goes to people it notices or waits for them to come to it.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
          { icon: "history", title: "It knows you", text: "A bot remembers people, so the second hello is not the same as the first.", more: { label: "Bot memory", href: "/features/bot-memory" } },
          { icon: "record_voice_over", title: "Out loud", text: "Give the bot a voice and it greets people out loud.", more: { label: "Talking to residents out loud", href: "/guide/talking-out-loud" } },
        ]}
      />

      <PartBuilders
        title="Written fresh every time"
        body={[
          <>There is no fixed greeting text to fill in. The AI model writes each hello from the personality, from where the bot stands and from what it remembers about the person.</>,
        ]}
        facts={[
          ["Written by", "The AI model, each time"],
          ["Shaped by", "Personality"],
          ["Starts when", "Someone comes close"],
        ]}
        links={[{ label: "Bot editor", href: "/features/bot-editor" }]}
      />

      <PartRelated
        links={[
          { label: "Bot behaviors", href: "/features/bot-behaviors", note: "How a bot moves around." },
          { label: "Bot emotions", href: "/features/bot-emotions", note: "How a bot feels about you." },
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
        ]}
      />

      <PageClosing
        title={<>Ready to create a greeting?</>}
        body={<>Write a personality for your bot and let it say hello in its own words.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_greetings"
      />
    </div>
  )
}
