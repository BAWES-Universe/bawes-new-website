import type { Metadata } from 'next'
import BuildContent from './BuildContent'

export const metadata: Metadata = {
  title: 'Build & Create Features',
  description: 'Maps, map templates, the inline map editor, area zones, the entity editor, the scripting API, teleport, search, and the avatar platform — everything for building worlds.',
  openGraph: {
    title: 'Build & Create Features',
    description: 'Maps, map templates, the inline map editor, area zones, the entity editor, the scripting API, teleport, search, and the avatar platform — everything for building worlds.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Build & Create Features',
    description: 'Maps, map templates, the inline map editor, area zones, the entity editor, the scripting API, teleport, search, and the avatar platform — everything for building worlds.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function Build() {
  return <BuildContent />
}
