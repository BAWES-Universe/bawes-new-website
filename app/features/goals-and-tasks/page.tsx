import type { Metadata } from 'next'
import GoalsAndTasksPageContent from './GoalsAndTasksContent'

export const metadata: Metadata = {
  title: 'Goals and Tasks',
  description: 'Goals and tasks in Universe: give your Brick a goal, a schedule, a reminder or something to keep watch on. It works while you are away and messages you when something changes.',
  openGraph: {
    title: 'Goals and Tasks',
    description: 'Goals and tasks in Universe: give your Brick a goal, a schedule, a reminder or something to keep watch on. It works while you are away and messages you when something changes.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Goals and Tasks',
    description: 'Goals and tasks in Universe: give your Brick a goal, a schedule, a reminder or something to keep watch on. It works while you are away and messages you when something changes.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function GoalsAndTasksPage() {
  return <GoalsAndTasksPageContent />
}
