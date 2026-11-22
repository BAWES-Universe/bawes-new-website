import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function LockDiscussPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Lock & Discuss"
        title={<>Lock in. <span className="text-gradient-accent">Focus up.</span></>}
        lead={<>Lock your conversation so nobody else can join. A private talk, even in a busy room.</>}
        detail={[
          <>Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.</>,
        ]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_lock_discuss"
      />

      <PartSteps
        eyebrow="How it works"
        title="One press to lock, one to open"
        steps={[
          { title: "Start talking", text: "Walk up to someone and the conversation opens." },
          { title: "Press Lock", text: "Nobody else can join. Only the people already there stay in." },
          { title: "Press Unlock", text: "When you are ready, others can walk up again." },
        ]}
      />

      <PartCards
        eyebrow="When it helps"
        title="Privacy without leaving the room"
        cards={[
          { icon: "forum", title: "A private word", text: "Have a one-to-one in the middle of a busy room, with no walk-ins." },
          { icon: "target", title: "Finish the thought", text: "Keep a small group focused until the work is done." },
          { icon: "location_on", title: "Stay where you are", text: "There is no room to find and no link to send. You lock the conversation you are already in." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Meeting rooms", href: "/features/meeting-rooms", note: "A room for a proper sit-down." },
          { label: "Availability status", href: "/features/availability-status", note: "Show when you are busy." },
          { label: "Screen sharing", href: "/features/screen-sharing", note: "Show your screen to the group." },
        ]}
      />

      <PageClosing
        title={<>Ready for a private word?</>}
        body={<>One press locks it, one press opens it again.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_lock_discuss"
      />
    </div>
  )
}
