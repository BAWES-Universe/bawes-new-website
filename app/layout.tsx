import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BAWES.NET — Shared Digital Environments',
  description: 'BAWES builds and operates shared digital environments where people work, learn, trade, and collaborate in real time.',
  keywords: ['BAWES', 'Universe', 'digital environments', 'collaboration', 'spaces'],
  authors: [{ name: 'BAWES' }],
  openGraph: {
    title: 'BAWES.NET — Shared Digital Environments',
    description: 'Turn ideas into action — together.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
