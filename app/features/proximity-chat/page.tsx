import type { Metadata } from 'next'
import ProximityChatPageContent from './ProximityChatContent'

export const metadata: Metadata = {
  title: 'Proximity Chat',
  description: 'Proximity-based spatial voice chat over WebRTC. Walk closer to hear better, walk away to fade out. Powered by LiveKit for ultra-low latency.',
  openGraph: {
    title: 'Proximity Chat',
    description: 'Proximity-based spatial voice chat over WebRTC. Walk closer to hear better, walk away to fade out. Powered by LiveKit for ultra-low latency.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Proximity Chat',
    description: 'Proximity-based spatial voice chat over WebRTC. Walk closer to hear better, walk away to fade out. Powered by LiveKit for ultra-low latency.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ProximityChatPage() {
  return <ProximityChatPageContent />
}
