import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BotAvatarsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Avatars"
        title={<>Give your bot <span className="text-gradient-accent">a face</span></>}
        lead={<>Pick how each AI bot looks, so it feels like someone who lives in your room and not a chat box.</>}
        detail={[<>A bot wears an avatar like everyone else. Pick it when you make the bot, and change it whenever you like.</>]}
        scene="looks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_avatars"
      />

      <PartSteps
        eyebrow="How it works"
        title="A look in three taps"
        steps={[
          { title: "Make a bot", text: "In the map editor, open Bots and press New bot. Give it a name." },
          { title: "Pick its avatar", text: "Choose the avatar it wears. People see it on the map with its name above its head." },
          { title: "Change it any time", text: "Open the bot, go to Looks and press Change." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Make it one of the locals"
        cards={[
          { icon: "face", title: "A body like yours", text: "Bots use the same avatars as people. They walk, turn and stand in a conversation like anyone else.", more: { label: "Pixel art avatars", href: "/features/woka-avatars" } },
          { icon: "pets", title: "A companion", text: "Give your bot a little companion from the list your room offers." },
          { icon: "badge", title: "A name and a purpose", text: "Name your bot and write what it is for, so people know who they are talking to." },
          { icon: "visibility_off", title: "Off for now", text: "Turn a bot off and nobody sees it until you turn it back on." },
        ]}
      />

      <PartBuilders
        title="Where the avatars come from"
        body={[
          <>A bot picks from the same avatars the people in your Universe can wear, so it looks like it belongs there.</>,
        ]}
        facts={[
          ["Avatars", "The same ones people wear"],
          ["Companions", "From the room list"],
          ["Set in", "Map editor, Bots"],
        ]}
        links={[{ label: "Avatar platform", href: "/features/avatar-platform" }, { label: "Bot editor", href: "/features/bot-editor" }]}
      />

      <PartRelated
        links={[
          { label: "Bot editor", href: "/features/bot-editor", note: "Everything about a bot on one screen." },
          { label: "Bot behaviors", href: "/features/bot-behaviors", note: "How a bot moves around." },
          { label: "Pixel art avatars", href: "/features/woka-avatars", note: "The avatars people and bots wear." },
          { label: "Avatar platform", href: "/features/avatar-platform", note: "Where avatars are managed." },
        ]}
      />

      <PageClosing
        title={<>Ready to give your bot a face?</>}
        body={<>Make a bot, pick its avatar, and watch it walk into the room.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_avatars"
      />
    </div>
  )
}
