import type { Metadata } from 'next'
import PlatformContent from './PlatformContent'

export const metadata: Metadata = {
  title: 'Platform Features',
  description: 'Self-hosting, the admin API, OIDC single sign-on, white-label branding, and the underlying technology stack — the platform that runs Universe.',
  openGraph: {
    title: 'Platform Features',
    description: 'Self-hosting, the admin API, OIDC single sign-on, white-label branding, and the underlying technology stack — the platform that runs Universe.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Platform Features',
    description: 'Self-hosting, the admin API, OIDC single sign-on, white-label branding, and the underlying technology stack — the platform that runs Universe.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function Platform() {
  return <PlatformContent />
}
