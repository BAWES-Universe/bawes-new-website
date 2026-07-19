import type { Metadata } from 'next'
import TeamPageContent from './TeamContent'

export const metadata: Metadata = {
  title: 'The Team',
  description: 'Meet the distributed team building Universe — a small team with a big vision for open, AI-powered collaboration in shared spaces.',
  openGraph: {
    title: 'The Team',
    description: 'Meet the distributed team building Universe — a small team with a big vision for open, AI-powered collaboration in shared spaces.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'The Team',
    description: 'Meet the distributed team building Universe — a small team with a big vision for open, AI-powered collaboration in shared spaces.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function TeamPage() {
  return <TeamPageContent />
}
