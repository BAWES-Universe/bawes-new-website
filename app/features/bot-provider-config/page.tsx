import type { Metadata } from 'next'
import BotProviderConfigPageContent from './BotProviderConfigContent'

export const metadata: Metadata = {
  title: 'Bot Provider Config',
  description: 'Choose which AI model powers each bot: OpenAI, Claude, Gemini, or open-source models on your own computer. Changing a bot brain takes a few taps, no code.',
  openGraph: {
    title: 'Bot Provider Config',
    description: 'Choose which AI model powers each bot: OpenAI, Claude, Gemini, or open-source models on your own computer. Changing a bot brain takes a few taps, no code.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Provider Config',
    description: 'Choose which AI model powers each bot: OpenAI, Claude, Gemini, or open-source models on your own computer. Changing a bot brain takes a few taps, no code.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotProviderConfigPage() {
  return <BotProviderConfigPageContent />
}
