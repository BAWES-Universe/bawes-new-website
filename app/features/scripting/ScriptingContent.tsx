import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartCode, PartRelated } from '@/components/page/PageParts'

export default function ScriptingApiPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Scripting API"
        title={<>Code that <span className="text-gradient-accent">shapes</span> worlds</>}
        lead={<>For builders: write small scripts that make your map react to people, remember things, and show its own buttons and windows.</>}
        detail={[
          <><code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-sm font-mono">WA.ui</code>,{' '} <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-sm font-mono">WA.room</code>,{' '} <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-sm font-mono">WA.player</code>,{' '} <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-sm font-mono">WA.state</code> — the scripting API from WorkAdventure. Control rooms, players, state, and UI from your map scripts.</>,
        ]}
        scene="desks"
        actions={[{ label: 'Scripting docs', href: 'https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting' }, { label: 'API reference', href: 'https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting/references' }]}
        source="feature_scripting"
      />

      <PartCards
        eyebrow="What a script can reach"
        title="Four main parts, and a few more"
        cards={[
          { icon: "widgets", title: "WA.ui", text: "Show popups and messages, add buttons to the action bar, open windows and banners, add your own menu entries." },
          { icon: "meeting_room", title: "WA.room", text: "Know when someone enters or leaves an area or a layer. Show and hide layers, change tiles, place websites on the map.", more: { label: "Area zones", href: "/features/area-zones" } },
          { icon: "person", title: "WA.player", text: "Read the name and tags of the player, follow where they walk, move them, and keep values that belong to them." },
          { icon: "database", title: "WA.state", text: "Room variables. Change one and it changes for everyone in the room, right away." },
          { icon: "bolt", title: "WA.event", text: "Send short messages between the scripts of different players, to everyone or to one person." },
          { icon: "more_horiz", title: "And more", text: "Chat, sound, the camera, navigation between rooms, player controls and the other players around you." },
        ]}
      />

      <PartCode
        eyebrow="A small example"
        title="A door that opens for everyone"
        body="One player presses space, and the door layer disappears on every screen in the room."
        file="script.ts"
        code={`// Wait until the map is ready
WA.onInit().then(() => {
  // When someone walks into the area called "door"...
  WA.room.area.onEnter('door').subscribe(() => {
    // ...offer to open it
    WA.ui.displayActionMessage({
      message: 'Press space to open the door',
      // doorOpen is a room variable, so everyone sees it change
      callback: () => WA.state.saveVariable('doorOpen', true),
    })
  })

  // Runs for every player in the room when the value changes
  WA.state.onVariableChange('doorOpen').subscribe((open) => {
    if (open) WA.room.hideLayer('closed-door')
  })
})`}
      />

      <PartCards
        eyebrow="Two ways to share"
        title="Scripts run in each browser"
        cards={[
          { icon: "database", title: "Variables", text: "Values that are stored. A room variable is shared by everyone in the room. A player variable belongs to one person. They can be kept between visits." },
          { icon: "bolt", title: "Events", text: "Messages that are not stored. Good for things that happen now and are gone a moment later." },
          { icon: "lock", title: "Who may read and write", text: "For each room variable you choose who can read it and who can change it." },
        ]}
      />

      <PartBuilders
        title="How scripts get on a map"
        body={[
          <>A script is plain JavaScript, or TypeScript that you build to JavaScript. You name it in a property of the map, and it loads for every player who enters.</>,
          <>Scripts run in the browser of each player, inside an iframe. To change something for everyone, use a variable or an event.</>,
          <>Room variables are declared on the map itself, as objects in an object layer.</>,
        ]}
        facts={[
          ["Language", "JavaScript or TypeScript"],
          ["Runs in", "The browser of each player"],
          ["Shared state", "Variables and events"],
          ["From", "WorkAdventure"],
        ]}
        links={[{ label: "Scripting docs", href: "https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting" }, { label: "Events", href: "https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/map-scripting/events.md" }]}
      />

      <PartRelated
        links={[
          { label: "Map editor", href: "/features/map-editor", note: "Build and change rooms in the browser." },
          { label: "Area zones", href: "/features/area-zones", note: "Areas that do something when you walk in." },
          { label: "Admin API", href: "/features/admin-api", note: "Connect the game to your own member system." },
          { label: "Full docs", href: "https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting", note: "The complete scripting documentation on GitHub." },
        ]}
      />

      <PageClosing
        title={<>Ready to script your world?</>}
        body={<>Start with the docs and a small script on your own map.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Developer hub', href: '/developers' }]}
        source="page_features_scripting"
      />
    </div>
  )
}
