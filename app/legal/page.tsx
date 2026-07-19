import type { Metadata } from 'next'
import LegalPageContent from './LegalContent'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy policy, terms of service, and fair usage for BAWES Universe. Clear, honest legal terms for the decentralized future.',
  openGraph: {
    title: 'Legal',
    description: 'Privacy policy, terms of service, and fair usage for BAWES Universe. Clear, honest legal terms for the decentralized future.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Legal',
    description: 'Privacy policy, terms of service, and fair usage for BAWES Universe. Clear, honest legal terms for the decentralized future.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function LegalPage() {
  return <LegalPageContent />
}
