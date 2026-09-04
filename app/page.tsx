'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import RoomScene from '@/components/scenes/RoomScene'
import {
  ProximityScene, MemoryScene, EditorScene, RecursiveScene, FilesScene,
} from '@/components/scenes/FeatureScenes'
import PixelIcon, { type PixelIconName } from '@/components/pixel/PixelIcon'

/* ─── DATA ─── */

const stats = [
  { number: '50,000+', label: 'Community members' },
  { number: '80+', label: 'Open source repos' },
  { number: '57', label: 'Shipped features' },
  { number: 'MIT', label: 'Licensed, self-hostable' },
]

/** The three mechanics that carry the pitch. Each gets a full row and a scene. */
const pillars = [
  {
    kicker: 'Proximity',
    title: 'Walk up. Start talking.',
    desc: 'No links, no lobby, no "can you hear me?". Audio and video open when you get close and fade as you walk away — the way a room has always worked. Step into a meeting zone and you get screen sharing too.',
    href: '/features/proximity-chat',
    cta: 'How proximity works',
    Scene: ProximityScene,
  },
  {
    kicker: 'Memory',
    title: 'The bots know who you are.',
    desc: 'Every bot keeps persistent memory in Postgres — names, past conversations, what you were working on. Come back a week later and it picks up where you left off instead of asking you to start over.',
    href: '/features/bot-memory',
    cta: 'How bot memory works',
    Scene: MemoryScene,
  },
  {
    kicker: 'Live editing',
    title: 'Change the world while you stand in it.',
    desc: 'Drag a tile, drop an entity, redraw a zone — no export, no redeploy, no kicking anyone out. Maps hot-reload for everyone in the room the moment you save.',
    href: '/features/map-editor',
    cta: 'How the editor works',
    Scene: EditorScene,
  },
]

/** Two more that are better shown side by side. */
const extras = [
  {
    title: 'Bots that build bots',
    desc: 'A manager bot provisions a worker bot through the admin API — its own personality, its own MCP servers, its own room. Agents provisioning agents on real infrastructure.',
    href: '/features/recursive-bots',
    Scene: RecursiveScene,
  },
  {
    title: 'Bots that do real work',
    desc: 'Drop a PDF, spreadsheet, or document into a conversation. Bots parse it, answer questions about it, and hand back charts and images. Not a chat toy.',
    href: '/features/bot-file-parsing',
    Scene: FilesScene,
  },
]

type UseCase = {
  icon: PixelIconName
  colors: [string, string, string, string]
  title: string
  desc: string
  href: string
}

const useCases: UseCase[] = [
  { icon: 'home', colors: ['#a78bfa', '#6d5b9e', '#fbbf24', '#3b2f57'], title: 'Personal', desc: 'Your own space, your own AI companions, friends welcome anytime.', href: '/use-cases/personal' },
  { icon: 'office', colors: ['#93c5fd', '#3f5a86', '#fbbf24', '#26364f'], title: 'Work', desc: 'Team rooms, focus pods, standup bots, and a watercooler that works.', href: '/use-cases/work' },
  { icon: 'gamepad', colors: ['#34d399', '#1f6b52', '#f472b6', '#0f3b2e'], title: 'Community', desc: 'Event halls, gaming rooms, bots that greet every new member by name.', href: '/use-cases/community' },
  { icon: 'graduation', colors: ['#fbbf24', '#8a6218', '#f03e2f', '#4a350c'], title: 'Learning', desc: 'Lecture halls, study groups, teaching assistants on call at 3am.', href: '/use-cases/learning' },
  { icon: 'megaphone', colors: ['#f472b6', '#8a3a63', '#fbbf24', '#4d1f36'], title: 'Events', desc: 'Main stages, sponsor rooms, networking floors, megaphone broadcast.', href: '/use-cases/events' },
  { icon: 'bag', colors: ['#67e8f9', '#2b6b78', '#134e5a', '#0d3540'], title: 'Commerce', desc: 'Subscriptions, ticketing, and payments wired into your existing stack.', href: '/use-cases/commerce' },
  { icon: 'storefront', colors: ['#f59e0b', '#7c5cbf', '#c4b5fd', '#2e2447'], title: 'Market', desc: 'Brand showrooms, pop-up shops, shopping you do next to other people.', href: '/use-cases/market' },
]

/* ─── HELPERS ─── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay },
})

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-sm font-medium text-accent-purple hover:text-white transition-colors">
      {children}
      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
    </Link>
  )
}

/* ─── PAGE ─── */

