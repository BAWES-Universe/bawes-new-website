import type { Metadata } from 'next'
import BotGreetingsPageContent from './BotGreetingsContent'

export const metadata: Metadata = {
  title: 'Bot Greetings',
  description: 'Custom greeting messages that play when someone approaches a bot. Make your bots welcoming, helpful, or delightfully mysterious.',
  openGraph: {
    title: 'Bot Greetings',
    description: 'Custom greeting messages that play when someone approaches a bot. Make your bots welcoming, helpful, or delightfully mysterious.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Greetings',
    description: 'Custom greeting messages that play when someone approaches a bot. Make your bots welcoming, helpful, or delightfully mysterious.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotGreetingsPage() {
  return <BotGreetingsPageContent />
}
