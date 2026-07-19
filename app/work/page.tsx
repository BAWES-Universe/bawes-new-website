import type { Metadata } from 'next'
import WorkContent from './WorkContent'

export const metadata: Metadata = {
  title: 'Work With Universe',
  description: 'Discover and connect powerful components to enhance your Universe experience — bots, maps, communication, and platform tools.',
}

export default function Work() {
  return <WorkContent />
}
