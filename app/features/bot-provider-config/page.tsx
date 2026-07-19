import type { Metadata } from 'next'
import BotProviderConfigPageContent from './BotProviderConfigContent'

export const metadata: Metadata = {
  title: 'Bot Provider Config',
  description: 'Configure which AI model powers each bot — OpenAI, Anthropic, or open-source models. A provider-agnostic layer makes swapping brains a single config change.',
}

export default function BotProviderConfigPage() {
  return <BotProviderConfigPageContent />
}
