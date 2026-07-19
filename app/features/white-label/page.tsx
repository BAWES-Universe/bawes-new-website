import type { Metadata } from 'next'
import WhiteLabelPageContent from './WhiteLabelContent'

export const metadata: Metadata = {
  title: 'White Label',
  description: 'Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.',
  openGraph: {
    title: 'White Label',
    description: 'Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.',
  },
  twitter: {
    title: 'White Label',
    description: 'Custom domain, logos, and branding for your universe instance. White-label the entire experience — your users see your brand, not ours.',
  },
}

export default function WhiteLabelPage() {
  return <WhiteLabelPageContent />
}
