import type { Metadata } from 'next'
import HowItWorksPageContent from './HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Universe is composed of universes, worlds, and rooms people move through — not interfaces people click through. Presence and context shape what you can do.',
  openGraph: {
    title: 'How It Works',
    description: 'Universe is composed of universes, worlds, and rooms people move through — not interfaces people click through. Presence and context shape what you can do.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'How It Works',
    description: 'Universe is composed of universes, worlds, and rooms people move through — not interfaces people click through. Presence and context shape what you can do.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function HowItWorksPage() {
  return <HowItWorksPageContent />
}
