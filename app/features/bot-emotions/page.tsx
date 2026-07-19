import type { Metadata } from 'next'
import BotEmotionsPageContent from './BotEmotionsContent'

export const metadata: Metadata = {
  title: 'Bot Emotions',
  description: 'Emotional states that change how bots respond. Happy bots are more helpful; serious bots keep it professional. Configurable per bot.',
}

export default function BotEmotionsPage() {
  return <BotEmotionsPageContent />
}