export default function Home() {
  return (
    <div className="relative z-10">

      {/* ═══ HERO ═══ */}
      <section className="max-w-7xl mx-auto pt-32 md:pt-40 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0)} className="section-label">
            A SHARED WORLD, NOT ANOTHER TAB
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="font-display text-5xl md:text-7xl lg:text-[76px] leading-[1.03] font-bold text-white mb-6 tracking-[-0.03em] text-balance"
          >
            Imagine a place where{' '}
            <span
              className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}
            >
              you can just walk over
            </span>{' '}
            and talk.
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="text-lg text-text-secondary leading-relaxed max-w-[560px] mb-9">
            Universe is a world you move through, not an app you log into. Walk up to someone and
            the conversation opens. Walk away and it closes. The bots living there remember you,
            read your files, and get real work done.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-4">
            <Link
              href="https://universe.bawes.net"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              Enter the Universe
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.14)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.32)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              See how it works
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ HERO SCENE — the product, drawn ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28"
      >
        <div className="pixel-frame overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.55)] aspect-[4/3] sm:aspect-[16/10] md:aspect-auto">
          <RoomScene className="block w-full h-full md:h-auto" />
        </div>
        <p className="mt-4 text-xs text-text-muted text-center tracking-wide">
          One room. Proximity audio open on the left, a bot mid-conversation, a meeting zone on the right.
        </p>
      </motion.div>

      {/* ═══ STATS ═══ */}
      <div className="band-raised">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp(i * 0.05)} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
                {stat.number}
              </p>
              <p className="text-sm text-text-muted mt-1.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ PILLARS — alternating rows ═══ */}
      <Section>
        <motion.div {...fadeUp(0)} className="mb-16">
          <div className="section-label">What makes it different</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-[-0.02em] text-balance">
            Not a tool. Not a game.
            <br />
            A{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #f59e0b)' }}>
              place
            </span>
            .
          </h2>
          <p className="text-base text-text-muted max-w-[520px]">
            Three things make a room feel alive instead of scheduled. All three are shipped and running today.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0)}
              className={`flex flex-col gap-8 md:gap-14 items-center ${i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="flex-1 w-full">
                <div className="pixel-frame overflow-hidden">
                  <p.Scene />
                </div>
              </div>
              <div className="flex-1 w-full">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-purple/70 mb-3">{p.kicker}</p>
                <h3 className="font-display text-3xl md:text-[40px] font-bold text-white mb-4 leading-[1.12] tracking-[-0.02em] text-balance">
                  {p.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed mb-6 max-w-[460px]">{p.desc}</p>
                <ArrowLink href={p.href}>{p.cta}</ArrowLink>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══ EXTRAS ═══ */}
      <div className="band-raised">
        <Section>
          <motion.div {...fadeUp(0)} className="mb-12">
            <div className="section-label">And then it gets strange</div>
            <h2 className="font-display text-3xl md:text-[42px] font-bold text-white leading-tight tracking-[-0.02em] max-w-[620px] text-balance">
              The bots don&apos;t just talk. They build, and they hire.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extras.map((e, i) => (
              <motion.div key={e.title} {...fadeUp(i * 0.08)}>
                <Link href={e.href} className="scene-card group block h-full">
                  <e.Scene />
                  <div className="p-7">
                    <h3 className="font-headline-card text-headline-card text-white mb-2">{e.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-5">{e.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-purple">
                      Learn more
                      <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* ═══ USE CASES ═══ */}
      <Section>
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="section-label">What people build</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-[-0.02em] text-balance">
            Universes for work, school,
            <br />
            community, and everything after.
          </h2>
          <p className="text-base text-text-muted max-w-[520px]">
            Companies, classrooms, communities, and creators are already running their own worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {useCases.map((u, i) => (
            <motion.div key={u.title} {...fadeUp((i % 4) * 0.05)}>
              <Link href={u.href} className="bento-card group flex flex-col h-full">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${u.colors[0]}14`, border: `1px solid ${u.colors[0]}22` }}
                >
                  <PixelIcon name={u.icon} colors={u.colors} size={34} />
                </div>
                <h3 className="font-headline-card text-headline-card text-white mb-2">{u.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{u.desc}</p>
                <div className="bento-card-arrow">
                  Learn more
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══ OPEN BY DEFAULT ═══ */}
      <div className="band-accent">
        <Section className="!py-20 md:!py-24">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <motion.div {...fadeUp(0)} className="flex-1">
              <div className="section-label">Open by default</div>
              <h2 className="font-display text-3xl md:text-[42px] font-bold text-white mb-5 leading-tight tracking-[-0.02em] text-balance">
                You can read every line of it.
              </h2>
              <p className="text-base text-text-muted leading-relaxed mb-7 max-w-[480px]">
                Universe is a fork of WorkAdventure, MIT licensed, and deployable on your own
                infrastructure with Docker Compose or Helm. No lock-in, no black box, no seat
                you have to ask permission to sit in.
              </p>
              <div className="flex flex-wrap gap-4">
                <ArrowLink href="/open-source">Browse the source</ArrowLink>
                <ArrowLink href="/features/self-hosting">Self-host it</ArrowLink>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="flex-1 w-full grid grid-cols-2 gap-4">
              {[
                { k: 'License', v: 'MIT' },
                { k: 'Repos', v: '80+' },
                { k: 'Deploy', v: 'Docker · Helm' },
                { k: 'Auth', v: 'Your OIDC' },
              ].map((c) => (
                <div key={c.k} className="pixel-frame p-5">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-accent-purple/60 mb-1.5">{c.k}</p>
                  <p className="font-display text-xl font-bold text-white">{c.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>
      </div>

      {/* ═══ CTA ═══ */}
      <Section className="!pb-32">
        <motion.div
          {...fadeUp(0)}
          className="relative rounded-[32px] p-12 md:p-20 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(139,92,246,0.08), rgba(245,158,11,0.04))',
            border: '1px solid rgba(139,92,246,0.14)',
          }}
        >
          <div
            className="absolute w-[520px] h-[520px] top-[-220px] right-[-120px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)' }}
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 relative z-[2] text-balance">
            There&apos;s a room open right now.
          </h2>
          <p className="text-base text-text-muted max-w-[460px] mx-auto mb-9 relative z-[2]">
            No credit card, no commitment. Walk in, look around, and see who&apos;s there.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-[2]">
            <a
              href="https://universe.bawes.net"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              Enter the Universe
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.14)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.32)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              Talk to us
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
