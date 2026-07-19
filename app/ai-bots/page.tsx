import type { Metadata } from 'next'
import AiBotsContent from './AiBotsContent'

export const metadata: Metadata = {
  title: 'AI Bots — Intelligent Agents in Your Universe',
  description: 'Bots with memory, emotions, tool calling, file parsing, and media generation. Create AI agents that inhabit your universe and interact naturally.',
}

export default function AiBotsPage() {
  return <AiBotsContent />
}
