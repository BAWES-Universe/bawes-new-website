import type { Metadata } from 'next'
import UseCasePersonalPageContent from './PersonalContent'

export const metadata: Metadata = {
  title: 'Universe for Personal Use',
  description: 'Build your own digital sanctuary with custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.',
  openGraph: {
    title: 'Universe for Personal Use',
    description: 'Build your own digital sanctuary with custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Personal Use',
    description: 'Build your own digital sanctuary with custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCasePersonalPage() {
  return <UseCasePersonalPageContent />
}
