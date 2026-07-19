import type { Metadata } from 'next'
import RecursiveBotsPageContent from './RecursiveBotsContent'

export const metadata: Metadata = {
  title: 'Recursive Bots',
  description: 'Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory — self-architecting AI systems for infinite scalability.',
  openGraph: {
    title: 'Recursive Bots',
    description: 'Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory — self-architecting AI systems for infinite scalability.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Recursive Bots',
    description: 'Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory — self-architecting AI systems for infinite scalability.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function RecursiveBotsPage() {
  return <RecursiveBotsPageContent />
}
