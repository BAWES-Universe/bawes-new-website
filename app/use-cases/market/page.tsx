import type { Metadata } from 'next'
import UseCaseMarketPageContent from './MarketContent'

export const metadata: Metadata = {
  title: 'Universe for Market',
  description: 'Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments.',
  openGraph: {
    title: 'Universe for Market',
    description: 'Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Market',
    description: 'Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseMarketPage() {
  return <UseCaseMarketPageContent />
}
