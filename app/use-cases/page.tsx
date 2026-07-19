import type { Metadata } from 'next'
import UseCasesPageContent from './UseCasesContent'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Universe adapts to what you are building — work, school, community, market, and commerce. Pick your path and see what is possible.',
  openGraph: {
    title: 'Use Cases',
    description: 'Universe adapts to what you are building — work, school, community, market, and commerce. Pick your path and see what is possible.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Use Cases',
    description: 'Universe adapts to what you are building — work, school, community, market, and commerce. Pick your path and see what is possible.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCasesPage() {
  return <UseCasesPageContent />
}
