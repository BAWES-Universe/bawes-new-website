import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function MatrixChatPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Matrix Chat"
        title={<>Chat that <span className="text-gradient-accent">persists</span></>}
        lead={<>Your conversations are still there when you come back, and they follow you from room to room.</>}
        detail={[<>Matrix integration for persistent chat history. Conversations survive between visits and stay with you across rooms.</>]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_matrix_chat"
      />

      <PartCards
        eyebrow="What it gives you"
        title="Chat that remembers"
        cards={[
          { icon: "history", title: "Kept between visits", text: "Messages are still there when you come back. Pick up where you left off." },
          { icon: "sync_alt", title: "It follows you", text: "Your direct messages and groups stay with you as you move from room to room." },
          { icon: "forum", title: "A chat for a place", text: "Give an area of your map its own chat room.", more: { label: "Area zones", href: "/features/area-zones" } },
        ]}
      />

      <PartBuilders
        title="Built on an open standard"
        body={[
          <>Persistent chat runs on Matrix, an open standard for messaging. Universe ships with Synapse, the Matrix server, so when you host Universe yourself the chat history lives on your own server.</>,
        ]}
        facts={[
          ["Standard", "Matrix"],
          ["Server", "Synapse"],
          ["Hosting", "Ours or your own"],
        ]}
        links={[{ label: "Self-hosting", href: "/features/self-hosting" }, { label: "Technology stack", href: "/features/tech-stack" }]}
      />

      <PartRelated
        links={[
          { label: "Text chat", href: "/features/text-chat", note: "Type to the people near you." },
          { label: "Chats", href: "/guide/chats", note: "The step-by-step page, in the Guide." },
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run it on your own servers." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
        ]}
      />

      <PageClosing
        title={<>Ready to pick up where you left off?</>}
        body={<>Sign in, and your conversations are there when you come back.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_matrix_chat"
      />
    </div>
  )
}
