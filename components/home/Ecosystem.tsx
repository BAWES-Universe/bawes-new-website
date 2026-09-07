'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/* ──────────────────────────────────────────────────────────────
   The ecosystem: what BAWES added around the WorkAdventure core.
   Rendered as a responsive SVG so the wiring scales with the page.
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
  { id: 'universe', x: 300, y: 150, w: 200, h: 110, title: 'Universe', sub: 'play · back · pusher · map-storage', icon: 'public', accent: '#a78bfa', href: '/how-it-works' },
  { id: 'orbit', x: 30, y: 40, w: 190, h: 82, title: 'Orbit admin', sub: 'universes, worlds, rooms, members', icon: 'admin_panel_settings', accent: '#93c5fd', href: '/features/admin-api' },
  { id: 'bots', x: 580, y: 40, w: 190, h: 82, title: 'Bot runtime', sub: 'memory · emotions · pathfinding', icon: 'smart_toy', accent: '#fbbf24', href: '/ai-bots' },
  { id: 'mcp', x: 580, y: 288, w: 190, h: 82, title: 'MCP servers', sub: 'any tool, encrypted creds', icon: 'hub', accent: '#6ee7b7', href: '/mcp-integration' },
  { id: 'discord', x: 30, y: 288, w: 190, h: 82, title: 'Discord bridge', sub: 'presence & activity to your server', icon: 'forum', accent: '#f9a8d4', href: '/communication' },
]

const EDGES: { from: string; to: string; label: string; color: string }[] = [
  { from: 'orbit', to: 'universe', label: 'admin API · OIDC · avatars', color: '#93c5fd' },
  { from: 'bots', to: 'universe', label: 'bots join as players', color: '#fbbf24' },
  { from: 'mcp', to: 'bots', label: 'tools/list · tools/call', color: '#6ee7b7' },
  { from: 'discord', to: 'universe', label: 'join / leave events', color: '#f9a8d4' },
  { from: 'orbit', to: 'bots', label: 'bot config · providers', color: '#c4b5fd' },
]

function center(n: Node) {
  return { x: n.x + n.w / 2, y: n.y + n.h / 2 }
}

export default function Ecosystem() {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))
  return (
    <div className="surface-card p-3 sm:p-5 overflow-hidden">
      {/* Mobile: stacked list (the wired diagram is unreadable under ~700px) */}
      <div className="md:hidden grid grid-cols-1 gap-2.5">
        {NODES.map((n) => {
          const isCore = n.id === 'universe'
          return (
            <Link
              key={n.id}
              href={n.href}
              className={`flex items-start gap-3 rounded-2xl p-3.5 border ${isCore ? 'bg-purple-500/10 border-purple-400/40' : 'bg-white/[0.02] border-white/8'}`}
            >
              <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${n.accent}22`, color: n.accent }}>
                <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold text-white leading-tight">{n.title}</span>
                <span className="block text-[12px] text-white/50 leading-snug mt-0.5">{n.sub}</span>
                {isCore && <span className="block text-[11px] text-white/40 mt-1">Phaser · Svelte · LiveKit · Matrix · Redis</span>}
              </span>
            </Link>
          )
        })}
        <div className="text-center text-[11.5px] text-white/45 pt-1">Universes → Worlds → Rooms · one URL per room · fork of WorkAdventure</div>
      </div>
      <svg viewBox="0 0 800 410" className="hidden md:block w-full h-auto" role="img" aria-label="Diagram of the BAWES Universe ecosystem: Orbit admin, bot runtime, MCP servers and the Discord bridge all connect to the Universe core.">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="b" />
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
          return (
            <g key={`${e.from}-${e.to}`}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
              <path d={d} fill="none" stroke={e.color} strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" className="animate-dash" style={{ opacity: 0.85 }} />
              <text x={mx} y={my - 8} textAnchor="middle" fontSize="10.5" fill="rgba(255,255,255,0.45)" fontFamily="Inter, system-ui, sans-serif" fontWeight={500}>
                {e.label}
              </text>
            </g>
          )
        })}
        {/* nodes */}
        {NODES.map((n, i) => {
          const isCore = n.id === 'universe'
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
                  x={n.x} y={n.y} width={n.w} height={n.h} rx="16"
                  fill={isCore ? 'rgba(139,92,246,0.14)' : 'rgba(255,255,255,0.03)'}
                  stroke={isCore ? 'rgba(167,139,250,0.6)' : `${n.accent}55`}
                  strokeWidth={isCore ? 1.5 : 1}
                  filter={isCore ? 'url(#glow)' : undefined}
                />
                <rect x={n.x + 16} y={n.y + (isCore ? 22 : 20)} width="36" height="36" rx="10" fill={`${n.accent}22`} />
                <text
                  x={n.x + 34} y={n.y + (isCore ? 46 : 44)}
                  textAnchor="middle" fontSize="22" fill={n.accent}
                  style={{ fontFamily: 'Material Symbols Outlined', fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  {n.icon}
                </text>
                <text x={n.x + 64} y={n.y + (isCore ? 42 : 40)} fontSize={isCore ? 20 : 15} fontWeight={700} fill="#fff" fontFamily="Space Grotesk, Inter, sans-serif" letterSpacing="-0.3">
                  {n.title}
                </text>
                <text x={n.x + 64} y={n.y + (isCore ? 64 : 60)} fontSize="11" fill="rgba(255,255,255,0.5)" fontFamily="Inter, system-ui, sans-serif">
                  {n.sub}
                </text>
                {isCore && (
                  <>
                    <text x={n.x + 18} y={n.y + 92} fontSize="10.5" fill="rgba(255,255,255,0.55)" fontFamily="Inter, system-ui, sans-serif">
                      Phaser · Svelte · LiveKit · Matrix · Redis
                    </text>
                  </>
                )}
              </motion.g>
            </Link>
          )
        })}
        {/* hierarchy footnote */}
        <g>
          <text x="400" y="392" textAnchor="middle" fontSize="11.5" fill="rgba(255,255,255,0.45)" fontFamily="Inter, system-ui, sans-serif" fontWeight={500}>
            Universes → Worlds → Rooms · one URL per room · fork of WorkAdventure
          </text>
        </g>
      </svg>
    </div>
  )
}
