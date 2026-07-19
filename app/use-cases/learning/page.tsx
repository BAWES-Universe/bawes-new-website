import type { Metadata } from 'next'
import UseCaseLearningPageContent from './LearningContent'

export const metadata: Metadata = {
  title: 'Universe for Learning',
  description: 'Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.',
  openGraph: {
    title: 'Universe for Learning',
    description: 'Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Learning',
    description: 'Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseLearningPage() {
  return <UseCaseLearningPageContent />
}
