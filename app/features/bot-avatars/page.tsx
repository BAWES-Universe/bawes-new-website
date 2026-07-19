import type { Metadata } from 'next'
import BotAvatarsPageContent from './BotAvatarsContent'

export const metadata: Metadata = {
  title: 'Bot Avatars',
  description: 'Assign visual appearances to AI bots from the avatar platform. Bots look like they belong in the world, transitioning between helper roles and community mascots.',
}

export default function BotAvatarsPage() {
  return <BotAvatarsPageContent />
}
