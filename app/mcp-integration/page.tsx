import type { Metadata } from 'next'
import McpIntegrationPageContent from './McpIntegrationContent'

export const metadata: Metadata = {
  title: 'MCP Integration',
  description: 'Model Context Protocol integration lets your bots connect to any tool, API, or data source — calendars, databases, ticketing systems, and more.',
  openGraph: {
    title: 'MCP Integration',
    description: 'Model Context Protocol integration lets your bots connect to any tool, API, or data source — calendars, databases, ticketing systems, and more.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'MCP Integration',
    description: 'Model Context Protocol integration lets your bots connect to any tool, API, or data source — calendars, databases, ticketing systems, and more.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function McpIntegrationPage() {
  return <McpIntegrationPageContent />
}
