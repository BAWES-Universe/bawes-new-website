'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

/* ─── DATA ─── */

const stats = [
  { number: '10,000+', label: 'Active Rooms' },
  { number: '50,000+', label: 'Community Members' },
  { number: '1,000+', label: 'AI Bots' },
  { number: '80+', label: 'Open Source Repos' },
]

const features = [
  {
    icon: 'spatial_audio', iconColor: '#a78bfa', title: 'Walk in, meet people',
    desc: 'Walk up to start talking, walk away for privacy. Audio fades with distance naturally. Step into a meeting room for face-to-face video and screen sharing — all without scheduling a call.',
    href: '/features/proximity-chat', wide: false, highlight: true,
  },
  {
    icon: 'psychology', iconColor: '#fbbf24', title: 'Bots with memory',
    desc: 'They remember your name, what you talked about, your preferences. Walk up to a bot — it greets you like an old friend.',
    href: '/features/bot-memory', wide: false, highlight: false,
  },
  {
    icon: 'edit_square', iconColor: '#93c5fd', title: 'Edit the world live',
    desc: 'Drag a tile, place an entity, change the lighting — all without leaving the room. The world updates for everyone instantly.',
    href: '/features/map-editor', wide: false, highlight: false,
  },
  {
    icon: 'device_hub', iconColor: '#34d399', title: 'Bots build bots',
    desc: 'Drop a bot into a room. Give it tools. Let it spawn other bots with their own personalities. Self-architecting AI systems.',
    href: '/features/recursive-bots', wide: false, highlight: false,
  },
]

const showcases = [
  { emoji: '🏠', title: 'For Personal', desc: 'Custom AI companions, organized workspaces, friends welcome anytime.', wide: true, href: '/use-cases/personal' },
  { emoji: '🏢', title: 'For Work', desc: 'Team rooms, focus pods, standup bots, and a watercooler that actually works.', wide: true, href: '/use-cases/work' },
  { emoji: '🎓', title: 'For Learning', desc: 'Lecture halls, study groups, AI teaching assistants available 24/7.', href: '/use-cases/learning' },
  { emoji: '🎮', title: 'For Community', desc: 'Event halls, gaming rooms, welcome bots that greet every new member by name.', href: '/use-cases/community' },
  { emoji: '🛍️', title: 'For Market', desc: 'Brand showrooms, social shopping, pop-up shops in shared spaces.', href: '/use-cases/market' },
  { emoji: '💰', title: 'For Commerce', desc: 'Subscriptions, tickets, and payments connected to your stack.', href: '/use-cases/commerce' },
  { emoji: '🌐', title: 'For Events', desc: 'Sponsor rooms, networking zones, main stages for thousands.', wide: true, href: '/use-cases/events' },
]

/* ─── COMPONENTS ─── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

function SceneHero() {
  return (
    <div className="relative w-full rounded-bento overflow-hidden bg-gradient-to-br from-[rgba(20,16,40,0.8)] to-[rgba(10,8,20,0.9)] border border-accent/20 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" fill="none">
        <path d="M80 66 C120 120, 180 80, 220 50" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M320 105 C270 150, 200 160, 150 140" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M120 210 C160 180, 200 190, 240 170" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="3 3" fill="none">
          <animate attributeName="stroke-dashoffset" from="0" to="100" dur="10s" repeatCount="indefinite" />
        </path>
      </svg>
      {/* Content area */}
      <div className="relative aspect-[4/3] flex items-center justify-center p-6">
        {/* Floating avatars */}
        {[
          { top: '22%', left: '18%', gradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)', delay: '0s', emoji: '👤' },
          { top: '35%', right: '20%', gradient: 'linear-gradient(135deg,#f59e0b,#d97706)', delay: '1s', emoji: '🤖' },
          { bottom: '28%', left: '30%', gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)', delay: '0.5s', emoji: '👥' },
          { top: '15%', right: '35%', gradient: 'linear-gradient(135deg,#10b981,#059669)', delay: '2s', emoji: '🎨' },
          { bottom: '20%', right: '15%', gradient: 'linear-gradient(135deg,#ec4899,#db2777)', delay: '1.5s', emoji: '💬' },
        ].map((a, i) => (
          <div
            key={i}
            className="absolute w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg shadow-lg animate-float"
            style={{
              top: a.top, left: a.left, right: a.right, bottom: a.bottom,
              background: a.gradient,
              animationDelay: a.delay,
            }}
          >
            {a.emoji}
          </div>
        ))}
        {/* Bot speech bubble */}
        <div
          className="absolute max-w-[200px] md:max-w-[260px] rounded-xl p-3 md:p-4 text-xs md:text-sm leading-relaxed backdrop-blur-lg"
          style={{
            bottom: '38%', left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(139,92,246,0.15)',
            border: '1px solid rgba(139,92,246,0.2)',
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <strong className="text-accent-purple">Hermes</strong> — Hey, I remember we were working on the landing page. Want me to show the new designs?
        </div>
        {/* Glare */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(139,92,246,0.04) 50%, transparent 60%)',
          }}
        />
      </div>
    </div>
  )
}

