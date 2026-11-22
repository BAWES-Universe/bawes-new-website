import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function OrbitOperatorPageContent() {
  return (
<main className="pt-20 max-w-screen-xl mx-auto px-6">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Orbit Operator"
        eyebrow="Orbit"
        title={<>Your universe, <span className="text-gradient-accent">in command</span></>}
        lead={<>Orbit is where you run your universe: create worlds and rooms, invite people, give them roles and see who visits.</>}
        detail={[<>Orbit is the dashboard for your universe. It opens inside Universe, as a side panel or full screen, on a computer and on your phone.</>]}
        scene="desks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_orbit_operator"
      />

      <PartCards
        eyebrow="What you do in Orbit"
        title="Everything about your universe, in one place"
        cards={[
          { icon: "public", title: "Universes, worlds and rooms", text: "Create them, rename them, make them public or private, and delete them." },
          { icon: "dashboard_customize", title: "Rooms from a template", text: "Pick a ready-made map and you have a room. Switch the template later if you like.", more: { label: "Map templates", href: "/features/map-templates" } },
          { icon: "group_add", title: "Members and invitations", text: "Invite people to a world, change what they may do, or remove them." },
          { icon: "military_tech", title: "Roles", text: "Make roles with a name, a colour and a badge, and choose what each role may do." },
          { icon: "monitoring", title: "Visitors", text: "See who visited a universe, a world or a room." },
          { icon: "key", title: "AI keys", text: "Add your own AI and voice keys and lend them to a universe for its bots.", more: { label: "Bot provider config", href: "/features/bot-provider-config" } },
          { icon: "travel_explore", title: "Discover", text: "Browse public universes, worlds, rooms and people, and star the rooms you like." },
          { icon: "id_card", title: "Your visit card", text: "What other people see when they look you up." },
        ]}
      />

      <PartCards
        eyebrow="When you host Universe yourself"
        title="A few more tools for the host"
        cards={[
          { icon: "face", title: "Avatar sets", text: "Add your own avatars and companions, and choose who may wear them.", more: { label: "Avatar platform", href: "/features/avatar-platform" } },
          { icon: "auto_awesome", title: "Universe AI", text: "Set which AI providers answer when a bot runs on Universe AI, and see the usage." },
          { icon: "dns", title: "MCP servers", text: "Manage the tool servers bots can connect to.", more: { label: "Bot tool calling", href: "/features/bot-tools" } },
          { icon: "category", title: "Template library", text: "Manage the categories, templates and maps people can start a room from." },
        ]}
      />

      <PartBuilders
        title="Dashboard and Admin API in one"
        body={[
          <>Orbit is also the Admin API the game talks to. When someone opens a room, the game asks Orbit who they are and what they may do.</>,
          <>Orbit signs you in through the game, so there is no second password.</>,
        ]}
        facts={[
          ["Opens", "Inside Universe"],
          ["Views", "Side panel or full screen"],
          ["Built with", "Next.js and PostgreSQL"],
          ["Also is", "The Admin API"],
        ]}
        links={[{ label: "Admin API", href: "/features/admin-api" }, { label: "Orbit, step by step", href: "/guide/orbit" }]}
      />

      <PartRelated
        links={[
          { label: "Admin API", href: "/features/admin-api", note: "How the game and Orbit talk." },
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run Universe on your own servers." },
          { label: "Scripting API", href: "/features/scripting", note: "Code that runs inside a map." },
          { label: "Orbit, in the Guide", href: "/guide/orbit", note: "Your account, step by step." },
        ]}
      />

      <PageClosing
        title={<>Ready to take command?</>}
        body={<>Open Orbit from inside Universe and start with your first universe.</>}
        links={[{ label: 'Talk to us', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_features_orbit_operator"
      />
    </main>
  );
}
