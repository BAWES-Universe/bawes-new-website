import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function UseCaseCommunityPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="For Community"
        title={<>Spaces where <span className="text-gradient-accent">communities</span> come alive</>}
        lead={<>Hangouts, gaming groups, fan communities and meetups. Build a space where people actually want to spend time.</>}
        scene="fire"
        actions={[{ label: 'Create your space', href: '/contact' }, { label: 'How it works', href: '/how-it-works' }]}
        source="page_use_cases_community"
      />

      <PartSteps
        eyebrow="How it works"
        title="A home that is always open"
        steps={[
          { title: "Make your world", text: "Create a world for your community and build its rooms, or start from a template." },
          { title: "Invite your people", text: "Send invitations and give members roles." },
          { title: "Leave the door open", text: "The space is always there. People come and go across time zones, and the chat keeps its history." },
        ]}
      />

      <PartCards
        eyebrow="Made for belonging"
        title="What keeps people coming back"
        cards={[
          { icon: "map", title: "Your own rooms", text: "Design the space with the map editor: areas, objects, sounds and places to gather.", more: { label: "Map editor", href: "/features/map-editor" } },
          { icon: "military_tech", title: "Roles and badges", text: "Give people roles with a name, a colour and a badge, and choose what each role may do." },
          { icon: "smart_toy", title: "AI bots", text: "Greeters, guides and helpers that live in your space and talk with members.", more: { label: "AI bots", href: "/ai-bots" } },
          { icon: "campaign", title: "Reach everyone", text: "Broadcast a message, a voice note or go live, to one place or the whole universe.", more: { label: "Broadcasting", href: "/features/broadcasting" } },
          { icon: "mic", title: "A stage", text: "Put a stage and an audience area in a room. People on the stage are heard by the whole audience.", more: { label: "Megaphone", href: "/features/megaphone" } },
          { icon: "chat", title: "Chat that stays", text: "Chat rooms and direct messages run on Matrix and keep their history.", more: { label: "Matrix chat", href: "/features/matrix-chat" } },
        ]}
      />

      <PartCards
        eyebrow="Every community has a home"
        title="From gaming guilds to knitting clubs"
        cards={[
          { icon: "sports_esports", title: "Gaming communities", text: "Game nights, watch parties and rooms to find a group, with voice in the same space." },
          { icon: "star", title: "Fan communities", text: "Watch parties, listening sessions and creative showcases." },
          { icon: "work", title: "Professional networks", text: "Industry meetups, alumni groups and networking that feels natural." },
        ]}
      />

      <PartRelated
        links={[
          { label: "Broadcasting", href: "/features/broadcasting", note: "Speak to a whole room or universe." },
          { label: "User directory", href: "/features/user-directory", note: "See who is around." },
          { label: "Map templates", href: "/features/map-templates", note: "Start a room from a ready-made map." },
          { label: "How it works", href: "/how-it-works", note: "Universe in a few steps." },
        ]}
      />

      <PageClosing
        title={<>Give your community a home</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Create your space', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_community"
      />
    </main>
  );
}
