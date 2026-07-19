import type { Metadata } from 'next'
import EmptySeatPageContent from './EmptySeatContent'

export const metadata: Metadata = {
  title: 'The Empty Seat',
  description: 'A core BAWES philosophy: leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.',
  openGraph: {
    title: 'The Empty Seat',
    description: 'A core BAWES philosophy: leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'The Empty Seat',
    description: 'A core BAWES philosophy: leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function EmptySeatPage() {
  return <EmptySeatPageContent />
}
