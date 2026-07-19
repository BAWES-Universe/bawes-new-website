import type { Metadata } from 'next'
import EmptySeatPageContent from './EmptySeatContent'

export const metadata: Metadata = {
  title: 'The Empty Seat',
  description: 'A core BAWES philosophy: leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.',
}

export default function EmptySeatPage() {
  return <EmptySeatPageContent />
}
