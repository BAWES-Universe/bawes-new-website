'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const cases = [
  {
    icon: '🏛️',
    segment: 'Museums & Cultural Institutions',
    who: 'Cultural operators',
    color: 'gold',
    problem: 'You want digital activations with real character — guided NPCs, staff identities, visitor-appropriate experiences — without hiring a dev team.',
    platform: 'Launch a spatial museum world. Assign zoo animal or guide NPCs with bot-only avatar sets (never shown to visitors). Give staff tagged uniforms. Visitors get a clean, curated picker.',
    flows: [
      'Visitor arrives → picks from approved avatar set → explores rooms',
      'NPC animal bots roam — assigned lion/giraffe avatars from bot-only set',
      'Staff guide avatars gated by "staff" membership tag',
      'Orbit admin swaps exhibits without touching code',
    ],
    badge: 'Live deployment ready',
  },
  {
    icon: '🎓',
    segment: 'Universities & Campuses',
    who: 'Education operators',
    color: 'blue',
    problem: 'Students need persistent presence — study rooms, mentor access, career fairs, club spaces — that feels alive and socially real.',
    platform: 'A full campus world with AI tutors per room, club worlds, lecture halls, office-hour bots with persistent memory, and career fair worlds connected to StudentHub.',
    flows: [
      'Student logs in → assigned to campus universe',
      'Office-hour bots answer questions with session memory',
      'Club leads manage their own worlds via Orbit',
      'Career fair world opens on demand — StudentHub profiles visible',
    ],
    badge: 'StudentHub integration',
  },
  {
    icon: '🏢',
    segment: 'Branded Corporate Universes',
    who: 'Enterprise clients',
    color: 'teal',
    problem: 'You need an internal collaboration space with your brand — custom avatars, access controlled by company email, and a governance-ready admin layer.',
    platform: 'A private universe scoped to @yourcompany.com. Branded uniform avatars in a company-only set. Full Orbit admin. Bots for onboarding, HR FAQs, or culture programming.',
    flows: [
      'Only @company.com emails can access the universe',
      'Employees see branded uniform avatars only',
      'HR bot handles onboarding in welcome room',
      'Orbit admin manages departments, rooms, and access tags',
    ],
    badge: 'Email-domain scoping',
  },
  {
    icon: '🛍️',
    segment: 'Markets & Commerce Experiences',
    who: 'Commerce operators',
    color: 'orange',
    problem: 'You want to run live market events — shopping, services, food, artisan goods — inside a social space where discovery happens naturally.',
    platform: 'Shared market worlds with embedded Shopify or booking connectors. Vendors have their own booths (rooms). Plugn integrations let service providers connect.',
    flows: [
      'Visitor enters market world → browses vendor booths (rooms)',
      'Booth NPC bots greet and describe products',
      'Purchase links to Shopify or booking system inline',
      'Market admin manages vendors and room access via Orbit',
    ],
    badge: 'Plugn + Shopify ready',
  },
  {
    icon: '🎉',
    segment: 'Events & Seasonal Activations',
    who: 'Event producers',
    color: 'purple',
    problem: 'You want time-limited digital events — launch days, conferences, seasonal parties — with exclusive access, VIP rooms, and special character drops.',
    platform: 'Time-gated worlds with exclusive avatar sets that auto-expire. VIP area permissions. Bot MCs in event rooms. Automatic world opening and closing scheduled in Orbit.',
    flows: [
      'Event opens on scheduled date → special avatar set unlocks',
      'VIP tag holders access backstage/speaker rooms',
      'Bot MC manages agenda and Q&A in main hall',
      'Avatar set and world auto-expire at event end',
    ],
    badge: 'Time-gated drops',
  },
  {
    icon: '🎮',
    segment: 'Gaming & Community Hubs',
    who: 'Community builders',
    color: 'red',
    problem: 'You want a persistent community home — hangout worlds, subscriber clubs, Discord-bridged chat, and an identity layer that rewards loyalty.',
    platform: 'Community world with Discord + Matrix bridging. Subscriber-only avatar clubs with seasonal drops. Game rooms and hangout spaces with persistent bot characters.',
    flows: [
      'Community members arrive and join Discord via in-world prompt',
      'Subscribers unlock exclusive avatar sets monthly',
      'Bot characters hold lore, respond to questions, run mini-games',
      'Moderators manage access and worlds via Orbit',
    ],
    badge: 'Discord + Matrix bridge',
  },
]

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  gold:   { border: 'border-bawes-gold/30',   text: 'text-bawes-gold',   bg: 'bg-bawes-gold/10' },
  red:    { border: 'border-bawes-red/30',    text: 'text-bawes-red',    bg: 'bg-bawes-red/10' },
  orange: { border: 'border-bawes-orange/30', text: 'text-bawes-orange', bg: 'bg-bawes-orange/10' },
  blue:   { border: 'border-blue-500/30',     text: 'text-blue-400',     bg: 'bg-blue-500/10' },
  teal:   { border: 'border-teal-500/30',     text: 'text-teal-400',     bg: 'bg-teal-500/10' },
  purple: { border: 'border-purple-500/30',   text: 'text-purple-400',   bg: 'bg-purple-500/10' },
}

export default function UseCasesPage() {
  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-bawes-gold/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-4">Use Cases</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Real worlds built on
              <br />
              <span className="bawes-gradient-text">Universe</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Operational deployments — not demos. Each use case shows the visitor flow,
              operator controls, and the commercial logic that makes it work.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto space-y-16">
          {cases.map(({ icon, segment, who, color, problem, platform, flows, badge }, i) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={segment}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`glass-card rounded-3xl p-8 md:p-10 border ${c.border}`}
              >
                <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{icon}</span>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${c.text}`}>{who}</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{segment}</h2>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>{badge}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${c.text}`}>The problem</p>
                    <p className="text-white/65 leading-relaxed">{problem}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${c.text}`}>How Universe solves it</p>
                    <p className="text-white/65 leading-relaxed">{platform}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${c.text}`}>Visitor & operator flow</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {flows.map((flow, fi) => (
                      <div key={fi} className="flex items-start gap-3 p-4 rounded-xl bg-white/4 border border-white/6">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${c.bg} ${c.text}`}>{fi + 1}</span>
                        <p className="text-sm text-white/65 leading-relaxed">{flow}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="text-center mt-16">
          <p className="text-white/50 mb-6">Ready to build your world?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Talk to us about your use case</Button>
            <Button href="https://universe.bawes.net" variant="secondary">Enter the Universe</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
