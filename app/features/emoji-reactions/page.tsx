import type { Metadata } from 'next'
import EmojiReactionsPageContent from './EmojiReactionsContent'

export const metadata: Metadata = {
  title: 'Emoji Reactions',
  description: 'Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.',
  openGraph: {
    title: 'Emoji Reactions',
    description: 'Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Emoji Reactions',
    description: 'Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function EmojiReactionsPage() {
  return <EmojiReactionsPageContent />
}
