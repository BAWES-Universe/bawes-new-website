import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function TextChatPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Text Chat"
        title={<>Chat that lives in the <span className="text-gradient-accent">world</span></>}
        lead={<>Type to the people next to you, message anyone directly, or pop a line over your avatar.</>}
        detail={[<>Text chat that lives in the world: a chat for the people standing together, direct messages and groups, and speech bubbles above avatars.</>]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_text_chat"
      />

      <PartCards
        eyebrow="What you can do"
        title="Three ways to type"
        cards={[
          { icon: "groups", title: "Nearby chat", text: "Walk up to someone and a chat for the people standing together opens on its own. It works for guests too." },
          { icon: "mail", title: "Direct messages and groups", text: "With an account, message anyone from anywhere, start groups and keep every conversation." },
          { icon: "chat_bubble", title: "A line over your head", text: "Say something and everyone who can see you reads it above your avatar for a few seconds. Or think it, and it stays until you move.", more: { label: "Reactions", href: "/features/emoji-reactions" } },
        ]}
      />

      <PartCards
        eyebrow="In a chat"
        title="More than words"
        cards={[
          { icon: "mic", title: "Voice notes", text: "Hold to record and let go to send." },
          { icon: "gif_box", title: "Photos, GIFs and files", text: "Send them, then find them again under Details, sorted into Media, Links and Files." },
          { icon: "push_pin", title: "Pinned messages", text: "Keep the important ones at hand." },
          { icon: "smart_toy", title: "Residents answer here", text: "AI residents reply in the same chat, and what they make for you shows up as a card.", more: { label: "Artifacts, in the Guide", href: "/guide/artifacts" } },
          { icon: "person_pin_circle", title: "See where people are", text: "A direct chat shows if the other person is here, in another room, online or offline." },
          { icon: "block", title: "Block and report", text: "You can block a person or report them from the chat." },
        ]}
      />

      <PartBuilders
        title="Chat that outlives the room"
        body={[
          <>Direct messages and groups run on Matrix, an open standard for chat, so conversations are kept and follow you between rooms.</>,
        ]}
        facts={[
          ["Direct messages and groups", "Matrix"],
          ["Nearby chat", "For the people standing together"],
          ["Speech bubbles", "Above the avatar"],
        ]}
        links={[{ label: "Matrix chat", href: "/features/matrix-chat" }, { label: "Technology stack", href: "/features/tech-stack" }]}
      />

      <PartRelated
        links={[
          { label: "Chats", href: "/guide/chats", note: "The step-by-step page, in the Guide." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Reactions", href: "/features/emoji-reactions", note: "Say it with an emote." },
          { label: "User directory", href: "/features/user-directory", note: "See who is here." },
        ]}
      />

      <PageClosing
        title={<>Ready to join the conversation?</>}
        body={<>Walk in and say hello.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_text_chat"
      />
    </div>
  )
}
