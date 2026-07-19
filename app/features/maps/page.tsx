import type { Metadata } from 'next'
import MapsPageContent from './MapsContent'

export const metadata: Metadata = {
  title: 'Maps',
  description: 'Maps are the structural foundation of Universe. Upload pixel-art maps, organize them into worlds and rooms, and build complex spatial hierarchies.',
}

export default function MapsPage() {
  return <MapsPageContent />
}
