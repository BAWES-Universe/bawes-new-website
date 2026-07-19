import type { Metadata } from 'next'
import OrbitOperatorPageContent from './OrbitOperatorContent'

export const metadata: Metadata = {
  title: 'Orbit Operator',
  description: 'Orbit Operator is the dashboard for manual control of your universe — review logs, manage worlds, monitor performance, and control bots from one place.',
  openGraph: {
    title: 'Orbit Operator',
    description: 'Orbit Operator is the dashboard for manual control of your universe — review logs, manage worlds, monitor performance, and control bots from one place.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Orbit Operator',
    description: 'Orbit Operator is the dashboard for manual control of your universe — review logs, manage worlds, monitor performance, and control bots from one place.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function OrbitOperatorPage() {
  return <OrbitOperatorPageContent />
}
