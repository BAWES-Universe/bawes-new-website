import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import TouchHoverHandler from '@/components/TouchHoverHandler'
import Footer from '@/components/Footer'
import PostHogProvider from '@/components/PostHogProvider'
import PostHogPageView from '@/components/PostHogPageView'

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
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/bawes-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/bawes-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..1&amp;display=optional" />
      </head>
      <body className="bg-surface text-on-surface antialiased relative min-h-screen">
        <div className="noise-overlay" />
        <div className="bg-orb bg-orb-purple w-[90vw] h-[90vw] top-[-30%] left-[-20%]" />
        <div className="bg-orb bg-orb-amber w-[70vw] h-[70vw] bottom-[-20%] right-[-15%]" style={{ animationDuration: '50s', animationDirection: 'alternate-reverse' }} />
        <div className="bg-orb bg-orb-purple w-[50vw] h-[50vw] top-[40%] left-[30%]" style={{ animationDuration: '35s' }} />
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <TouchHoverHandler />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  )
}
