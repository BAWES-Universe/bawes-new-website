import type { Metadata } from 'next'
import BotAvatarsPageContent from './BotAvatarsContent'

export const metadata: Metadata = {
  title: 'Bot Avatars',
  description: 'Give each AI bot a visual appearance. A bot wears an avatar like everyone else, so it looks like it belongs in your world, as a helper or a mascot.',
  openGraph: {
    title: 'Bot Avatars',
    description: 'Give each AI bot a visual appearance. A bot wears an avatar like everyone else, so it looks like it belongs in your world, as a helper or a mascot.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Avatars',
    description: 'Give each AI bot a visual appearance. A bot wears an avatar like everyone else, so it looks like it belongs in your world, as a helper or a mascot.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotAvatarsPage() {
  return <BotAvatarsPageContent />
}
