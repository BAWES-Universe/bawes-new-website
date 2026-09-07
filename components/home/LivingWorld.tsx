'use client'

/**
 * LivingWorld — an interactive, procedurally-drawn pixel world that stands in
 * for a product video. Nothing here is a screenshot; it is a small simulation
 * of what Universe does: people walk around, proximity bubbles form when they
 * get close, a resident bot greets you by name, and a meeting room lights up
 * when people step inside. Click anywhere to walk.
 */

import { useEffect, useRef, useState } from 'react'

// ─── World constants (low-res pixel space) ───────────────────────────────────
const W = 384
const H = 240
const TILE = 16

// Meeting room (in tiles)
const ROOM = { x: 15, y: 2, w: 8, h: 6 }
const ROOM_PX = { x: ROOM.x * TILE, y: ROOM.y * TILE, w: ROOM.w * TILE, h: ROOM.h * TILE }
const DOOR = { x: ROOM_PX.x + ROOM_PX.w / 2, y: ROOM_PX.y + ROOM_PX.h + 6 }

// Focus pod (in tiles)
const POD = { x: 1, y: 9, w: 5, h: 5 }
const POD_PX = { x: POD.x * TILE, y: POD.y * TILE, w: POD.w * TILE, h: POD.h * TILE }

const PROXIMITY_R = 26
const BOT_R = 30

type Pt = { x: number; y: number }

interface Agent {
  id: string
  kind: 'human' | 'bot' | 'you'
  name: string
  x: number
  y: number
  hair: string
  skin: string
  shirt: string
  pants: string
  facing: 1 | -1
  targets: Pt[]
  pauseUntil: number
  speed: number
  walkFrame: number
}

const POIS: Pt[] = [
  { x: 180, y: 178 }, // coffee corner
  { x: 190, y: 190 },
  { x: 300, y: 150 }, // desks
  { x: 330, y: 200 },
  { x: 120, y: 60 }, // lobby
  { x: 90, y: 110 },
  { x: ROOM_PX.x + 40, y: ROOM_PX.y + 45 }, // meeting room interior
  { x: ROOM_PX.x + 90, y: ROOM_PX.y + 55 },
  { x: POD_PX.x + 40, y: POD_PX.y + 40 }, // focus pod
  { x: 250, y: 100 },
]

const GREETINGS: ((name: string) => string)[] = [
  (n) => `Welcome back${n ? `, ${n}` : ''}. Still building the study room from last week? I saved your tile palette.`,
  (n) => `Hey${n ? ` ${n}` : ''} — your 3pm standup moved to the meeting room. Want me to walk you there?`,
  () => 'Nice to see you again. Last time we talked about the launch checklist. Two items are still open.',
  () => 'Hi! I read the PDF you dropped yesterday. Ask me anything about section 4.',
]

const NAMES = ['Sara', 'Omar', 'Lina', 'Yusuf', 'Maya', 'Dana']
const HAIRS = ['#3b2418', '#f4d58d', '#1f1a2e', '#8a3b2b', '#e8e2d6', '#5b3ea6']
const SKINS = ['#f2c9a6', '#e0ac7d', '#c98b5e', '#a76b46', '#f5d3b8', '#8d5a3a']
const SHIRTS = ['#a78bfa', '#f59e0b', '#34d399', '#60a5fa', '#f472b6', '#fb7185']

function rand(a: number, b: number) {
  return a + Math.random() * (b - a)
}
function pick<T>(arr: T[], i: number) {
  return arr[i % arr.length]
}
function inside(p: Pt, r: { x: number; y: number; w: number; h: number }) {
  return p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h
}
function dist(a: Pt, b: Pt) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

/** Route through the meeting-room door if crossing its walls. */
function routeTo(from: Pt, to: Pt): Pt[] {
  const a = inside(from, ROOM_PX)
  const b = inside(to, ROOM_PX)
  if (a !== b) return [{ ...DOOR }, to]
  return [to]
}

