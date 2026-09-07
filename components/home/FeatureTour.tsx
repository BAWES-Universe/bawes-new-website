'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/* ──────────────────────────────────────────────────────────────
   Signature feature tour: four things you can't get from a
   video call, each with a small live illustration.
   ────────────────────────────────────────────────────────────── */

type TabKey = 'proximity' | 'memory' | 'editor' | 'tools'

interface Tab {
  key: TabKey
  icon: string
  label: string
  title: string
  body: string
  bullets: string[]
  href: string
  linkLabel: string
}

const TABS: Tab[] = [
  {
    key: 'proximity',
    icon: 'spatial_audio',
    label: 'Proximity presence',
    title: 'Walk up to talk. Walk away for privacy.',
    body: 'Audio and video open the moment you get close and fade as you step away. No links, no invites, no “can everyone hear me”. Step into a meeting room and the whole room becomes one call.',
    bullets: [
      'Peer-to-peer WebRTC by default, auto-scales to LiveKit for bigger groups',
      'Meeting rooms, focus pods, silent zones and a megaphone for whole-room broadcasts',
      'Screen share, lock a conversation, follow a colleague across the map',
    ],
    href: '/features/proximity-chat',
    linkLabel: 'How proximity chat works',
  },
  {
    key: 'memory',
    icon: 'psychology',
    label: 'Residents with memory',
    title: 'Bots that remember you by name.',
    body: 'A Universe bot is a resident, not a chat window. It walks the map, notices who is nearby, greets you like a colleague and keeps a memory of every conversation you have had with it.',
    bullets: [
      'Persistent per-person memory and conversation history',
      'Emotion tracking: bots notice tone, sentiment and frustration and adapt',
      'Reads PDFs, Word docs, spreadsheets and web pages you drop in',
    ],
    href: '/features/bot-memory',
    linkLabel: 'Explore bot memory',
  },
  {
    key: 'editor',
    icon: 'edit_square',
    label: 'Edit the world live',
    title: 'Change the room without leaving it.',
    body: 'Drag a tile, place a desk, draw a zone that opens a website or starts a meeting. Every change is live for everyone in the room, instantly. No rebuild, no redeploy.',
    bullets: [
      'Inline map editor with entities, areas and 18+ zone behaviours',
      'Start from templates or bring your own Tiled maps',
      'Scripting API for custom logic, teleports between worlds',
    ],
    href: '/features/map-editor',
    linkLabel: 'See the map editor',
  },
  {
    key: 'tools',
    icon: 'hub',
    label: 'Tools via MCP',
    title: 'Give any bot real tools.',
    body: 'Point a bot at any Model Context Protocol server and it discovers the tools on its own: calendars, GitHub, research, image and video generation, your internal APIs. Credentials stay encrypted at rest.',
    bullets: [
      'Native MCP client with bearer, API key and OAuth 2.0 + PKCE auth',
      'AES-256-GCM encrypted credentials, SSRF-guarded connections',
      'Eight built-in tools for navigating, finding people and sending media',
    ],
    href: '/mcp-integration',
    linkLabel: 'MCP integration details',
  },
]

/* ─── Demos ──────────────────────────────────────────────────── */

function Avatar({ color, label, className = '' }: { color: string; label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className="w-9 h-9 rounded-xl shadow-lg flex items-center justify-center text-[10px] font-bold text-[#0a0814]"
        style={{ background: color }}
      >
        {label.slice(0, 1)}
      </div>
      <span className="text-[10px] text-white/60 font-medium">{label}</span>
    </div>
  )
}

