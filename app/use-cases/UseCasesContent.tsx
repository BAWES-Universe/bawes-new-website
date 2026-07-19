'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
const useCases = [
  {
    emoji: '🏠',
    title: 'For Personal',
    desc: 'Build your own digital sanctuary. Custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.',
    highlights: ['AI companions that remember you', 'Private spaces & tools', 'Friends welcome anytime', 'Self-hosted or cloud'],
    href: '/use-cases/personal',
    tag: 'Solo & Creators',
    tagColor: 'purple',
  },
  {
    emoji: '🏢',
    title: 'For Work',
    desc: 'Replace Slack, Zoom, and your office with a spatial world. Team rooms, focus pods, standup bots, and a watercooler that actually works — proximity audio, real-time presence, and AI that remembers what you discussed last week.',
    highlights: ['Proximity voice chat', 'AI standup bots', 'Focus pods & meeting rooms', 'Persistent team spaces'],
    href: '/use-cases/work',
    tag: 'Remote & Hybrid Teams',
    tagColor: 'purple',
  },
  {
    emoji: '🎮',
    title: 'For Community',
    desc: 'Event halls, gaming rooms, welcome bots that greet every new member by name. Build a digital home that feels like a real gathering place — where conversations happen naturally and members stick around because it actually feels like belonging.',
    highlights: ['Welcome & onboarding bots', 'Gaming & social rooms', 'Event spaces for thousands', 'Member directory'],
    href: '/use-cases/community',
    tag: 'Guilds & Communities',
    tagColor: 'green',
  },
  {
    emoji: '🎓',
    title: 'For Learning',
    desc: 'Lecture halls where students raise their hands. Study groups that form naturally. AI teaching assistants available 24/7. Virtual campuses that feel alive — not a sterile webinar, but an actual place to learn together.',
    highlights: ['Lecture halls with spatial audio', 'AI teaching assistants', 'Study group rooms', 'Campus-wide events'],
    href: '/use-cases/learning',
    tag: 'Education & Academia',
    tagColor: 'amber',
  },
  {
    emoji: '🌐',
    title: 'For Events',
    desc: 'Conference halls, broadcasting stages, sponsor rooms, and main stages for thousands. Create live events that stream audio and video across the entire universe.',
    highlights: ['World-wide audio broadcasting', 'Stage & audience zones', 'Event scheduling', 'Sponsor & expo halls'],
    href: '/use-cases/events',
    tag: 'Conferences & Events',
    tagColor: 'cyan',
  },
  {
    emoji: '💰',
    title: 'For Commerce',
    desc: 'Sell subscriptions, tickets, and services from inside your Universe. Monetize access, gate premium content, and connect your existing payment stack.',
    highlights: ['Subscriptions & memberships', 'Ticketed events & access', 'Payment provider integration', 'Revenue automation'],
    href: '/use-cases/commerce',
    tag: 'Monetization',
    tagColor: 'purple',
  },
  {
    emoji: '🛍️',
    title: 'For Market',
    desc: 'Brand showrooms, mall experiences, pop-up shops. People browse together, discover products, and explore shoppable worlds — social shopping that feels like the real thing.',
    highlights: ['Brand showrooms & pop-ups', 'Social shopping together', 'Shoppable worlds', 'Digital storefronts'],
    href: '/use-cases/market',
    tag: 'Brands & Retail',
    tagColor: 'blue',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function UseCasesPageContent() {
  return (
    <main className="relative z-10">
      {/* Hero */}
      <section className="max-w-7xl mx-auto pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-[-0.03em]">
            Built for{' '}
            <span className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}>
              real life.
            </span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-[540px]">
            Work, school, community, market, commerce — Universe adapts to what you&apos;re building. Pick your path and see what&apos;s possible.
          </p>
        </motion.div>
      </section>

      {/* Use Case Cards */}
      <section className="max-w-7xl mx-auto pb-32 px-4 sm:px-6 lg:px-8 space-y-0">
        {useCases.map((uc, i) => (
          <Link key={uc.title} href={uc.href}>
            <motion.div
              {...fadeUp(i * 0.08)}
              className={`group relative rounded-[32px] p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-400 ${i < useCases.length - 1 ? 'mb-8' : ''}`}
              style={{
                background: 'linear-gradient(145deg, rgba(139,92,246,0.04), rgba(245,158,11,0.02))',
                border: '1px solid rgba(139,92,246,0.08)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, transparent 50%)',
                }}
              />

              <div className="relative flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Left: emoji + title */}
                <div className="flex-shrink-0 md:w-64">
                  <span className="text-5xl mb-6 block">{uc.emoji}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">{uc.title}</h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tag-${uc.tagColor}`}>
                    {uc.tag}
                  </span>
                </div>

                {/* Middle: description */}
                <div className="flex-1">
                  <p className="text-base text-text-muted leading-relaxed md:max-w-[500px]">
                    {uc.desc}
                  </p>
                </div>

                {/* Right: highlights + CTA */}
                <div className="flex-shrink-0 md:w-56 flex flex-col justify-between">
                  <ul className="space-y-2.5 mb-6">
                    {uc.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent-purple group-hover:gap-3 transition-all">
                    Explore {uc.title.split(' ').pop()}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto pb-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp(0.3)}
          className="relative rounded-[32px] p-12 md:p-20 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(139,92,246,0.06), rgba(245,158,11,0.03))',
            border: '1px solid rgba(139,92,246,0.12)',
          }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-base text-text-muted max-w-[480px] mx-auto mb-8">
            Every universe begins with a single room. Walk through and see what&apos;s possible.
          </p>
          <Link
            href="/how-it-works"
            className="gradient-cta text-white px-8 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
          >
            How it works
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
