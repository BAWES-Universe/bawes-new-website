import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BAWES Universe - Build Your Own Universe',
  description: 'We are not building an app. We are building a universe. A fully integrated, people-first universe designed to help you think, act, build, and grow.',
  keywords: ['BAWES', 'Universe', 'digital environments', 'collaboration', 'spaces', 'build your own universe'],
  authors: [{ name: 'BAWES' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'BAWES Universe - Build Your Own Universe',
    description: 'We are not building an app. We are building a universe.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased w-full">
        <Navigation />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
