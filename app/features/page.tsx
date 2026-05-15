'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const featureSections = [
  {
    id: 'spatial-worlds',
    badge: 'Foundation',
    title: 'Spatial Worlds, Not Pages',
    description:
      'Universe replaces flat apps and pages with explorable 2D environments. People move through rooms, see who is present, and work together without switching tools.',
    color: 'bawes-gold',
    features: [
      { name: 'Universes → Worlds → Rooms', detail: 'A three-layer hierarchy: your organization is a Universe, functional domains are Worlds, and rooms are where things actually happen.' },
      { name: 'Live Presence', detail: 'See exactly who is in which room in real time. Proximity triggers voice automatically — no clicking "join call".' },
      { name: 'Spatial Audio', detail: 'Conversations happen naturally. Move closer to hear someone, step away for privacy. Distance controls volume.' },
      { name: 'Map Editor', detail: 'Visually customize any room — furniture, layouts, zones, ambient design — without writing code.' },
      { name: 'Area Editor', detail: 'Define permission zones inside rooms. Control who can enter, interact, or edit specific areas.' },
      { name: 'Room Templates', detail: 'Pre-built layouts for offices, classrooms, markets, event stages, lounges. Start fast, customize freely.' },
    ],
  },
  {
    id: 'ai-bots',
    badge: 'AI Layer',
    title: 'AI Bots That Live Inside Your World',
    description:
      'Bots are not chatbots in a sidebar. They are characters that walk your world, respond to proximity, hold memory, and execute real tasks on behalf of visitors.',
    color: 'bawes-red',
    features: [
      { name: 'Persistent Memory', detail: 'Bots remember previous conversations per user, building context over time. A guide bot recalls what a visitor asked last visit.' },
      { name: 'Emotion System', detail: 'Bots express moods (happy, curious, thinking, surprised) through animations that play in the world, making interactions feel alive.' },
      { name: 'Proximity Triggers', detail: 'Bots react when players enter their zone — greeting, offering help, starting a tour, or triggering an event sequence.' },
      { name: 'Multi-Provider AI', detail: 'Connect any LLM — OpenAI, Anthropic, Deepseek, or a local LMStudio model. Switch providers per bot without code changes.' },
      { name: 'Tool Execution', detail: 'Bots can take actions: look up inventory, book appointments, send messages, query databases — not just answer questions.' },
      { name: 'NPC Character Sets', detail: 'Assign unique avatar appearances to bots. A museum lion bot looks like a lion; a staff guide looks like a guide. Hidden from player picker.' },
    ],
  },
  {
    id: 'avatar-platform',
    badge: 'Identity',
    title: 'Managed Avatar & Identity Platform',
    description:
      'Every character in your world — player, staff, bot, or VIP — has the right appearance. Avatars are curated per world, gated by role, and managed without touching code.',
    color: 'bawes-orange',
    features: [
      { name: 'Avatar Sets & Collections', detail: 'Group avatars into named sets: "Museum Staff", "Zoo Animals", "Premium Fashion Vol. 1". Publish, scope, and archive as a unit.' },
      { name: 'World-Level Scoping', detail: 'A set can be visible platform-wide, within one universe, or only in a specific world. Multiple scopes supported simultaneously.' },
      { name: 'Role & Membership Gating', detail: 'Restrict sets by membership tag, subscription plan, email domain, or direct user grant. Staff see staff avatars. VIPs see VIP sets.' },
      { name: 'Bot Loadout Assignment', detail: 'Assign a specific avatar or multi-layer preset to any bot via a visual picker — no more typing texture IDs manually.' },
      { name: 'Safe Archive Flow', detail: 'Before removing any asset, the system shows every player and bot currently using it. No silent breaking changes.' },
      { name: 'Audit Log', detail: 'Every create, publish, archive, grant, and revoke action is logged with timestamp and actor ID. Full governance trail.' },
    ],
  },
  {
    id: 'membership-access',
    badge: 'Access Control',
    title: 'Membership & Spatial Permissions',
    description:
      'Access in Universe is spatial, not global. Define exactly who can enter, interact with, or edit any zone — without locking anyone out of the broader space.',
    color: 'bawes-gold',
    features: [
      { name: 'World-Level Membership', detail: 'Membership grants capabilities, not exclusivity. Members can edit rooms, define areas, and access restricted zones.' },
      { name: 'Spatial Access Zones', detail: 'Draw permission areas on any room map. Different corners of a room can have different rules.' },
      { name: 'Open Spaces with Protected Cores', detail: 'A space can be publicly explorable while keeping specific areas (backstage, admin, private meeting) restricted.' },
      { name: 'Tag-Based Rules', detail: 'Attach membership tags to users. Spaces, avatars, and tools check tags dynamically — no hardcoded roles.' },
      { name: 'Effective Access Tester', detail: 'Input any user and any world in the admin panel and instantly see exactly what they can access and why.' },
    ],
  },
  {
    id: 'commerce',
    badge: 'Commerce',
    title: 'Commerce Inside Shared Spaces',
    description:
      'Shops, services, and marketplaces are embedded into shared spatial experiences. Commerce happens where people already are — not in a separate tab.',
    color: 'bawes-orange',
    features: [
      { name: 'Shopify & Custom Integration', detail: 'Connect your existing store, booking system, or inventory tool. Universe wraps commerce around your current stack.' },
      { name: 'Shared Market Worlds', detail: 'Multiple vendors in one shared spatial market. Visitors browse together, discover organically, buy without leaving.' },
      { name: 'Service Rooms', detail: 'Consultation rooms, demo spaces, scheduling desks — services live as rooms people walk into.' },
      { name: 'Embedded Payment Flows', detail: 'Checkout stays in context. No redirects to external sites.' },
    ],
  },
  {
    id: 'admin',
    badge: 'Operations',
    title: 'Admin & Operations Layer',
    description:
      'The Orbit admin panel gives world operators full control over every aspect of their universe — without involving engineering.',
    color: 'bawes-red',
    features: [
      { name: 'Orbit Navigation Layer', detail: 'Discover every universe, world, and room from one interface. Jump to live activity instantly.' },
      { name: 'World Management Dashboard', detail: 'Manage members, rooms, bots, and permissions from a single panel. No SSH, no config files.' },
      { name: 'Bot Configuration UI', detail: 'Create bots, assign AI providers, set memory rules, configure triggers, and pick avatars — all in the browser.' },
      { name: 'Analytics & Presence Data', detail: 'See which rooms are active, where visitors spend time, and where engagement drops.' },
      { name: 'Discord Integration', detail: 'Connect your Discord server to your Universe. Bridge announcements, roles, and community activity.' },
    ],
  },
]

