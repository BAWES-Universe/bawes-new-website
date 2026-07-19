import type { Metadata } from 'next'
import TextChatPageContent from './TextChatContent'

export const metadata: Metadata = {
  title: 'Text Chat',
  description: 'Every room has its own chat channel. Text appears in bubbles above players and messages are proximity-based — you see what is near you.',
  openGraph: {
    title: 'Text Chat',
    description: 'Every room has its own chat channel. Text appears in bubbles above players and messages are proximity-based — you see what is near you.',
  },
  twitter: {
    title: 'Text Chat',
    description: 'Every room has its own chat channel. Text appears in bubbles above players and messages are proximity-based — you see what is near you.',
  },
}

export default function TextChatPage() {
  return <TextChatPageContent />
}
