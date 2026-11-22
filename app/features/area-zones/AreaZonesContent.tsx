import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function AreaZonesPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Area Zones"
        title={<>Walk onto a spot and <span className="text-gradient-accent">something happens</span></>}
        lead={<>Mark any part of your map as a zone. Step into it and a website opens, music plays, a meeting starts, or you land somewhere new.</>}
        detail={[<>Walk into an area and something happens: open a website, play a sound, travel to another room, start a meeting, or speak from a stage.</>]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_area_zones"
      />

      <PartSteps
        eyebrow="How it works"
        title="Draw it, choose, walk in"
        steps={[
          { title: "Draw the area", text: "In the map editor, drag a shape over part of the map." },
          { title: "Choose what it does", text: "Pick one thing or several from the list below." },
          { title: "Walk in", text: "It happens for everyone who steps inside." },
        ]}
      />

      <PartCards
        eyebrow="Talk and listen"
        title="Areas for conversations"
        cards={[
          { icon: "meeting_room", title: "Meeting room", text: "Everyone inside talks together.", more: { label: "Meeting rooms", href: "/features/meeting-rooms" } },
          { icon: "campaign", title: "Stage", text: "Speak to the audience.", more: { label: "Megaphone", href: "/features/megaphone" } },
          { icon: "hearing", title: "Audience", text: "Hear the stage." },
          { icon: "volume_off", title: "Quiet zone", text: "No one can talk here." },
          { icon: "forum", title: "Chat room", text: "A chat that belongs to this area.", more: { label: "Matrix chat", href: "/features/matrix-chat" } },
          { icon: "chat_bubble", title: "Show a message", text: "A bubble appears when someone walks in." },
        ]}
      />

      <PartCards
        eyebrow="Open and play"
        title="Areas that show or play something"
        cards={[
          { icon: "language", title: "Open a website", text: "It opens when someone walks in." },
          { icon: "description", title: "Open a file", text: "Show a document when someone walks in." },
          { icon: "apps", title: "Add an app", text: "YouTube, Google Docs and more, opened when someone walks in." },
          { icon: "music_note", title: "Play a sound", text: "Music or a sound inside the area.", more: { label: "Play audio", href: "/features/play-audio" } },
          { icon: "center_focus_strong", title: "Focus the camera", text: "Zoom in on this area." },
          { icon: "highlight", title: "Highlight", text: "Dims the rest of the map when someone enters." },
        ]}
      />

      <PartCards
        eyebrow="Doors and desks"
        title="Areas that decide who and where"
        cards={[
          { icon: "badge", title: "Who can enter", text: "Everyone, or only people with the tags you choose." },
          { icon: "group", title: "Max people", text: "A full room stops letting people in." },
          { icon: "lock", title: "Lockable room", text: "People inside can lock the door." },
          { icon: "desk", title: "Personal desk", text: "One person can claim it as theirs." },
          { icon: "logout", title: "Exit to a room", text: "Walk in to travel somewhere else.", more: { label: "Teleport", href: "/features/teleport" } },
          { icon: "flag", title: "Start point", text: "Where people arrive." },
        ]}
      />

      <PartBuilders
        title="Set up without code"
        body={[
          <>Areas are drawn and configured in the map editor. Rights work by tag: one set of tags for who may use an area, another for who may change it.</>,
          <>Need something that is not on the list? A map script can react when a player enters or leaves an area.</>,
        ]}
        facts={[
          ["Drawn in", "Map editor"],
          ["Rights", "By tag"],
          ["More logic", "Scripting API"],
        ]}
        links={[{ label: "Map editor", href: "/features/map-editor" }, { label: "Scripting API", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Map editor", href: "/features/map-editor", note: "Build in the browser." },
          { label: "Objects", href: "/features/entity-editor", note: "Things people can click." },
          { label: "Megaphone", href: "/features/megaphone", note: "A stage and an audience." },
          { label: "Teleport", href: "/features/teleport", note: "Travel between rooms." },
        ]}
      />

      <PageClosing
        title={<>Ready to define your space?</>}
        body={<>Draw a zone, pick what it does, and walk in to try it.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_area_zones"
      />
    </div>
  )
}
