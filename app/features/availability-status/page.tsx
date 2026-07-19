import type { Metadata } from 'next'
import AvailabilityStatusPageContent from './AvailabilityStatusContent'

export const metadata: Metadata = {
  title: 'Availability Status',
  description: "Set your status — Online, Busy, or Away. Syncs across platforms so everyone knows when you're available in the digital frontier.",
  openGraph: {
    title: 'Availability Status',
    description: "Set your status — Online, Busy, or Away. Syncs across platforms so everyone knows when you're available in the digital frontier.",
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Availability Status',
    description: "Set your status — Online, Busy, or Away. Syncs across platforms so everyone knows when you're available in the digital frontier.",
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AvailabilityStatusPage() {
  return <AvailabilityStatusPageContent />
}
