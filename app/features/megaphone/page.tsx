import type { Metadata } from 'next'
import MegaphonePageContent from './MegaphoneContent'

export const metadata: Metadata = {
  title: 'Megaphone',
  description: 'Zone-based megaphone: designate speakers and listeners within area zones. Amplify your voice to a whole room — or silence it with a silent zone.',
}

export default function MegaphonePage() {
  return <MegaphonePageContent />
}
