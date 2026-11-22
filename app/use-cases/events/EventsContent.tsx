import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function UseCaseEventsPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="Events"
        title={<>Events that <span className="text-gradient-accent">fill the room</span></>}
        lead={<>Conferences, concerts, meetups and all-hands, with a stage, an audience, and room to mingle afterwards.</>}
        detail={[<>Conferences, concerts, meetups and all-hands. Stage and audience zones, live broadcasts across your universe, sponsor halls you build yourself, and networking that actually works.</>]}
        scene="stage"
        actions={[{ label: 'Plan your event', href: '/contact' }, { label: 'See broadcasting', href: '/features/broadcasting' }]}
        source="page_use_cases_events"
      />

      <PartCards
        eyebrow="Events of every scale"
        title="Three kinds of gathering"
        cards={[
          { icon: "podium", title: "Conferences and summits", text: "A main stage, side rooms, sponsor halls and lounges. People on the stage are heard by the whole audience." },
          { icon: "music_note", title: "Concerts and performances", text: "Live music, comedy and shows. The stage is the centre and the audience fills the room together." },
          { icon: "groups", title: "Meetups and workshops", text: "Small gatherings for workshops, questions and networking, where real conversations happen." },
        ]}
      />

      <PartSteps
        eyebrow="How events work"
        title="From an empty room to a full house"
        steps={[
          { title: "Build the venue", text: "Draw a stage, an audience area, side rooms and a backstage with the map editor." },
          { title: "Decide who gets in", text: "Limit an area to certain roles, and set how many people fit. A full room stops letting people in." },
          { title: "Go live", text: "Step on the stage and speak, or broadcast with voice, video and your screen to a place or the whole universe." },
          { title: "Mingle", text: "Afterwards people walk up to each other and talk, the way they would in a real hall." },
        ]}
      />

      <PartCards
        eyebrow="Powered by these features"
        title="What an event is built from"
        cards={[
          { icon: "podcasts", title: "Broadcasting", text: "Send a message, a voice note or go live, to one place or everywhere in your universe.", more: { label: "Broadcasting", href: "/features/broadcasting" } },
          { icon: "mic", title: "Megaphone", text: "Stage and audience areas, with raise hand and invite to speak.", more: { label: "Megaphone", href: "/features/megaphone" } },
          { icon: "forum", title: "Proximity chat", text: "Natural conversation in the lounges.", more: { label: "Proximity chat", href: "/features/proximity-chat" } },
          { icon: "map", title: "Maps", text: "Stage layouts, audience areas and venue design.", more: { label: "Maps", href: "/features/maps" } },
          { icon: "smart_toy", title: "Bot guides", text: "Bots that welcome guests and walk them to the right room.", more: { label: "Bot behaviors", href: "/features/bot-behaviors" } },
          { icon: "directions_walk", title: "Follow", text: "Lead a group through the venue on a tour.", more: { label: "Follow", href: "/features/follow" } },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>Stage audio and live broadcasts are carried by LiveKit, the same open source video server that carries large conversations.</>,
          <>Tickets and schedules stay in the tools you already use. Share the link to your room there, and choose in Universe who may enter.</>,
        ]}
        facts={[
          ["Stage", "Stage and audience areas"],
          ["Live", "Voice, video and screen"],
          ["Reach", "A place or the whole universe"],
          ["Entry", "By role, with a people limit"],
        ]}
        links={[{ label: "Broadcasting", href: "/features/broadcasting" }, { label: "Area zones", href: "/features/area-zones" }]}
      />

      <PartRelated
        links={[
          { label: "Broadcasting", href: "/features/broadcasting", note: "Speak to a whole room or universe." },
          { label: "Megaphone", href: "/features/megaphone", note: "A stage for your speakers." },
          { label: "Area zones", href: "/features/area-zones", note: "Areas that do something when you walk in." },
          { label: "For community", href: "/use-cases/community", note: "Give your community a home." },
        ]}
      />

      <PageClosing
        title={<>Ready to host your first event?</>}
        body={<>Build the venue, open the doors and go live.</>}
        links={[{ label: 'Plan your event', href: '/contact' }, { label: 'Broadcasting details', href: '/features/broadcasting' }]}
        source="page_use_cases_events"
      />
    </main>
  );
}
