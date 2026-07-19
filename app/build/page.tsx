import type { Metadata } from 'next'
import BuildContent from './BuildContent'

export const metadata: Metadata = {
  title: 'Build & Create Features',
  description: 'Maps, map templates, the inline map editor, area zones, the entity editor, the scripting API, teleport, search, and the avatar platform — everything for building worlds.',
}

export default function Build() {
  return <BuildContent />
}
