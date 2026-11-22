import type { Metadata } from 'next'
import MegaphonePageContent from './MegaphoneContent'

export const metadata: Metadata = {
  title: 'Megaphone',
  description: 'Zone-based megaphone: designate speakers and listeners with Stage and Audience areas. Speak to a whole audience, or keep a zone quiet.',
  openGraph: {
    title: 'Megaphone',
    description: 'Zone-based megaphone: designate speakers and listeners with Stage and Audience areas. Speak to a whole audience, or keep a zone quiet.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Megaphone',
    description: 'Zone-based megaphone: designate speakers and listeners with Stage and Audience areas. Speak to a whole audience, or keep a zone quiet.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MegaphonePage() {
  return <MegaphonePageContent />
}
