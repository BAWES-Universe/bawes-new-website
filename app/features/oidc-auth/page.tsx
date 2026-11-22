import type { Metadata } from 'next'
import OidcAuthPageContent from './OidcAuthContent'

export const metadata: Metadata = {
  title: 'OIDC Authentication',
  description: 'OpenID Connect authentication. Connect your existing SSO: Google, Microsoft, or custom OIDC providers. GitHub and other social logins work through an identity server such as Keycloak or Authentik.',
  openGraph: {
    title: 'OIDC Authentication',
    description: 'OpenID Connect authentication. Connect your existing SSO: Google, Microsoft, or custom OIDC providers. GitHub and other social logins work through an identity server such as Keycloak or Authentik.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'OIDC Authentication',
    description: 'OpenID Connect authentication. Connect your existing SSO: Google, Microsoft, or custom OIDC providers. GitHub and other social logins work through an identity server such as Keycloak or Authentik.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function OidcAuthPage() {
  return <OidcAuthPageContent />
}
