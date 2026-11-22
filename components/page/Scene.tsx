import { Avatar, Brick, vars, type AvatarId, type BrickColour } from '@/components/home/sprites'
import '@/components/home/home.css'
import './page.css'

/**
 * Small looping scenes for the top of an inner page, drawn with the same avatars and props as the home page plaza.
 * They are plain CSS, so they cost nothing to load and stop for people who ask for reduced motion.
 * Positions are percentages of the scene. An avatar stands on its (x, y) point.
 */

type Prop = 'fire' | 'sofa' | 'plant' | 'desk' | 'platform' | 'bench' | 'frame' | 'wall' | 'gate'

type Item =
  | { av: AvatarId; x: number; y: number; row?: number; say?: string; tag?: string; delay?: number; stroll?: number; seconds?: number }
  | { bk: BrickColour; x: number; y: number; row?: number; say?: string; delay?: number }
  | { p: Prop; x: number; y: number; tint?: string }
  | { ring: [number, number]; x: number; y: number }

export type SceneKind =
  | 'talk'
  | 'stage'
  | 'room'
  | 'chat'
  | 'build'
  | 'resident'
  | 'travel'
  | 'looks'
  | 'desks'
  | 'fire'
  | 'market'
  | 'class'
  | 'brick'

const DOWN = 0
const LEFT = 1
const RIGHT = 2
const UP = 3

const SCENES: Record<SceneKind, Item[]> = {
  talk: [
    { ring: [46, 44], x: 52, y: 64 },
    { p: 'plant', x: 90, y: 26 },
    { p: 'sofa', x: 14, y: 88 },
    { av: 'a', x: 44, y: 70, row: RIGHT, say: 'Hey! Got a minute?' },
    { av: 'g', x: 60, y: 70, row: LEFT, say: 'Sure, go ahead.', delay: 3.5 },
    { av: 'k', x: 8, y: 36, stroll: 26, seconds: 12 },
  ],
  stage: [
    { p: 'platform', x: 50, y: 40 },
    { av: 'd', x: 50, y: 43, row: DOWN, say: 'Welcome, everyone!' },
    { av: 'a', x: 26, y: 78, row: UP },
    { av: 'g', x: 42, y: 82, row: UP },
    { av: 'j', x: 58, y: 78, row: UP },
    { av: 'c', x: 74, y: 82, row: UP },
    { av: 'cat', x: 34, y: 98, row: UP },
    { av: 'k', x: 66, y: 98, row: UP },
  ],
  class: [
    { p: 'platform', x: 50, y: 40 },
    { av: 'f', x: 50, y: 43, row: DOWN, say: 'Any questions?' },
    { av: 'h', x: 26, y: 78, row: UP },
    { av: 'b', x: 42, y: 82, row: UP, say: 'Just one!', delay: 3.5 },
    { av: 'l', x: 58, y: 78, row: UP },
    { av: 'n', x: 74, y: 82, row: UP },
    { av: 'm', x: 50, y: 98, row: UP },
  ],
  room: [
    { p: 'wall', x: 30, y: 16 },
    { p: 'wall', x: 70, y: 16 },
    { p: 'desk', x: 50, y: 52 },
    { p: 'plant', x: 90, y: 30 },
    { av: 'b', x: 32, y: 62, row: RIGHT, say: 'Shall we start?' },
    { av: 'i', x: 68, y: 62, row: LEFT },
    { av: 'f', x: 50, y: 88, row: UP },
    { av: 'm', x: 8, y: 90, stroll: 22, seconds: 11 },
  ],
  chat: [
    { p: 'sofa', x: 50, y: 30 },
    { p: 'plant', x: 10, y: 28 },
    { av: 'c', x: 24, y: 74, row: RIGHT, say: 'Lunch?' },
    { av: 'h', x: 50, y: 66, row: DOWN, say: 'Yes please', delay: 2.3 },
    { av: 'n', x: 76, y: 74, row: LEFT, say: 'Count me in', delay: 4.6 },
    { av: 'cat', x: 90, y: 92, row: LEFT },
  ],
  build: [
    { p: 'frame', x: 30, y: 22, tint: '#f472b6' },
    { p: 'frame', x: 44, y: 22, tint: '#93c5fd' },
    { p: 'frame', x: 58, y: 22, tint: '#fbbf24' },
    { p: 'desk', x: 78, y: 46 },
    { p: 'plant', x: 12, y: 56 },
    { p: 'sofa', x: 28, y: 88 },
    { av: 'm', x: 46, y: 62, row: UP, say: 'A little to the left' },
    { av: 'l', x: 78, y: 74, row: UP },
  ],
  resident: [
    { p: 'bench', x: 84, y: 36 },
    { p: 'plant', x: 12, y: 32 },
    { ring: [40, 38], x: 50, y: 66 },
    { av: 'a', x: 42, y: 72, row: RIGHT, say: 'Where is the stage?' },
    { av: 'j', x: 58, y: 72, row: LEFT, tag: 'Resident', say: 'Follow me!', delay: 3.5 },
    { av: 'e', x: 10, y: 92, stroll: 24, seconds: 12 },
  ],
  travel: [
    { p: 'gate', x: 74, y: 50 },
    { p: 'plant', x: 10, y: 28 },
    { av: 'e', x: 30, y: 34, row: RIGHT },
    { av: 'i', x: 12, y: 72, stroll: 50, seconds: 9 },
  ],
  looks: [
    { av: 'a', x: 14, y: 66 },
    { av: 'k', x: 28, y: 72 },
    { av: 'd', x: 42, y: 66 },
    { av: 'cat', x: 56, y: 72 },
    { av: 'h', x: 70, y: 66, say: 'New hat. Thoughts?' },
    { av: 'n', x: 86, y: 72 },
  ],
  desks: [
    { p: 'desk', x: 22, y: 42 },
    { p: 'desk', x: 50, y: 42 },
    { p: 'desk', x: 78, y: 42 },
    { p: 'plant', x: 92, y: 84 },
    { av: 'i', x: 22, y: 70, row: UP },
    { av: 'b', x: 50, y: 70, row: UP, say: 'It works!' },
    { av: 'l', x: 78, y: 70, row: UP },
    { av: 'dog', x: 8, y: 92, stroll: 30, seconds: 10 },
  ],
  fire: [
    { p: 'fire', x: 50, y: 60 },
    { p: 'sofa', x: 16, y: 34 },
    { p: 'plant', x: 90, y: 28 },
    { av: 'a', x: 34, y: 62, row: RIGHT, say: 'Welcome in!' },
    { av: 'g', x: 66, y: 62, row: LEFT },
    { av: 'e', x: 42, y: 90, row: UP },
    { av: 'k', x: 58, y: 90, row: UP },
    { av: 'cat', x: 82, y: 88, row: LEFT },
  ],
  market: [
    { p: 'bench', x: 22, y: 36 },
    { p: 'bench', x: 50, y: 36 },
    { p: 'bench', x: 78, y: 36 },
    { av: 'd', x: 22, y: 30, row: DOWN },
    { av: 'm', x: 78, y: 30, row: DOWN },
    { av: 'c', x: 50, y: 74, row: UP, say: 'I love this one' },
    { av: 'j', x: 26, y: 78, row: UP },
    { av: 'dog', x: 8, y: 94, stroll: 34, seconds: 11 },
  ],
  brick: [
    { p: 'desk', x: 80, y: 40 },
    { p: 'plant', x: 12, y: 30 },
    { av: 'a', x: 40, y: 72, row: RIGHT, say: 'Can you make a poster?' },
    { bk: 'orange', x: 58, y: 72, row: LEFT, say: 'On it!', delay: 3.5 },
    { bk: 'teal', x: 84, y: 86, row: LEFT, delay: 1.1 },
  ],
}

