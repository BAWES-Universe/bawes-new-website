import type { Metadata } from 'next'
import BotEditorPageContent from './BotEditorContent'

export const metadata: Metadata = {
  title: 'Bot Editor',
  description: "A visual interface for configuring your bot's entire soul — behaviors, personality, knowledge, and appearance from one unified dashboard.",
}

export default function BotEditorPage() {
  return <BotEditorPageContent />
}