function ProximityDemo({ reduced }: { reduced: boolean }) {
  const dur = 7
  const times = [0, 0.3, 0.5, 0.8, 1]
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0d0a18] grid-fade">
      <div className="absolute inset-0 grid-fade opacity-60" />
      {/* meeting room outline */}
      <div className="absolute right-6 top-6 w-[36%] h-[42%] rounded-xl border border-dashed border-purple-400/30 bg-purple-500/5">
        <span className="absolute -top-2.5 left-3 chip chip-purple !py-0.5 !px-2 !text-[10px]">Meeting room</span>
      </div>
      {/* bubbles */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 150, height: 150, left: 'calc(50% - 75px)', top: 'calc(56% - 75px)', background: 'radial-gradient(circle, rgba(139,92,246,0.35), rgba(139,92,246,0) 70%)' }}
        animate={reduced ? { opacity: 1, scale: 1 } : { opacity: [0, 0, 1, 1, 0], scale: [0.6, 0.6, 1, 1, 0.6] }}
        transition={{ duration: dur, times, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute"
        style={{ top: '50%', marginTop: -28 }}
        animate={reduced ? { left: '38%' } : { left: ['10%', '38%', '38%', '10%', '10%'] }}
        transition={{ duration: dur, times, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Avatar color="#fbbf24" label="You" />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: '50%', marginTop: -28 }}
        animate={reduced ? { left: '52%' } : { left: ['78%', '52%', '52%', '78%', '78%'] }}
        transition={{ duration: dur, times, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Avatar color="#a78bfa" label="Omar" />
      </motion.div>
      {/* audio bars */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 flex items-end gap-[3px]"
        style={{ top: 'calc(50% - 52px)' }}
        animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: dur, times, repeat: Infinity }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-purple-300"
            animate={reduced ? { height: 10 } : { height: [4, 14, 6, 16, 4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
          />
        ))}
      </motion.div>
      {/* status */}
      <motion.div
        className="absolute bottom-4 left-4 chip chip-green"
        animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: dur, times, repeat: Infinity }}
      >
        <span className="material-symbols-outlined text-[13px]">mic</span> Connected · audio fades with distance
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 chip"
        animate={reduced ? { opacity: 0 } : { opacity: [1, 1, 0, 0, 1] }}
        transition={{ duration: dur, times, repeat: Infinity }}
      >
        <span className="material-symbols-outlined text-[13px]">directions_walk</span> Walking closer…
      </motion.div>
    </div>
  )
}

function Typewriter({ text, delay = 0, speed = 22, reduced }: { text: string; delay?: number; speed?: number; reduced: boolean }) {
  const [n, setN] = useState(reduced ? text.length : 0)
  useEffect(() => {
    if (reduced) return
    setN(0)
    let i = 0
    let id: ReturnType<typeof setInterval> | null = null
    const start = setTimeout(() => {
      id = setInterval(() => {
        i++
        setN(i)
        if (i >= text.length && id) clearInterval(id)
      }, speed)
    }, delay)
    return () => {
      clearTimeout(start)
      if (id) clearInterval(id)
    }
  }, [text, delay, speed, reduced])
  return (
    <span>
      {text.slice(0, n)}
      {n < text.length && <span className="inline-block w-[2px] h-[1em] align-[-2px] bg-purple-300 ml-0.5 animate-blink" />}
    </span>
  )
}

function MemoryDemo({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0d0a18] p-4 sm:p-5 flex flex-col gap-3 justify-center">
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="relative">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/35 mb-2">Two weeks ago</div>
        <div className="surface-card p-3 text-[13px] text-white/80 leading-relaxed">
          <span className="text-amber-300 font-semibold">Sara:</span> Hi, I&apos;m Sara. I&apos;m setting up a study room for my cohort — mostly evenings, UTC+3.
        </div>
      </div>
      <div className="relative flex items-center gap-2 px-1">
        <div className="h-px flex-1 bg-gradient-to-r from-purple-400/40 to-transparent" />
        <div className="flex flex-wrap gap-1.5">
          <span className="chip chip-purple !text-[10px]"><span className="material-symbols-outlined text-[12px]">memory</span> name: Sara</span>
          <span className="chip chip-purple !text-[10px]">project: study room</span>
          <span className="chip chip-purple !text-[10px]">tz: UTC+3</span>
        </div>
      </div>
      <div className="relative">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/35 mb-2">Today · Sara walks up</div>
        <div className="surface-card p-3 text-[13px] text-white/85 leading-relaxed border-purple-400/30">
          <span className="text-purple-300 font-semibold">Concierge bot:</span>{' '}
          <Typewriter
            reduced={reduced}
            delay={600}
            text="Welcome back, Sara. Your study room is live — three people from your cohort were in it last night. Want me to walk you there?"
          />
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="chip chip-green !text-[10px]"><span className="material-symbols-outlined text-[12px]">sentiment_satisfied</span> sentiment +42 · sincere</span>
          <span className="chip !text-[10px]"><span className="material-symbols-outlined text-[12px]">navigation</span> navigate_to ready</span>
        </div>
      </div>
    </div>
  )
}

