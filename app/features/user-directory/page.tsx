import type { Metadata } from 'next'
import UserDirectoryPageContent from './UserDirectoryContent'

export const metadata: Metadata = {
  title: 'User Directory',
  description: 'Browse users, see their status, and locate them on the map. Know who is online across your universe in real-time with zero friction.',
}

export default function UserDirectoryPage() {
  return <UserDirectoryPageContent />
}
