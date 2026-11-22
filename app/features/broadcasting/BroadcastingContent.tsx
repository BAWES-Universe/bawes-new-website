import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BroadcastingPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Broadcasting"
        title={<>Broadcast to <span className="text-gradient-accent">everywhere</span></>}
        lead={<>Reach everyone at once. Send a message, a voice note, or go live with your camera, microphone or screen.</>}
        detail={[<>Broadcast to one place or across the entire universe. Go live with audio and video for summits, concerts, and all-hands.</>]}
        scene="stage"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_broadcasting"
      />

      <PartSteps
        eyebrow="How it works"
        title="Two choices, then send"
        steps={[
          { title: "Choose what to share", text: "A written message, a voice note, or yourself, live." },
          { title: "Choose who gets it", text: "The place you are in, or everywhere in the universe. You only see the reach you are allowed to use." },
          { title: "Send, or go live", text: "When you are live, everyone you chose sees and hears you until you press End." },
        ]}
      />

      <PartCards
        eyebrow="What you can send"
        title="Three ways to be heard"
        cards={[
          { icon: "edit_note", title: "A written message", text: "A card everyone sees, and can read when they like." },
          { icon: "mic", title: "A voice note", text: "Record yourself on the spot, or use a sound file you already have. Listen to it before you send." },
          { icon: "podcasts", title: "Go live", text: "Talk live with your camera, your microphone or your screen.", more: { label: "Screen sharing", href: "/features/screen-sharing" } },
        ]}
      />

      <PartCards
        eyebrow="Who decides"
        title="Loud, but not a free-for-all"
        cards={[
          { icon: "admin_panel_settings", title: "Admins switch it on", text: "Broadcasting is turned on for a room in its broadcast settings, by a room admin." },
          { icon: "tune", title: "Reach is a permission", text: "Each person only sees the reach they are allowed to use." },
          { icon: "stop_circle", title: "One button to end", text: "A live broadcast runs until you press End." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Megaphone", href: "/features/megaphone", note: "A stage and an audience." },
          { label: "Meeting rooms", href: "/features/meeting-rooms", note: "Everyone inside talks together." },
          { label: "For events", href: "/use-cases/events", note: "Talks, meetups and shows." },
          { label: "For community", href: "/use-cases/community", note: "Keep everyone in the loop." },
        ]}
      />

      <PageClosing
        title={<>Ready to reach everyone?</>}
        body={<>Pick what to share, pick who gets it, and send.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_broadcasting"
      />
    </div>
  )
}
