import type { Metadata } from 'next'
import BotProviderConfigPageContent from './BotProviderConfigContent'

export const metadata: Metadata = {
  title: 'Bot Provider Config',
  description: 'Configure which AI model powers each bot — OpenAI, Anthropic, or open-source models. A provider-agnostic layer makes swapping brains a single config change.',
  openGraph: {
    title: 'Bot Provider Config',
    description: 'Configure which AI model powers each bot — OpenAI, Anthropic, or open-source models. A provider-agnostic layer makes swapping brains a single config change.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Provider Config',
    description: 'Configure which AI model powers each bot — OpenAI, Anthropic, or open-source models. A provider-agnostic layer makes swapping brains a single config change.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotProviderConfigPage() {
  return <BotProviderConfigPageContent />
}
