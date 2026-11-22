import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated } from '@/components/page/PageParts'

export default function AvailabilityStatusPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Availability Status"
        title={<>Let people know <span className="text-gradient-accent">when you are busy</span></>}
        lead={<>Set yourself to busy or do not disturb, so nobody walks up at the wrong moment.</>}
        detail={[<>Set your status: Online, Away, Back in a moment, Busy, or Do not disturb, so everyone knows when you are available.</>]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_availability_status"
      />

      <PartCards
        eyebrow="Your status"
        title="Five ways to say where you are at"
        cards={[
          { icon: "check_circle", title: "Online", text: "You are here and happy to talk." },
          { icon: "do_not_disturb_on", title: "Busy", text: "You are focusing. Universe stays quiet, and it can still tell your device when someone messages you." },
          { icon: "notifications_off", title: "Do not disturb", text: "For when you really should not be interrupted." },
          { icon: "schedule", title: "Back in a moment", text: "You stepped away and will be right back." },
          { icon: "bedtime", title: "Away", text: "Universe switches to away on its own while its tab is not in front of you." },
          { icon: "videocam_off", title: "Camera and microphone when away", text: "You choose if they stay on or turn off when you switch to another tab." },
        ]}
      />

      <PartCards
        eyebrow="Good to know"
        title="Small things that follow from it"
        cards={[
          { icon: "cloud", title: "Lines become thoughts", text: "While you are away or busy, a line you pop over your avatar shows as a thought." },
          { icon: "undo", title: "Coming back is one tap", text: "Universe asks if you want to go back online." },
          { icon: "notifications", title: "Notifications", text: "Get told when someone wants to talk to you, even when the tab is in the background.", more: { label: "Universe on your phone", href: "/guide/on-your-phone" } },
        ]}
      />

      <PartRelated
        links={[
          { label: "Lock", href: "/features/lock-discuss", note: "Keep a conversation private." },
          { label: "User directory", href: "/features/user-directory", note: "See who is here." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Reactions", href: "/features/emoji-reactions", note: "Say it with an emote." },
        ]}
      />

      <PageClosing
        title={<>Ready to set your status?</>}
        body={<>Let people know when you are free to talk.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_availability_status"
      />
    </div>
  )
}
