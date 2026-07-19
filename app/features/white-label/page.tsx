import type { Metadata } from 'next'
import WhiteLabelPageContent from './WhiteLabelContent'

export const metadata: Metadata = {
  title: 'White Label',
  description: 'Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.',
  openGraph: {
    title: 'White Label',
    description: 'Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'White Label',
    description: 'Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function WhiteLabelPage() {
  return <WhiteLabelPageContent />
}
