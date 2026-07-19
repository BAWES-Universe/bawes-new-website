import type { Metadata } from 'next'
import MapTemplatesPageContent from './MapTemplatesContent'

export const metadata: Metadata = {
  title: 'Map Templates',
  description: 'Pre-built room layouts for common use cases — office floors, conference rooms, auditoriums, lounges, and event spaces. Extend or customize.',
}

export default function MapTemplatesPage() {
  return <MapTemplatesPageContent />
}
