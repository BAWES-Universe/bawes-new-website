import type { Metadata } from 'next'
import UseCaseEventsPageContent from './EventsContent'

export const metadata: Metadata = {
  title: 'Universe for Events',
  description: 'Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the universe with stage and audience zones, sponsor halls, and networking.',
  openGraph: {
    title: 'Universe for Events',
    description: 'Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the universe with stage and audience zones, sponsor halls, and networking.',
  },
  twitter: {
    title: 'Universe for Events',
    description: 'Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the universe with stage and audience zones, sponsor halls, and networking.',
  },
}

export default function UseCaseEventsPage() {
  return <UseCaseEventsPageContent />
}
