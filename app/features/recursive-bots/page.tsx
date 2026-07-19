import type { Metadata } from 'next'
import RecursiveBotsPageContent from './RecursiveBotsContent'

export const metadata: Metadata = {
  title: 'Recursive Bots',
  description: 'Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory — self-architecting AI systems for infinite scalability.',
  openGraph: {
    title: 'Recursive Bots',
    description: 'Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory — self-architecting AI systems for infinite scalability.',
  },
  twitter: {
    title: 'Recursive Bots',
    description: 'Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory — self-architecting AI systems for infinite scalability.',
  },
}

export default function RecursiveBotsPage() {
  return <RecursiveBotsPageContent />
}