const FeatureItem = ({ name, detail, index }: { name: string; detail: string; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07 }}
      className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
    >
      <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-bawes-gold to-bawes-orange shrink-0" />
      <div>
        <p className="text-white font-semibold mb-1">{name}</p>
        <p className="text-white/55 text-sm leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  )
}

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-bawes-gold/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-bawes-red/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-bawes-gold/30 text-bawes-gold text-sm font-medium mb-6">
              Full Platform Overview
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Everything <span className="bawes-gradient-text">Universe</span> can do
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              A spatial platform with AI, identity, commerce, and access control built in — not bolted on.
            </p>
          </motion.div>

          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {featureSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-full glass border border-white/10 text-white/70 hover:text-white hover:border-bawes-gold/40 transition-all text-sm"
              >
                {s.badge}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, idx) => (
        <Section key={section.id} id={section.id} className="relative">
          {idx % 2 === 0 && (
            <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
          )}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: heading */}
              <div className="lg:sticky lg:top-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20 text-white/60">
                    {section.badge}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>
              </div>

              {/* Right: features */}
              <div className="space-y-2">
                {section.features.map((f, i) => (
                  <FeatureItem key={f.name} name={f.name} detail={f.detail} index={i} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-bawes-gold/10 via-transparent to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to build your world?
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explore the platform, talk to us, or jump straight in.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://universe.bawes.net" size="lg">
              Enter the Universe
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
