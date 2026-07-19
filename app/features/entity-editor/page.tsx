import type { Metadata } from 'next'
import EntityEditorPageContent from './EntityEditorContent'

export const metadata: Metadata = {
  title: 'Entity Editor',
  description: 'Place and configure interactive objects on maps. Click an object to open a website, trigger a script, or start an interaction — all via the WAM format.',
  openGraph: {
    title: 'Entity Editor',
    description: 'Place and configure interactive objects on maps. Click an object to open a website, trigger a script, or start an interaction — all via the WAM format.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Entity Editor',
    description: 'Place and configure interactive objects on maps. Click an object to open a website, trigger a script, or start an interaction — all via the WAM format.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function EntityEditorPage() {
  return <EntityEditorPageContent />
}
