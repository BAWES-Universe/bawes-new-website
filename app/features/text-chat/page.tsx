import type { Metadata } from 'next'
import TextChatPageContent from './TextChatContent'

export const metadata: Metadata = {
  title: 'Text Chat',
  description: 'Every room has its own chat channel. Text appears in bubbles above players and messages are proximity-based — you see what is near you.',
  openGraph: {
    title: 'Text Chat',
    description: 'Every room has its own chat channel. Text appears in bubbles above players and messages are proximity-based — you see what is near you.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Text Chat',
    description: 'Every room has its own chat channel. Text appears in bubbles above players and messages are proximity-based — you see what is near you.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function TextChatPage() {
  return <TextChatPageContent />
}
