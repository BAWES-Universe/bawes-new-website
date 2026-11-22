import type { Metadata } from 'next'
import SearchablePageContent from './SearchableContent'

export const metadata: Metadata = {
  title: 'Searchable',
  description: 'Make areas and entities discoverable. Tag any zone or object as searchable so users can find it on the map and walk straight to it.',
  openGraph: {
    title: 'Searchable',
    description: 'Make areas and entities discoverable. Tag any zone or object as searchable so users can find it on the map and walk straight to it.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Searchable',
    description: 'Make areas and entities discoverable. Tag any zone or object as searchable so users can find it on the map and walk straight to it.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function SearchablePage() {
  return <SearchablePageContent />
}
