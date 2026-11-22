import type { Metadata } from 'next'
import RecursiveBotsPageContent from './RecursiveBotsContent'

export const metadata: Metadata = {
  title: 'Recursive Bots',
  description: 'Run a team of bots in one room. Each bot gets its own provider config, behavior, and memory, so every job has the right specialist.',
  openGraph: {
    title: 'Recursive Bots',
    description: 'Run a team of bots in one room. Each bot gets its own provider config, behavior, and memory, so every job has the right specialist.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Recursive Bots',
    description: 'Run a team of bots in one room. Each bot gets its own provider config, behavior, and memory, so every job has the right specialist.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function RecursiveBotsPage() {
  return <RecursiveBotsPageContent />
}
