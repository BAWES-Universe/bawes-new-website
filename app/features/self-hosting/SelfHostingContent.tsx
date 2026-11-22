import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function SelfHostingPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="Self-Hosting"
        title={<>Run your own <span className="text-gradient-accent">universe</span></>}
        lead={<>Run the whole of Universe on your own servers, with your data, your privacy and your rules.</>}
        detail={[<>Self-host the BAWES Universe stack on your own infrastructure with Docker Compose. Your people, your messages and your maps stay on your servers.</>]}
        scene="desks"
        actions={[{ label: 'View on GitHub', href: 'https://github.com/BAWES-Universe' }]}
        source="page_features_self_hosting"
      />

      <PartSteps
        eyebrow="How it works"
        title="A server, a domain and Docker"
        steps={[
          { title: "Get a server and a domain", text: "Voice and video only work over HTTPS, so your server needs a domain name. The certificates are made for you." },
          { title: "Fill in the settings file", text: "Copy the template, set your domain and your secrets." },
          { title: "Start it", text: "One Docker Compose command brings the game up. Add the other pieces as you need them." },
        ]}
      />

      <PartCards
        eyebrow="What you run"
        title="The pieces of a Universe"
        cards={[
          { icon: "sports_esports", title: "The game", text: "What people open in the browser, the server behind it, and map storage for the map editor." },
          { icon: "hub", title: "Orbit", text: "Accounts, universes, worlds, rooms, members and roles. It answers the game through the Admin API.", more: { label: "Admin API", href: "/features/admin-api" } },
          { icon: "videocam", title: "Voice and video", text: "Small conversations go browser to browser. LiveKit carries the bigger ones, and a TURN server helps people behind strict networks." },
          { icon: "chat", title: "Chat", text: "A Matrix server, Synapse, keeps direct messages and chat rooms.", more: { label: "Matrix chat", href: "/features/matrix-chat" } },
          { icon: "smart_toy", title: "AI bots", text: "The bot server runs your bots, on Universe AI providers you set or on keys people bring." },
          { icon: "badge", title: "Sign-in", text: "Any login service that speaks OpenID Connect.", more: { label: "OIDC Auth", href: "/features/oidc-auth" } },
        ]}
      />

      <PartBuilders
        title="Good to know before you start"
        body={[
          <>The game itself needs little. The servers that carry video, LiveKit and TURN, are the ones to size generously.</>,
          <>A reverse proxy, Traefik, sits in front and gets HTTPS certificates from Let&apos;s Encrypt. Redis keeps the values your map scripts save.</>,
          <>You can keep maps in the built-in map storage or serve them from any web server.</>,
        ]}
        facts={[
          ["Deploy with", "Docker Compose"],
          ["HTTPS", "Traefik and Let's Encrypt"],
          ["Video", "WebRTC, LiveKit, TURN"],
          ["Chat", "Matrix Synapse"],
          ["Sign-in", "OpenID Connect"],
        ]}
        links={[{ label: "Install guide", href: "https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/others/self-hosting/install.md" }, { label: "Docker Compose files", href: "https://github.com/BAWES-Universe/workadventure-universe/tree/universe/contrib/docker" }]}
      />

      <PartRelated
        links={[
          { label: "White label", href: "/features/white-label", note: "Your domain, your logo, your colours." },
          { label: "OIDC Auth", href: "/features/oidc-auth", note: "Sign in with the accounts people already have." },
          { label: "Admin API", href: "/features/admin-api", note: "Connect the game to your own member system." },
          { label: "Technology stack", href: "/features/tech-stack", note: "What Universe is made of." },
        ]}
      />

      <PageClosing
        title={<>Ready to deploy?</>}
        body={<>The install guide takes you through it step by step.</>}
        links={[{ label: 'Read the docs', href: 'https://github.com/BAWES-Universe' }, { label: 'Join the Discord', href: 'https://discord.gg/CXceJWnwNT' }]}
        source="page_features_self_hosting"
      />
    </main>
  );
}