export default function Scene({ kind, className = '' }: { kind: SceneKind; className?: string }) {
  return (
    <div className={`uh-scene uh-pscene ${className}`} aria-hidden="true">
      {SCENES[kind].map((it, k) => {
        const at = { left: `${it.x}%`, top: `${it.y}%` }
        if ('ring' in it) return <span key={k} className="uh-ring" style={{ ...at, width: `${it.ring[0]}%`, height: `${it.ring[1]}%` }} />
        if ('p' in it) return <span key={k} className={`uh-p uh-${it.p}`} style={{ ...at, ...(it.tint ? vars({ '--f': it.tint }) : null) }} />
        const bubble = it.say ? (
          <span className="uh-say" style={vars({ '--d': `-${it.delay ?? 0}s` })}>
            {it.say}
          </span>
        ) : null
        if ('bk' in it) {
          return (
            <Brick key={k} colour={it.bk} row={it.row ?? DOWN} style={{ ...at, ...vars({ '--d': `-${it.delay ?? 0}s` }) }}>
              {bubble}
            </Brick>
          )
        }
        if (it.stroll != null) {
          return <Avatar key={k} id={it.av} className="uh-stroll" style={{ ...at, ...vars({ '--from': `${it.x}%`, '--to': `${it.x + it.stroll}%`, '--t': `${it.seconds ?? 12}s` }) }} />
        }
        return (
          <Avatar key={k} id={it.av} row={it.row ?? DOWN} style={at}>
            {it.tag ? <span className="uh-tag">{it.tag}</span> : null}
            {bubble}
          </Avatar>
        )
      })}
    </div>
  )
}
