import type { Metadata } from 'next'
import ManifestoPageContent from './ManifestoContent'

export const metadata: Metadata = {
  title: 'Manifesto',
  description: 'The BAWES Universe manifesto: we are not building an app, we are building a universe — a people-first environment that turns ideas into action.',
  openGraph: {
    title: 'Manifesto',
    description: 'The BAWES Universe manifesto: we are not building an app, we are building a universe — a people-first environment that turns ideas into action.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Manifesto',
    description: 'The BAWES Universe manifesto: we are not building an app, we are building a universe — a people-first environment that turns ideas into action.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ManifestoPage() {
  return <ManifestoPageContent />
}
