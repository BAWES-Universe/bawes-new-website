import type { Metadata } from 'next'
import AboutPageContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About BAWES',
  description: 'Meet the distributed team building Universe — a spatial platform where people and AI live, work, and create together.',
  openGraph: {
    title: 'About BAWES',
    description: 'Meet the distributed team building Universe — a spatial platform where people and AI live, work, and create together.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'About BAWES',
    description: 'Meet the distributed team building Universe — a spatial platform where people and AI live, work, and create together.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
