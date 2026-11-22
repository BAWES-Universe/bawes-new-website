import type { Metadata } from 'next'
import BotEditorPageContent from './BotEditorContent'

export const metadata: Metadata = {
  title: 'Bot Editor',
  description: "A visual, no-code editor for your whole bot: behavior, personality, voice, tools, appearance and permissions, in one place.",
  openGraph: {
    title: 'Bot Editor',
    description: "A visual, no-code editor for your whole bot: behavior, personality, voice, tools, appearance and permissions, in one place.",
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Editor',
    description: "A visual, no-code editor for your whole bot: behavior, personality, voice, tools, appearance and permissions, in one place.",
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotEditorPage() {
  return <BotEditorPageContent />
}
