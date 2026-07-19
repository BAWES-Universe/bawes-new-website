import type { Metadata } from 'next'
import AdminApiPageContent from './AdminApiContent'

export const metadata: Metadata = {
  title: 'Admin API',
  description: 'REST API for managing users, worlds, rooms, and bots programmatically. Automate your universe with robust endpoints and low-latency synchronization.',
}

export default function AdminApiPage() {
  return <AdminApiPageContent />
}
