import type { Metadata } from 'next'
import TeamPageContent from './TeamContent'

export const metadata: Metadata = {
  title: 'The Team',
  description: 'Meet the distributed team building Universe — a small team with a big vision for open, AI-powered collaboration in shared spaces.',
  openGraph: {
    title: 'The Team',
    description: 'Meet the distributed team building Universe — a small team with a big vision for open, AI-powered collaboration in shared spaces.',
  },
  twitter: {
    title: 'The Team',
    description: 'Meet the distributed team building Universe — a small team with a big vision for open, AI-powered collaboration in shared spaces.',
  },
}

export default function TeamPage() {
  return <TeamPageContent />
}
