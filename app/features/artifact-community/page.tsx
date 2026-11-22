import type { Metadata } from 'next'
import ArtifactCommunityPageContent from './ArtifactCommunityContent'

export const metadata: Metadata = {
  title: 'Artifact Community',
  description: 'Artifact Community in Universe: make an artifact public, feature your best on your own page, organize boards, and discover the apps, pages, documents and drawings other people made.',
  openGraph: {
    title: 'Artifact Community',
    description: 'Artifact Community in Universe: make an artifact public, feature your best on your own page, organize boards, and discover the apps, pages, documents and drawings other people made.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Artifact Community',
    description: 'Artifact Community in Universe: make an artifact public, feature your best on your own page, organize boards, and discover the apps, pages, documents and drawings other people made.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ArtifactCommunityPage() {
  return <ArtifactCommunityPageContent />
}
