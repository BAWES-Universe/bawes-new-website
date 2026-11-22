import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function AvatarPlatformPageContent() {
  return (
    <main className="relative pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Avatar Platform"
        eyebrow="Avatar infrastructure"
        title={<>Identity <span className="text-gradient-accent">across worlds</span></>}
        lead={<>Your character goes with you: the same look and the same name in every universe you visit.</>}
        detail={[<>The Avatar Platform powers cross-world identity. It keeps your look with your account and decides which avatars each universe offers.</>]}
        scene="looks"
        actions={[{ label: 'Talk to us', href: '/contact' }, { label: 'View documentation', href: 'https://github.com/BAWES-Universe' }]}
        source="page_features_avatar_platform"
      />

      <PartCards
        eyebrow="For you"
        title="One you, everywhere"
        cards={[
          { icon: "person", title: "Saved with your account", text: "Pick an avatar once and you wear it in every world, on every device you sign in on." },
          { icon: "history", title: "Recent looks", text: "Universe remembers the avatars you wore lately, so going back is quick." },
          { icon: "sync", title: "Seen right away", text: "When you change your look, the people around you see it right away." },
        ]}
      />

      <PartCards
        eyebrow="For hosts"
        title="Decide what people can wear"
        cards={[
          { icon: "layers", title: "Avatar sets", text: "Group avatar parts and companions into sets, such as a default set, a zoo or museum staff." },
          { icon: "upload", title: "Your own art", text: "Upload the pictures for each layer and each companion." },
          { icon: "public", title: "Where a set shows up", text: "Offer a set everywhere, in one universe or in one world." },
          { icon: "verified_user", title: "Who may wear it", text: "Open a set to everyone, to people with a certain tag, or to people you name." },
          { icon: "smart_toy", title: "Sets for bots", text: "Choose which sets bots may wear.", more: { label: "Bot avatars", href: "/features/bot-avatars" } },
        ]}
      />

      <PartBuilders
        title="Checked by the server"
        body={[
          <>The game sends the names of the layers a person picked. The server checks that this person may wear them in this world before anyone sees them.</>,
          <>Avatar sets are managed in Orbit by the host of the installation.</>,
        ]}
        facts={[
          ["Kept in", "Orbit"],
          ["A set holds", "Layers and companions"],
          ["Shown in", "Everywhere, a universe or a world"],
          ["Checked", "On the server"],
        ]}
        links={[{ label: "Build and create", href: "/build" }, { label: "Orbit", href: "/features/orbit-operator" }]}
      />

      <PartRelated
        links={[
          { label: "Avatars", href: "/features/woka-avatars", note: "Pick or build your pixel-art avatar." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Build and create", href: "/build", note: "Everything for making rooms." },
          { label: "White label", href: "/features/white-label", note: "Your domain, your logo, your colours." },
        ]}
      />

      <PageClosing
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Talk to us', href: '/contact' }]}
        source="page_features_avatar_platform"
      />
    </main>
  );
}
