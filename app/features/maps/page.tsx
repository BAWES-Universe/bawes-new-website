import type { Metadata } from 'next'
import MapsPageContent from './MapsContent'

export const metadata: Metadata = {
  title: 'Maps',
  description: 'Maps are the structural foundation of Universe. Upload pixel-art maps, organize them into worlds and rooms, and build complex spatial hierarchies.',
  openGraph: {
    title: 'Maps',
    description: 'Maps are the structural foundation of Universe. Upload pixel-art maps, organize them into worlds and rooms, and build complex spatial hierarchies.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Maps',
    description: 'Maps are the structural foundation of Universe. Upload pixel-art maps, organize them into worlds and rooms, and build complex spatial hierarchies.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MapsPage() {
  return <MapsPageContent />
}
