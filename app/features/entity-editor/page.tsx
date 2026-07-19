import type { Metadata } from 'next'
import EntityEditorPageContent from './EntityEditorContent'

export const metadata: Metadata = {
  title: 'Entity Editor',
  description: 'Place and configure interactive objects on maps. Click an object to open a website, trigger a script, or start an interaction — all via the WAM format.',
}

export default function EntityEditorPage() {
  return <EntityEditorPageContent />
}
