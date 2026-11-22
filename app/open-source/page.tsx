import type { Metadata } from 'next'
import OpenSourcePageContent from './OpenSourceContent'

export const metadata: Metadata = {
  title: 'Open Source',
  description: 'The entire BAWES codebase is open source. Audit every line, contribute pull requests, and follow the work on GitHub.',
  openGraph: {
    title: 'Open Source',
    description: 'The entire BAWES codebase is open source. Audit every line, contribute pull requests, and follow the work on GitHub.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Open Source',
    description: 'The entire BAWES codebase is open source. Audit every line, contribute pull requests, and follow the work on GitHub.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function OpenSourcePage() {
  return <OpenSourcePageContent />
}
