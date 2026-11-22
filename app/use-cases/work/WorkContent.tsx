import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function UseCaseWorkPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="For Work"
        title={<>Work that moves. <span className="text-gradient-accent">Not meetings that stall.</span></>}
        lead={<>Replace the endless Slack threads and Zoom links with a spatial office. Walk into a room, see who&apos;s there, and start working.</>}
        scene="room"
        actions={[{ label: 'Build your workspace', href: '/contact' }, { label: 'How it works', href: '/how-it-works' }]}
        source="page_use_cases_work"
      />

      <PartSteps
        eyebrow="How it works"
        title="An office you walk through"
        steps={[
          { title: "Walk in", text: "Enter the room of your team and see who is there." },
          { title: "Connect", text: "Walk up to a teammate and you are talking. No scheduling and no links." },
          { title: "Focus", text: "Need quiet? Step into a quiet zone or set your status to Do not disturb." },
        ]}
      />

      <PartCards
        eyebrow="Key features for work"
        title="Less friction, more talking to each other"
        cards={[
          { icon: "meeting_room", title: "Meeting rooms", text: "Rooms where everyone inside talks together. Walk in and you are part of the meeting.", more: { label: "Meeting rooms", href: "/features/meeting-rooms" } },
          { icon: "do_not_disturb_on", title: "Quiet zones", text: "Areas where no one can talk, for deep work without leaving the office.", more: { label: "Area zones", href: "/features/area-zones" } },
          { icon: "lock", title: "Private talks", text: "Lock a conversation or a room so nobody else can join. Good for a client call or a one to one.", more: { label: "Lock", href: "/features/lock-discuss" } },
          { icon: "desk", title: "Your own desk", text: "Claim a personal desk, so people know where to find you." },
          { icon: "present_to_all", title: "Screen sharing", text: "Show your screen to the people standing with you.", more: { label: "Screen sharing", href: "/features/screen-sharing" } },
          { icon: "circle", title: "Status", text: "Online, Away, Back in a moment, Busy or Do not disturb. People see it before they walk over.", more: { label: "Availability status", href: "/features/availability-status" } },
          { icon: "smart_toy", title: "AI at the front desk", text: "A bot can welcome visitors, answer questions and show them the way.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
          { icon: "chat", title: "Chat that stays", text: "Direct messages and chat rooms keep their history between visits.", more: { label: "Matrix chat", href: "/features/matrix-chat" } },
        ]}
      />

      <PartCards
        eyebrow="Who it is for"
        title="Teams that do not share a building"
        cards={[
          { icon: "public", title: "Remote-first teams", text: "Your whole company in one office. No more asking people to hop on a call. Just walk over.", more: { label: "Proximity chat", href: "/features/proximity-chat" } },
          { icon: "handshake", title: "Client-facing teams", text: "Bring clients into a room for demos, walkthroughs and support. Host Universe yourself and it carries your brand.", more: { label: "White label", href: "/features/white-label" } },
          { icon: "diversity_3", title: "Co-working spaces", text: "Open studios where freelancers, startups and creators work side by side.", more: { label: "How it works", href: "/how-it-works" } },
        ]}
      />

      <PartRelated
        links={[
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Meeting rooms", href: "/features/meeting-rooms", note: "A room for a proper sit-down." },
          { label: "How it works", href: "/how-it-works", note: "Universe in a few steps." },
          { label: "White label", href: "/features/white-label", note: "Your domain, your logo, your colours." },
        ]}
      />

      <PageClosing
        title={<>Walk into your new office</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Build your workspace', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_work"
      />
    </main>
  );
}
