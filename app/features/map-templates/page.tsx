import type { Metadata } from 'next'
import MapTemplatesPageContent from './MapTemplatesContent'

export const metadata: Metadata = {
  title: 'Map Templates',
  description: 'Pre-built room layouts for common use cases, sorted by category. Create a room from a template in one step, then extend or customize it.',
  openGraph: {
    title: 'Map Templates',
    description: 'Pre-built room layouts for common use cases, sorted by category. Create a room from a template in one step, then extend or customize it.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Map Templates',
    description: 'Pre-built room layouts for common use cases, sorted by category. Create a room from a template in one step, then extend or customize it.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MapTemplatesPage() {
  return <MapTemplatesPageContent />
}
