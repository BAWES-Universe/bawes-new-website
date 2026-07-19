import type { Metadata } from 'next'
import TeleportPageContent from './TeleportContent'

export const metadata: Metadata = {
  title: 'Teleport',
  description: 'Teleport between universes, worlds, and rooms via area zone properties. Set a destination coordinate on any zone — walk in and arrive somewhere else.',
  openGraph: {
    title: 'Teleport',
    description: 'Teleport between universes, worlds, and rooms via area zone properties. Set a destination coordinate on any zone — walk in and arrive somewhere else.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Teleport',
    description: 'Teleport between universes, worlds, and rooms via area zone properties. Set a destination coordinate on any zone — walk in and arrive somewhere else.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function TeleportPage() {
  return <TeleportPageContent />
}
