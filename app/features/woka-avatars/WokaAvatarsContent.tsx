import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function WokaAvatarsPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Avatars"
        title={<>Pixel art. <span className="text-gradient-accent">Infinite personalities.</span></>}
        lead={<>Pick a colourful pixel-art avatar or build your own, change it whenever you like, and take it with you into every world.</>}
        detail={[<>Pipoya-style user avatars: colourful, expressive pixel art characters. Customize your look and express yourself in every world.</>]}
        scene="looks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_woka_avatars"
      />

      <PartSteps
        eyebrow="How it works"
        title="Ready-made, or made by you"
        steps={[
          { title: "Pick a ready-made avatar", text: "Choose one from the list and walk in." },
          { title: "Or build your own", text: "Go part by part: body, eyes, hair, clothes, hat and accessory." },
          { title: "Change it any time", text: "You wear the last avatar you picked, in every world." },
        ]}
      />

      <PartCards
        eyebrow="What you can do"
        title="A look that is yours"
        cards={[
          { icon: "checkroom", title: "Six parts to mix", text: "Body, eyes, hair, clothes, hat and accessory." },
          { icon: "casino", title: "Randomize", text: "Out of ideas? One button gives you a new look." },
          { icon: "pets", title: "A companion", text: "Bring a little companion that follows you around." },
          { icon: "badge", title: "Your name", text: "Your name floats above your avatar so people know who you are." },
          { icon: "smart_toy", title: "Bots wear them too", text: "AI bots use the same avatars, so they look like they belong.", more: { label: "Bot avatars", href: "/features/bot-avatars" } },
        ]}
      />

      <PartBuilders
        title="Layers of pixel art"
        body={[
          <>An avatar is a stack of small picture layers, one for each part. The server keeps the list of what people may pick, so nobody can load a picture of their own choosing.</>,
          <>When you host Universe yourself, you add your own sets in Orbit.</>,
        ]}
        facts={[
          ["Style", "Pipoya pixel art"],
          ["Parts", "Six"],
          ["Companions", "Yes"],
          ["Your own sets", "In Orbit"],
        ]}
        links={[{ label: "Avatar platform", href: "/features/avatar-platform" }]}
      />

      <PartRelated
        links={[
          { label: "Avatar platform", href: "/features/avatar-platform", note: "Where avatars are kept and managed." },
          { label: "Proximity chat", href: "/features/proximity-chat", note: "Walk up and talk." },
          { label: "Emoji reactions", href: "/features/emoji-reactions", note: "Say it with your avatar." },
          { label: "Start here", href: "/guide/start-here", note: "Your first five minutes, in the Guide." },
        ]}
      />

      <PageClosing
        title={<>Ready to enter the Universe?</>}
        body={<>Your adventure starts with your avatar.</>}
        links={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_woka_avatars"
      />
    </main>
  );
}
