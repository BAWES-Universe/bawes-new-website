import type { Metadata } from 'next'
import TextChatPageContent from './TextChatContent'

export const metadata: Metadata = {
  title: 'Text Chat',
  description: 'Text chat that lives in the world: a proximity chat for the people near you, direct messages and groups, and speech bubbles above players.',
  openGraph: {
    title: 'Text Chat',
    description: 'Text chat that lives in the world: a proximity chat for the people near you, direct messages and groups, and speech bubbles above players.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Text Chat',
    description: 'Text chat that lives in the world: a proximity chat for the people near you, direct messages and groups, and speech bubbles above players.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function TextChatPage() {
  return <TextChatPageContent />
}
