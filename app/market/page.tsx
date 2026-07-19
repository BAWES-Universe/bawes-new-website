import type { Metadata } from 'next'
import MarketPageContent from './MarketContent'

export const metadata: Metadata = {
  title: 'Market',
  description: 'The BAWES Universe market — explore shops, services, and marketplaces inside shared spatial environments where transactions connect to the real world.',
  openGraph: {
    title: 'Market',
    description: 'The BAWES Universe market — explore shops, services, and marketplaces inside shared spatial environments where transactions connect to the real world.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Market',
    description: 'The BAWES Universe market — explore shops, services, and marketplaces inside shared spatial environments where transactions connect to the real world.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function MarketPage() {
  return <MarketPageContent />
}
