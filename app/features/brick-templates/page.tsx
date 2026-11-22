import type { Metadata } from 'next'
import BrickTemplatesPageContent from './BrickTemplatesContent'

export const metadata: Metadata = {
  title: 'Brick Templates',
  description: 'Brick templates in Universe: start a new Brick from a template someone shared, or share your own. Memory, chats, Apps and keys never travel with a template.',
  openGraph: {
    title: 'Brick Templates',
    description: 'Brick templates in Universe: start a new Brick from a template someone shared, or share your own. Memory, chats, Apps and keys never travel with a template.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Brick Templates',
    description: 'Brick templates in Universe: start a new Brick from a template someone shared, or share your own. Memory, chats, Apps and keys never travel with a template.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BrickTemplatesPage() {
  return <BrickTemplatesPageContent />
}
