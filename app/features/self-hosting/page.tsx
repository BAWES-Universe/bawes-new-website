import type { Metadata } from 'next'
import SelfHostingPageContent from './SelfHostingContent'

export const metadata: Metadata = {
  title: 'Self-Hosting',
  description: 'Self-host the entire BAWES Universe stack on your own infrastructure. Total sovereignty with full control over your data, privacy, and performance.',
  openGraph: {
    title: 'Self-Hosting',
    description: 'Self-host the entire BAWES Universe stack on your own infrastructure. Total sovereignty with full control over your data, privacy, and performance.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Self-Hosting',
    description: 'Self-host the entire BAWES Universe stack on your own infrastructure. Total sovereignty with full control over your data, privacy, and performance.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function SelfHostingPage() {
  return <SelfHostingPageContent />
}
