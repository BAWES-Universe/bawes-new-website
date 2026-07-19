import type { Metadata } from 'next'
import UseCaseWorkPageContent from './WorkContent'

export const metadata: Metadata = {
  title: 'Universe for Work',
  description: 'Replace endless Slack threads and Zoom links with a spatial office. Walk into a room, see who is there, and start working with proximity audio and AI standup bots.',
  openGraph: {
    title: 'Universe for Work',
    description: 'Replace endless Slack threads and Zoom links with a spatial office. Walk into a room, see who is there, and start working with proximity audio and AI standup bots.',
  },
  twitter: {
    title: 'Universe for Work',
    description: 'Replace endless Slack threads and Zoom links with a spatial office. Walk into a room, see who is there, and start working with proximity audio and AI standup bots.',
  },
}

export default function UseCaseWorkPage() {
  return <UseCaseWorkPageContent />
}
