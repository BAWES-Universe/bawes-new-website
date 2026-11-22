import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function ScreenSharingPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Screen Sharing"
        title={<>Share your screen. <span className="text-gradient-accent">Stay in the room.</span></>}
        lead={<>Show your screen to the people you are talking with at the press of a button. No other app, no link.</>}
        detail={[<>Share your screen with everyone in your conversation. No separate app and no link to click, just a button.</>]}
        scene="room"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_screen_sharing"
      />

      <PartSteps
        eyebrow="How it works"
        title="One button, in the bar at the bottom"
        steps={[
          { title: "Start talking", text: "Walk up to someone, or step into a meeting room." },
          { title: "Press Start screen sharing", text: "Pick a window, a tab or your whole screen." },
          { title: "Press Stop when you are done", text: "The conversation carries on as before." },
        ]}
      />

      <PartCards
        eyebrow="Where it works"
        title="Wherever you are already talking"
        cards={[
          { icon: "groups", title: "In a conversation", text: "Everyone standing with you sees your screen. Standing together is the invitation.", more: { label: "Proximity chat", href: "/features/proximity-chat" } },
          { icon: "meeting_room", title: "In a meeting room", text: "Everyone inside the room sees it. Walk in and you are part of it.", more: { label: "Meeting rooms", href: "/features/meeting-rooms" } },
          { icon: "podcasts", title: "Live to a whole room", text: "Go live with your screen in a broadcast, and everyone you chose sees it until you press End.", more: { label: "Broadcasting", href: "/features/broadcasting" } },
        ]}
      />

      <PartBuilders
        title="It travels with the call"
        body={[
          <>Your screen is carried the same way as voice and video: browser to browser over WebRTC in a small conversation, and through LiveKit when the group grows.</>,
        ]}
        facts={[
          ["Carried by", "WebRTC"],
          ["Larger groups", "LiveKit"],
          ["Extra app", "None"],
        ]}
        links={[{ label: "Technology stack", href: "/features/tech-stack" }, { label: "Self-hosting", href: "/features/self-hosting" }]}
      />

      <PartRelated
        links={[
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Lock", href: "/features/lock-discuss", note: "Keep a conversation private." },
          { label: "Meeting rooms", href: "/features/meeting-rooms", note: "A room for a proper sit-down." },
          { label: "Follow", href: "/features/follow", note: "Keep a group together on a tour." },
        ]}
      />

      <PageClosing
        title={<>Ready to show your work?</>}
        body={<>Walk up to someone and share your screen with the people standing with you.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_screen_sharing"
      />
    </div>
  )
}
