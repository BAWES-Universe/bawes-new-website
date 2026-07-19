import type { Metadata } from 'next'
import UseCasesPageContent from './UseCasesContent'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Universe adapts to what you are building — work, school, community, market, and commerce. Pick your path and see what is possible.',
  openGraph: {
    title: 'Use Cases',
    description: 'Universe adapts to what you are building — work, school, community, market, and commerce. Pick your path and see what is possible.',
  },
  twitter: {
    title: 'Use Cases',
    description: 'Universe adapts to what you are building — work, school, community, market, and commerce. Pick your path and see what is possible.',
  },
}

export default function UseCasesPage() {
  return <UseCasesPageContent />
}
