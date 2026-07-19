import type { Metadata } from 'next'
import SearchablePageContent from './SearchableContent'

export const metadata: Metadata = {
  title: 'Searchable',
  description: 'Make areas and entities discoverable in Orbit search. Tag any zone or object as searchable so users can find it from anywhere in your universe.',
  openGraph: {
    title: 'Searchable',
    description: 'Make areas and entities discoverable in Orbit search. Tag any zone or object as searchable so users can find it from anywhere in your universe.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Searchable',
    description: 'Make areas and entities discoverable in Orbit search. Tag any zone or object as searchable so users can find it from anywhere in your universe.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function SearchablePage() {
  return <SearchablePageContent />
}
