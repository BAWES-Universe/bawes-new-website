import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function MegaphonePageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Megaphone"
        title={<>Speak loud. <span className="text-gradient-accent">Be heard.</span></>}
        lead={<>Step onto the stage and everyone in the audience hears you. Made for talks, classes and announcements.</>}
        detail={[<>Zone-based megaphone: a Stage area for speakers, an Audience area for listeners, and quiet zones where nobody can talk.</>]}
        scene="stage"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_megaphone"
      />

      <PartSteps
        eyebrow="How it works"
        title="A stage, an audience, and you"
        steps={[
          { title: "Draw a Stage", text: "In the map editor, mark the spot where speakers stand and give it a name." },
          { title: "Draw an Audience", text: "Mark where people listen, and link it to your Stage." },
          { title: "Step up and speak", text: "Everyone in the audience hears you. Step off and you are back in the crowd." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Everything a talk needs"
        cards={[
          { icon: "front_hand", title: "Raise a hand", text: "People in the audience raise a hand to ask something. It goes down when they have spoken, or when a moderator lowers it." },
          { icon: "record_voice_over", title: "Invite someone to speak", text: "A moderator invites a person up. Their microphone and camera go live to the whole audience, and they move back when they are done." },
          { icon: "videocam", title: "See your audience", text: "Speakers can see the people in the audience who have their camera on. They do not hear them, and the audience is told." },
          { icon: "chat_bubble", title: "Side chats, or none", text: "You decide if people next to each other can chat while they listen, or if everyone only listens to the stage." },
          { icon: "volume_off", title: "Quiet zones", text: "Mark a zone where nobody can talk. Good for a library corner or a focus area." },
          { icon: "draw", title: "No code", text: "Stages, audiences and quiet zones are drawn in the map editor.", more: { label: "Map editor", href: "/features/map-editor" } },
        ]}
      />

      <PartBuilders
        title="Three kinds of area"
        body={[
          <>It is all set up with areas you draw on the map. A Stage speaks to its Audience, and a quiet zone silences everyone inside.</>,
        ]}
        facts={[
          ["Stage", "Speak to the audience"],
          ["Audience", "Hear the stage"],
          ["Quiet zone", "No one can talk here"],
          ["Set up in", "Map editor"],
        ]}
        links={[{ label: "Area zones", href: "/features/area-zones" }, { label: "Map editor", href: "/features/map-editor" }]}
      />

      <PartRelated
        links={[
          { label: "Broadcasting", href: "/features/broadcasting", note: "Reach everyone at once." },
          { label: "Meeting rooms", href: "/features/meeting-rooms", note: "Everyone inside talks together." },
          { label: "For events", href: "/use-cases/events", note: "Talks, meetups and shows." },
          { label: "For learning", href: "/use-cases/learning", note: "Classes and study rooms." },
        ]}
      />

      <PageClosing
        title={<>Ready to take the stage?</>}
        body={<>Draw a stage and an audience in your room, and step up.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_megaphone"
      />
    </div>
  )
}
