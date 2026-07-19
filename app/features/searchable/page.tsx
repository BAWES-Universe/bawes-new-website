import type { Metadata } from 'next'
import SearchablePageContent from './SearchableContent'

export const metadata: Metadata = {
  title: 'Searchable',
  description: 'Make areas and entities discoverable in Orbit search. Tag any zone or object as searchable so users can find it from anywhere in your universe.',
}

export default function SearchablePage() {
  return <SearchablePageContent />
}
