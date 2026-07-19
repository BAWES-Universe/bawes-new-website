import type { Metadata } from 'next'
import LockDiscussPageContent from './LockDiscussContent'

export const metadata: Metadata = {
  title: 'Lock & Discuss',
  description: 'Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.',
}

export default function LockDiscussPage() {
  return <LockDiscussPageContent />
}
