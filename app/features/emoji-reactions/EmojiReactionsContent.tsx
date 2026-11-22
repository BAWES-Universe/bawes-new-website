import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function EmojiReactionsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Emoji Reactions"
        title={<>React without <span className="text-gradient-accent">words</span></>}
        lead={<>Pop a quick emoji over your avatar to laugh, cheer or wave without cutting in.</>}
        detail={[
          <>Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.</>,
        ]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_emoji_reactions"
      />

      <PartSteps
        eyebrow="How it works"
        title="Two taps"
        steps={[
          { title: "Open Express yourself", text: "It is in the bar at the bottom of the screen." },
          { title: "Tap an emote", text: "Or pick one of your quick phrases." },
          { title: "It plays over your avatar", text: "The people around you see it right away." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="More than a thumbs up"
        cards={[
          { icon: "mood", title: "Play an emote", text: "Laugh, cheer or wave without cutting in on the person talking." },
          { icon: "chat_bubble", title: "Say something", text: "A short line above your head. Everyone who can see you reads it for a few seconds." },
          { icon: "cloud", title: "Think something", text: "A thought bubble that stays above you until you move." },
          { icon: "bolt", title: "Quick phrases", text: "Keep the lines you use most one tap away, and change them whenever you like." },
          { icon: "edit", title: "Make the set your own", text: "Swap any emote in your set for another one." },
          { icon: "person", title: "Guests too", text: "You can react without an account." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Text chat", href: "/features/text-chat", note: "Type to the people near you." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Availability status", href: "/features/availability-status", note: "Show when you are busy." },
          { label: "Avatars", href: "/features/woka-avatars", note: "Pick how you look." },
        ]}
      />

      <PageClosing
        title={<>Ready to express yourself?</>}
        body={<>Walk in and wave.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_emoji_reactions"
      />
    </div>
  )
}
