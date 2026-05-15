'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const pillars = [
  {
    id: 'spatial',
    icon: '\ud83d\uddfa\ufe0f',
    title: 'Spatial Worlds',
    tagline: 'Structured digital spaces that feel alive',
    color: 'gold',
    features: [
      { icon: '\ud83c\udfd7\ufe0f', name: 'Three-layer hierarchy', desc: 'Universes contain Worlds, Worlds contain Rooms. Each level has independent config and access.' },
      { icon: '\ud83d\uddbc\ufe0f', name: 'Custom map builder', desc: 'Design maps with Tiled. Upload and assign maps per world or room. Hot-reload supported.' },
      { icon: '\ud83c\udfe0', name: 'Room templates', desc: 'Pre-built room types for offices, classrooms, event halls, and community hubs.' },
      { icon: '\ud83d\udc65', name: 'Real-time presence', desc: 'See who is in which room. Spatial proximity triggers interactions and video/audio.' },
      { icon: '\ud83c\udf99\ufe0f', name: 'Spatial audio & video', desc: 'Proximity-based voice and video via LiveKit. Conversations feel natural and private.' },
      { icon: '\ud83d\udd13', name: 'Open + protected spaces', desc: 'Public front areas with access-controlled inner rooms. Gated by tag, email, or subscription.' },
    ],
  },
  {
    id: 'orbit',
    icon: '\ud83d\udef8',
    title: 'Orbit — Operator Admin',
    tagline: 'Full control without touching code',
    color: 'blue',
    features: [
      { icon: '\ud83d\udcca', name: 'Per-universe dashboard', desc: 'Every universe gets its own Orbit admin panel. Manage everything from one place.' },
      { icon: '\ud83c\udf10', name: 'World & room management', desc: 'Create, edit, archive worlds and rooms. Set capacity, maps, bots, and access rules.' },
      { icon: '\ud83d\udc64', name: 'Member & role system', desc: 'Assign membership tags. Control who accesses which space based on role.' },
      { icon: '\ud83d\udccd', name: 'Area permission editor', desc: 'Define protected areas within maps. Require tags, subscriptions, or explicit grants to enter.' },
      { icon: '\ud83c\udfa8', name: 'Avatar set management', desc: 'Create and assign avatar sets per world or universe. Scope to roles, bots, or subscriptions.' },
      { icon: '\ud83d\udccb', name: 'Audit logs', desc: 'Full action trail for governance: who changed what, when, and from which admin account.' },
    ],
  },
  {
    id: 'bots',
    icon: '\ud83e\udd16',
    title: 'AI Bots',
    tagline: 'Characters that remember, respond, and roam',
    color: 'teal',
    features: [
      { icon: '\ud83d\udcac', name: 'Conversational bots per room', desc: 'Deploy named bot characters with custom personas to any room. They greet, respond, and guide.' },
      { icon: '\ud83e\udde0', name: 'Persistent memory', desc: 'Bots remember previous sessions. Return visitors get continuity — not repeated introductions.' },
      { icon: '\ud83d\ude04', name: 'Emotion-aware responses', desc: 'Emotion blocks in bot dialogue create dynamic reactions. Bots feel less like menus, more like people.' },
      { icon: '\ud83d\udcbb', name: 'Local LLM powered', desc: 'Runs on LMStudio + Qwen 3B by default. Swap any OpenAI-compatible model. Runs offline if needed.' },
      { icon: '\ud83d\udc7e', name: 'NPC visual assignment', desc: 'Assign avatars to bots from NPC-only sets. Players never see bot avatars in their picker.' },
      { icon: '\u2699\ufe0f', name: 'Bot config via Orbit', desc: 'Set bot name, persona, model, memory settings, and assigned avatar from the admin dashboard.' },
    ],
  },
  {
    id: 'avatar',
    icon: '\ud83c\udfad',
    title: 'Avatar & Identity',
    tagline: 'A managed catalog — not just a character picker',
    color: 'purple',
    features: [
      { icon: '\ud83d\uddc2\ufe0f', name: 'Set-based catalog', desc: 'Group avatars into Sets. Each set has a scope (universe, world), entitlement type, and lifecycle.' },
      { icon: '\ud83c\udfab', name: 'Entitlement types', desc: 'Public, membership-tag gated, subscription-gated, bot-only, direct-grant, or time-limited.' },
      { icon: '\ud83d\udc57', name: 'Subscription fashion clubs', desc: 'Gate sets behind a recurring subscription. Access expires automatically when subscription ends.' },
      { icon: '\ud83e\udd16', name: 'NPC-only sets', desc: 'Mark sets as bot-only. Players never see them in their picker — reserved for NPC characters only.' },
      { icon: '\u23f0', name: 'Time-limited drops', desc: 'Set start and end dates per set. Seasonal drops unlock and expire automatically.' },
      { icon: '\ud83c\udfe2', name: 'Branded universe sets', desc: 'Scope avatar sets to @company.com email domains. Employees see branded uniforms; outsiders see nothing.' },
    ],
  },
  {
    id: 'access',
    icon: '\ud83d\udd10',
    title: 'Access Control',
    tagline: 'Spatial permissions that mirror real-world rules',
    color: 'orange',
    features: [
      { icon: '\ud83c\udff7\ufe0f', name: 'Tag-based membership', desc: 'Assign tags to users (student, staff, vip, subscriber). Use tags to gate rooms and avatar sets.' },
      { icon: '\ud83d\udce7', name: 'Email-domain scoping', desc: 'Restrict entire universes or specific sets to verified email domains.' },
      { icon: '\ud83d\udccd', name: 'Area permissions', desc: 'Draw protected areas on maps. Require specific tags, subscriptions, or grants to enter.' },
      { icon: '\ud83c\udd94', name: 'Direct grants', desc: 'Grant specific users access to avatar sets or rooms directly — for VIPs, one-off access, celebrities.' },
      { icon: '\ud83d\udeaa', name: 'Open + protected pattern', desc: 'Keep public front areas open. Gate inner rooms by membership. Standard hospitality pattern.' },
      { icon: '\ud83d\udd17', name: 'OIDC / SSO ready', desc: 'Connect your existing auth provider. Universe supports SSO integration for enterprise deployments.' },
    ],
  },
  {
    id: 'commerce',
    icon: '\ud83d\uded2',
    title: 'Commerce & Integrations',
    tagline: 'Connect your stack to the world',
    color: 'red',
    features: [
      { icon: '\ud83d\udecd\ufe0f', name: 'Shopify connector', desc: 'Embed product experiences and purchase flows directly inside spatial rooms.' },
      { icon: '\ud83d\udcca', name: 'Booking integrations', desc: 'Connect booking systems to service-provider booths in market and event worlds.' },
      { icon: '\ud83d\udd0c', name: 'Plugn integration', desc: 'Service providers connect their storefronts via Plugn inside shared Universe market spaces.' },
      { icon: '\ud83d\udcac', name: 'Discord + Matrix bridge', desc: 'Persistent chat via Matrix with Discord bridging for community connection.' },
      { icon: '\ud83c\udf93', name: 'StudentHub integration', desc: 'Career worlds surface StudentHub profiles, job listings, and application flows.' },
      { icon: '\ud83d\udcb0', name: 'Wallet & crypto (roadmap)', desc: 'In-world transactions, subscriptions, and asset purchases via BAWES Wallet infrastructure.' },
    ],
  },
]

