import type { Metadata } from 'next'
import LockDiscussPageContent from './LockDiscussContent'

export const metadata: Metadata = {
  title: 'Lock & Discuss',
  description: 'Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.',
  openGraph: {
    title: 'Lock & Discuss',
    description: 'Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Lock & Discuss',
    description: 'Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function LockDiscussPage() {
  return <LockDiscussPageContent />
}
