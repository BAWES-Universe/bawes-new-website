import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BrickTemplatesPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Brick Templates"
        title={<>Borrow a great Brick. <span className="text-gradient-accent">Make it yours.</span></>}
        lead={<>Start a new Brick from a template someone shared. You get your own Brick, with its own name, memory and chats, and you can change anything after.</>}
        detail={[<>Built a good one? Share it as a template. Yours stays yours.</>]}
        scene="looks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source='feature_brick_templates'
      />

      <PartSteps
        eyebrow="Use one"
        title="A new Brick in three taps"
        steps={[
          { title: "Find a template", text: "Press New Brick and choose Start from a template. Look through Starred, Picks, Bricks you have met, Popular and Trending." },
          { title: "Look before you create", text: "See its look and personality, read its instructions, and see what it needs from you, such as your own App or a computer." },
          { title: "Create Brick", text: "Chat works right away. Connect what it needs when you are ready." },
        ]}
      />

      <PartCards
        eyebrow="Share yours"
        title="You share exactly what you choose"
        cards={[
          { icon: "ios_share", title: "Share as a template", text: "On your Brick's page, open Template and share it. People find it on your Brick's card and under Start from a template." },
          { icon: "visibility", title: "You see what goes", text: "Before you share, you read exactly what gets shared: its line, its personality and instructions, and the first thing to try. Nothing else leaves." },
          { icon: "lock", title: "What never goes", text: "What it remembers, its chats, your Apps, keys and files, and its computer. If something looks like a secret, it is held back until you take it out." },
          { icon: "schedule", title: "Routines arrive switched off", text: "Routines you send along run only after the new owner sets them up and turns them on." },
          { icon: "published_with_changes", title: "Updates are a choice", text: "Share your latest changes and people who used the template see Template updated. They pick what to take. Their Bricks never change by themselves." },
          { icon: "block", title: "Stop any time", text: "Stop sharing and nobody new can use it. Bricks already made from it stay as they are." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>A Brick made from a template says so on its page: the template it came from, and who made it.</>,
          <>A template never carries Apps. If its main job needs one, the new owner connects their own, and sees that before creating.</>,
          <>Star a template to keep it in your Starred list.</>,
        ]}
        facts={[
          ["Lists", "Starred, Picks, Bricks you have met, Popular, Trending"],
          ["Goes with it", "Look, personality, instructions, first thing to try, the routines you pick"],
          ["Never goes", "Memory, chats, Apps, keys, files, computer"],
          ["Updates", "Reviewed and picked by each owner"],
        ]}
        links={[{ label: "Brick", href: "/features/brick" }, { label: "More Bricks", href: "/features/recursive-bots" }]}
      />

      <PartRelated
        links={[
          { label: "Brick", href: "/features/brick", note: "Your own AI companion." },
          { label: "More Bricks", href: "/features/recursive-bots", note: "Ask your Brick for a helper." },
          { label: "Apps", href: "/features/apps", note: "What a new Brick connects for itself." },
          { label: "Goals and tasks", href: "/features/goals-and-tasks", note: "Routines a Brick keeps running." },
        ]}
      />

      <PageClosing
        title={<>Found a Brick you like?</>}
        body={<>Press Use template on its card and make your own.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_brick_templates'
      />
    </div>
  )
}
