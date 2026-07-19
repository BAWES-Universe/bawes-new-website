import type { Metadata } from 'next'
import MatrixChatPageContent from './MatrixChatContent'

export const metadata: Metadata = {
  title: 'Matrix Chat',
  description: 'Optional Matrix/Synapse integration for persistent chat history. Conversations survive between visits with cross-room message sync across your universe.',
  openGraph: {
    title: 'Matrix Chat',
    description: 'Optional Matrix/Synapse integration for persistent chat history. Conversations survive between visits with cross-room message sync across your universe.',
  },
  twitter: {
    title: 'Matrix Chat',
    description: 'Optional Matrix/Synapse integration for persistent chat history. Conversations survive between visits with cross-room message sync across your universe.',
  },
}

export default function MatrixChatPage() {
  return <MatrixChatPageContent />
}