function makeAgents(): Agent[] {
  const list: Agent[] = []
  for (let i = 0; i < 6; i++) {
    const start = POIS[(i * 3) % POIS.length]
    list.push({
      id: `h${i}`,
      kind: 'human',
      name: pick(NAMES, i),
      x: start.x + rand(-10, 10),
      y: start.y + rand(-10, 10),
      hair: pick(HAIRS, i),
      skin: pick(SKINS, i + 2),
      shirt: pick(SHIRTS, i),
      pants: '#22203a',
      facing: 1,
      targets: [],
      pauseUntil: performance.now() + rand(500, 4000),
      speed: rand(0.45, 0.7),
      walkFrame: 0,
    })
  }
  list.push({
    id: 'bot',
    kind: 'bot',
    name: 'Concierge',
    x: 66,
    y: 84,
    hair: '#cbd5e1',
    skin: '#cbd5e1',
    shirt: '#94a3b8',
    pants: '#475569',
    facing: 1,
    targets: [],
    pauseUntil: Infinity,
    speed: 0,
    walkFrame: 0,
  })
  list.push({
    id: 'you',
    kind: 'you',
    name: 'You',
    x: 130,
    y: 130,
    hair: '#1f1a2e',
    skin: '#e0ac7d',
    shirt: '#fbbf24',
    pants: '#22203a',
    facing: 1,
    targets: [],
    pauseUntil: 0,
    speed: 0.9,
    walkFrame: 0,
  })
  return list
}

// ─── Pixel drawing helpers ───────────────────────────────────────────────────
function px(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, c: string) {
  ctx.fillStyle = c
  ctx.fillRect(Math.round(x), Math.round(y), w, h)
}

function drawAvatar(ctx: CanvasRenderingContext2D, a: Agent, t: number) {
  const ox = Math.round(a.x) - 4
  const bob = a.kind === 'bot' ? Math.round(Math.sin(t / 400) * 1.5) : 0
  const oy = Math.round(a.y) - 14 + bob
  const walking = a.targets.length > 0
  const frame = walking ? Math.floor(a.walkFrame / 8) % 2 : 0

  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.35)'
  ctx.fillRect(ox + 1, Math.round(a.y) - 1, 6, 2)

  ctx.save()
  if (a.facing === -1) {
    ctx.translate(ox + 8, 0)
    ctx.scale(-1, 1)
    ctx.translate(-ox, 0)
  }

  if (a.kind === 'bot') {
    // antenna
    px(ctx, ox + 3, oy - 3, 2, 3, '#94a3b8')
    const glow = Math.sin(t / 250) > 0 ? '#fbbf24' : '#f59e0b'
    px(ctx, ox + 2, oy - 5, 4, 2, glow)
    // head
    px(ctx, ox + 1, oy, 6, 6, '#e2e8f0')
    px(ctx, ox + 2, oy + 2, 4, 2, '#f59e0b') // visor
    px(ctx, ox + 3, oy + 2, 1, 1, '#fff7ed')
    // body
    px(ctx, ox + 1, oy + 6, 6, 5, '#94a3b8')
    px(ctx, ox + 2, oy + 7, 4, 1, '#a78bfa')
    px(ctx, ox, oy + 6, 1, 4, '#cbd5e1')
    px(ctx, ox + 7, oy + 6, 1, 4, '#cbd5e1')
    // legs
    px(ctx, ox + 1, oy + 11, 2, 3, '#475569')
    px(ctx, ox + 5, oy + 11, 2, 3, '#475569')
    ctx.restore()
    return
  }

  // hair
  px(ctx, ox + 1, oy, 6, 3, a.hair)
  px(ctx, ox, oy + 1, 1, 2, a.hair)
  // face
  px(ctx, ox + 1, oy + 3, 6, 3, a.skin)
  px(ctx, ox + 5, oy + 4, 1, 1, '#1f1a2e') // eye (facing right)
  // body
  px(ctx, ox + 1, oy + 6, 6, 5, a.shirt)
  px(ctx, ox, oy + 6, 1, 4, a.shirt)
  px(ctx, ox + 7, oy + 6, 1, 4, a.shirt)
  px(ctx, ox, oy + 10, 1, 1, a.skin)
  px(ctx, ox + 7, oy + 10, 1, 1, a.skin)
  // legs (walk cycle)
  if (frame === 0) {
    px(ctx, ox + 1, oy + 11, 2, 3, a.pants)
    px(ctx, ox + 5, oy + 11, 2, 3, a.pants)
  } else {
    px(ctx, ox + 1, oy + 11, 2, 2, a.pants)
    px(ctx, ox + 5, oy + 11, 2, 3, a.pants)
    px(ctx, ox + 2, oy + 12, 2, 2, a.pants)
  }
  ctx.restore()
}

