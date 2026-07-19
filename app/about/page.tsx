import type { Metadata } from 'next'
import AboutPageContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About BAWES',
  description: 'Meet the distributed team building Universe — a spatial platform where people and AI live, work, and create together.',
  openGraph: {
    title: 'About BAWES',
    description: 'Meet the distributed team building Universe — a spatial platform where people and AI live, work, and create together.',
  },
  twitter: {
    title: 'About BAWES',
    description: 'Meet the distributed team building Universe — a spatial platform where people and AI live, work, and create together.',
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
