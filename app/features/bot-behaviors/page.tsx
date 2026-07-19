import type { Metadata } from 'next'
import BotBehaviorsPageContent from './BotBehaviorsContent'

export const metadata: Metadata = {
  title: 'Bot Behaviors',
  description: "Bots don't just wait for commands. They patrol, lead, guide, introduce, and respond to summons — active participants in your spatial universe.",
  openGraph: {
    title: 'Bot Behaviors',
    description: "Bots don't just wait for commands. They patrol, lead, guide, introduce, and respond to summons — active participants in your spatial universe.",
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Behaviors',
    description: "Bots don't just wait for commands. They patrol, lead, guide, introduce, and respond to summons — active participants in your spatial universe.",
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotBehaviorsPage() {
  return <BotBehaviorsPageContent />
}
