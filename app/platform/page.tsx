import type { Metadata } from 'next'
import PlatformContent from './PlatformContent'

export const metadata: Metadata = {
  title: 'Platform Features',
  description: 'Self-hosting, the admin API, OIDC single sign-on, white-label branding, and the underlying technology stack — the platform that runs Universe.',
}

export default function Platform() {
  return <PlatformContent />
}
