import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function MapEditorPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Map Editor"
        title={<>Build your world <span className="text-gradient-accent">in real time</span></>}
        lead={<>Change your room right in the browser: place objects, draw areas and add residents. Everyone sees the change at once.</>}
        detail={[<>Live map editing tools in the browser. Add areas, place objects, and see changes instantly, with no reload needed.</>]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_map_editor"
      />

      <PartSteps
        eyebrow="How it works"
        title="Pick a tool, click the map"
        steps={[
          { title: "Open the map editor", text: "It opens on top of the room you are standing in." },
          { title: "Pick a tool", text: "Objects, Areas, Bots or Delete." },
          { title: "Click the map", text: "What you place is there for everyone right away." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Four tools, one room"
        cards={[
          { icon: "chair", title: "Place objects", text: "Pick one from the library, then click the map. Move it, turn it, copy it or change its colour.", more: { label: "Objects", href: "/features/entity-editor" } },
          { icon: "select_all", title: "Draw areas", text: "Mark a part of the map and choose what happens there: a meeting, a sound, a website, an exit.", more: { label: "Area zones", href: "/features/area-zones" } },
          { icon: "smart_toy", title: "Add residents", text: "Put AI helpers in the room, right from the editor.", more: { label: "AI residents", href: "/ai-bots" } },
          { icon: "upload", title: "Add your own", text: "Upload your own pictures as objects. Drop a file anywhere on the map." },
          { icon: "undo", title: "Undo", text: "Changed your mind? Undo brings it back, also after a delete." },
          { icon: "smartphone", title: "On a phone too", text: "Pick a tool, drag to move around and pinch to zoom." },
        ]}
      />

      <PartBuilders
        title="On top of your Tiled map"
        body={[
          <>The room itself is a map made in Tiled, the open map editor. What you add in the browser is saved next to it, so the two never overwrite each other.</>,
          <>Who may edit is set with tags.</>,
        ]}
        facts={[
          ["Tools", "Objects, Areas, Bots, Delete"],
          ["Base map", "Tiled"],
          ["Editing rights", "By tag"],
          ["Shortcuts", "R to turn, Ctrl+Z to undo"],
        ]}
        links={[{ label: "Maps", href: "/features/maps" }, { label: "Scripting API", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Area zones", href: "/features/area-zones", note: "Make a spot do something." },
          { label: "Objects", href: "/features/entity-editor", note: "Things people can click." },
          { label: "Map templates", href: "/features/map-templates", note: "Start from a ready-made room." },
          { label: "Maps", href: "/features/maps", note: "The ground you walk on." },
        ]}
      />

      <PageClosing
        title={<>Ready to edit your world?</>}
        body={<>Open the map editor in a room you manage and start building.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_map_editor"
      />
    </div>
  )
}
