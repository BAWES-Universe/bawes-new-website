import type { Metadata } from 'next'
import UseCasePersonalPageContent from './PersonalContent'

export const metadata: Metadata = {
  title: 'Universe for Personal Use',
  description: 'Build your own digital sanctuary with custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.',
}

export default function UseCasePersonalPage() {
  return <UseCasePersonalPageContent />
}
