import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function QuestsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build', href: '/build' }]}
        here="Quests"
        title={<>A little quest, <span className="text-gradient-accent">led by your Brick.</span></>}
        lead={<>A quest is a small goal a place sets for its visitors: a few stops, and the game notices each one by itself. Nobody ticks a box.</>}
        detail={[<>Your Brick leads the way, quietly, in your chat.</>]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source='feature_quests'
      />

      <PartSteps
        eyebrow="For you"
        title="Three taps, a few steps on the map"
        steps={[
          { title: "It is offered once", text: "The Brick of the place, or your own, offers the quest when you arrive. Start, or Not now. Not now is remembered." },
          { title: "Your Brick leads", text: "One quiet line at the top of the chat shows the quest, the stop you are on, and Stop." },
          { title: "Done", text: "A finished quest is listed under Done in Goals and tasks. Show it on your profile if you like. Private is where it starts." },
        ]}
      />

      <PartCards
        eyebrow="What a quest is made of"
        title="Stops the game notices by itself"
        cards={[
          { icon: "tour", title: "The Welcome tour", text: "Every newcomer can take the Welcome tour, a quest that is built in." },
          { icon: "waving_hand", title: "Say hello", text: "Greet someone, and have them answer in the same conversation." },
          { icon: "place", title: "Walk to a spot", text: "Step into a place on the map." },
          { icon: "deployed_code", title: "Place something", text: "Put an object down in the room." },
          { icon: "person", title: "Guests too", text: "A guest can do a quest, and keeps the progress on signing in during that visit." },
          { icon: "notifications_paused", title: "Quiet when you are busy", text: "One quest at a time. It stays quiet during calls and while you type." },
        ]}
      />

      <PartCards
        eyebrow="For hosts"
        title="Make one by saying it"
        cards={[
          { icon: "record_voice_over", title: "Tell a Brick", text: "Say it to a Brick that lives in your place: make a tour, say hello at a stall, walk to the stage, find the coffee stall." },
          { icon: "fact_check", title: "Check and publish", text: "The Brick shows the quest back on one card. Press Publish quest." },
          { icon: "monitoring", title: "See how it goes", text: "The Brick’s page lists what is published, and how many people started and finished." },
          { icon: "edit", title: "Change or pause", text: "Change a quest, pause it, or make another, from the same page." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>The words at each stop are written ahead, so a quest runs the same for everyone.</>,
          <>If you ask for a stop the game cannot notice, the Brick says so and offers the nearest one it can.</>,
          <>No ranks, no leaderboards and no paid rewards. A finished quest is a line on a profile, and nothing more.</>,
        ]}
        facts={[
          ["Stops", "Say hello, walk to a spot, place something"],
          ["Led by", "Your own Brick"],
          ["Made by", "Hosts, by saying it to a Brick"],
          ["Listed in", "Goals and tasks"],
        ]}
        links={[{ label: "Brick", href: "/features/brick" }, { label: "Goals and tasks", href: "/features/goals-and-tasks" }]}
      />

      <PartRelated
        links={[
          { label: "Brick", href: "/features/brick", note: "The one who leads you." },
          { label: "Goals and tasks", href: "/features/goals-and-tasks", note: "Where a running quest is listed." },
          { label: "Area zones", href: "/features/area-zones", note: "The spots a quest can lead to." },
          { label: "Events", href: "/use-cases/events", note: "Give your visitors something to do." },
        ]}
      />

      <PageClosing
        title={<>Give your visitors a reason to explore.</>}
        body={<>Tell the Brick in your place what the tour should be.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_quests'
      />
    </div>
  )
}
