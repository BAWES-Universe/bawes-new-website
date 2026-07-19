import type { Metadata } from 'next'
import BotMemoryPageContent from './BotMemoryContent'

export const metadata: Metadata = {
  title: 'Bot Memory',
  description: 'Persistent conversation memory lets bots remember past interactions, user preferences, and important context across sessions.',
  openGraph: {
    title: 'Bot Memory',
    description: 'Persistent conversation memory lets bots remember past interactions, user preferences, and important context across sessions.',
  },
  twitter: {
    title: 'Bot Memory',
    description: 'Persistent conversation memory lets bots remember past interactions, user preferences, and important context across sessions.',
  },
}

export default function BotMemoryPage() {
  return <BotMemoryPageContent />
}
