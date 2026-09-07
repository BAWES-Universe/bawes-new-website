'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/* ──────────────────────────────────────────────────────────────
   The ecosystem: Universe in the middle, and the pieces we built
   around it. Rendered as a responsive SVG on desktop and a stacked
   list on phones.
   ────────────────────────────────────────────────────────────── */

interface Node {
  id: string
  x: number
  y: number
  w: number
  h: number
  title: string
  sub: string
  icon: string
  accent: string
  href: string
}

const NODES: Node[] = [
  { id: 'universe', x: 280, y: 140, w: 240, h: 100, title: 'Universe', sub: 'The space you walk through', icon: 'public', accent: '#a78bfa', href: '/how-it-works' },
  { id: 'orbit', x: 20, y: 30, w: 240, h: 76, title: 'Orbit', sub: 'Your control room', icon: 'admin_panel_settings', accent: '#93c5fd', href: '/features/orbit-operator' },
  { id: 'bots', x: 540, y: 30, w: 240, h: 76, title: 'AI residents', sub: 'Bots living in the rooms', icon: 'smart_toy', accent: '#fbbf24', href: '/ai-bots' },
  { id: 'mcp', x: 540, y: 274, w: 240, h: 76, title: 'Tools', sub: 'What residents can do', icon: 'hub', accent: '#6ee7b7', href: '/mcp-integration' },
  { id: 'discord', x: 20, y: 274, w: 240, h: 76, title: 'Discord link', sub: 'Who is around, in Discord', icon: 'forum', accent: '#f9a8d4', href: '/communication' },
]

const EDGES: { from: string; to: string; label: string; color: string }[] = [
  { from: 'orbit', to: 'universe', label: 'organises', color: '#93c5fd' },
  { from: 'bots', to: 'universe', label: 'walk in as players', color: '#fbbf24' },
  { from: 'mcp', to: 'bots', label: 'give them abilities', color: '#6ee7b7' },
  { from: 'discord', to: 'universe', label: 'who is online', color: '#f9a8d4' },
]

function center(n: Node) {
  return { x: n.x + n.w / 2, y: n.y + n.h / 2 }
}

export default function Ecosystem() {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))
  return (
    <div className="surface-card p-3 sm:p-5 overflow-hidden">
      {/* Mobile: stacked list */}
      <div className="md:hidden grid grid-cols-1 gap-2.5">
        {NODES.map((n) => {
          const isCore = n.id === 'universe'
          return (
            <Link
              key={n.id}
              href={n.href}
              className={`flex items-center gap-3 rounded-2xl p-3.5 border ${isCore ? 'bg-purple-500/10 border-purple-400/40' : 'bg-white/[0.02] border-white/8'}`}
            >
              <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${n.accent}22`, color: n.accent }}>
                <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold text-white leading-tight">{n.title}</span>
                <span className="block text-[12.5px] text-white/50 leading-snug mt-0.5">{n.sub}</span>
              </span>
            </Link>
          )
        })}
      </div>

      <svg viewBox="0 0 800 380" className="hidden md:block w-full h-auto" role="img" aria-label="Diagram: Orbit, AI residents, tools and the Discord link all connect to Universe in the middle.">
        <defs>
          <filter id="eco-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* edges */}
        {EDGES.map((e) => {
          const a = center(byId[e.from])
          const b = center(byId[e.to])
          const mx = (a.x + b.x) / 2
          const my = (a.y + b.y) / 2
          const d = `M ${a.x} ${a.y} Q ${mx} ${a.y} ${mx} ${my} T ${b.x} ${b.y}`
          const tw = e.label.length * 6.2 + 16
          return (
            <g key={`${e.from}-${e.to}`}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
              <path d={d} fill="none" stroke={e.color} strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" className="animate-dash" style={{ opacity: 0.8 }} />
              <rect x={mx - tw / 2} y={my - 10} width={tw} height="20" rx="10" fill="#0f0c1a" stroke="rgba(255,255,255,0.08)" />
              <text x={mx} y={my + 3.5} textAnchor="middle" fontSize="10.5" fill="rgba(255,255,255,0.6)" fontFamily="Inter, system-ui, sans-serif" fontWeight={500}>
                {e.label}
              </text>
            </g>
          )
        })}

        {/* nodes */}
        {NODES.map((n, i) => {
          const isCore = n.id === 'universe'
          const iconY = n.y + n.h / 2 - 18
          return (
            <Link key={n.id} href={n.href}>
              <motion.g
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                style={{ cursor: 'pointer' }}
              >
                <rect
                  x={n.x} y={n.y} width={n.w} height={n.h} rx="18"
                  fill={isCore ? '#1c1533' : '#141020'}
                  stroke={isCore ? 'rgba(167,139,250,0.6)' : `${n.accent}55`}
                  strokeWidth={isCore ? 1.5 : 1}
                  filter={isCore ? 'url(#eco-glow)' : undefined}
                />
                <rect x={n.x + 18} y={iconY} width="36" height="36" rx="10" fill={`${n.accent}22`} />
                <text
                  x={n.x + 36} y={iconY + 25}
                  textAnchor="middle" fontSize="22" fill={n.accent}
                  style={{ fontFamily: 'Material Symbols Outlined', fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  {n.icon}
                </text>
                <text x={n.x + 68} y={n.y + n.h / 2 - 3} fontSize={isCore ? 20 : 16} fontWeight={700} fill="#fff" fontFamily="Space Grotesk, Inter, sans-serif" letterSpacing="-0.3">
                  {n.title}
                </text>
                <text x={n.x + 68} y={n.y + n.h / 2 + 16} fontSize="11.5" fill="rgba(255,255,255,0.55)" fontFamily="Inter, system-ui, sans-serif">
                  {n.sub}
                </text>
              </motion.g>
            </Link>
          )
        })}
      </svg>
    </div>
  )
}