function EditorDemo({ reduced }: { reduced: boolean }) {
  const cols = 10
  const rows = 6
  // cells painted over time: index -> color
  const paint: Record<number, string> = {
    12: '#3b2f5a', 13: '#3b2f5a', 14: '#3b2f5a',
    22: '#3b2f5a', 23: '#5c4232', 24: '#3b2f5a',
    36: '#1d4ed8', 37: '#1d4ed8',
    46: '#1d4ed8', 47: '#1d4ed8',
    18: '#15803d', 48: '#15803d',
  }
  const order = [12, 13, 14, 22, 23, 24, 18, 36, 37, 46, 47, 48]
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0d0a18] p-4 sm:p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="chip chip-amber !text-[10px]"><span className="material-symbols-outlined text-[12px]">edit</span> Edit mode</span>
          <span className="chip !text-[10px]">Layer: furniture</span>
        </div>
        <span className="chip chip-green !text-[10px]"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live · 4 in room</span>
      </div>
      <div
        className="relative flex-1 grid gap-[2px] rounded-xl p-2 bg-[#110e1c] border border-white/5"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => {
          const idx = order.indexOf(i)
          const painted = idx >= 0
          return (
            <motion.div
              key={i}
              className="rounded-[3px]"
              style={{ background: (i % 2 === (Math.floor(i / cols) % 2)) ? '#15121f' : '#171425' }}
              animate={painted ? { backgroundColor: reduced ? paint[i] : [(i % 2 === 0 ? '#15121f' : '#171425'), (i % 2 === 0 ? '#15121f' : '#171425'), paint[i], paint[i], (i % 2 === 0 ? '#15121f' : '#171425')] } : {}}
              transition={painted && !reduced ? { duration: 9, times: [0, Math.max(0.01, idx * 0.05), 0.05 + idx * 0.05, 0.85, 1], repeat: Infinity, ease: 'linear' } : { duration: 0 }}
            />
          )
        })}
        {/* cursor */}
        {!reduced && (
          <motion.div
            className="absolute w-[9%] aspect-square rounded-[4px] border-2 border-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.6)] pointer-events-none"
            animate={{
              left: [order[0], ...order, order[order.length - 1]].map((i) => `${2 + (i % cols) * 9.6}%`),
              top: [order[0], ...order, order[order.length - 1]].map((i) => `${4 + Math.floor(i / cols) * 15.5}%`),
              opacity: [0, ...order.map(() => 1), 0],
            }}
            transition={{ duration: 9, times: [0, ...order.map((_, k) => 0.05 + k * 0.05), 1], repeat: Infinity, ease: 'linear' }}
          />
        )}
        {/* zone */}
        <motion.div
          className="absolute rounded-md border border-dashed border-purple-300/60 bg-purple-500/10 pointer-events-none"
          style={{ left: '60%', top: '20%', width: '32%', height: '60%' }}
          animate={reduced ? { opacity: 1 } : { opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 9, times: [0, 0.6, 0.7, 0.9, 1], repeat: Infinity }}
        >
          <span className="absolute -top-2.5 left-2 chip chip-purple !py-0 !px-1.5 !text-[9px]">zone: openWebsite</span>
        </motion.div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-white/50">
        <span className="material-symbols-outlined text-[14px] text-purple-300">sync</span>
        Changes sync to everyone in the room instantly
      </div>
    </div>
  )
}

