import type { Metadata } from 'next'
import HowItWorksPageContent from './HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Universe is composed of universes, worlds, and rooms people move through — not interfaces people click through. Presence and context shape what you can do.',
}

export default function HowItWorksPage() {
  return <HowItWorksPageContent />
}
