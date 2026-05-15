'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const useCases = [
  {
    id: 'museum',
    emoji: '🏛️',
    label: 'Museums & Cultural Venues',
    headline: 'A museum that comes alive after hours',
    story:
      'Visitors walk through digital galleries at their own pace. Animal NPCs roam the natural history wing. A staff guide bot greets arrivals by name, remembers what exhibits they explored last time, and offers a personalised tour. Staff have their own avatar look. Visitors never accidentally pick an NPC character.',
    capabilities: [
      'NPC animal bots with world-scoped avatar sets hidden from visitors',
      'Staff-only avatar set gated by membership tag',
      'Guide bot with persistent memory per visitor',
      'Proximity-triggered tour sequences',
      'Public exploration with protected back-of-house areas',
    ],
    color: 'bawes-gold',
  },
  {
    id: 'education',
    emoji: '🎓',
    label: 'Education & Campus',
    headline: 'A digital campus students actually want to be in',
    story:
      'Students join their cohort world each morning. Study rooms have spatial audio so group work feels like a real library. Office hours happen in a professor\'s virtual room — walk in when the door is open. The AI tutor bot answers questions between sessions and remembers each student\'s learning history.',
    capabilities: [
      'Cohort worlds with membership-gated access to rooms',
      'AI tutor bots with per-student persistent memory',
      'Office hours rooms with presence signals',
      'Club and social worlds alongside academic spaces',
      'StudentHub integration for job matching inside the campus world',
    ],
    color: 'bawes-red',
  },
  {
    id: 'enterprise',
    emoji: '🏢',
    label: 'Corporate & Enterprise',
    headline: 'The office your remote team actually shows up for',
    story:
      'Teams have floors. Focus pods have spatial audio that mutes the noise outside. The company bot answers HR and IT questions 24/7. New hires are greeted on their first day by an onboarding sequence, not an email. Branded avatars make every employee visually part of the company\'s identity.',
    capabilities: [
      'Branded avatar set scoped to company universe (email domain gating)',
      'Department worlds with role-based access zones',
      'HR/IT bot with tool execution (query internal docs, submit tickets)',
      'Onboarding sequences triggered on first room entry',
      'Executive meeting rooms with restricted area controls',
    ],
    color: 'bawes-orange',
  },
  {
    id: 'events',
    emoji: '🎪',
    label: 'Events & Conferences',
    headline: 'An event space that\'s alive before the keynote starts',
    story:
      'Attendees arrive in a shared lobby and can already see who\'s present. Sponsor booths are rooms with live staff and AI assistants. Speakers prepare backstage in a restricted area. Event-exclusive avatar drops are available for three days only, then gone.',
    capabilities: [
      'Time-limited avatar drops (startsAt / endsAt windows)',
      'Backstage zones restricted to speakers and crew',
      'Sponsor booth rooms with AI-assisted product demos',
      'Live presence across all event spaces',
      'Post-event archive with session recordings accessible in-world',
    ],
    color: 'bawes-gold',
  },
  {
    id: 'commerce',
    emoji: '🛍️',
    label: 'Retail & Commerce',
    headline: 'A market where discovery is social',
    story:
      'Multiple vendors share one market world. Shoppers see each other browsing, sparking organic conversations. A shop assistant bot answers product questions and checks stock in real time. Checkout happens in context — no new tabs, no broken flow.',
    capabilities: [
      'Shared spatial market with multiple vendor rooms',
      'Shop assistant bot with tool execution (live inventory, booking)',
      'Shopify and custom stack integration',
      'Embedded payment flow without leaving the world',
      'Social presence showing where other shoppers are browsing',
    ],
    color: 'bawes-red',
  },
  {
    id: 'community',
    emoji: '🌐',
    label: 'Communities & Creator Worlds',
    headline: 'A community space that rewards being present',
    story:
      'Members hang out in a persistent digital space between events. Premium subscribers unlock an exclusive fashion set. VIPs receive a one-off custom avatar that only they can use. The world grows richer the more people show up — there is always something happening.',
    capabilities: [
      'Premium subscription avatar sets (recurring B2C model)',
      'One-off celebrity / VIP avatar grants',
      'Community world with open spaces and members-only zones',
      'Discord bridge: community activity syncs both ways',
      'Seasonal event drops with time-limited avatar sets',
    ],
    color: 'bawes-orange',
  },
]

const UseCaseCard = ({ uc, isActive, onClick }: { uc: typeof useCases[0]; isActive: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
      isActive
        ? 'border-bawes-gold/50 bg-white/8'
        : 'border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5'
    }`}
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{uc.emoji}</span>
      <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-white/60'}`}>{uc.label}</span>
    </div>
  </button>
)

export default function UseCasesPage() {
  const [active, setActive] = useState(0)
  const current = useCases[active]
  const detailRef = useRef(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[55vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-bawes-orange/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-bawes-gold/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-bawes-orange/30 text-bawes-orange text-sm font-medium mb-6">
              Use Cases
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Built for <span className="bawes-gradient-text">your</span> world
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              See exactly how Universe works for museums, campuses, offices, events, retail, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive use case explorer */}
      <Section className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">
            {/* Sidebar */}
            <div className="lg:sticky lg:top-32 space-y-3">
              {useCases.map((uc, i) => (
                <UseCaseCard key={uc.id} uc={uc} isActive={i === active} onClick={() => setActive(i)} />
              ))}
            </div>

            {/* Detail panel */}
            <motion.div
              ref={detailRef}
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-10 relative overflow-hidden"
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange" />

              <div className="text-6xl mb-6">{current.emoji}</div>
              <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
                {current.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {current.headline}
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-10">
                {current.story}
              </p>

              <div className="border-t border-white/10 pt-8">
                <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-5">
                  Platform capabilities used
                </p>
                <ul className="space-y-3">
                  {current.capabilities.map((cap, i) => (
                    <motion.li
                      key={cap}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-bawes-gold to-bawes-orange shrink-0" />
                      {cap}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/features" size="lg" variant="secondary">
                  See all features
                </Button>
                <Button href="/contact" size="lg">
                  Build this world
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-bawes-red/10 via-transparent to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Don&apos;t see your use case?
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Universe adapts to any context where people gather, collaborate, and transact. Tell us what you&apos;re building.
          </motion.p>
          <Button href="/contact" size="lg">
            Talk to us
          </Button>
        </div>
      </Section>
    </div>
  )
}
