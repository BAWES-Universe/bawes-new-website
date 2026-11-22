import type { Metadata } from 'next'
import BroadcastingPageContent from './BroadcastingContent'

export const metadata: Metadata = {
  title: 'Broadcasting',
  description: 'Reach everyone at once: send a message, a voice note, or stream live audio and video across the entire universe. For virtual summits, concerts, and all-hands.',
  openGraph: {
    title: 'Broadcasting',
    description: 'Reach everyone at once: send a message, a voice note, or stream live audio and video across the entire universe. For virtual summits, concerts, and all-hands.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Broadcasting',
    description: 'Reach everyone at once: send a message, a voice note, or stream live audio and video across the entire universe. For virtual summits, concerts, and all-hands.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BroadcastingPage() {
  return <BroadcastingPageContent />
}
