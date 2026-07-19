import type { Metadata } from 'next'
import CommunicationContent from './CommunicationContent'

export const metadata: Metadata = {
  title: 'Communication Features',
  description: 'Proximity chat, text chat, Matrix federation, megaphone broadcasts, meeting rooms, screen sharing, and more — every way people talk inside Universe.',
  openGraph: {
    title: 'Communication Features',
    description: 'Proximity chat, text chat, Matrix federation, megaphone broadcasts, meeting rooms, screen sharing, and more — every way people talk inside Universe.',
  },
  twitter: {
    title: 'Communication Features',
    description: 'Proximity chat, text chat, Matrix federation, megaphone broadcasts, meeting rooms, screen sharing, and more — every way people talk inside Universe.',
  },
}

export default function Communication() {
  return <CommunicationContent />
}
