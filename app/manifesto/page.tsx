import type { Metadata } from 'next'
import ManifestoPageContent from './ManifestoContent'

export const metadata: Metadata = {
  title: 'Manifesto',
  description: 'The BAWES Universe manifesto: we are not building an app, we are building a universe — a people-first environment that turns ideas into action.',
  openGraph: {
    title: 'Manifesto',
    description: 'The BAWES Universe manifesto: we are not building an app, we are building a universe — a people-first environment that turns ideas into action.',
  },
  twitter: {
    title: 'Manifesto',
    description: 'The BAWES Universe manifesto: we are not building an app, we are building a universe — a people-first environment that turns ideas into action.',
  },
}

export default function ManifestoPage() {
  return <ManifestoPageContent />
}
