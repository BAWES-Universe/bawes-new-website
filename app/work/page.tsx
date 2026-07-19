import type { Metadata } from 'next'
import WorkContent from './WorkContent'

export const metadata: Metadata = {
  title: 'Work With Universe',
  description: 'Discover and connect powerful components to enhance your Universe experience — bots, maps, communication, and platform tools.',
  openGraph: {
    title: 'Work With Universe',
    description: 'Discover and connect powerful components to enhance your Universe experience — bots, maps, communication, and platform tools.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Work With Universe',
    description: 'Discover and connect powerful components to enhance your Universe experience — bots, maps, communication, and platform tools.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function Work() {
  return <WorkContent />
}
