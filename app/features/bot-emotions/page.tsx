import type { Metadata } from 'next'
import BotEmotionsPageContent from './BotEmotionsContent'

export const metadata: Metadata = {
  title: 'Bot Emotions',
  description: 'Emotional states that change how bots respond. Happy bots are more helpful; serious bots keep it professional. Configurable per bot.',
  openGraph: {
    title: 'Bot Emotions',
    description: 'Emotional states that change how bots respond. Happy bots are more helpful; serious bots keep it professional. Configurable per bot.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Emotions',
    description: 'Emotional states that change how bots respond. Happy bots are more helpful; serious bots keep it professional. Configurable per bot.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotEmotionsPage() {
  return <BotEmotionsPageContent />
}
