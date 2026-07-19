import type { Metadata } from 'next'
import SelfHostingPageContent from './SelfHostingContent'

export const metadata: Metadata = {
  title: 'Self-Hosting',
  description: 'Self-host the entire BAWES Universe stack on your own infrastructure. Total sovereignty with full control over your data, privacy, and performance.',
  openGraph: {
    title: 'Self-Hosting',
    description: 'Self-host the entire BAWES Universe stack on your own infrastructure. Total sovereignty with full control over your data, privacy, and performance.',
  },
  twitter: {
    title: 'Self-Hosting',
    description: 'Self-host the entire BAWES Universe stack on your own infrastructure. Total sovereignty with full control over your data, privacy, and performance.',
  },
}

export default function SelfHostingPage() {
  return <SelfHostingPageContent />
}
