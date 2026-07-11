import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PostHogProvider from '@/components/PostHogProvider'
import PostHogPageView from '@/components/PostHogPageView'

export const metadata: Metadata = {
  title: 'BAWES Universe — Build Your Own Universe',
  description: 'Build and explore shared digital environments where people, AI agents, and communities work, learn, and connect in real time.',
  keywords: ['BAWES', 'Universe', 'digital environments', 'collaboration', 'spaces', 'AI bots', 'virtual worlds'],
  authors: [{ name: 'BAWES' }],
  icons: { icon: '/images/bawes-logo.png', apple: '/images/bawes-logo.png' },
  openGraph: {
    title: 'BAWES Universe — Build Your Own Universe',
    description: 'Build and explore shared digital environments where people, AI agents, and communities work, learn, and connect.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAWES Universe — Build Your Own Universe',
    description: 'Build and explore shared digital environments where people, AI agents, and communities work, learn, and connect.',
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..1" />
      </head>
      <body className="bg-[#0a0a14] text-[#e7e0ed] antialiased">
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  )
}
