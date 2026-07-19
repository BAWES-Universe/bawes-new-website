import type { Metadata } from 'next'
import BotBehaviorsPageContent from './BotBehaviorsContent'

export const metadata: Metadata = {
  title: 'Bot Behaviors',
  description: "Bots don't just wait for commands. They patrol, lead, guide, introduce, and respond to summons — active participants in your spatial universe.",
}

export default function BotBehaviorsPage() {
  return <BotBehaviorsPageContent />
}
