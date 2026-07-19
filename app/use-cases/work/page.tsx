import type { Metadata } from 'next'
import UseCaseWorkPageContent from './WorkContent'

export const metadata: Metadata = {
  title: 'Universe for Work',
  description: 'Replace endless Slack threads and Zoom links with a spatial office. Walk into a room, see who is there, and start working with proximity audio and AI standup bots.',
  openGraph: {
    title: 'Universe for Work',
    description: 'Replace endless Slack threads and Zoom links with a spatial office. Walk into a room, see who is there, and start working with proximity audio and AI standup bots.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Universe for Work',
    description: 'Replace endless Slack threads and Zoom links with a spatial office. Walk into a room, see who is there, and start working with proximity audio and AI standup bots.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function UseCaseWorkPage() {
  return <UseCaseWorkPageContent />
}
