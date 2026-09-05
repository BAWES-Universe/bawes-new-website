'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/Section'
import RoomScene from '@/components/scenes/RoomScene'
import {
  ProximityScene, MemoryScene, EditorScene, RecursiveScene, FilesScene,
} from '@/components/scenes/FeatureScenes'
import PixelIcon, { type PixelIconName } from '@/components/pixel/PixelIcon'

/* ─── DATA ───
   Copy is the site's own. Only the artwork changed: each feature now carries
   a scene that draws its mechanic, and the use cases carry pixel icons
   instead of emoji. */

const stats = [
  { number: '50,000+', label: 'Community Members' },
  { number: '80+', label: 'Open Source Repos' },
  { number: 'AI', label: 'Agents & Tools' },
  { number: '∞', label: 'Possibilities' },
]

/** The three that carry the pitch — given a full row each. */
const pillars = [
  {
    title: 'Walk in, meet people',
    desc: 'Walk up to start talking, walk away for privacy. Audio fades with distance naturally. Step into a meeting room for face-to-face video and screen sharing — all without scheduling a call.',
    href: '/features/proximity-chat',
    Scene: ProximityScene,
  },
  {
    title: 'Bots with memory',
    desc: 'They remember your name, what you talked about, your preferences. Walk up to a bot — it greets you like an old friend.',
    href: '/features/bot-memory',
    Scene: MemoryScene,
  },
  {
    title: 'Edit the world live',
    desc: 'Drag a tile, place an entity, change the lighting — all without leaving the room. The world updates for everyone instantly.',
    href: '/features/map-editor',
    Scene: EditorScene,
  },
]

const features = [
  {
    title: 'Bots build bots',
    desc: 'Drop a bot into a room. Give it tools. Let it spawn other bots with their own personalities. Self-architecting AI systems.',
    href: '/features/recursive-bots',
    Scene: RecursiveScene,
  },
  {
    title: 'Bots that read files',
    desc: 'Drop a PDF, Word doc, Excel spreadsheet, or paste a URL — bots extract the content, answer questions, summarize key points, and generate images and video. Not just chat. Real work.',
    href: '/features/bot-file-parsing',
    Scene: FilesScene,
  },
]

type Showcase = {
  icon: PixelIconName
  colors: [string, string, string, string]
  title: string
  desc: string
  href: string
}

const showcases: Showcase[] = [
  { icon: 'home', colors: ['#a78bfa', '#6d5b9e', '#fbbf24', '#3b2f57'], title: 'For Personal', desc: 'Custom AI companions, organized workspaces, friends welcome anytime.', href: '/use-cases/personal' },
  { icon: 'office', colors: ['#93c5fd', '#3f5a86', '#fbbf24', '#26364f'], title: 'For Work', desc: 'Team rooms, focus pods, standup bots, and a watercooler that actually works.', href: '/use-cases/work' },
  { icon: 'gamepad', colors: ['#34d399', '#1f6b52', '#f472b6', '#0f3b2e'], title: 'For Community', desc: 'Event halls, gaming rooms, welcome bots that greet every new member by name.', href: '/use-cases/community' },
  { icon: 'graduation', colors: ['#fbbf24', '#8a6218', '#f03e2f', '#4a350c'], title: 'For Learning', desc: 'Lecture halls, study groups, AI teaching assistants available 24/7.', href: '/use-cases/learning' },
  { icon: 'megaphone', colors: ['#f472b6', '#8a3a63', '#fbbf24', '#4d1f36'], title: 'For Events', desc: 'Sponsor rooms, networking zones, main stages for thousands.', href: '/use-cases/events' },
  { icon: 'bag', colors: ['#67e8f9', '#2b6b78', '#134e5a', '#0d3540'], title: 'For Commerce', desc: 'Subscriptions, tickets, and payments connected to your stack.', href: '/use-cases/commerce' },
  { icon: 'storefront', colors: ['#f59e0b', '#7c5cbf', '#c4b5fd', '#2e2447'], title: 'For Market', desc: 'Brand showrooms, social shopping, pop-up shops in shared spaces.', href: '/use-cases/market' },
]

/* ─── HELPERS ─── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay },
})

/* ─── PAGE ─── */

export default function Home() {
  return (
    <div className="relative z-10">

      {/* ═══ 1. HERO ═══ */}
      <section className="max-w-7xl mx-auto pt-32 md:pt-40 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            {...fadeUp(0.05)}
            className="font-display text-5xl md:text-7xl lg:text-[76px] leading-[1.05] font-bold text-white mb-6 tracking-[-0.03em]"
          >
            Universe is where<br />
            <span
              className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}
            >
              people and AI
            </span><br />
            actually live together.
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="text-lg text-text-muted leading-relaxed max-w-[520px] mb-10">
            Rooms where you walk in, see who&apos;s around, and talk naturally — with people and bots that have memories, feelings, and real tools to help.
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
              className="px-8 py-3.5 rounded-full border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium text-sm hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              How it works →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ HERO SCENE ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-10"
      >
        <div className="pixel-frame overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.55)] aspect-[4/3] sm:aspect-[16/10] md:aspect-auto">
          <RoomScene className="block w-full h-full md:h-auto" />
        </div>
      </motion.div>

      {/* ═══ 2. STATS ═══ */}
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

      {/* ═══ 3. WHAT MAKES IT DIFFERENT ═══ */}
      <Section>
        <motion.div {...fadeUp(0)} className="mb-16">
          <div className="section-label">What makes it different</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-[-0.02em]">
            Not a tool.<br />
            Not a game. A{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #f59e0b)' }}>
              living space
            </span>.
          </h2>
          <p className="text-base text-text-muted max-w-[500px]">
            The rooms are social. The bots remember you. The world changes based on what you build.
          </p>
        </motion.div>

        {/* Three that carry the pitch — full alternating rows */}
        <div className="space-y-20 md:space-y-28 mb-20 md:mb-28">
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
                <h3 className="font-display text-3xl md:text-[40px] font-bold text-white mb-4 leading-[1.12] tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed mb-6 max-w-[460px]">{p.desc}</p>
                <Link href={p.href} className="group inline-flex items-center gap-2 text-sm font-medium text-accent-purple hover:text-white transition-colors">
                  Learn more
                  <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The remaining two, side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.08)}>
              <Link href={f.href} className="scene-card group block h-full">
                <f.Scene />
                <div className="p-7">
                  <h3 className="font-headline-card text-headline-card text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">{f.desc}</p>
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

      {/* ═══ 4. WHAT PEOPLE BUILD ═══ */}
      <div className="band-raised">
        <Section>
          <motion.div {...fadeUp(0)} className="mb-14">
            <div className="section-label">What people build</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-[-0.02em]">
              Universes for work,<br />school, community, and more.
            </h2>
            <p className="text-base text-text-muted max-w-[500px]">
              Companies, classrooms, communities, and creators are already building their own worlds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {showcases.map((s, i) => (
              <motion.div key={s.title} {...fadeUp((i % 4) * 0.05)}>
                <Link href={s.href} className="bento-card group flex flex-col h-full">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${s.colors[0]}14`, border: `1px solid ${s.colors[0]}22` }}
                  >
                    <PixelIcon name={s.icon} colors={s.colors} size={34} />
                  </div>
                  <h3 className="font-headline-card text-headline-card text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                  <div className="bento-card-arrow">
                    Learn more
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

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
