import type { Metadata } from 'next'
import EmojiReactionsPageContent from './EmojiReactionsContent'

export const metadata: Metadata = {
  title: 'Emoji Reactions',
  description: 'Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.',
  openGraph: {
    title: 'Emoji Reactions',
    description: 'Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.',
  },
  twitter: {
    title: 'Emoji Reactions',
    description: 'Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.',
  },
}

export default function EmojiReactionsPage() {
  return <EmojiReactionsPageContent />
}
