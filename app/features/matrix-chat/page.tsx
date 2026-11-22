import type { Metadata } from 'next'
import MatrixChatPageContent from './MatrixChatContent'

export const metadata: Metadata = {
  title: 'Matrix Chat',
  description: 'Matrix and Synapse integration for persistent chat history. Conversations survive between visits and stay in sync across rooms.',
  openGraph: {
    title: 'Matrix Chat',
    description: 'Matrix and Synapse integration for persistent chat history. Conversations survive between visits and stay in sync across rooms.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Matrix Chat',
    description: 'Matrix and Synapse integration for persistent chat history. Conversations survive between visits and stay in sync across rooms.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MatrixChatPage() {
  return <MatrixChatPageContent />
}
