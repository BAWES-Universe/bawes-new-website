import type { Metadata } from 'next'
import MegaphonePageContent from './MegaphoneContent'

export const metadata: Metadata = {
  title: 'Megaphone',
  description: 'Zone-based megaphone: designate speakers and listeners within area zones. Amplify your voice to a whole room — or silence it with a silent zone.',
  openGraph: {
    title: 'Megaphone',
    description: 'Zone-based megaphone: designate speakers and listeners within area zones. Amplify your voice to a whole room — or silence it with a silent zone.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Megaphone',
    description: 'Zone-based megaphone: designate speakers and listeners within area zones. Amplify your voice to a whole room — or silence it with a silent zone.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MegaphonePage() {
  return <MegaphonePageContent />
}
