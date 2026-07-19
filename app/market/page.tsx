import type { Metadata } from 'next'
import MarketPageContent from './MarketContent'

export const metadata: Metadata = {
  title: 'Market',
  description: 'The BAWES Universe market — explore shops, services, and marketplaces inside shared spatial environments where transactions connect to the real world.',
  openGraph: {
    title: 'Market',
    description: 'The BAWES Universe market — explore shops, services, and marketplaces inside shared spatial environments where transactions connect to the real world.',
  },
  twitter: {
    title: 'Market',
    description: 'The BAWES Universe market — explore shops, services, and marketplaces inside shared spatial environments where transactions connect to the real world.',
  },
}

export default function MarketPage() {
  return <MarketPageContent />
}
