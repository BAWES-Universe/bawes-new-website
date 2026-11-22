import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated } from '@/components/page/PageParts'

export default function WhiteLabelPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="White Label"
        title={<>Your brand. <span className="text-gradient-accent">Your universe.</span></>}
        lead={<>Host Universe yourself and use your own web address, logo and colours. People see your brand, not ours.</>}
        detail={[<>Custom domain, logos and branding for your own Universe instance. White-label the experience so your users see your brand.</>]}
        scene="looks"
        actions={[{ label: 'Talk to us', href: '/contact' }, { label: 'Self-hosting', href: '/features/self-hosting' }]}
        source="page_features_white_label"
      />

      <PartCards
        eyebrow="What you can brand"
        title="Your name on the door"
        cards={[
          { icon: "language", title: "Your domain", text: "Universe lives at your own address." },
          { icon: "hourglass_top", title: "Loading logo", text: "Your logo while a room loads." },
          { icon: "login", title: "Sign-in logo", text: "Your logo on the first screen people see." },
          { icon: "palette", title: "Colours", text: "Your main colour and your background colour." },
          { icon: "visibility_off", title: "No powered-by line", text: "The line that names the software can be switched off." },
          { icon: "face", title: "Your own avatars", text: "Add your own avatar sets, such as staff outfits or a mascot.", more: { label: "Avatar platform", href: "/features/avatar-platform" } },
          { icon: "map", title: "Your own maps", text: "Build rooms that look like your offices, your campus or your shop.", more: { label: "Map editor", href: "/features/map-editor" } },
          { icon: "badge", title: "Your own sign-in", text: "People sign in on your login page, with your accounts.", more: { label: "OIDC Auth", href: "/features/oidc-auth" } },
        ]}
      />

      <PartBuilders
        title="Where the branding lives"
        body={[
          <>The game asks the Admin API how a room should look: which logos to show, which colours to use, and whether to show the powered-by line. In Orbit those answers are a few lines and two image files.</>,
          <>The code is open, so anything beyond that is yours to change.</>,
          <>On bawes.net every universe carries the Universe look. Your own brand needs your own installation.</>,
        ]}
        facts={[
          ["Domain", "Yours"],
          ["Logos", "Loading and sign-in"],
          ["Colours", "Main and background"],
          ["Needs", "Your own installation"],
        ]}
        links={[{ label: "Self-hosting", href: "/features/self-hosting" }, { label: "WorkAdventure fork", href: "/workadventure-fork" }]}
      />

      <PartRelated
        links={[
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run Universe on your own servers." },
          { label: "WorkAdventure fork", href: "/workadventure-fork", note: "The open source project Universe is built on." },
          { label: "OIDC Auth", href: "/features/oidc-auth", note: "Sign in with the accounts people already have." },
          { label: "All features", href: "/features-overview", note: "Everything Universe can do." },
        ]}
      />

      <PageClosing
        title={<>Make it yours</>}
        body={<>Tell us what you have in mind, or start with the self-hosting guide.</>}
        links={[{ label: 'Talk to us', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_features_white_label"
      />
    </main>
  );
}
