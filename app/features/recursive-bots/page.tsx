import type { Metadata } from 'next'
import RecursiveBotsPageContent from './RecursiveBotsContent'

export const metadata: Metadata = {
  title: 'Recursive Bots',
  description: 'Recursive bots in Universe: ask your Brick for a helper and it makes a new Brick with its own job, chat and memory. Or run a team of bots in one room, each with its own provider config, behavior, and memory.',
  openGraph: {
    title: 'Recursive Bots',
    description: 'Recursive bots in Universe: ask your Brick for a helper and it makes a new Brick with its own job, chat and memory. Or run a team of bots in one room, each with its own provider config, behavior, and memory.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Recursive Bots',
    description: 'Recursive bots in Universe: ask your Brick for a helper and it makes a new Brick with its own job, chat and memory. Or run a team of bots in one room, each with its own provider config, behavior, and memory.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function RecursiveBotsPage() {
  return <RecursiveBotsPageContent />
}
