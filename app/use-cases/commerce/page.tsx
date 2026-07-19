import type { Metadata } from 'next'
import UseCaseCommercePageContent from './CommerceContent'

export const metadata: Metadata = {
  title: 'Universe for Commerce',
  description: 'Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.',
  openGraph: {
    title: 'Universe for Commerce',
    description: 'Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.',
  },
  twitter: {
    title: 'Universe for Commerce',
    description: 'Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.',
  },
}

export default function UseCaseCommercePage() {
  return <UseCaseCommercePageContent />
}
