import type { Metadata } from 'next'
import ArtifactsPageContent from './ArtifactsContent'

export const metadata: Metadata = {
  title: 'Artifacts',
  description: 'Artifacts in Universe: ask an AI resident for a page, a mini app, a document or a drawing. Every change is kept as a version, and you choose who can open it, share it by link or publish it.',
  openGraph: {
    title: 'Artifacts',
    description: 'Artifacts in Universe: ask an AI resident for a page, a mini app, a document or a drawing. Every change is kept as a version, and you choose who can open it, share it by link or publish it.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Artifacts',
    description: 'Artifacts in Universe: ask an AI resident for a page, a mini app, a document or a drawing. Every change is kept as a version, and you choose who can open it, share it by link or publish it.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ArtifactsPage() {
  return <ArtifactsPageContent />
}