const colorMap: Record<string, {
  border: string
  text: string
  iconBg: string
  cardBorder: string
  accentBg: string
  headerBg: string
}> = {
  gold:   { border: 'border-bawes-gold/40',   text: 'text-bawes-gold',   iconBg: 'bg-bawes-gold/15',   cardBorder: 'border-bawes-gold/25',   accentBg: 'bg-bawes-gold',   headerBg: 'bg-bawes-gold/8' },
  blue:   { border: 'border-blue-400/40',     text: 'text-blue-300',     iconBg: 'bg-blue-500/15',     cardBorder: 'border-blue-400/25',     accentBg: 'bg-blue-400',     headerBg: 'bg-blue-500/8' },
  teal:   { border: 'border-teal-400/40',     text: 'text-teal-300',     iconBg: 'bg-teal-500/15',     cardBorder: 'border-teal-400/25',     accentBg: 'bg-teal-400',     headerBg: 'bg-teal-500/8' },
  purple: { border: 'border-purple-400/40',   text: 'text-purple-300',   iconBg: 'bg-purple-500/15',   cardBorder: 'border-purple-400/25',   accentBg: 'bg-purple-400',   headerBg: 'bg-purple-500/8' },
  orange: { border: 'border-bawes-orange/40', text: 'text-bawes-orange', iconBg: 'bg-bawes-orange/15', cardBorder: 'border-bawes-orange/25', accentBg: 'bg-bawes-orange', headerBg: 'bg-bawes-orange/8' },
  red:    { border: 'border-bawes-red/40',    text: 'text-bawes-red',    iconBg: 'bg-bawes-red/15',    cardBorder: 'border-bawes-red/25',    accentBg: 'bg-bawes-red',    headerBg: 'bg-bawes-red/8' },
}

export default function PlatformPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-bawes-gold/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-4">The Platform</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything that makes
              <br />
              <span className="bawes-gradient-text">Universe run</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Six integrated capability pillars. Each one is a complete system on its own.
              Together, they make Universe the most complete spatial platform for operators who
              need real governance, real bots, and real commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky pillar nav */}
      <div className="sticky top-16 z-20 bg-black/90 backdrop-blur border-b border-white/8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {pillars.map(({ id, icon, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all whitespace-nowrap"
              >
                <span>{icon}</span>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-5xl mx-auto space-y-24">
          {pillars.map(({ id, icon, title, tagline, color, features }, pillarIdx) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={id}
                id={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-32"
              >
                {/* Pillar header */}
                <div className={`flex items-center gap-4 mb-8 p-5 rounded-2xl ${c.headerBg} border ${c.border}`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0 ${c.iconBg} border ${c.border}`}>
                    {icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                    <p className={`text-sm font-medium ${c.text} mt-0.5`}>{tagline}</p>
                  </div>
                  <div className="ml-auto shrink-0">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.iconBg} ${c.text} border ${c.cardBorder}`}>
                      0{pillarIdx + 1} / 06
                    </span>
                  </div>
                </div>

                {/* Feature cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map(({ icon: fIcon, name, desc }, fi) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.06 }}
                      className={`
                        relative rounded-xl overflow-hidden
                        bg-white/[0.06] border ${c.cardBorder}
                        hover:bg-white/[0.10] hover:border-white/30
                        transition-all duration-200 group
                      `}
                    >
                      {/* Colored top bar */}
                      <div className={`h-0.5 w-full ${c.accentBg} opacity-60`} />
                      <div className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-xl shrink-0 mt-0.5">{fIcon}</span>
                          <p className="font-semibold text-white text-sm leading-snug group-hover:text-white transition-colors">{name}</p>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed pl-8">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-white/50 mb-6">Want to see it in action?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://universe.bawes.net">Enter the Universe</Button>
            <Button href="/use-cases" variant="secondary">Browse use cases</Button>
            <Button href="/contact" variant="secondary">Talk to the team</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
