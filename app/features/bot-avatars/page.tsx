import type { Metadata } from 'next'
import BotAvatarsPageContent from './BotAvatarsContent'

export const metadata: Metadata = {
  title: 'Bot Avatars',
  description: 'Assign visual appearances to AI bots from the avatar platform. Bots look like they belong in the world, transitioning between helper roles and community mascots.',
  openGraph: {
    title: 'Bot Avatars',
    description: 'Assign visual appearances to AI bots from the avatar platform. Bots look like they belong in the world, transitioning between helper roles and community mascots.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Avatars',
    description: 'Assign visual appearances to AI bots from the avatar platform. Bots look like they belong in the world, transitioning between helper roles and community mascots.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotAvatarsPage() {
  return <BotAvatarsPageContent />
}
