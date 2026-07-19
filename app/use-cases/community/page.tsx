import type { Metadata } from 'next'
import UseCaseCommunityPageContent from './CommunityContent'

export const metadata: Metadata = {
  title: 'Universe for Community',
  description: 'Hangouts, gaming groups, fan communities, and meetups — build a space where people actually want to spend time and feel they belong.',
  openGraph: {
    title: 'Universe for Community',
    description: 'Hangouts, gaming groups, fan communities, and meetups — build a space where people actually want to spend time and feel they belong.',
  },
  twitter: {
    title: 'Universe for Community',
    description: 'Hangouts, gaming groups, fan communities, and meetups — build a space where people actually want to spend time and feel they belong.',
  },
}

export default function UseCaseCommunityPage() {
  return <UseCaseCommunityPageContent />
}
