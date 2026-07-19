import type { Metadata } from 'next'
import UserDirectoryPageContent from './UserDirectoryContent'

export const metadata: Metadata = {
  title: 'User Directory',
  description: 'Browse users, see their status, and locate them on the map. Know who is online across your universe in real-time with zero friction.',
  openGraph: {
    title: 'User Directory',
    description: 'Browse users, see their status, and locate them on the map. Know who is online across your universe in real-time with zero friction.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'User Directory',
    description: 'Browse users, see their status, and locate them on the map. Know who is online across your universe in real-time with zero friction.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UserDirectoryPage() {
  return <UserDirectoryPageContent />
}
