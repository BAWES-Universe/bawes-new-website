import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BrickPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Brick"
        title={<>Meet Brick. <span className="text-gradient-accent">Yours from day one.</span></>}
        lead={<>Brick is your own AI companion, and everyone gets one. Ask it anything, hand it a job, or give it a goal and it keeps at it while you are away.</>}
        detail={[<>It starts free on Universe AI. Switch it to your own AI key whenever you like.</>]}
        scene="brick"
        actions={[{ label: 'Guide: your Brick', href: '/guide/your-brick' }, { label: 'See all features', href: '/features-overview' }]}
        source='feature_brick'
      />

      <PartSteps
        eyebrow="How it works"
        title="It is already in your chats"
        steps={[
          { title: "Open Chats", text: "Your Brick is there from your first visit. There is nothing to set up." },
          { title: "Say what you need", text: "Ask in your own words, or tap a starter: See what I can do, Give me a goal, Make another Brick." },
          { title: "Give it more to work with", text: "Connect your Apps, give it a computer, or bring it along into a room. It gets more useful the more you hand it." },
        ]}
      />

      <PartCards
        eyebrow="What Brick does"
        title="One helper, many jobs"
        cards={[
          { icon: "forum", title: "Chat or call", text: "Message it, send it a file or a voice note, or press Call and talk out loud.", more: { label: "Talking out loud", href: "/guide/talking-out-loud" } },
          { icon: "extension", title: "Uses your Apps", text: "Connect email, calendar, GitHub and more. You choose what it does right away and what it asks first.", more: { label: "Apps", href: "/features/apps" } },
          { icon: "auto_awesome", title: "Makes things", text: "Pages, mini apps, documents and drawings, made in the chat and kept in Your artifacts.", more: { label: "Artifacts", href: "/features/artifacts" } },
          { icon: "psychology", title: "Remembers you", text: "It keeps what matters from your chats. Only you see the list, and you can make it forget one thing or everything.", more: { label: "Bot memory", href: "/features/bot-memory" } },
          { icon: "flag", title: "Keeps going", text: "A reminder, a morning briefing, a price to watch or a goal. It works while you are away and tells you when something changes.", more: { label: "Goals and tasks", href: "/features/goals-and-tasks" } },
          { icon: "computer", title: "Has a computer", text: "For the jobs no App can do, it gets its own computer. Watch it work, and take over when you want.", more: { label: "A computer for your Brick", href: "/features/brick-computer" } },
          { icon: "add_circle", title: "Makes more Bricks", text: "Ask for a helper for one job and it makes one on the spot.", more: { label: "More Bricks", href: "/features/recursive-bots" } },
          { icon: "content_copy", title: "Starts from a template", text: "Start a new Brick from one someone shared, or share yours.", more: { label: "Brick templates", href: "/features/brick-templates" } },
          { icon: "explore", title: "Leads the way", text: "Your Brick offers a quest when a place has one, and leads you through it.", more: { label: "Quests", href: "/features/quests" } },
        ]}
      />

      <PartCards
        eyebrow="Out in the world"
        title="Bring it along, or give it a home"
        cards={[
          { icon: "directions_walk", title: "It walks with you", text: "Bring along puts your Brick beside you on the map. It walks with you from room to room, and goes when you leave or end the visit." },
          { icon: "home", title: "It can live in a room", text: "Add one of your Bricks to a room you can edit. It stands at a spot you choose, and anyone in the room can talk to it." },
          { icon: "lock", title: "Your things stay yours", text: "With other people it never uses Apps signed in as you, and it keeps what you told it to itself." },
          { icon: "group", title: "Their chats are theirs", text: "People who talk to your Brick chat on their own usage. What it remembers about them, only they can see." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>A visitor who has not signed in gets a Brick for the visit. Sign in and it becomes yours, and the chat comes along.</>,
          <>Delete a Brick and you can still undo it on the Bricks page until the day shown. Everything it made stays in Your artifacts.</>,
          <>A Brick has its own page: memory, goals and tasks, files, computer, Apps and its template.</>,
        ]}
        facts={[
          ["Who gets one", "Everyone"],
          ["Runs on", "Universe AI, or your own key"],
          ["Looks", "Twelve colours"],
          ["Settings", "Look, Mind, Voice, Behavior, Permissions"],
        ]}
        links={[{ label: "Guide: your Brick", href: "/guide/your-brick" }, { label: "Universe AI and your own keys", href: "/guide/universe-ai" }]}
      />

      <PartRelated
        links={[
          { label: "Apps", href: "/features/apps", note: "Connect once, and choose which Bricks use it." },
          { label: "Artifacts", href: "/features/artifacts", note: "Ask for anything, keep what it makes." },
          { label: "Goals and tasks", href: "/features/goals-and-tasks", note: "Work that carries on while you are away." },
          { label: "More Bricks", href: "/features/recursive-bots", note: "A Brick for every job." },
        ]}
      />

      <PageClosing
        title={<>Your Brick is waiting.</>}
        body={<>Walk in and say hello. It is free to start.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Read the Guide', href: '/guide' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_brick'
      />
    </div>
  )
}
