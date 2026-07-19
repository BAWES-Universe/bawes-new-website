import type { Metadata } from 'next'
import OidcAuthPageContent from './OidcAuthContent'

export const metadata: Metadata = {
  title: 'OIDC Authentication',
  description: 'OpenID Connect authentication. Connect your existing SSO — Google, GitHub, Microsoft, or custom OIDC providers. Secure, decentralized, and seamless.',
}

export default function OidcAuthPage() {
  return <OidcAuthPageContent />
}
