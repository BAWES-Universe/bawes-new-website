import type { Metadata } from 'next'
import ScreenSharingPageContent from './ScreenSharingContent'

export const metadata: Metadata = {
  title: 'Screen Sharing',
  description: 'Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button for seamless spatial collaboration.',
  openGraph: {
    title: 'Screen Sharing',
    description: 'Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button for seamless spatial collaboration.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Screen Sharing',
    description: 'Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button for seamless spatial collaboration.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ScreenSharingPage() {
  return <ScreenSharingPageContent />
}
