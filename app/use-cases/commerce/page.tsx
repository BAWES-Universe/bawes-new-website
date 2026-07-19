import type { Metadata } from 'next'
import UseCaseCommercePageContent from './CommerceContent'

export const metadata: Metadata = {
  title: 'Universe for Commerce',
  description: 'Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.',
  openGraph: {
    title: 'Universe for Commerce',
    description: 'Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Commerce',
    description: 'Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseCommercePage() {
  return <UseCaseCommercePageContent />
}
