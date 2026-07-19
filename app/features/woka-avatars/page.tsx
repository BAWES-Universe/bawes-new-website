import type { Metadata } from 'next'
import WokaAvatarsPageContent from './WokaAvatarsContent'

export const metadata: Metadata = {
  title: 'Woka Avatars',
  description: 'Pipoya-style pixel art avatars — colorful, expressive characters you customize to represent yourself across every world in the universe.',
}

export default function WokaAvatarsPage() {
  return <WokaAvatarsPageContent />
}
