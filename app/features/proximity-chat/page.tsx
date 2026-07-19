import type { Metadata } from 'next'
import ProximityChatPageContent from './ProximityChatContent'

export const metadata: Metadata = {
  title: 'Proximity Chat',
  description: 'Proximity-based spatial voice chat over WebRTC. Walk closer to hear better, walk away to fade out. Powered by LiveKit for ultra-low latency.',
}

export default function ProximityChatPage() {
  return <ProximityChatPageContent />
}
