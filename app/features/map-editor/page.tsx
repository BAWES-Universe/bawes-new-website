import type { Metadata } from 'next'
import MapEditorPageContent from './MapEditorContent'

export const metadata: Metadata = {
  title: 'Inline Map Editor',
  description: 'Live map editing tools in the browser. Modify tiles, add zones, place entities, and see changes instantly — no reload needed.',
}

export default function MapEditorPage() {
  return <MapEditorPageContent />
}
