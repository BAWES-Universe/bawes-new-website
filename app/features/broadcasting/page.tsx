import type { Metadata } from 'next'
import BroadcastingPageContent from './BroadcastingContent'

export const metadata: Metadata = {
  title: 'Broadcasting',
  description: 'Create live events that stream audio and video across the entire universe. Stage and audience zone layouts for virtual summits, concerts, and all-hands.',
  openGraph: {
    title: 'Broadcasting',
    description: 'Create live events that stream audio and video across the entire universe. Stage and audience zone layouts for virtual summits, concerts, and all-hands.',
  },
  twitter: {
    title: 'Broadcasting',
    description: 'Create live events that stream audio and video across the entire universe. Stage and audience zone layouts for virtual summits, concerts, and all-hands.',
  },
}

export default function BroadcastingPage() {
  return <BroadcastingPageContent />
}
