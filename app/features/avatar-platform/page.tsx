import type { Metadata } from 'next'
import AvatarPlatformPageContent from './AvatarPlatformContent'

export const metadata: Metadata = {
  title: 'Avatar Platform',
  description: 'The Avatar Platform powers cross-world identity. Your character, items, and presence stay persistent across every universe you visit.',
}

export default function AvatarPlatformPage() {
  return <AvatarPlatformPageContent />
}
