import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BAWES Universe — People and AI Living Together',
  description: 'Walk into a shared world where people, AI agents, and communities work, learn, and connect — in real time, in actual space.',
  keywords: ['BAWES', 'Universe', 'spatial', 'AI bots', 'virtual worlds', 'metaverse', 'collaboration'],
  authors: [{ name: 'BAWES' }],
  icons: { icon: '/images/bawes-logo.png', apple: '/images/bawes-logo.png' },
  openGraph: {
    title: 'BAWES Universe — People and AI Living Together',
    description: 'Walk into a shared digital world. Proximity voice. AI agents with memory. Build anything in rooms that feel alive.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAWES Universe — People and AI Living Together',
    description: 'Walk into a shared digital world. Proximity voice. AI agents with memory. Build anything in rooms that feel alive.',
    images: ['/images/enter-univ.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
