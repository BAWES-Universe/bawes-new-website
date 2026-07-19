import type { Metadata } from 'next'
import AreaZonesPageContent from './AreaZonesContent'

export const metadata: Metadata = {
  title: 'Area Zones',
  description: 'Walk over a zone and something happens — open a website, play audio, teleport, start a meeting, or trigger a megaphone broadcast. 18+ zone properties.',
  openGraph: {
    title: 'Area Zones',
    description: 'Walk over a zone and something happens — open a website, play audio, teleport, start a meeting, or trigger a megaphone broadcast. 18+ zone properties.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Area Zones',
    description: 'Walk over a zone and something happens — open a website, play audio, teleport, start a meeting, or trigger a megaphone broadcast. 18+ zone properties.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AreaZonesPage() {
  return <AreaZonesPageContent />
}
