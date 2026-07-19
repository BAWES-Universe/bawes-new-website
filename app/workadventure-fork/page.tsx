import type { Metadata } from 'next'
import WorkAdventureForkPageContent from './WorkadventureForkContent'

export const metadata: Metadata = {
  title: 'WorkAdventure Fork',
  description: 'BAWES Universe is a fork of WorkAdventure (MIT). We extend the pioneering open-source spatial platform while maintaining upstream compatibility and contributing back.',
}

export default function WorkAdventureForkPage() {
  return <WorkAdventureForkPageContent />
}
