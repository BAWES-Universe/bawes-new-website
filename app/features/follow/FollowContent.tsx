import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function FollowPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Follow"
        title={<>Never lose sight of <span className="text-gradient-accent">your team</span></>}
        lead={<>Ask the people you are talking with to follow you. Whoever says yes walks behind you until they choose to stop.</>}
        detail={[<>Follow keeps a group together as you move through the map. Perfect for tours, escorts, and staying together in crowded spaces.</>]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_follow"
      />

      <PartSteps
        eyebrow="How it works"
        title="Ask, and lead the way"
        steps={[
          { title: "Ask", text: "While you are talking with people, choose Ask to follow." },
          { title: "They say yes", text: "Each person gets a question. Anyone who says yes starts following right away." },
          { title: "Walk", text: "Their avatars walk behind you, wherever you go." },
        ]}
      />

      <PartCards
        eyebrow="Good to know"
        title="Nobody is dragged along"
        cards={[
          { icon: "how_to_reg", title: "People choose", text: "Following only starts when someone says yes. If nobody answers, the request ends on its own." },
          { icon: "visibility", title: "You see who is with you", text: "Universe tells you who is following you, and tells them who they follow." },
          { icon: "logout", title: "Stop any time", text: "Anyone can stop following whenever they like, and walk on by themselves." },
        ]}
      />

      <PartBuilders
        title="A map script can start it too"
        body={[
          <>Following is part of the game, and the map scripting API has two calls for it. One asks everyone in the conversation to follow the player. The other ends it.</>,
        ]}
        facts={[
          ["Start", "proximityMeeting.followMe()"],
          ["End", "proximityMeeting.stopLeading()"],
          ["Where", "Map scripting API"],
        ]}
        links={[{ label: "Scripting API", href: "/features/scripting" }]}
      />

      <PartRelated
        links={[
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Teleport", href: "/features/teleport", note: "Jump straight to a place." },
          { label: "Megaphone", href: "/features/megaphone", note: "Speak to a whole audience." },
          { label: "Start here", href: "/guide/start-here", note: "Your first five minutes, in the Guide." },
        ]}
      />

      <PageClosing
        title={<>Ready to stay together?</>}
        body={<>Try it on your next tour.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_follow"
      />
    </div>
  )
}
