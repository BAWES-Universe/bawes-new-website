import type { Metadata } from 'next'
import ScreenSharingPageContent from './ScreenSharingContent'

export const metadata: Metadata = {
  title: 'Screen Sharing',
  description: 'Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button for seamless spatial collaboration.',
  openGraph: {
    title: 'Screen Sharing',
    description: 'Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button for seamless spatial collaboration.',
  },
  twitter: {
    title: 'Screen Sharing',
    description: 'Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button for seamless spatial collaboration.',
  },
}

export default function ScreenSharingPage() {
  return <ScreenSharingPageContent />
}
