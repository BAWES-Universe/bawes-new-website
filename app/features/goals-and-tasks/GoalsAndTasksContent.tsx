import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function GoalsAndTasksPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Goals and Tasks"
        title={<>Give it a goal. <span className="text-gradient-accent">It keeps at it.</span></>}
        lead={<>Give your Brick something to keep working on. It plans the steps, keeps at it while you are away, and messages you only when something changes or it needs you.</>}
        detail={[<>Goals are optional. You set one by saying it in your own words.</>]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source='feature_goals_and_tasks'
      />

      <PartSteps
        eyebrow="How it works"
        title="Say it once"
        steps={[
          { title: "Say it", text: "In your Brick’s chat, in your own words: get my visa before I fly on 12 Dec." },
          { title: "It plans", text: "Your Brick breaks it into steps and gets on with them." },
          { title: "It tells you", text: "You hear from it when something changes, or when it needs something from you." },
        ]}
      />

      <PartCards
        eyebrow="Four kinds"
        title="What you can hand over"
        cards={[
          { icon: "flag", title: "A goal", text: "Get my visa before I fly on 12 Dec." },
          { icon: "visibility", title: "Keep watch", text: "Tell me when the flight gets cheaper." },
          { icon: "event_repeat", title: "On a schedule", text: "Each workday at 7:30, tell me what is on." },
          { icon: "alarm", title: "A reminder", text: "Remind me to get the car on Sunday at 4." },
        ]}
      />

      <PartCards
        eyebrow="You stay in charge"
        title="Change it, pause it, end it"
        cards={[
          { icon: "tune", title: "Change, pause, resume", text: "Every goal and task can be changed, paused and picked up again, any time." },
          { icon: "play_arrow", title: "Run now", text: "Do not want to wait for the next run? Start it now." },
          { icon: "snooze", title: "Snooze", text: "Put a task off until later." },
          { icon: "list_alt", title: "Everything it did", text: "Each run is listed with its result: told you, nothing to report, or needed something from you." },
          { icon: "dashboard", title: "One page for all", text: "Goals and tasks from all your Bricks, on one page." },
          { icon: "help", title: "It asks when unsure", text: "If your Brick is not sure it got there, it asks you: is this done?" },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>When a goal needs a real website or real files, a Brick with a computer uses it by itself.</>,
          <>A goal with a date asks you when the date has passed: close it, or keep going.</>,
          <>A quest you are on is listed here too, and moves to Done when you finish it.</>,
        ]}
        facts={[
          ["Kinds", "Goal, keep watch, schedule, reminder"],
          ["Set by", "Saying it in the chat"],
          ["Controls", "Change, pause, resume, run now, snooze"],
          ["History", "Every run, with its result"],
        ]}
        links={[{ label: "Brick", href: "/features/brick" }, { label: "A computer for your Brick", href: "/features/brick-computer" }]}
      />

      <PartRelated
        links={[
          { label: "Brick", href: "/features/brick", note: "Your own AI companion." },
          { label: "A computer for your Brick", href: "/features/brick-computer", note: "For goals that need a real website." },
          { label: "Apps", href: "/features/apps", note: "Your calendar and email, for the morning briefing." },
          { label: "Quests", href: "/features/quests", note: "Goals a place sets for its visitors." },
        ]}
      />

      <PageClosing
        title={<>What should it keep an eye on?</>}
        body={<>Tell your Brick. It takes one sentence.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_goals_and_tasks'
      />
    </div>
  )
}
