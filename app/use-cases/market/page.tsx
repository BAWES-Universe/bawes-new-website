import type { Metadata } from 'next'
import UseCaseMarketPageContent from './MarketContent'

export const metadata: Metadata = {
  title: 'Universe for Market',
  description: 'Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments.',
  openGraph: {
    title: 'Universe for Market',
    description: 'Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments.',
  },
  twitter: {
    title: 'Universe for Market',
    description: 'Universe supports commerce as a spatial experience. People explore shops, services, and marketplaces together inside shared environments.',
  },
}

export default function UseCaseMarketPage() {
  return <UseCaseMarketPageContent />
}
