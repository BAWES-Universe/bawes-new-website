import type { Metadata } from 'next'
import PlayAudioPageContent from './PlayAudioContent'

export const metadata: Metadata = {
  title: 'Play Audio',
  description: 'Configure areas to trigger audio files when someone walks in — entrance music, announcement chimes, or ambient atmosphere with distance-based attenuation.',
  openGraph: {
    title: 'Play Audio',
    description: 'Configure areas to trigger audio files when someone walks in — entrance music, announcement chimes, or ambient atmosphere with distance-based attenuation.',
  },
  twitter: {
    title: 'Play Audio',
    description: 'Configure areas to trigger audio files when someone walks in — entrance music, announcement chimes, or ambient atmosphere with distance-based attenuation.',
  },
}

export default function PlayAudioPage() {
  return <PlayAudioPageContent />
}
