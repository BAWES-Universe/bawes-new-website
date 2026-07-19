import type { Metadata } from 'next'
import McpIntegrationPageContent from './McpIntegrationContent'

export const metadata: Metadata = {
  title: 'MCP Integration',
  description: 'Model Context Protocol integration lets your bots connect to any tool, API, or data source — calendars, databases, ticketing systems, and more.',
}

export default function McpIntegrationPage() {
  return <McpIntegrationPageContent />
}
