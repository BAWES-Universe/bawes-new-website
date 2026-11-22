import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function SearchablePageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Searchable"
        title={<>Find what you need. <span className="text-gradient-accent">Instantly.</span></>}
        lead={<>Mark a place or an object as searchable, and people can find it when they look around the map.</>}
        detail={[<>Make areas and objects discoverable. Tag any area or object as searchable so people can find it and walk straight to it.</>]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_searchable"
      />

      <PartSteps
        eyebrow="How it works"
        title="Tick one box"
        steps={[
          { title: "Open the map editor", text: "Select an area or an object." },
          { title: "Mark it as searchable", text: "Give it a name and a short description." },
          { title: "People find it", text: "It shows up when they look around the map and search." },
        ]}
      />

      <PartCards
        eyebrow="For your visitors"
        title="Look around the map"
        cards={[
          { icon: "map", title: "See the whole room", text: "Look around the map shows the room from above. Zoom in and out, and find yourself again in one tap." },
          { icon: "search", title: "Search and filter", text: "List the searchable areas and objects in the room, with their descriptions." },
          { icon: "directions_walk", title: "Walk straight there", text: "Pick a result and your avatar goes to it." },
        ]}
      />

      <PartCards
        eyebrow="Finding more"
        title="Beyond one room"
        cards={[
          { icon: "explore", title: "Find a room", text: "Explore lists every room in the universe, world by world, with a search.", more: { label: "Teleport", href: "/features/teleport" } },
          { icon: "group", title: "Find a person", text: "The people list shows who is here.", more: { label: "User directory", href: "/features/user-directory" } },
          { icon: "rocket_launch", title: "Find a place", text: "Orbit lets you discover universes, worlds and rooms.", more: { label: "Orbit, in the Guide", href: "/guide/orbit" } },
        ]}
      />

      <PartRelated
        links={[
          { label: "Area zones", href: "/features/area-zones", note: "Make a spot do something." },
          { label: "Objects", href: "/features/entity-editor", note: "Things people can click." },
          { label: "Map editor", href: "/features/map-editor", note: "Build in the browser." },
          { label: "Teleport", href: "/features/teleport", note: "Travel between rooms." },
        ]}
      />

      <PageClosing
        title={<>Ready to make your world searchable?</>}
        body={<>Mark your first area or object and try the search.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_searchable"
      />
    </div>
  )
}
