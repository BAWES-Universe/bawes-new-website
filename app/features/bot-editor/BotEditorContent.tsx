import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BotEditorPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Editor"
        title={<>Build a bot. <span className="text-gradient-accent">No code.</span></>}
        lead={<>Set up everything about your bot in one place: how it acts, how it talks, how it looks and who can use it.</>}
        detail={[<>A visual editor for the whole bot. Behavior, personality, voice, tools and appearance sit side by side, inside the map editor.</>]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_editor"
      />

      <PartSteps
        eyebrow="How it works"
        title="A new bot in a minute"
        steps={[
          { title: "Open Bots", text: "In the map editor, pick Bots. It lists the helpers that live in this room." },
          { title: "Press New bot", text: "Give it a name and pick its avatar." },
          { title: "Shape it", text: "Open any part of the bot and change it. Universe AI is ready to use, so there is no key to set up first." },
        ]}
      />

      <PartCards
        eyebrow="What you can set"
        title="One bot, every part of it"
        cards={[
          { icon: "psychology", title: "Personality", text: "Write who the bot is and how it should talk.", more: { label: "Bot greetings", href: "/features/bot-greetings" } },
          { icon: "memory", title: "Mind", text: "Run it on Universe AI or on your own AI key, and pick the model.", more: { label: "Bot provider config", href: "/features/bot-provider-config" } },
          { icon: "record_voice_over", title: "Voice", text: "Give it a voice. Search by name or language and hear a sample first.", more: { label: "Talking to residents out loud", href: "/guide/talking-out-loud" } },
          { icon: "directions_walk", title: "Moves and people", text: "Stay put, wander or walk a route. Go to people or wait for them.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
          { icon: "build", title: "Tools", text: "Connect tools and choose which ones it uses right away, asks about first, or never uses.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "shield_person", title: "Permissions", text: "Open it to everyone who can enter the room, guests too, or keep it to the roles and people you pick." },
          { icon: "face", title: "Looks", text: "Its avatar, its companion, its name and what it is for.", more: { label: "Bot avatars", href: "/features/bot-avatars" } },
          { icon: "monitoring", title: "Usage", text: "See how much it is used and what it ran on. You see who chatted, how much and when. Never what they said." },
        ]}
      />

      <PartBuilders
        title="It lives in the room"
        body={[
          <>A bot belongs to one room and is edited where it stands, in the map editor. Its route and the area it wanders are drawn on the map.</>,
          <>Turn a bot off and nobody sees it until you turn it back on. Nothing is lost.</>,
        ]}
        facts={[
          ["Where", "Map editor, Bots"],
          ["Code needed", "None"],
          ["Works out of the box", "With Universe AI"],
        ]}
        links={[{ label: "Map editor", href: "/features/map-editor" }, { label: "Universe AI and your own keys", href: "/guide/universe-ai" }]}
      />

      <PartRelated
        links={[
          { label: "Bot behaviors", href: "/features/bot-behaviors", note: "How a bot moves around." },
          { label: "Bot tool calling", href: "/features/bot-tools", note: "Bots that get things done." },
          { label: "Bot memory", href: "/features/bot-memory", note: "What a bot remembers." },
          { label: "Map editor", href: "/features/map-editor", note: "Where bots are made." },
        ]}
      />

      <PageClosing
        title={<>Ready to build your first bot?</>}
        body={<>Open the map editor, go to Bots and press New bot. No code needed.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_editor"
      />
    </div>
  )
}
