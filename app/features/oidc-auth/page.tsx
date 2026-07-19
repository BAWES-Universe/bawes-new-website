import type { Metadata } from 'next'
import OidcAuthPageContent from './OidcAuthContent'

export const metadata: Metadata = {
  title: 'OIDC Authentication',
  description: 'OpenID Connect authentication. Connect your existing SSO — Google, GitHub, Microsoft, or custom OIDC providers. Secure, decentralized, and seamless.',
  openGraph: {
    title: 'OIDC Authentication',
    description: 'OpenID Connect authentication. Connect your existing SSO — Google, GitHub, Microsoft, or custom OIDC providers. Secure, decentralized, and seamless.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'OIDC Authentication',
    description: 'OpenID Connect authentication. Connect your existing SSO — Google, GitHub, Microsoft, or custom OIDC providers. Secure, decentralized, and seamless.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function OidcAuthPage() {
  return <OidcAuthPageContent />
}
