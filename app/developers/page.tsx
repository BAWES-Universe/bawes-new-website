import type { Metadata } from 'next'
import DevelopersPageContent from './DevelopersContent'

export const metadata: Metadata = {
  title: 'Developer Hub',
  description: 'Resources for building on BAWES Universe — the technology stack, scripting API, MCP integration, self-hosting, open source, and admin tooling.',
  openGraph: {
    title: 'Developer Hub',
    description: 'Resources for building on BAWES Universe — the technology stack, scripting API, MCP integration, self-hosting, open source, and admin tooling.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Developer Hub',
    description: 'Resources for building on BAWES Universe — the technology stack, scripting API, MCP integration, self-hosting, open source, and admin tooling.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function DevelopersPage() {
  return <DevelopersPageContent />
}