function drawWorld(ctx: CanvasRenderingContext2D, t: number, meetingActive: boolean) {
  // floor
  for (let ty = 0; ty < H / TILE; ty++) {
    for (let tx = 0; tx < W / TILE; tx++) {
      const even = (tx + ty) % 2 === 0
      px(ctx, tx * TILE, ty * TILE, TILE, TILE, even ? '#14111f' : '#161322')
    }
  }
  // subtle floor grid lines
  ctx.fillStyle = 'rgba(167,139,250,0.05)'
  for (let x = 0; x <= W; x += TILE) ctx.fillRect(x, 0, 1, H)
  for (let y = 0; y <= H; y += TILE) ctx.fillRect(0, y, W, 1)

  // rug in lobby
  px(ctx, 64, 88, 96, 56, '#1c1730')
  px(ctx, 68, 92, 88, 48, '#1a1530')
  ctx.fillStyle = 'rgba(167,139,250,0.10)'
  ctx.fillRect(64, 88, 96, 1)
  ctx.fillRect(64, 143, 96, 1)
  ctx.fillRect(64, 88, 1, 56)
  ctx.fillRect(159, 88, 1, 56)

  // focus pod
  px(ctx, POD_PX.x, POD_PX.y, POD_PX.w, POD_PX.h, '#121a2a')
  ctx.fillStyle = 'rgba(96,165,250,0.35)'
  ctx.fillRect(POD_PX.x, POD_PX.y, POD_PX.w, 2)
  ctx.fillRect(POD_PX.x, POD_PX.y, 2, POD_PX.h)
  ctx.fillRect(POD_PX.x + POD_PX.w - 2, POD_PX.y, 2, POD_PX.h)
  ctx.fillRect(POD_PX.x, POD_PX.y + POD_PX.h - 2, POD_PX.w, 2)
  // pod desk
  px(ctx, POD_PX.x + 12, POD_PX.y + 12, 28, 10, '#3b2f5a')
  px(ctx, POD_PX.x + 18, POD_PX.y + 8, 12, 6, '#0f172a')
  px(ctx, POD_PX.x + 19, POD_PX.y + 9, 10, 4, '#60a5fa')

  // meeting room
  const carpet = meetingActive ? '#2a1f2f' : '#1d1826'
  px(ctx, ROOM_PX.x, ROOM_PX.y, ROOM_PX.w, ROOM_PX.h, carpet)
  ctx.fillStyle = meetingActive ? 'rgba(245,158,11,0.18)' : 'rgba(245,158,11,0.07)'
  for (let y = ROOM_PX.y + 8; y < ROOM_PX.y + ROOM_PX.h; y += 16) ctx.fillRect(ROOM_PX.x, y, ROOM_PX.w, 1)
  // table
  px(ctx, ROOM_PX.x + 32, ROOM_PX.y + 34, 64, 24, '#4a3527')
  px(ctx, ROOM_PX.x + 34, ROOM_PX.y + 36, 60, 20, '#5c4232')
  // screen on the wall
  px(ctx, ROOM_PX.x + 44, ROOM_PX.y + 4, 40, 14, '#0f172a')
  const screenOn = meetingActive
  px(ctx, ROOM_PX.x + 46, ROOM_PX.y + 6, 36, 10, screenOn ? '#a78bfa' : '#1e293b')
  if (screenOn) {
    px(ctx, ROOM_PX.x + 48, ROOM_PX.y + 8, 10, 6, '#c4b5fd')
    px(ctx, ROOM_PX.x + 60, ROOM_PX.y + 8, 20, 2, '#ede9fe')
    px(ctx, ROOM_PX.x + 60, ROOM_PX.y + 12, 14, 2, '#ede9fe')
  }
  // walls
  const wall = meetingActive ? '#8b5cf6' : '#3f3557'
  ctx.fillStyle = wall
  ctx.fillRect(ROOM_PX.x - 2, ROOM_PX.y - 2, ROOM_PX.w + 4, 3)
  ctx.fillRect(ROOM_PX.x - 2, ROOM_PX.y - 2, 3, ROOM_PX.h + 4)
  ctx.fillRect(ROOM_PX.x + ROOM_PX.w - 1, ROOM_PX.y - 2, 3, ROOM_PX.h + 4)
  // bottom wall with a door gap
  const doorW = 20
  ctx.fillRect(ROOM_PX.x - 2, ROOM_PX.y + ROOM_PX.h - 1, ROOM_PX.w / 2 - doorW / 2 + 2, 3)
  ctx.fillRect(ROOM_PX.x + ROOM_PX.w / 2 + doorW / 2, ROOM_PX.y + ROOM_PX.h - 1, ROOM_PX.w / 2 - doorW / 2 + 2, 3)
  // door mat
  px(ctx, DOOR.x - 8, ROOM_PX.y + ROOM_PX.h, 16, 4, '#2c2540')

  // desks (right side)
  const desks = [
    { x: 280, y: 130 },
    { x: 320, y: 130 },
    { x: 280, y: 190 },
    { x: 320, y: 190 },
  ]
  desks.forEach((d, i) => {
    px(ctx, d.x, d.y, 30, 14, '#3b2f5a')
    px(ctx, d.x + 9, d.y - 6, 12, 7, '#0f172a')
    const on = Math.sin(t / 900 + i) > -0.3
    px(ctx, d.x + 10, d.y - 5, 10, 5, on ? '#34d399' : '#1e293b')
    px(ctx, d.x + 8, d.y + 16, 14, 4, '#2c2540')
  })

  // coffee corner
  px(ctx, 168, 200, 44, 16, '#3b2f5a')
  px(ctx, 172, 194, 8, 8, '#e2e8f0')
  px(ctx, 184, 196, 6, 6, '#a78bfa')
  px(ctx, 194, 194, 8, 8, '#f59e0b')
  // steam
  const s = Math.floor(t / 300) % 3
  px(ctx, 175 + s, 188 - s, 1, 2, 'rgba(255,255,255,0.35)')
  px(ctx, 197 - s, 189 - s, 1, 2, 'rgba(255,255,255,0.35)')

  // plants
  const plants = [
    { x: 8, y: 8 },
    { x: 366, y: 8 },
    { x: 8, y: 220 },
    { x: 366, y: 220 },
    { x: 226, y: 24 },
  ]
  plants.forEach((p) => {
    px(ctx, p.x + 2, p.y + 8, 6, 5, '#7c4a2b')
    px(ctx, p.x, p.y + 2, 10, 6, '#15803d')
    px(ctx, p.x + 2, p.y, 6, 3, '#22c55e')
    px(ctx, p.x + 4, p.y + 4, 2, 2, '#4ade80')
  })

  // entrance glow
  px(ctx, 40, 0, 44, 3, '#a78bfa')
  ctx.fillStyle = 'rgba(167,139,250,0.10)'
  ctx.fillRect(40, 3, 44, 22)
}

