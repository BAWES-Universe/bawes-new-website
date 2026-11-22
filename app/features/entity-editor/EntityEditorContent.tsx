import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function EntityEditorPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Entity Editor"
        title={<>Objects that <span className="text-gradient-accent">do things</span></>}
        lead={<>Put objects on your map that people can click: open a website, start something, or set off a little surprise.</>}
        detail={[<>Place and configure interactive objects on maps. Click an object to open a website, play a sound, or start an interaction.</>]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_entity_editor"
      />

      <PartSteps
        eyebrow="How it works"
        title="Pick, place, choose"
        steps={[
          { title: "Pick an object", text: "Search the library, browse by category, or upload your own." },
          { title: "Click the map", text: "It lands where you click. Press R to turn it." },
          { title: "Choose what it does", text: "Open its settings and set what happens when someone uses it." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Furniture that does things"
        cards={[
          { icon: "search", title: "A library to search", text: "Find objects by name or category. The ones you used lately are kept at hand." },
          { icon: "upload", title: "Upload your own", text: "Add your own pictures, with more than one side and colour if you like." },
          { icon: "open_with", title: "Move, turn, copy", text: "Rearrange a room in a few clicks, and recolour objects that allow it." },
          { icon: "label", title: "Give it a button", text: "Name the object and write the words on its button." },
          { icon: "travel_explore", title: "Make it findable", text: "Mark an object as searchable and people can find it when they look around the map.", more: { label: "Searchable", href: "/features/searchable" } },
          { icon: "play_circle", title: "Try it first", text: "Test what an object does before anyone else walks up to it." },
        ]}
      />

      <PartBuilders
        title="Saved with the room"
        body={[
          <>Objects are saved with the room, next to the Tiled map it is built on. For behaviour that goes beyond the settings, a map script can take over.</>,
        ]}
        facts={[
          ["Placed in", "Map editor"],
          ["Your own art", "Upload"],
          ["More logic", "Scripting API"],
        ]}
        links={[{ label: "Map editor", href: "/features/map-editor" }, { label: "Scripting API", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Map editor", href: "/features/map-editor", note: "Build in the browser." },
          { label: "Area zones", href: "/features/area-zones", note: "Make a spot do something." },
          { label: "Play audio", href: "/features/play-audio", note: "Sounds that start on a click." },
          { label: "Searchable", href: "/features/searchable", note: "Help people find things." },
        ]}
      />

      <PageClosing
        title={<>Ready to create interactive objects?</>}
        body={<>Place your first object and choose what it does.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_entity_editor"
      />
    </div>
  )
}
