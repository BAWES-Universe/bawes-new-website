import type { Metadata } from 'next'
import ProximityChatPageContent from './ProximityChatContent'

export const metadata: Metadata = {
  title: 'Proximity Chat',
  description: 'Proximity voice and video chat over WebRTC. Walk up to someone and a conversation starts, walk away and it ends. Powered by LiveKit.',
  openGraph: {
    title: 'Proximity Chat',
    description: 'Proximity voice and video chat over WebRTC. Walk up to someone and a conversation starts, walk away and it ends. Powered by LiveKit.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Proximity Chat',
    description: 'Proximity voice and video chat over WebRTC. Walk up to someone and a conversation starts, walk away and it ends. Powered by LiveKit.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ProximityChatPage() {
  return <ProximityChatPageContent />
}
