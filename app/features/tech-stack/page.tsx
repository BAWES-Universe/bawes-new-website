import type { Metadata } from 'next'
import TechStackPageContent from './TechStackContent'

export const metadata: Metadata = {
  title: 'Technology Stack',
  description: 'TypeScript, Node.js, WebRTC, AI, and MCP — the open-core technologies powering every BAWES Universe world, engineered for real-time scale.',
}

export default function TechStackPage() {
  return <TechStackPageContent />
}
