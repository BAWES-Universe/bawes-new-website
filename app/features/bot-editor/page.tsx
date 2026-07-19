import type { Metadata } from 'next'
import BotEditorPageContent from './BotEditorContent'

export const metadata: Metadata = {
  title: 'Bot Editor',
  description: "A visual interface for configuring your bot's entire soul — behaviors, personality, knowledge, and appearance from one unified dashboard.",
  openGraph: {
    title: 'Bot Editor',
    description: "A visual interface for configuring your bot's entire soul — behaviors, personality, knowledge, and appearance from one unified dashboard.",
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Editor',
    description: "A visual interface for configuring your bot's entire soul — behaviors, personality, knowledge, and appearance from one unified dashboard.",
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotEditorPage() {
  return <BotEditorPageContent />
}
