import type { Metadata } from 'next'
import MapEditorPageContent from './MapEditorContent'

export const metadata: Metadata = {
  title: 'Inline Map Editor',
  description: 'Live map editing tools in the browser. Add areas, place objects, and see changes instantly, with no reload needed. A direct feedback loop for creators.',
  openGraph: {
    title: 'Inline Map Editor',
    description: 'Live map editing tools in the browser. Add areas, place objects, and see changes instantly, with no reload needed. A direct feedback loop for creators.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Inline Map Editor',
    description: 'Live map editing tools in the browser. Add areas, place objects, and see changes instantly, with no reload needed. A direct feedback loop for creators.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MapEditorPage() {
  return <MapEditorPageContent />
}
