import type { Metadata } from 'next'
import FollowPageContent from './FollowContent'

export const metadata: Metadata = {
  title: 'Follow',
  description: 'Click to follow another player through the map. Your view tracks their movement — perfect for tours, escorts, and staying together in crowded spaces.',
  openGraph: {
    title: 'Follow',
    description: 'Click to follow another player through the map. Your view tracks their movement — perfect for tours, escorts, and staying together in crowded spaces.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Follow',
    description: 'Click to follow another player through the map. Your view tracks their movement — perfect for tours, escorts, and staying together in crowded spaces.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function FollowPage() {
  return <FollowPageContent />
}
