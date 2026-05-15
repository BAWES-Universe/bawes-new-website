'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

const pillars = [
  {
    id: 'spatial',
    icon: '🗺️',
    title: 'Spatial Worlds',
    tagline: 'Structured digital spaces that feel alive',
    color: 'gold',
    features: [
      { name: 'Three-layer hierarchy', desc: 'Universes contain Worlds, Worlds contain Rooms. Each level has independent config and access.' },
      { name: 'Custom map builder', desc: 'Design maps with Tiled. Upload and assign maps per world or room. Hot-reload supported.' },
      { name: 'Room templates', desc: 'Pre-built room types for offices, classrooms, event halls, and community hubs.' },
      { name: 'Real-time presence', desc: 'See who is in which room. Spatial proximity triggers interactions and video/audio.' },
      { name: 'Spatial audio & video', desc: 'Proximity-based voice and video via LiveKit. Conversations feel natural and private.' },
      { name: 'Open + protected spaces', desc: 'Public front areas with access-controlled inner rooms. Gated by tag, email, or subscription.' },
    ],
  },
  {
    id: 'orbit',
    icon: '🛸',
    title: 'Orbit — Operator Admin',
    tagline: 'Full control without touching code',
    color: 'blue',
    features: [
      { name: 'Per-universe dashboard', desc: 'Every universe gets its own Orbit admin panel. Manage everything from one place.' },
      { name: 'World & room management', desc: 'Create, edit, archive worlds and rooms. Set capacity, maps, bots, and access rules.' },
      { name: 'Member & role system', desc: 'Assign membership tags. Control who accesses which space based on role.' },
      { name: 'Area permission editor', desc: 'Define protected areas within maps. Require tags, subscriptions, or explicit grants to enter.' },
      { name: 'Avatar set management', desc: 'Create and assign avatar sets per world or universe. Scope to roles, bots, or subscriptions.' },
      { name: 'Audit logs', desc: 'Full action trail for governance: who changed what, when, and from which admin account.' },
    ],
  },
  {
    id: 'bots',
    icon: '🤖',
    title: 'AI Bots',
    tagline: 'Characters that remember, respond, and roam',
    color: 'teal',
    features: [
      { name: 'Conversational bots per room', desc: 'Deploy named bot characters with custom personas to any room. They greet, respond, and guide.' },
      { name: 'Persistent memory', desc: 'Bots remember previous sessions. Return visitors get continuity — not repeated introductions.' },
      { name: 'Emotion-aware responses', desc: 'Emotion blocks in bot dialogue create dynamic reactions. Bots feel less like menus, more like people.' },
      { name: 'Local LLM powered', desc: 'Runs on LMStudio + Qwen 3B by default. Swap any OpenAI-compatible model. Runs offline if needed.' },
      { name: 'NPC visual assignment', desc: 'Assign avatars to bots from NPC-only sets. Players never see bot avatars in their picker.' },
      { name: 'Bot config via Orbit', desc: 'Set bot name, persona, model, memory settings, and assigned avatar from the admin dashboard.' },
    ],
  },
  {
    id: 'avatar',
    icon: '🎭',
    title: 'Avatar & Identity',
    tagline: 'A managed catalog — not just a character picker',
    color: 'purple',
    features: [
      { name: 'Set-based catalog', desc: 'Group avatars into Sets. Each set has a scope (universe, world), entitlement type, and lifecycle.' },
      { name: 'Entitlement types', desc: 'Public, membership-tag gated, subscription-gated, bot-only, direct-grant, or time-limited.' },
      { name: 'Subscription fashion clubs', desc: 'Gate sets behind a recurring subscription. Access expires automatically when subscription ends.' },
      { name: 'NPC-only sets', desc: 'Mark sets as bot-only. Players never see them in their picker — reserved for NPC characters only.' },
      { name: 'Time-limited drops', desc: 'Set start and end dates per set. Seasonal drops unlock and expire automatically.' },
      { name: 'Branded universe sets', desc: 'Scope avatar sets to @company.com email domains. Employees see branded uniforms; outsiders see nothing.' },
    ],
  },
  {
    id: 'access',
    icon: '🔐',
    title: 'Access Control',
    tagline: 'Spatial permissions that mirror real-world rules',
    color: 'orange',
    features: [
      { name: 'Tag-based membership', desc: 'Assign tags to users (student, staff, vip, subscriber). Use tags to gate rooms and avatar sets.' },
      { name: 'Email-domain scoping', desc: 'Restrict entire universes or specific sets to verified email domains.' },
      { name: 'Area permissions', desc: 'Draw protected areas on maps. Require specific tags, subscriptions, or grants to enter.' },
      { name: 'Direct grants', desc: 'Grant specific users access to avatar sets or rooms directly — for VIPs, one-off access, celebrities.' },
      { name: 'Open + protected pattern', desc: 'Keep public front areas open. Gate inner rooms by membership. Standard hospitality pattern.' },
      { name: 'OIDC / SSO ready', desc: 'Connect your existing auth provider. Universe supports SSO integration for enterprise deployments.' },
    ],
  },
  {
    id: 'commerce',
    icon: '🛒',
    title: 'Commerce & Integrations',
    tagline: 'Connect your stack to the world',
    color: 'red',
    features: [
      { name: 'Shopify connector', desc: 'Embed product experiences and purchase flows directly inside spatial rooms.' },
      { name: 'Booking integrations', desc: 'Connect booking systems to service-provider booths in market and event worlds.' },
      { name: 'Plugn integration', desc: 'Service providers connect their storefronts via Plugn inside shared Universe market spaces.' },
      { name: 'Discord + Matrix bridge', desc: 'Persistent chat via Matrix (chat.bawes.net) with Discord bridging for community connection.' },
      { name: 'StudentHub integration', desc: 'Career worlds surface StudentHub profiles, job listings, and application flows.' },
      { name: 'Wallet & crypto (roadmap)', desc: 'In-world transactions, subscriptions, and asset purchases via BAWES Wallet infrastructure.' },
    ],
  },
]

const colorMap: Record<string, { border: string; text: string; iconBg: string }> = {
  gold:   { border: 'border-bawes-gold/30',   text: 'text-bawes-gold',   iconBg: 'bg-bawes-gold/10' },
  blue:   { border: 'border-blue-500/30',     text: 'text-blue-400',     iconBg: 'bg-blue-500/10' },
  teal:   { border: 'border-teal-500/30',     text: 'text-teal-400',     iconBg: 'bg-teal-500/10' },
  purple: { border: 'border-purple-500/30',   text: 'text-purple-400',   iconBg: 'bg-purple-500/10' },
  orange: { border: 'border-bawes-orange/30', text: 'text-bawes-orange', iconBg: 'bg-bawes-orange/10' },
  red:    { border: 'border-bawes-red/30',    text: 'text-bawes-red',    iconBg: 'bg-bawes-red/10' },
}

export default function PlatformPage() {
  return (
    <div>
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

      <div className="sticky top-16 z-20 bg-black/80 backdrop-blur border-b border-white/8">
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
          {pillars.map(({ id, icon, title, tagline, color, features }) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={id}
                id={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${c.iconBg} border ${c.border}`}>
                    {icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
                    <p className={`text-sm font-medium ${c.text} mt-1`}>{tagline}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map(({ name, desc }, fi) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.05 }}
                      className="glass-card rounded-xl p-5 border border-white/8 hover:border-white/20 transition-colors duration-300"
                    >
                      <p className="font-semibold text-white mb-2">{name}</p>
                      <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
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
