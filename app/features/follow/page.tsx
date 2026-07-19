import type { Metadata } from 'next'
import FollowPageContent from './FollowContent'

export const metadata: Metadata = {
  title: 'Follow',
  description: 'Click to follow another player through the map. Your view tracks their movement — perfect for tours, escorts, and staying together in crowded spaces.',
  openGraph: {
    title: 'Follow',
    description: 'Click to follow another player through the map. Your view tracks their movement — perfect for tours, escorts, and staying together in crowded spaces.',
  },
  twitter: {
    title: 'Follow',
    description: 'Click to follow another player through the map. Your view tracks their movement — perfect for tours, escorts, and staying together in crowded spaces.',
  },
}

export default function FollowPage() {
  return <FollowPageContent />
}
