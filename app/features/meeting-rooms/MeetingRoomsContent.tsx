import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function MeetingRoomsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Meeting Rooms"
        title={<>Walk in. Talk. <span className="text-gradient-accent">Walk out.</span></>}
        lead={<>Turn any area of your map into a meeting room. Step inside and you are in the call. No invites, no links.</>}
        detail={[<>Designate areas on the map as meeting rooms. Walk in to join, with no invites and no links. Audio and video stay with the people inside.</>]}
        scene="room"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_meeting_rooms"
      />

      <PartSteps
        eyebrow="How it works"
        title="The door is the invitation"
        steps={[
          { title: "Draw the room", text: "In the map editor, mark an area as a Meeting Room." },
          { title: "Walk in", text: "Everyone inside talks together, with camera and microphone." },
          { title: "Walk out", text: "Step outside and you have left the meeting." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="A room that is always there"
        cards={[
          { icon: "present_to_all", title: "Share your screen", text: "Everyone in the room sees it.", more: { label: "Screen sharing", href: "/features/screen-sharing" } },
          { icon: "shield_person", title: "Moderators", text: "Choose who moderates the room, by tag." },
          { icon: "event_available", title: "No booking", text: "The room is part of the map, so it is there whenever you need it. Walk in at nine and the team is already there." },
          { icon: "school", title: "Classes and office hours", text: "A fixed room people can find again, every time.", more: { label: "For learning", href: "/use-cases/learning" } },
          { icon: "handshake", title: "Client meetings", text: "Invite a guest with a link. They walk in with no download and no account." },
          { icon: "lock", title: "For a quick private word", text: "Not near a room? Lock the conversation you are in.", more: { label: "Lock", href: "/features/lock-discuss" } },
        ]}
      />

      <PartBuilders
        title="An area on the map"
        body={[
          <>A meeting room is an area you draw in the map editor. It is carried by LiveKit, the same system that carries larger conversations, so there is no outside video service to set up.</>,
        ]}
        facts={[
          ["Area type", "Meeting Room"],
          ["Carried by", "LiveKit"],
          ["Set up in", "Map editor"],
        ]}
        links={[{ label: "Area zones", href: "/features/area-zones" }, { label: "Map editor", href: "/features/map-editor" }, { label: "Self-hosting", href: "/features/self-hosting" }]}
      />

      <PartRelated
        links={[
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Megaphone", href: "/features/megaphone", note: "A stage and an audience." },
          { label: "Broadcasting", href: "/features/broadcasting", note: "Reach everyone at once." },
          { label: "For work", href: "/use-cases/work", note: "Team spaces and focus rooms." },
        ]}
      />

      <PageClosing
        title={<>Ready to walk in and talk?</>}
        body={<>Draw a meeting room on your map and step inside.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_meeting_rooms"
      />
    </div>
  )
}
