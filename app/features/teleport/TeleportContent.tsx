import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function TeleportPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Teleport"
        title={<>Jump between worlds <span className="text-gradient-accent">instantly</span></>}
        lead={<>Step through an exit and arrive in another room. Or pick a room from a list and go straight there.</>}
        detail={[<>Teleport between rooms with an area property. Set a destination on any area: walk in and arrive somewhere else.</>]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_teleport"
      />

      <PartCards
        eyebrow="Ways to travel"
        title="Getting around"
        cards={[
          { icon: "logout", title: "Exits", text: "Mark an area as an exit and choose the room it leads to. Walk in to travel." },
          { icon: "flag", title: "Start points", text: "Choose where people arrive, also when they come in through an exit." },
          { icon: "explore", title: "Explore", text: "One button lists every room in the universe, world by world. Search, pick one, and go." },
          { icon: "group", title: "Go to a friend", text: "Friends can see where each other are, and go there in one tap.", more: { label: "Chats, in the Guide", href: "/guide/chats" } },
          { icon: "rocket_launch", title: "Orbit", text: "Go back to places you visited lately, or to the rooms you starred.", more: { label: "Orbit, in the Guide", href: "/guide/orbit" } },
          { icon: "link", title: "A link", text: "Every room has its own link. Anyone who has it walks straight in." },
        ]}
      />

      <PartBuilders
        title="An exit is an area"
        body={[
          <>Draw an area in the map editor, give it the exit property, and pick the room and the spot people should land on. No code is needed.</>,
        ]}
        facts={[
          ["Area property", "Exit to a room"],
          ["Arrival", "Start point"],
          ["Set up in", "Map editor"],
        ]}
        links={[{ label: "Area zones", href: "/features/area-zones" }, { label: "Map editor", href: "/features/map-editor" }]}
      />

      <PartRelated
        links={[
          { label: "Area zones", href: "/features/area-zones", note: "Make a spot do something." },
          { label: "Follow", href: "/features/follow", note: "Keep a group together." },
          { label: "Maps", href: "/features/maps", note: "Universes, worlds and rooms." },
          { label: "Searchable", href: "/features/searchable", note: "Help people find things." },
        ]}
      />

      <PageClosing
        title={<>Ready to travel?</>}
        body={<>Draw an exit, choose where it leads, and walk through.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_teleport"
      />
    </div>
  )
}
