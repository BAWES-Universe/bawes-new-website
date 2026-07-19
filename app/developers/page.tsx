import type { Metadata } from 'next'
import DevelopersPageContent from './DevelopersContent'

export const metadata: Metadata = {
  title: 'Developer Hub',
  description: 'Resources for building on BAWES Universe — the technology stack, scripting API, MCP integration, self-hosting, open source, and admin tooling.',
}

export default function DevelopersPage() {
  return <DevelopersPageContent />
}
