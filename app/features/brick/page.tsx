import type { Metadata } from 'next'
import BrickPageContent from './BrickContent'

export const metadata: Metadata = {
  title: 'Brick',
  description: 'Brick is your own AI companion in Universe. Chat with it or call it, connect your Apps, give it goals, a computer and a memory, and bring it along into any room.',
  openGraph: {
    title: 'Brick',
    description: 'Brick is your own AI companion in Universe. Chat with it or call it, connect your Apps, give it goals, a computer and a memory, and bring it along into any room.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Brick',
    description: 'Brick is your own AI companion in Universe. Chat with it or call it, connect your Apps, give it goals, a computer and a memory, and bring it along into any room.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BrickPage() {
  return <BrickPageContent />
}
