import type { Metadata } from 'next'
import MeetingRoomsPageContent from './MeetingRoomsContent'

export const metadata: Metadata = {
  title: 'Meeting Rooms',
  description: 'Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction. Audio and video stream only to those inside.',
  openGraph: {
    title: 'Meeting Rooms',
    description: 'Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction. Audio and video stream only to those inside.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Meeting Rooms',
    description: 'Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction. Audio and video stream only to those inside.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MeetingRoomsPage() {
  return <MeetingRoomsPageContent />
}
