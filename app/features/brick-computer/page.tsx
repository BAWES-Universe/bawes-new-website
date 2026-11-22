import type { Metadata } from 'next'
import BrickComputerPageContent from './BrickComputerContent'

export const metadata: Metadata = {
  title: 'A Computer for Your Brick',
  description: 'A computer for your Brick in Universe: your AI companion works real websites and real files for you, while you watch live and take over to pay, submit or fix something.',
  openGraph: {
    title: 'A Computer for Your Brick',
    description: 'A computer for your Brick in Universe: your AI companion works real websites and real files for you, while you watch live and take over to pay, submit or fix something.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'A Computer for Your Brick',
    description: 'A computer for your Brick in Universe: your AI companion works real websites and real files for you, while you watch live and take over to pay, submit or fix something.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BrickComputerPage() {
  return <BrickComputerPageContent />
}
