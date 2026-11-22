import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function BrickComputerPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="A Computer for Your Brick"
        title={<>Give your Brick <span className="text-gradient-accent">its own computer.</span></>}
        lead={<>With its own computer, your Brick does the jobs no App can do. It uses real websites and real files, the way you would, and keeps going while you are away.</>}
        detail={[<>Watch it live, and take over whenever you want.</>]}
        scene="desks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source='feature_brick_computer'
      />

      <PartSteps
        eyebrow="How it works"
        title="It wakes when a job needs it"
        steps={[
          { title: "Give it a computer", text: "On your Brick’s page, open Computer and give it one." },
          { title: "Hand it a job", text: "It wakes by itself when a job or a goal needs it, and rests when the job is done." },
          { title: "Watch, then take over", text: "Tap Watch to see its screen. Take over to pay, submit or fix something, then hand back." },
        ]}
      />

      <PartCards
        eyebrow="What it is for"
        title="The jobs no App can do"
        cards={[
          { icon: "assignment", title: "Forms and applications", text: "Get a visa form ready from your passport and ticket." },
          { icon: "flight", title: "Bookings and orders", text: "Find the flight or the table and get the checkout ready." },
          { icon: "language", title: "Sites that have no app", text: "Work a portal step by step, like a person would." },
          { icon: "folder_code", title: "Files and code", text: "Turn 40 receipts into one sheet, or build and run code." },
        ]}
      />

      <PartCards
        eyebrow="You stay in charge"
        title="Your details and your money stay with you"
        cards={[
          { icon: "pan_tool", title: "It stops before your details", text: "Your Brick stops before your details reach a site, and you take over." },
          { icon: "credit_card", title: "The last step is yours", text: "You pay and you submit. Your Brick cannot see your card or what you type." },
          { icon: "edit_note", title: "Fill in my details", text: "When a page is ready for your details, one tap fills them in. Each page after that asks again." },
          { icon: "folder", title: "Its files are kept", text: "Files stay between jobs. Browse and download them from your Brick’s page." },
          { icon: "mark_chat_read", title: "It reports back", text: "What it made lands in your chat, and stays under Files on your Brick’s page." },
          { icon: "power_settings_new", title: "Turn it off any time", text: "Its files are kept, and your Brick goes back to answers and Apps." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>The computer counts time only while it works, never while it rests.</>,
          <>Connect GitHub and your Brick can work on your code there. What it pushes shows under your name.</>,
          <>While you are in control, your Brick cannot see or type.</>,
        ]}
        facts={[
          ["Wakes", "By itself, when a job needs it"],
          ["Watch", "Live, from the chat"],
          ["Take over", "Any time"],
          ["Files", "Kept between jobs"],
        ]}
        links={[{ label: "Brick", href: "/features/brick" }, { label: "Apps", href: "/features/apps" }]}
      />

      <PartRelated
        links={[
          { label: "Brick", href: "/features/brick", note: "Your own AI companion." },
          { label: "Goals and tasks", href: "/features/goals-and-tasks", note: "Jobs that carry on while you are away." },
          { label: "Apps", href: "/features/apps", note: "For everything that does have an App." },
          { label: "Bot file parsing", href: "/features/bot-file-parsing", note: "Hand it a file to read." },
        ]}
      />

      <PageClosing
        title={<>Got a job no App can do?</>}
        body={<>Give your Brick a computer and hand it over.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_brick_computer'
      />
    </div>
  )
}
