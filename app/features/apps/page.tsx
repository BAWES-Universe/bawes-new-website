import type { Metadata } from 'next'
import AppsPageContent from './AppsContent'

export const metadata: Metadata = {
  title: 'Apps',
  description: 'Apps in Universe: connect email, calendar, GitHub and 1,700+ more to your Bricks and bots. You choose what each one does right away and what it asks first.',
  openGraph: {
    title: 'Apps',
    description: 'Apps in Universe: connect email, calendar, GitHub and 1,700+ more to your Bricks and bots. You choose what each one does right away and what it asks first.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Apps',
    description: 'Apps in Universe: connect email, calendar, GitHub and 1,700+ more to your Bricks and bots. You choose what each one does right away and what it asks first.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function AppsPage() {
  return <AppsPageContent />
}
