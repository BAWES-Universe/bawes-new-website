import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function ArtifactCommunityPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }, { label: 'Artifacts', href: '/features/artifacts' }]}
        here="Community"
        title={<>Show your work. <span className="text-gradient-accent">Find everyone else’s.</span></>}
        lead={<>Make an artifact public and it goes on your page, where anyone can find it. Browse what other people made in Community.</>}
        detail={[<>Public is your choice, one artifact at a time. Everything else stays where it was.</>]}
        scene="market"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source='feature_artifact_community'
      />

      <PartSteps
        eyebrow="How it works"
        title="From your chat to your page"
        steps={[
          { title: "Make it public", text: "In Share, choose Public. Only you can do this for your artifact. A bot never can." },
          { title: "Feature your best", text: "Pin your favourites to the top of your page." },
          { title: "Browse Community", text: "Open Artifacts and look through Community: Featured, New and Popular, or by kind." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="A home for what people make"
        cards={[
          { icon: "account_box", title: "Your page", text: "Everything you made public, with Featured first. You also see your private ones there, each marked with who can see it." },
          { icon: "person_search", title: "Other people’s pages", text: "Tap a maker’s name to open their page. One Profile button takes you to them in Orbit, to walk to them or add them as a friend." },
          { icon: "dashboard", title: "Boards", text: "Group artifacts on boards you name, public or not. Save someone else’s public artifact to a board of yours." },
          { icon: "image", title: "Covers", text: "Every artifact gets a picture: on its card, in the chat, and when its link is shared." },
          { icon: "content_copy", title: "Make a copy", text: "Copy a public artifact and the copy is yours, with a line that says where it came from." },
          { icon: "flag", title: "Report", text: "Report anything that tricks people, is hateful, or is someone else’s work. A person looks at every report." },
        ]}
      />

      <PartBuilders
        title="Good to know"
        body={[
          <>A link is unlisted: only people you hand it to find it. Public is listed on your page and can appear in Community.</>,
          <>While an artifact is public, only its owner can ask a bot for changes, so nobody else can change what is on your page.</>,
          <>Only opens by signed-in people count toward Popular, and your own never do.</>,
        ]}
        facts={[
          ["Levels", "Chat, link, public"],
          ["Who can publish", "Signed-in owners"],
          ["Community", "Featured, New, Popular"],
          ["Kinds", "Apps, Pages, Docs, Drawings"],
        ]}
        links={[{ label: "Artifacts", href: "/features/artifacts" }, { label: "Guide: artifacts", href: "/guide/artifacts" }]}
      />

      <PartRelated
        links={[
          { label: "Artifacts", href: "/features/artifacts", note: "Ask for anything, keep what it makes." },
          { label: "Brick templates", href: "/features/brick-templates", note: "Share a whole Brick, not only what it made." },
          { label: "User directory", href: "/features/user-directory", note: "Find the people behind the work." },
          { label: "Orbit", href: "/features/orbit-operator", note: "Your universes, worlds and rooms." },
        ]}
      />

      <PageClosing
        title={<>Made something good?</>}
        body={<>Make it public and put it at the top of your page.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source='feature_artifact_community'
      />
    </div>
  )
}
