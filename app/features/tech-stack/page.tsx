import type { Metadata } from 'next'
import TechStackPageContent from './TechStackContent'

export const metadata: Metadata = {
  title: 'Technology Stack',
  description: 'TypeScript, Node.js, WebRTC, AI, and MCP — the open-core technologies powering every BAWES Universe world, engineered for real-time scale.',
  openGraph: {
    title: 'Technology Stack',
    description: 'TypeScript, Node.js, WebRTC, AI, and MCP — the open-core technologies powering every BAWES Universe world, engineered for real-time scale.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Technology Stack',
    description: 'TypeScript, Node.js, WebRTC, AI, and MCP — the open-core technologies powering every BAWES Universe world, engineered for real-time scale.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function TechStackPage() {
  return <TechStackPageContent />
}
