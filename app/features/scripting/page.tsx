import type { Metadata } from 'next'
import ScriptingApiPageContent from './ScriptingContent'

export const metadata: Metadata = {
  title: 'Scripting API',
  description: 'Control rooms, players, state, and UI from your map scripts with the WorkAdventure scripting API — WA.ui, WA.room, WA.player, and WA.state.',
  openGraph: {
    title: 'Scripting API',
    description: 'Control rooms, players, state, and UI from your map scripts with the WorkAdventure scripting API — WA.ui, WA.room, WA.player, and WA.state.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Scripting API',
    description: 'Control rooms, players, state, and UI from your map scripts with the WorkAdventure scripting API — WA.ui, WA.room, WA.player, and WA.state.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function ScriptingApiPage() {
  return <ScriptingApiPageContent />
}