function ToolsDemo({ reduced }: { reduced: boolean }) {
  const tools = [
    { label: 'calendar.create_event', angle: -90, color: '#93c5fd' },
    { label: 'github.search_issues', angle: -18, color: '#c4b5fd' },
    { label: 'firecrawl.scrape', angle: 54, color: '#6ee7b7' },
    { label: 'comfyui.generate', angle: 126, color: '#fcd34d' },
    { label: 'admin.create_bot', angle: 198, color: '#f9a8d4' },
  ]
  const R = 38 // % radius
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0d0a18]">
      <div className="absolute inset-0 grid-fade opacity-50" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {tools.map((t, i) => {
          const rad = (t.angle * Math.PI) / 180
          const x = 50 + Math.cos(rad) * R
          const y = 50 + Math.sin(rad) * R * 0.9
          return (
            <g key={t.label}>
              <line x1="50" y1="50" x2={x} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
              <line
                x1="50" y1="50" x2={x} y2={y}
                stroke={t.color}
                strokeWidth="0.6"
                strokeDasharray="2 6"
                vectorEffect="non-scaling-stroke"
                className={reduced ? '' : 'animate-dash'}
                style={{ animationDelay: `${i * 0.3}s`, opacity: 0.8 }}
              />
            </g>
          )
        })}
      </svg>
      {/* bot node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
        <motion.div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-amber-400 shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center justify-center"
          animate={reduced ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="material-symbols-outlined text-white text-[28px]">smart_toy</span>
        </motion.div>
        <span className="text-[10px] text-white/70 font-medium">Research bot</span>
      </div>
      {/* tool nodes */}
      {tools.map((t, i) => {
        const rad = (t.angle * Math.PI) / 180
        const x = 50 + Math.cos(rad) * R
        const y = 50 + Math.sin(rad) * R * 0.9
        return (
          <motion.div
            key={t.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 chip mono !text-[10px]"
            style={{ left: `${x}%`, top: `${y}%`, borderColor: `${t.color}55`, color: t.color, background: 'rgba(10,8,20,0.85)' }}
            animate={reduced ? {} : { opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
          >
            {t.label}
          </motion.div>
        )
      })}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        <span className="chip chip-purple !text-[10px] mono">tools/list → 12 tools discovered</span>
        <span className="chip !text-[10px]"><span className="material-symbols-outlined text-[12px]">lock</span> AES-256-GCM · OAuth PKCE</span>
      </div>
    </div>
  )
}

/* ─── Tour ───────────────────────────────────────────────────── */

export default function FeatureTour() {
  const [active, setActive] = useState<TabKey>('proximity')
  const [auto, setAuto] = useState(true)
  const reduced = useReducedMotion() ?? false
  const tab = TABS.find((t) => t.key === active)!

  // auto-advance until the visitor interacts
  useEffect(() => {
    if (!auto || reduced) return
    const id = setInterval(() => {
      setActive((k) => TABS[(TABS.findIndex((t) => t.key === k) + 1) % TABS.length].key)
    }, 9000)
    return () => clearInterval(id)
  }, [auto, reduced])

  const choose = (k: TabKey) => {
    setActive(k)
    setAuto(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
      {/* tabs */}
      <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
        {TABS.map((t) => {
          const on = t.key === active
          return (
            <button
              key={t.key}
              onClick={() => choose(t.key)}
              className={`relative flex-shrink-0 lg:flex-shrink text-left rounded-2xl px-4 py-3.5 transition-all duration-300 border ${
                on
                  ? 'bg-[rgba(139,92,246,0.10)] border-purple-400/30 text-white'
                  : 'bg-transparent border-white/5 text-white/55 hover:text-white/85 hover:border-white/10'
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${on ? 'bg-purple-500/25 text-purple-200' : 'bg-white/5 text-white/50'}`}
                >
                  <span className="material-symbols-outlined text-[20px]">{t.icon}</span>
                </span>
                <span className="font-semibold text-sm whitespace-nowrap">{t.label}</span>
              </span>
              {on && auto && !reduced && (
                <motion.span
                  key={active}
                  className="absolute left-4 right-4 bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-amber-400 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 9, ease: 'linear' }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* panel */}
      <div className="lg:col-span-8 surface-card p-2 sm:p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
          <div className="min-h-[320px] md:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="h-full"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {active === 'proximity' && <ProximityDemo reduced={reduced} />}
                {active === 'memory' && <MemoryDemo reduced={reduced} />}
                {active === 'editor' && <EditorDemo reduced={reduced} />}
                {active === 'tools' && <ToolsDemo reduced={reduced} />}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="p-4 sm:p-6 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <h3 className="font-display text-2xl sm:text-[28px] font-bold text-white leading-tight tracking-[-0.02em] mb-3">
                  {tab.title}
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed mb-5">{tab.body}</p>
                <ul className="space-y-2.5 mb-6">
                  {tab.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/75">
                      <span className="material-symbols-outlined text-[18px] text-purple-300 mt-[1px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tab.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 hover:text-white transition-colors group"
                >
                  {tab.linkLabel}
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
