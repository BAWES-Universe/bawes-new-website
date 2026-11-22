import type { Metadata } from 'next'
import QuestsPageContent from './QuestsContent'

export const metadata: Metadata = {
  title: 'Quests',
  description: 'Quests in Universe: a place sets a few stops for its visitors, and your Brick leads you through them. Hosts make a quest by saying it to a Brick. No ranks and no leaderboards.',
  openGraph: {
    title: 'Quests',
    description: 'Quests in Universe: a place sets a few stops for its visitors, and your Brick leads you through them. Hosts make a quest by saying it to a Brick. No ranks and no leaderboards.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Quests',
    description: 'Quests in Universe: a place sets a few stops for its visitors, and your Brick leads you through them. Hosts make a quest by saying it to a Brick. No ranks and no leaderboards.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function QuestsPage() {
  return <QuestsPageContent />
}
