import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function PlayAudioPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Play Audio"
        title={<>Sound that <span className="text-gradient-accent">follows you</span></>}
        lead={<>Make an area play a sound when someone walks in: welcome music, a chime, or some background atmosphere.</>}
        detail={[<>Configure areas and objects to play audio files. Perfect for entrance music, announcement chimes, or ambient atmosphere that fades as you walk away.</>]}
        scene="fire"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_play_audio"
      />

      <PartSteps
        eyebrow="How it works"
        title="Sound in three choices"
        steps={[
          { title: "Pick a sound", text: "Upload an MP3, WAV, OGG or M4A file, or paste a link." },
          { title: "Choose when it starts", text: "When someone comes within range, or when someone clicks the object." },
          { title: "Choose who hears it", text: "Only the person who clicked, everyone within range, or everyone on the map." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="Sound that belongs to a place"
        cards={[
          { icon: "graphic_eq", title: "It fades with distance", text: "Set how close people hear it at full volume and how far it carries. In between it fades out, and two circles on the map show you both." },
          { icon: "repeat", title: "Loop it, or play it once", text: "Keep it going while someone is near, or play it one time each visit." },
          { icon: "touch_app", title: "Start it with a click", text: "Put the sound on an object, like a jukebox, and give its button your own words." },
          { icon: "timer", title: "A pause between plays", text: "Set a wait before it can play again." },
          { icon: "volume_up", title: "Set the volume", text: "And listen to it right in the editor before you save." },
          { icon: "tune", title: "Each visitor is in control", text: "People can turn ambient sounds down, pause them or stop them." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Area zones", href: "/features/area-zones", note: "Make a spot do something." },
          { label: "Objects", href: "/features/entity-editor", note: "Things people can click." },
          { label: "Map editor", href: "/features/map-editor", note: "Build in the browser." },
          { label: "Megaphone", href: "/features/megaphone", note: "A stage and an audience." },
        ]}
      />

      <PageClosing
        title={<>Ready to add sound?</>}
        body={<>Pick a sound, choose when it plays, and listen.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_play_audio"
      />
    </div>
  )
}
