import type { Metadata } from 'next'
import AreaZonesPageContent from './AreaZonesContent'

export const metadata: Metadata = {
  title: 'Area Zones',
  description: 'Walk into a zone and something happens: open a website, play audio, teleport to another room, start a meeting, or speak from a stage. All set up in the map editor.',
  openGraph: {
    title: 'Area Zones',
    description: 'Walk into a zone and something happens: open a website, play audio, teleport to another room, start a meeting, or speak from a stage. All set up in the map editor.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Area Zones',
    description: 'Walk into a zone and something happens: open a website, play audio, teleport to another room, start a meeting, or speak from a stage. All set up in the map editor.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AreaZonesPage() {
  return <AreaZonesPageContent />
}
