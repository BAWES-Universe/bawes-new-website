import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BotEmotionsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Emotions"
        title={<>Bots have <span className="text-gradient-accent">feelings</span> too</>}
        lead={<>A bot keeps a feeling about each person it talks to. Be kind and it warms to you. Be rude and it remembers that too.</>}
        detail={[<>Emotional states change how a bot responds to you. They grow out of your conversations, one person at a time.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_emotions"
      />

      <PartSteps
        eyebrow="How it works"
        title="Feelings that come from the conversation"
        steps={[
          { title: "You talk", text: "The bot reads the mood of what you say, along with the words." },
          { title: "It feels something", text: "How happy it is with you, how much it trusts you and how well it knows you all move a little." },
          { title: "It answers that way", text: "The next reply carries that feeling, and so does the next visit." },
        ]}
      />

      <PartCards
        eyebrow="What a bot feels"
        title="Four feelings, kept for each person"
        cards={[
          { icon: "sentiment_satisfied", title: "Happiness", text: "A good chat lifts it. The bot gets warmer and more playful with you." },
          { icon: "handshake", title: "Trust", text: "Trust goes up when your chats go well and down when they do not." },
          { icon: "diversity_1", title: "Familiarity", text: "The more you talk, the more it treats you like someone it knows." },
          { icon: "mood_bad", title: "Anger", text: "Insults leave a mark, and a bot does not forget them quickly." },
        ]}
      />

      <PartBuilders
        title="Not a setting, a memory"
        body={[
          <>You do not pick a mood from a list. Who the bot is comes from its Personality, and how it feels about each person comes from their own history together.</>,
          <>Feelings are saved with the rest of what the bot remembers about a person. The owner of the bot can make it forget one person or everyone.</>,
        ]}
        facts={[
          ["Kept", "For each person"],
          ["Changes", "With every reply"],
          ["Saved", "Right away"],
          ["Reset", "Forget, in Orbit"],
        ]}
        links={[{ label: "Bot memory", href: "/features/bot-memory" }]}
      />

      <PartRelated
        links={[
          { label: "Bot memory", href: "/features/bot-memory", note: "What a bot remembers about you." },
          { label: "Bot greetings", href: "/features/bot-greetings", note: "How a bot says hello." },
          { label: "Bot editor", href: "/features/bot-editor", note: "Write a personality for your bot." },
          { label: "Talking to residents out loud", href: "/guide/talking-out-loud", note: "Say its name and talk." },
        ]}
      />

      <PageClosing
        title={<>Ready to meet a bot with feelings?</>}
        body={<>Walk up to one, say something nice, and see what happens next time.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_emotions"
      />
    </div>
  )
}
