import type { Metadata } from 'next'
import AvatarPlatformPageContent from './AvatarPlatformContent'

export const metadata: Metadata = {
  title: 'Avatar Platform',
  description: 'The Avatar Platform powers cross-world identity. Your character, items, and presence stay persistent across every universe you visit.',
  openGraph: {
    title: 'Avatar Platform',
    description: 'The Avatar Platform powers cross-world identity. Your character, items, and presence stay persistent across every universe you visit.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Avatar Platform',
    description: 'The Avatar Platform powers cross-world identity. Your character, items, and presence stay persistent across every universe you visit.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AvatarPlatformPage() {
  return <AvatarPlatformPageContent />
}
