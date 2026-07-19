import type { Metadata } from 'next'
import WokaAvatarsPageContent from './WokaAvatarsContent'

export const metadata: Metadata = {
  title: 'Woka Avatars',
  description: 'Pipoya-style pixel art avatars — colorful, expressive characters you customize to represent yourself across every world in the universe.',
  openGraph: {
    title: 'Woka Avatars',
    description: 'Pipoya-style pixel art avatars — colorful, expressive characters you customize to represent yourself across every world in the universe.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Woka Avatars',
    description: 'Pipoya-style pixel art avatars — colorful, expressive characters you customize to represent yourself across every world in the universe.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function WokaAvatarsPage() {
  return <WokaAvatarsPageContent />
}
