import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function MapTemplatesPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Map Templates"
        title={<>Start with a blueprint. <span className="text-gradient-accent">Build from there.</span></>}
        lead={<>Ready-made rooms you can walk into right away. Use one as it is, or make it your own.</>}
        detail={[<>Pre-built room layouts sorted by category. Pick a map, create your room from it, then extend or customize it.</>]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_map_templates"
      />

      <PartSteps
        eyebrow="How it works"
        title="From template to room"
        steps={[
          { title: "Open Room Templates", text: "They are in Orbit, sorted into categories." },
          { title: "Pick a map", text: "Each template comes with one or more maps to choose from." },
          { title: "Create room", text: "Choose the world it goes in, and walk in." },
        ]}
      />

      <PartCards
        eyebrow="Good to know"
        title="A start, not a limit"
        cards={[
          { icon: "edit", title: "Make it yours", text: "Open the map editor in your new room to move objects, draw areas and add residents.", more: { label: "Map editor", href: "/features/map-editor" } },
          { icon: "swap_horiz", title: "Switch later", text: "You can change the template of a room after you made it." },
          { icon: "category", title: "Sorted by category", text: "Browse by what the room is for, then look at the maps inside." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Maps", href: "/features/maps", note: "The ground you walk on." },
          { label: "Map editor", href: "/features/map-editor", note: "Build in the browser." },
          { label: "Orbit", href: "/guide/orbit", note: "Make universes, worlds and rooms." },
          { label: "Area zones", href: "/features/area-zones", note: "Make a spot do something." },
        ]}
      />

      <PageClosing
        title={<>Ready to start building?</>}
        body={<>Browse the room templates in Orbit and create your room.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_map_templates"
      />
    </div>
  )
}
