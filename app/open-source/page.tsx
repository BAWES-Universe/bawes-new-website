import type { Metadata } from 'next'
import OpenSourcePageContent from './OpenSourceContent'

export const metadata: Metadata = {
  title: 'Open Source',
  description: 'The entire BAWES codebase is MIT licensed and open source. Audit every line, contribute pull requests, and follow our transparent roadmap.',
  openGraph: {
    title: 'Open Source',
    description: 'The entire BAWES codebase is MIT licensed and open source. Audit every line, contribute pull requests, and follow our transparent roadmap.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Open Source',
    description: 'The entire BAWES codebase is MIT licensed and open source. Audit every line, contribute pull requests, and follow our transparent roadmap.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function OpenSourcePage() {
  return <OpenSourcePageContent />
}
