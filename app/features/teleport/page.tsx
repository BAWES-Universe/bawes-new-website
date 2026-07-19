import type { Metadata } from 'next'
import TeleportPageContent from './TeleportContent'

export const metadata: Metadata = {
  title: 'Teleport',
  description: 'Teleport between universes, worlds, and rooms via area zone properties. Set a destination coordinate on any zone — walk in and arrive somewhere else.',
}

export default function TeleportPage() {
  return <TeleportPageContent />
}