// ─── Component ───────────────────────────────────────────────────────────────
export interface WorldStats {
  online: number
  bubble: number
  meeting: number
}

export default function LivingWorld({ className = '' }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const pixelRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLCanvasElement>(null)
  const agentsRef = useRef<Agent[]>([])
  const [stats, setStats] = useState<WorldStats>({ online: 8, bubble: 0, meeting: 0 })
  const [hint, setHint] = useState(true)

  useEffect(() => {
    const pixel = pixelRef.current
    const overlay = overlayRef.current
    const wrap = wrapRef.current
    if (!pixel || !overlay || !wrap) return
    const pctx = pixel.getContext('2d')
    const octx = overlay.getContext('2d')
    if (!pctx || !octx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    agentsRef.current = makeAgents()
    const agents = agentsRef.current
    const bot = agents.find((a) => a.kind === 'bot')!
    const you = agents.find((a) => a.kind === 'you')!

    let raf = 0
    let scale = 1
    let dpr = 1
    let ui = 1 // multiplier so labels stay >= ~10 css px on small screens
    let greetIdx = 0
    let greetStart = 0
    let greetTarget: Agent | null = null
    let lastStats = 0
    let running = true

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      scale = rect.width / W
      ui = Math.max(1, 10 / (6 * scale))
      overlay.width = Math.round(rect.width * dpr)
      overlay.height = Math.round((rect.width / W) * H * dpr)
      overlay.style.width = `${rect.width}px`
      overlay.style.height = `${(rect.width / W) * H}px`
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const onPointer = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * W
      const y = ((e.clientY - rect.top) / rect.height) * H
      const target = { x: Math.max(8, Math.min(W - 8, x)), y: Math.max(16, Math.min(H - 4, y)) }
      you.targets = routeTo(you, target)
      you.pauseUntil = 0
      setHint(false)
    }
    wrap.addEventListener('click', onPointer)

    const step = (a: Agent, now: number) => {
      if (a.kind === 'bot') return
      if (a.targets.length === 0) {
        if (a.kind === 'human' && now > a.pauseUntil) {
          const poi = POIS[Math.floor(Math.random() * POIS.length)]
          const target = { x: poi.x + rand(-12, 12), y: poi.y + rand(-10, 10) }
          a.targets = routeTo(a, target)
        }
        return
      }
      const t = a.targets[0]
      const dx = t.x - a.x
      const dy = t.y - a.y
      const d = Math.hypot(dx, dy)
      if (d < 1) {
        a.targets.shift()
        if (a.targets.length === 0) a.pauseUntil = now + rand(1500, 6000)
        return
      }
      a.x += (dx / d) * a.speed
      a.y += (dy / d) * a.speed
      if (Math.abs(dx) > 0.2) a.facing = dx > 0 ? 1 : -1
      a.walkFrame++
    }

    const groups = () => {
      const people = agents.filter((a) => a.kind !== 'bot')
      const parent = people.map((_, i) => i)
      const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])))
      for (let i = 0; i < people.length; i++)
        for (let j = i + 1; j < people.length; j++)
          if (dist(people[i], people[j]) < PROXIMITY_R) parent[find(i)] = find(j)
      const map = new Map<number, Agent[]>()
      people.forEach((p, i) => {
        const r = find(i)
        if (!map.has(r)) map.set(r, [])
        map.get(r)!.push(p)
      })
      return Array.from(map.values()).filter((g) => g.length > 1)
    }

    const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y, x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x, y + h, r)
      ctx.arcTo(x, y + h, x, y, r)
      ctx.arcTo(x, y, x + w, y, r)
      ctx.closePath()
    }

    const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxW: number) => {
      const words = text.split(' ')
      const lines: string[] = []
      let line = ''
      for (const w of words) {
        const test = line ? `${line} ${w}` : w
        if (ctx.measureText(test).width > maxW && line) {
          lines.push(line)
          line = w
        } else line = test
      }
      if (line) lines.push(line)
      return lines
    }

    const render = (now: number) => {
      if (!running) return
      // ── simulate
      agents.forEach((a) => step(a, now))
      const inMeeting = agents.filter((a) => a.kind !== 'bot' && inside(a, ROOM_PX))
      const meetingActive = inMeeting.length >= 2
      const gs = groups()

      // bot greeting logic
      const near = agents
        .filter((a) => a.kind !== 'bot' && dist(a, bot) < BOT_R)
        .sort((a, b) => (a.kind === 'you' ? -1 : b.kind === 'you' ? 1 : 0))[0]
      if (near && near !== greetTarget) {
        greetTarget = near
        greetStart = now
        greetIdx = (greetIdx + 1) % GREETINGS.length
      } else if (!near && greetTarget && now - greetStart > 9000) {
        greetTarget = null
      }
      if (greetTarget) bot.facing = greetTarget.x >= bot.x ? 1 : -1

      // ── pixel layer
      drawWorld(pctx, now, meetingActive)
      const sorted = [...agents].sort((a, b) => a.y - b.y)
      sorted.forEach((a) => drawAvatar(pctx, a, now))

      // ── overlay layer (vector, crisp)
      octx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0)
      octx.clearRect(0, 0, W, H)

      // meeting room glow
      if (meetingActive) {
        const pulse = 0.5 + Math.sin(now / 500) * 0.15
        octx.strokeStyle = `rgba(167,139,250,${pulse})`
        octx.lineWidth = 1.2
        octx.shadowColor = 'rgba(167,139,250,0.8)'
        octx.shadowBlur = 8
        octx.strokeRect(ROOM_PX.x - 1, ROOM_PX.y - 1, ROOM_PX.w + 2, ROOM_PX.h + 2)
        octx.shadowBlur = 0
      }

      // proximity bubbles
      gs.forEach((g) => {
        octx.save()
        octx.globalCompositeOperation = 'lighter'
        g.forEach((p) => {
          const grad = octx.createRadialGradient(p.x, p.y - 6, 4, p.x, p.y - 6, 24)
          grad.addColorStop(0, 'rgba(139,92,246,0.22)')
          grad.addColorStop(1, 'rgba(139,92,246,0)')
          octx.fillStyle = grad
          octx.beginPath()
          octx.arc(p.x, p.y - 6, 24, 0, Math.PI * 2)
          octx.fill()
        })
        octx.restore()
        // link lines
        octx.strokeStyle = 'rgba(196,181,253,0.35)'
        octx.lineWidth = 0.8
        octx.setLineDash([2, 3])
        octx.lineDashOffset = -now / 60
        for (let i = 1; i < g.length; i++) {
          octx.beginPath()
          octx.moveTo(g[0].x, g[0].y - 8)
          octx.lineTo(g[i].x, g[i].y - 8)
          octx.stroke()
        }
        octx.setLineDash([])
        // sound waves above heads
        g.forEach((p, i) => {
          const base = p.y - 20
          for (let b = 0; b < 3; b++) {
            const h = 1.5 + Math.abs(Math.sin(now / 120 + b * 1.1 + i)) * 4
            octx.fillStyle = 'rgba(196,181,253,0.9)'
            octx.fillRect(p.x - 3 + b * 2.5, base - h, 1.5, h)
          }
        })
      })

      // name labels
      octx.font = `600 ${5.5 * ui}px Inter, system-ui, sans-serif`
      octx.textAlign = 'center'
      agents.forEach((a) => {
        const label = a.name
        const tw = octx.measureText(label).width + 6 * ui
        const lx = a.x
        const ly = a.y - 24 - 2 * ui
        octx.fillStyle = a.kind === 'you' ? 'rgba(251,191,36,0.95)' : a.kind === 'bot' ? 'rgba(167,139,250,0.95)' : 'rgba(10,8,20,0.75)'
        roundRect(octx, lx - tw / 2, ly - 5 * ui, tw, 8 * ui, 2 * ui)
        octx.fill()
        octx.fillStyle = a.kind === 'human' ? 'rgba(255,255,255,0.85)' : '#0a0814'
        octx.fillText(label, lx, ly + 1.2 * ui)
      })

      // bot speech bubble (typewriter)
      if (greetTarget) {
        const text = GREETINGS[greetIdx](greetTarget.kind === 'you' ? '' : greetTarget.name)
        const elapsed = now - greetStart
        const chars = reduced ? text.length : Math.min(text.length, Math.floor(elapsed / 28))
        const shown = text.slice(0, chars)
        const fs = 6 * ui
        octx.font = `500 ${fs}px Inter, system-ui, sans-serif`
        octx.textAlign = 'left'
        const maxW = Math.min(118 * ui, W - 24)
        const lines = wrapText(octx, shown, maxW)
        const lh = 8 * ui
        const pad = 6 * ui
        const bw = maxW + pad * 2
        const bh = lines.length * lh + 14 * ui
        const bx = Math.max(4, Math.min(W - bw - 4, bot.x + 14))
        const by = Math.max(26, Math.min(H - bh - 4, bot.y - 12 - bh / 2))
        octx.fillStyle = 'rgba(15,12,26,0.94)'
        octx.strokeStyle = 'rgba(167,139,250,0.55)'
        octx.lineWidth = 0.8
        roundRect(octx, bx, by, bw, bh, 4)
        octx.fill()
        octx.stroke()
        // tail
        const ty = Math.max(by + 6, Math.min(by + bh - 6, bot.y - 12))
        octx.fillStyle = 'rgba(15,12,26,0.94)'
        octx.beginPath()
        octx.moveTo(bx, ty - 3)
        octx.lineTo(bx, ty + 3)
        octx.lineTo(bx - 4, ty)
        octx.closePath()
        octx.fill()
        octx.fillStyle = '#c4b5fd'
        octx.font = `700 ${5.5 * ui}px Inter, system-ui, sans-serif`
        octx.fillText('CONCIERGE BOT', bx + pad, by + 8 * ui)
        octx.fillStyle = 'rgba(255,255,255,0.92)'
        octx.font = `500 ${fs}px Inter, system-ui, sans-serif`
        lines.forEach((l, i) => octx.fillText(l, bx + pad, by + 16 * ui + i * lh))
        if (chars < text.length && Math.floor(now / 300) % 2 === 0) {
          const last = lines[lines.length - 1] || ''
          octx.fillRect(bx + pad + octx.measureText(last).width + 1, by + 16 * ui + (lines.length - 1) * lh - fs * 0.85, 1, fs)
        }
      }

      // stats (throttled)
      if (now - lastStats > 400) {
        lastStats = now
        const yourGroup = gs.find((g) => g.includes(you))
        setStats({ online: agents.length, bubble: yourGroup ? yourGroup.length : 1, meeting: inMeeting.length })
      }

      if (!reduced) raf = requestAnimationFrame(render)
    }

    if (reduced) {
      // draw one calm frame with a greeting already visible
      you.x = 80
      you.y = 60
      render(performance.now())
    } else {
      raf = requestAnimationFrame(render)
    }

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      wrap.removeEventListener('click', onPointer)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className={`relative w-full select-none cursor-crosshair ${className}`}
      style={{ aspectRatio: `${W} / ${H}` }}
      role="img"
      aria-label="Interactive preview of a Universe room: people walking, proximity voice bubbles, a meeting room, and a bot that greets you."
    >
      <canvas
        ref={pixelRef}
        width={W}
        height={H}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
      <canvas ref={overlayRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* HUD */}
      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 rounded-full bg-[rgba(10,8,20,0.75)] border border-white/10 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-white/85">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          {stats.online} in Lobby
        </div>
        <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-[rgba(10,8,20,0.75)] border border-white/10 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-white/70">
          <span className="material-symbols-outlined text-[13px] text-purple-300">spatial_audio</span>
          {stats.bubble > 1 ? `${stats.bubble} in your bubble` : 'Walk up to someone to talk'}
        </div>
      </div>
      <div className="absolute top-3 right-3 pointer-events-none">
        <div
          className={`flex items-center gap-1.5 rounded-full border backdrop-blur px-2.5 py-1 text-[11px] font-medium transition-colors ${
            stats.meeting >= 2
              ? 'bg-[rgba(139,92,246,0.25)] border-purple-400/40 text-white'
              : 'bg-[rgba(10,8,20,0.75)] border-white/10 text-white/60'
          }`}
        >
          <span className="material-symbols-outlined text-[13px]">videocam</span>
          {stats.meeting >= 2 ? `Meeting · ${stats.meeting} on video` : 'Meeting room'}
        </div>
      </div>
      {hint && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="flex items-center gap-1.5 rounded-full bg-[rgba(10,8,20,0.8)] border border-amber-400/30 px-3 py-1 text-[11px] font-medium text-amber-200/90 animate-float">
            <span className="material-symbols-outlined text-[13px]">touch_app</span>
            Click anywhere to walk · try the Concierge bot
          </div>
        </div>
      )}
    </div>
  )
}
