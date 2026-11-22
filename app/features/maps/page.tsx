import type { Metadata } from 'next'
import MapsPageContent from './MapsContent'

export const metadata: Metadata = {
  title: 'Maps',
  description: 'Maps are the structural foundation of the BAWES Universe. Organize them into universes, worlds and rooms, and build your own pixel-art maps in Tiled.',
  openGraph: {
    title: 'Maps',
    description: 'Maps are the structural foundation of the BAWES Universe. Organize them into universes, worlds and rooms, and build your own pixel-art maps in Tiled.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Maps',
    description: 'Maps are the structural foundation of the BAWES Universe. Organize them into universes, worlds and rooms, and build your own pixel-art maps in Tiled.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MapsPage() {
  return <MapsPageContent />
}
