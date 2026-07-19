import type { Metadata } from 'next'
import UseCaseCommunityPageContent from './CommunityContent'

export const metadata: Metadata = {
  title: 'Universe for Community',
  description: 'Hangouts, gaming groups, fan communities, and meetups — build a space where people actually want to spend time and feel they belong.',
  openGraph: {
    title: 'Universe for Community',
    description: 'Hangouts, gaming groups, fan communities, and meetups — build a space where people actually want to spend time and feel they belong.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Community',
    description: 'Hangouts, gaming groups, fan communities, and meetups — build a space where people actually want to spend time and feel they belong.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseCommunityPage() {
  return <UseCaseCommunityPageContent />
}
