import type { Metadata } from 'next'
import CommunicationContent from './CommunicationContent'

export const metadata: Metadata = {
  title: 'Communication Features',
  description: 'Proximity chat, text chat, Matrix federation, megaphone broadcasts, meeting rooms, screen sharing, and more — every way people talk inside Universe.',
  openGraph: {
    title: 'Communication Features',
    description: 'Proximity chat, text chat, Matrix federation, megaphone broadcasts, meeting rooms, screen sharing, and more — every way people talk inside Universe.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Communication Features',
    description: 'Proximity chat, text chat, Matrix federation, megaphone broadcasts, meeting rooms, screen sharing, and more — every way people talk inside Universe.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function Communication() {
  return <CommunicationContent />
}
