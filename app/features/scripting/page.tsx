import type { Metadata } from 'next'
import ScriptingApiPageContent from './ScriptingContent'

export const metadata: Metadata = {
  title: 'Scripting API',
  description: 'Control rooms, players, state, and UI from your map scripts with the WorkAdventure scripting API — WA.ui, WA.room, WA.player, and WA.state.',
  openGraph: {
    title: 'Scripting API',
    description: 'Control rooms, players, state, and UI from your map scripts with the WorkAdventure scripting API — WA.ui, WA.room, WA.player, and WA.state.',
  },
  twitter: {
    title: 'Scripting API',
    description: 'Control rooms, players, state, and UI from your map scripts with the WorkAdventure scripting API — WA.ui, WA.room, WA.player, and WA.state.',
  },
}

export default function ScriptingApiPage() {
  return <ScriptingApiPageContent />
}
