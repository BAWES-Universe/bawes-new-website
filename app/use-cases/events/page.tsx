import type { Metadata } from 'next'
import UseCaseEventsPageContent from './EventsContent'

export const metadata: Metadata = {
  title: 'Universe for Events',
  description: 'Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the universe with stage and audience zones, sponsor halls, and networking.',
  openGraph: {
    title: 'Universe for Events',
    description: 'Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the universe with stage and audience zones, sponsor halls, and networking.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Events',
    description: 'Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the universe with stage and audience zones, sponsor halls, and networking.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseEventsPage() {
  return <UseCaseEventsPageContent />
}
