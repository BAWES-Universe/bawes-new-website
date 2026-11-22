import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
import { PartBuilders, PartCards, PartRelated, PartSteps } from '@/components/page/PageParts'

export default function OidcAuthPageContent() {
  return (
    <main className="relative z-10 pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="OIDC Auth"
        title={<>Your identity. <span className="text-gradient-accent">Your way.</span></>}
        lead={<>Let people sign in with the account they already have. Universe connects to your company login, or to any sign-in service that speaks OpenID Connect.</>}
        detail={[<>OpenID Connect authentication. Connect your existing SSO, such as Google, Microsoft, Okta, Keycloak or Authentik, or any custom OIDC provider.</>]}
        scene="desks"
        actions={[{ label: 'Start integrating', href: '/contact' }, { label: 'View docs', href: 'https://github.com/BAWES-Universe' }]}
        source="page_features_oidc_auth"
      />

      <PartSteps
        eyebrow="How it works"
        title="Three settings and a redirect address"
        steps={[
          { title: "Register Universe", text: "In your login service, add Universe as an application and give it the redirect address of your game." },
          { title: "Fill in three values", text: "The address of your login service, the client ID and the client secret." },
          { title: "People sign in", text: "They press sign in, land on your own login page, and come back to Universe signed in." },
        ]}
      />

      <PartCards
        eyebrow="What you can set"
        title="Your login, your rules"
        cards={[
          { icon: "key", title: "Any OpenID Connect provider", text: "Google, Microsoft, Okta, Keycloak, Authentik and every other service that follows the standard." },
          { icon: "diversity_3", title: "Social logins", text: "Want GitHub, Discord or others? Put an identity server such as Keycloak or Authentik in front and offer them all." },
          { icon: "person", title: "Names from your directory", text: "Choose which field becomes the name in Universe, and whether people may change it." },
          { icon: "sell", title: "Tags from your directory", text: "A field from your login service can carry tags. The game uses tags to decide who may do what." },
          { icon: "door_front", title: "Guests or members only", text: "Let visitors walk in without an account, or ask everyone to sign in first." },
          { icon: "translate", title: "Language", text: "Universe can start in the language your login service knows the person speaks." },
        ]}
      />

      <PartBuilders
        title="The standard flow"
        body={[
          <>Universe uses the Authorization Code flow with PKCE. It asks for the openid, email and profile scopes unless you set others.</>,
          <>The redirect address is the address of your game followed by /openid-callback.</>,
        ]}
        facts={[
          ["Protocol", "OpenID Connect"],
          ["Flow", "Authorization Code with PKCE"],
          ["Default scopes", "openid email profile"],
          ["Redirect", "/openid-callback"],
        ]}
        links={[{ label: "OpenID Connect guide", href: "https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/others/self-hosting/openid.md" }]}
      />

      <PartRelated
        links={[
          { label: "Self-hosting", href: "/features/self-hosting", note: "Run Universe on your own servers." },
          { label: "Admin API", href: "/features/admin-api", note: "Connect the game to your own member system." },
          { label: "White label", href: "/features/white-label", note: "Your domain, your logo, your colours." },
          { label: "All features", href: "/features-overview", note: "Everything Universe can do." },
        ]}
      />

      <PageClosing
        title={<>Ready to secure your world?</>}
        body={<>Let people sign in the way they already know.</>}
        links={[{ label: 'Get started', href: '/contact' }, { label: 'View documentation', href: 'https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer' }]}
        source="page_features_oidc_auth"
      />
    </main>
  );
}
