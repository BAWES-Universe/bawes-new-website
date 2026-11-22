import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function AdminApiPageContent() {
  return (
<main className="pt-20 relative">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="Admin API"
        title={<>Administer <span className="text-gradient-accent">at scale</span></>}
        lead={<>The Admin API is how the game asks who someone is, where they may go and what they may do. Orbit answers it out of the box, or your own system can.</>}
        detail={[<>A REST API between the game and your member system, for managing users, worlds, rooms and access programmatically. Connect Universe to your own database.</>]}
        scene="desks"
        actions={[{ label: 'Ask for API access', href: '/contact' }]}
        source="page_features_admin_api"
      />

      <PartSteps
        eyebrow="How it works"
        title="The game asks, your system answers"
        steps={[
          { title: "Someone opens a room link", text: "The game asks the Admin API which map belongs to that address." },
          { title: "The game asks about the person", text: "Who is this, may they enter, and which tags do they carry?" },
          { title: "Your answer decides", text: "The person walks in with the rights you gave, or is told why not." },
        ]}
      />

      <PartCards
        eyebrow="What it lets you do"
        title="Your members, your rules"
        cards={[
          { icon: "database", title: "Use your own database", text: "Keep members where they already live and let Universe ask for them." },
          { icon: "sell", title: "Give special rights", text: "Send tags with a person, and the game treats them as an admin, an editor or a member." },
          { icon: "add_home", title: "Make rooms on the fly", text: "Answer for an address that did not exist a minute ago, and it is a room." },
          { icon: "link", title: "Pretty addresses", text: "Rooms get clean, readable links." },
          { icon: "block", title: "Bans and reports", text: "The game tells your system when someone is reported, and asks it who is banned." },
          { icon: "face", title: "Avatars", text: "Decide which avatars and companions each person may pick.", more: { label: "Avatar platform", href: "/features/avatar-platform" } },
        ]}
      />

      <PartBuilders
        title="The game calls you"
        body={[
          <>Your site does not call the game. The game calls your Admin API whenever it needs an answer, with plain web requests and JSON.</>,
          <>Every call carries a secret token that you set on both sides. When you host Universe yourself, the API runs on your own servers and the data stays there.</>,
          <>Orbit is a complete Admin API with a dashboard on top. Use it as it is, change it, or write your own.</>,
        ]}
        facts={[
          ["Style", "REST and JSON"],
          ["Direction", "The game calls your API"],
          ["Protected by", "A secret token"],
          ["Ready-made", "Orbit"],
        ]}
        links={[{ label: "Admin API guide", href: "https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/others/self-hosting/adminAPI.md" }]}
      />

      <PartRelated
        links={[
          { label: "Orbit", href: "/features/orbit-operator", note: "The ready-made dashboard and Admin API." },
          { label: "Scripting API", href: "/features/scripting", note: "Code that runs inside a map." },
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run Universe on your own servers." },
          { label: "OIDC Auth", href: "/features/oidc-auth", note: "Sign in with the accounts people already have." },
        ]}
      />

      <PageClosing
        title={<>Ready to automate your universe?</>}
        body={<>Start with Orbit, or connect your own system through the Admin API.</>}
        links={[{ label: 'Ask for API access', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_features_admin_api"
      />
    </main>
  );
}
