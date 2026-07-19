import type { Metadata } from 'next'
import AiBotsContent from './AiBotsContent'

export const metadata: Metadata = {
  title: 'AI Bots — Intelligent Agents in Your Universe',
  description: 'Bots with memory, emotions, tool calling, file parsing, and media generation. Create AI agents that inhabit your universe and interact naturally.',
  openGraph: {
    title: 'AI Bots — Intelligent Agents in Your Universe',
    description: 'Bots with memory, emotions, tool calling, file parsing, and media generation. Create AI agents that inhabit your universe and interact naturally.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'AI Bots — Intelligent Agents in Your Universe',
    description: 'Bots with memory, emotions, tool calling, file parsing, and media generation. Create AI agents that inhabit your universe and interact naturally.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AiBotsPage() {
  return <AiBotsContent />
}
