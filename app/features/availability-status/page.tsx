import type { Metadata } from 'next'
import AvailabilityStatusPageContent from './AvailabilityStatusContent'

export const metadata: Metadata = {
  title: 'Availability Status',
  description: "Set your status: Online, Away, Back in a moment, Busy, or Do not disturb, so everyone knows when you are available.",
  openGraph: {
    title: 'Availability Status',
    description: "Set your status: Online, Away, Back in a moment, Busy, or Do not disturb, so everyone knows when you are available.",
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Availability Status',
    description: "Set your status: Online, Away, Back in a moment, Busy, or Do not disturb, so everyone knows when you are available.",
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AvailabilityStatusPage() {
  return <AvailabilityStatusPageContent />
}
