import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function UseCaseLearningPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="For Learning"
        title={<>Learn together, <span className="text-gradient-accent">wherever you are</span></>}
        lead={<>Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.</>}
        scene="class"
        actions={[{ label: 'Build your campus', href: '/contact' }, { label: 'How it works', href: '/how-it-works' }]}
        source="page_use_cases_learning"
      />

      <PartSteps
        eyebrow="How it works"
        title="A campus you walk through"
        steps={[
          { title: "Walk into class", text: "Enter the lecture hall. Hear the teacher from the stage and raise your hand to speak." },
          { title: "Study together", text: "Join classmates in a study room. Talk it through, and share links in the chat." },
          { title: "Drop by the office", text: "Walk to the desk of your teacher or mentor. No booking system. Just walk up." },
        ]}
      />

      <PartCards
        eyebrow="Key features for learning"
        title="From a full lecture hall to a one to one"
        cards={[
          { icon: "co_present", title: "Lecture halls", text: "A stage and an audience area. The teacher is heard by everyone, students raise a hand and can be invited to speak.", more: { label: "Megaphone", href: "/features/megaphone" } },
          { icon: "present_to_all", title: "Slides and demos", text: "Share a screen with the room, or open a website or a file when people walk into an area.", more: { label: "Screen sharing", href: "/features/screen-sharing" } },
          { icon: "groups", title: "Study rooms", text: "Rooms where everyone inside talks together, and quiet zones for reading.", more: { label: "Meeting rooms", href: "/features/meeting-rooms" } },
          { icon: "desk", title: "Mentor offices", text: "A personal desk or a lockable room for one to one guidance.", more: { label: "Lock", href: "/features/lock-discuss" } },
          { icon: "smart_toy", title: "AI tutors", text: "Bots that answer questions any time and read the PDFs, slides and spreadsheets students hand them.", more: { label: "Bot file parsing", href: "/features/bot-file-parsing" } },
          { icon: "campaign", title: "Announcements", text: "Broadcast to the whole campus for orientations and guest lectures.", more: { label: "Broadcasting", href: "/features/broadcasting" } },
        ]}
      />

      <PartCards
        eyebrow="Learning scenarios"
        title="Where it fits"
        cards={[
          { icon: "school", title: "Universities", text: "Lecture halls, admin offices and student lounges in one campus." },
          { icon: "code", title: "Coding bootcamps", text: "Pair programming with screen sharing, help rooms and project demos." },
          { icon: "construction", title: "Workshops and training", text: "Live demos, small group rooms and hands-on exercises." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Meeting rooms", href: "/features/meeting-rooms", note: "A room for a proper sit-down." },
          { label: "Follow", href: "/features/follow", note: "Keep a group together on a tour." },
          { label: "AI bots", href: "/ai-bots", note: "Everything bots can do." },
          { label: "How it works", href: "/how-it-works", note: "Universe in a few steps." },
        ]}
      />

      <PageClosing
        title={<>Open the doors to your campus</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Build your campus', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_learning"
      />
    </main>
  );
}
