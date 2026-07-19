import type { Metadata } from 'next'
import LegalPageContent from './LegalContent'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy policy, terms of service, and fair usage for BAWES Universe. Clear, honest legal terms for the decentralized future.',
}

export default function LegalPage() {
  return <LegalPageContent />
}
