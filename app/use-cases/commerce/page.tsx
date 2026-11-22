import type { Metadata } from 'next'
import UseCaseCommercePageContent from './CommerceContent'

export const metadata: Metadata = {
  title: 'Universe for Commerce',
  description: 'Turn your spatial world into a place to do business. Show your products, services, and events inside the experience, with staff and AI bots at the counter.',
  openGraph: {
    title: 'Universe for Commerce',
    description: 'Turn your spatial world into a place to do business. Show your products, services, and events inside the experience, with staff and AI bots at the counter.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Commerce',
    description: 'Turn your spatial world into a place to do business. Show your products, services, and events inside the experience, with staff and AI bots at the counter.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseCommercePage() {
  return <UseCaseCommercePageContent />
}
