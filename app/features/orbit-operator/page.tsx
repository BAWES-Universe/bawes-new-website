import type { Metadata } from 'next'
import OrbitOperatorPageContent from './OrbitOperatorContent'

export const metadata: Metadata = {
  title: 'Orbit Operator',
  description: 'Orbit Operator is the dashboard for manual control of your universe — review logs, manage worlds, monitor performance, and control bots from one place.',
}

export default function OrbitOperatorPage() {
  return <OrbitOperatorPageContent />
}
