import type { Metadata } from 'next'
import MeetingRoomsPageContent from './MeetingRoomsContent'

export const metadata: Metadata = {
  title: 'Meeting Rooms',
  description: 'Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction. Audio and video stream only to those inside.',
  openGraph: {
    title: 'Meeting Rooms',
    description: 'Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction. Audio and video stream only to those inside.',
  },
  twitter: {
    title: 'Meeting Rooms',
    description: 'Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction. Audio and video stream only to those inside.',
  },
}

export default function MeetingRoomsPage() {
  return <MeetingRoomsPageContent />
}
