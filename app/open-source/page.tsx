import type { Metadata } from 'next'
import OpenSourcePageContent from './OpenSourceContent'

export const metadata: Metadata = {
  title: 'Open Source',
  description: 'The entire BAWES codebase is MIT licensed and open source. Audit every line, contribute pull requests, and follow our transparent roadmap.',
}

export default function OpenSourcePage() {
  return <OpenSourcePageContent />
}
