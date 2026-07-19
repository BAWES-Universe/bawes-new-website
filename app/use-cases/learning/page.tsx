import type { Metadata } from 'next'
import UseCaseLearningPageContent from './LearningContent'

export const metadata: Metadata = {
  title: 'Universe for Learning',
  description: 'Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.',
}

export default function UseCaseLearningPage() {
  return <UseCaseLearningPageContent />
}
