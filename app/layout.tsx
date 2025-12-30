import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BAWES Universe - Build Your Own Universe',
  description: 'We are not building an app. We are building a universe. A fully integrated, people-first universe designed to help you think, act, build, and grow.',
  keywords: ['BAWES', 'Universe', 'digital environments', 'collaboration', 'spaces', 'build your own universe'],
  authors: [{ name: 'BAWES' }],
  icons: {
    icon: '/images/bawes-logo.png',
    apple: '/images/bawes-logo.png',
  },
  openGraph: {
    title: 'BAWES Universe - Build Your Own Universe',
    description: 'We are not building an app. We are building a universe.',
    type: 'website',
    images: [
      {
        url: '/images/enter-univ.png',
        width: 1200,
        height: 630,
        alt: 'BAWES Universe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAWES Universe - Build Your Own Universe',
    description: 'We are not building an app. We are building a universe.',
    images: ['/images/enter-univ.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ width: '100%', margin: 0, padding: 0 }}>
      <head>
        <link rel="icon" href="/images/bawes-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/bawes-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased" style={{ width: '100%', margin: 0, padding: 0 }}>
        <Navigation />
        <main className="min-h-screen" style={{ width: '100%' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
