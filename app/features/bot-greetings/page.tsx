import type { Metadata } from 'next'
import BotGreetingsPageContent from './BotGreetingsContent'

export const metadata: Metadata = {
  title: 'Bot Greetings',
  description: 'Custom greeting messages that play when someone approaches a bot. Make your bots welcoming, helpful, or delightfully mysterious.',
}

export default function BotGreetingsPage() {
  return <BotGreetingsPageContent />
}
