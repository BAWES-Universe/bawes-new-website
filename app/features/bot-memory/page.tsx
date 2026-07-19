import type { Metadata } from 'next'
import BotMemoryPageContent from './BotMemoryContent'

export const metadata: Metadata = {
  title: 'Bot Memory',
  description: 'Persistent conversation memory lets bots remember past interactions, user preferences, and important context across sessions.',
  openGraph: {
    title: 'Bot Memory',
    description: 'Persistent conversation memory lets bots remember past interactions, user preferences, and important context across sessions.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Memory',
    description: 'Persistent conversation memory lets bots remember past interactions, user preferences, and important context across sessions.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotMemoryPage() {
  return <BotMemoryPageContent />
}
