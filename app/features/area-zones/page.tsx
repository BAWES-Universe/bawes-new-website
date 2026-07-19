import type { Metadata } from 'next'
import AreaZonesPageContent from './AreaZonesContent'

export const metadata: Metadata = {
  title: 'Area Zones',
  description: 'Walk over a zone and something happens — open a website, play audio, teleport, start a meeting, or trigger a megaphone broadcast. 18+ zone properties.',
}

export default function AreaZonesPage() {
  return <AreaZonesPageContent />
}
