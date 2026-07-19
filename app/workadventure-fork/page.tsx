import type { Metadata } from 'next'
import WorkAdventureForkPageContent from './WorkadventureForkContent'

export const metadata: Metadata = {
  title: 'WorkAdventure Fork',
  description: 'BAWES Universe is a fork of WorkAdventure (MIT). We extend the pioneering open-source spatial platform while maintaining upstream compatibility and contributing back.',
  openGraph: {
    title: 'WorkAdventure Fork',
    description: 'BAWES Universe is a fork of WorkAdventure (MIT). We extend the pioneering open-source spatial platform while maintaining upstream compatibility and contributing back.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'WorkAdventure Fork',
    description: 'BAWES Universe is a fork of WorkAdventure (MIT). We extend the pioneering open-source spatial platform while maintaining upstream compatibility and contributing back.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function WorkAdventureForkPage() {
  return <WorkAdventureForkPageContent />
}
