import type { Metadata } from 'next'
import AvailabilityStatusPageContent from './AvailabilityStatusContent'

export const metadata: Metadata = {
  title: 'Availability Status',
  description: "Set your status — Online, Busy, or Away. Syncs across platforms so everyone knows when you're available in the digital frontier.",
}

export default function AvailabilityStatusPage() {
  return <AvailabilityStatusPageContent />
}
