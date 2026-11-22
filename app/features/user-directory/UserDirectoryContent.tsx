import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated } from '@/components/page/PageParts'

export default function UserDirectoryPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="User Directory"
        title={<>See who is around. <span className="text-gradient-accent">Find anyone.</span></>}
        lead={<>See who is here, open their card, send a message, or walk up to them in one click.</>}
        detail={[<>Browse users, see their status, and locate them on the map. Know who is around in real time.</>]}
        scene="fire"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_user_directory"
      />

      <PartCards
        eyebrow="What you can do"
        title="Everyone, one list"
        cards={[
          { icon: "groups", title: "See who is here", text: "Open the people list for everyone in the room. It works for guests too." },
          { icon: "badge", title: "Open their card", text: "A visit card shows what the person chose to share about themselves." },
          { icon: "mail", title: "Send a message", text: "Start a chat right from the list.", more: { label: "Text chat", href: "/features/text-chat" } },
          { icon: "directions_walk", title: "Walk up to them", text: "One click and your avatar goes to where they are." },
          { icon: "circle", title: "See their status", text: "Online, busy, away or do not disturb, at a glance.", more: { label: "Availability status", href: "/features/availability-status" } },
          { icon: "person_add", title: "Add a friend", text: "Friends can see where each other are in Universe, and go there in one tap.", more: { label: "Chats, in the Guide", href: "/guide/chats" } },
        ]}
      />

      <PartRelated
        links={[
          { label: "Availability status", href: "/features/availability-status", note: "Show when you are busy." },
          { label: "Text chat", href: "/features/text-chat", note: "Type to the people near you." },
          { label: "Follow", href: "/features/follow", note: "Keep a group together." },
          { label: "Orbit", href: "/guide/orbit", note: "Discover people and places." },
        ]}
      />

      <PageClosing
        title={<>Ready to find your team?</>}
        body={<>Open the people list and walk up to someone.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_user_directory"
      />
    </div>
  )
}
