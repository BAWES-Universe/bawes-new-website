import type { Metadata } from 'next'
import OrbitOperatorPageContent from './OrbitOperatorContent'

export const metadata: Metadata = {
  title: 'Orbit Operator',
  description: 'Orbit Operator is the dashboard for your universe: manage universes, worlds and rooms, members and roles, and see who visits, all from one place.',
  openGraph: {
    title: 'Orbit Operator',
    description: 'Orbit Operator is the dashboard for your universe: manage universes, worlds and rooms, members and roles, and see who visits, all from one place.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Orbit Operator',
    description: 'Orbit Operator is the dashboard for your universe: manage universes, worlds and rooms, members and roles, and see who visits, all from one place.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function OrbitOperatorPage() {
  return <OrbitOperatorPageContent />
}
