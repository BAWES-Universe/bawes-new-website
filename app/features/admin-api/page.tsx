import type { Metadata } from 'next'
import AdminApiPageContent from './AdminApiContent'

export const metadata: Metadata = {
  title: 'Admin API',
  description: 'REST API for managing users, worlds, rooms, and bots programmatically. Automate your universe with robust endpoints and low-latency synchronization.',
  openGraph: {
    title: 'Admin API',
    description: 'REST API for managing users, worlds, rooms, and bots programmatically. Automate your universe with robust endpoints and low-latency synchronization.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Admin API',
    description: 'REST API for managing users, worlds, rooms, and bots programmatically. Automate your universe with robust endpoints and low-latency synchronization.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AdminApiPage() {
  return <AdminApiPageContent />
}
