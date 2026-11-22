import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function MapsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Maps"
        title={<>Every space has <span className="text-gradient-accent">a place</span></>}
        lead={<>Maps are the ground you walk on. Every room has one. Start from a template, or draw your own.</>}
        detail={[<>Maps are the structural foundation of the BAWES Universe. Organize them into universes, worlds and rooms, and build your own pixel-art maps in Tiled.</>]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_maps"
      />

      <PartCards
        eyebrow="How it fits together"
        title="A place for everything"
        cards={[
          { icon: "public", title: "Universe", text: "The top level. It holds your worlds." },
          { icon: "travel_explore", title: "World", text: "A world holds rooms, and has its own members." },
          { icon: "meeting_room", title: "Room", text: "A room is one map you can walk around in. Every room has its own link." },
        ]}
      />

      <PartCards
        eyebrow="Three ways to get a map"
        title="Pick what suits you"
        cards={[
          { icon: "dashboard", title: "Start from a template", text: "Pick a ready-made map when you create a room in Orbit.", more: { label: "Map templates", href: "/features/map-templates" } },
          { icon: "edit", title: "Change it in the browser", text: "Place objects and draw areas with the map editor, with no reload.", more: { label: "Map editor", href: "/features/map-editor" } },
          { icon: "brush", title: "Draw your own", text: "Build a pixel-art map from scratch in Tiled, the open map editor." },
        ]}
      />

      <PartBuilders
        title="Made with Tiled"
        body={[
          <>Maps are tile maps made with Tiled. The developer docs cover how to build one: layers, entries and exits, animations, and special zones.</>,
        ]}
        facts={[
          ["Format", "Tiled tile map"],
          ["Structure", "Universe, World, Room"],
          ["Live edits", "Map editor"],
        ]}
        links={[{ label: "Map building docs", href: "https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/map-building" }, { label: "Scripting API", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Map templates", href: "/features/map-templates", note: "Start from a ready-made room." },
          { label: "Map editor", href: "/features/map-editor", note: "Build in the browser." },
          { label: "Orbit", href: "/guide/orbit", note: "Make universes, worlds and rooms." },
          { label: "Teleport", href: "/features/teleport", note: "Travel between rooms." },
        ]}
      />

      <PageClosing
        title={<>Ready to build your world?</>}
        body={<>Start a room from a template and make it yours.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_maps"
      />
    </div>
  )
}