function Bentocard({ icon, iconColor, title, desc, href, wide, highlight }: {
  icon: string; iconColor: string; title: string; desc: string;
  href: string; wide: boolean; highlight: boolean
}) {
  return (
    <Link href={href} className={`block ${wide ? 'md:col-span-2' : ''}`}>
      <motion.div
        {...fadeUp(0.05)}
        className={`bento-card h-full ${highlight ? 'bento-card-highlight' : ''}`}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
          style={{ background: `${iconColor}15` }}
        >
          <span className="material-symbols-outlined text-xl" style={{ color: iconColor }}>{icon}</span>
        </div>
        <h3 className="font-headline-card text-headline-card text-white mb-2">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
        <div className="bento-card-arrow">
          Learn more <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
        </div>
      </motion.div>
    </Link>
  )
}

function ShowcaseCard({ emoji, title, desc, href, wide }: {
  emoji: string; title: string; desc: string; href: string; wide?: boolean
  tag?: string; tagColor?: string
}) {
  return (
    <Link href={href} className={`block group ${wide ? 'md:col-span-2' : ''}`}>
      <motion.div
        {...fadeUp(0.05)}
        className="bento-card h-full"
      >
        <span className="text-3xl mb-4 block">{emoji}</span>
        <h3 className="font-headline-card text-headline-card text-white mb-2">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed flex-grow">{desc}</p>
        <div className="bento-card-arrow">
          Learn more <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
        </div>
      </motion.div>
    </Link>
  )
}

/* ════════════════════════════════════════
   PAGE
   ════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="relative z-10">

      {/* ═══ 1. HERO ═══ */}
      <section className="max-w-7xl mx-auto pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 max-w-[600px]">
          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 pl-2 pr-5 rounded-full bg-accent/10 border border-accent/20 text-sm text-text-secondary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse-dot" />
            Live with 10,000+ active rooms
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.05)}
            className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.05] font-bold text-white mb-6 tracking-[-0.03em]"
          >
            Universe is where<br />
            <span className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}>
              people and AI
            </span><br />
            actually live together.
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-lg text-text-muted leading-relaxed max-w-[480px] mb-10"
          >
            Rooms where you walk in, see who&apos;s around, and talk naturally — with people and bots that have memories, feelings, and real tools to help.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="https://universe.bawes.net"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              Enter the Universe
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              How it works →
            </Link>
          </motion.div>
        </div>

        {/* Hero Scene */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex-1 w-full max-w-[600px]"
        >
          <SceneHero />
        </motion.div>
      </section>

      {/* ═══ 2. STATS ═══ */}
      <div className="border-y border-[rgba(139,92,246,0.08)] bg-[rgba(139,92,246,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              {...fadeUp(0.05)}
              className="text-center py-2"
            >
              <p className="font-display text-3xl md:text-4xl font-bold bg-gradient-accent">{stat.number}</p>
              <p className="text-sm text-text-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ 3. WHAT MAKES IT DIFFERENT ═══ */}
      <Section>
        <motion.div {...fadeUp(0)}>
          <div className="section-label" data-label="What makes it different" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-[-0.02em]">
            Not a tool.<br />
            Not a game. A{' '}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #f59e0b)' }}>
              living space
            </span>.
          </h2>
          <p className="text-base text-text-muted max-w-[500px] mb-16">
            The rooms are social. The bots remember you. The world changes based on what you build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f) => (
            <Bentocard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      {/* ═══ 4. WHAT PEOPLE BUILD ═══ */}
      <Section>
        <motion.div {...fadeUp(0)}>
          <div className="section-label" data-label="What people build" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-[-0.02em]">
            Universes for work,<br />school, community, and more.
          </h2>
          <p className="text-base text-text-muted max-w-[500px] mb-16">
            Companies, classrooms, communities, and creators are already building their own worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {showcases.map((s) => (
            <ShowcaseCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* ═══ 5. CTA ═══ */}
      <Section className="!pb-32">
        <motion.div
          {...fadeUp(0)}
          className="relative rounded-[32px] p-12 md:p-20 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(139,92,246,0.06), rgba(245,158,11,0.03))',
            border: '1px solid rgba(139,92,246,0.12)',
          }}
        >
          <div
            className="absolute w-[500px] h-[500px] top-[-200px] right-[-100px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)' }}
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 relative z-[2]">
            Step into a universe<br />that&apos;s waiting for you.
          </h2>
          <p className="text-base text-text-muted max-w-[480px] mx-auto mb-8 relative z-[2]">
            No credit card. No commitment. Build, invite, and watch your world come alive.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-[2]">
            <Link
              href="/communication"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              Enter the Universe
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              Talk to us
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
