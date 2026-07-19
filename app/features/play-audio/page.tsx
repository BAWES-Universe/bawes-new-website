import type { Metadata } from 'next'
import PlayAudioPageContent from './PlayAudioContent'

export const metadata: Metadata = {
  title: 'Play Audio',
  description: 'Configure areas to trigger audio files when someone walks in — entrance music, announcement chimes, or ambient atmosphere with distance-based attenuation.',
  openGraph: {
    title: 'Play Audio',
    description: 'Configure areas to trigger audio files when someone walks in — entrance music, announcement chimes, or ambient atmosphere with distance-based attenuation.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Play Audio',
    description: 'Configure areas to trigger audio files when someone walks in — entrance music, announcement chimes, or ambient atmosphere with distance-based attenuation.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function PlayAudioPage() {
  return <PlayAudioPageContent />
}
