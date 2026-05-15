'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const UseCaseCard = ({ icon, title, who, description, outcomes, color, delay = 0 }: {
  icon: string
  title: string
  who: string
  description: string
  outcomes: string[]
  color: string
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const colorMap: Record<string, string> = {
    gold: 'border-bawes-gold/30 hover:border-bawes-gold/60',
    red: 'border-bawes-red/30 hover:border-bawes-red/60',
    orange: 'border-bawes-orange/30 hover:border-bawes-orange/60',
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    teal: 'border-teal-500/30 hover:border-teal-500/60',
    blue: 'border-blue-500/30 hover:border-blue-500/60',
  }
  const textMap: Record<string, string> = {
    gold: 'text-bawes-gold',
    red: 'text-bawes-red',
    orange: 'text-bawes-orange',
    purple: 'text-purple-400',
    teal: 'text-teal-400',
    blue: 'text-blue-400',
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={`glass-card rounded-2xl p-7 border ${colorMap[color] || colorMap.gold} transition-all duration-400 flex flex-col gap-4`}
    >
      <div className="text-4xl">{icon}</div>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${textMap[color]}`}>{who}</p>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
      <ul className="space-y-1.5 mt-auto">
        {outcomes.map((o, i) => (
          <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${textMap[color].replace('text-', 'bg-')}`} />
            {o}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const PillarCard = ({ icon, title, features, delay = 0 }: {
  icon: string
  title: string
  features: string[]
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 border border-white/8 hover:border-bawes-gold/20 transition-colors duration-300"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-white/60 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-bawes-gold/60 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-bawes-gold/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-bawes-red/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-bawes-gold/30 bg-bawes-gold/10 text-bawes-gold text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-bawes-gold animate-pulse" />
              Now live &mdash; enter the Universe
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-white">Build a live</span>
              <br />
              <span className="bawes-gradient-text">digital world</span>
              <br />
              <span className="text-white/80 text-4xl md:text-5xl lg:text-6xl font-medium">for work, learning, events &amp; commerce</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              Universe is a managed platform where operators launch spatial environments with
              AI bots, access-controlled worlds, avatar identity, real commerce, and a full admin layer.
              No custom engineering required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.a
                href="https://universe.bawes.net"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-8 py-4 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white hover:shadow-xl hover:shadow-bawes-gold/20 transition-shadow duration-300"
              >
                Enter the Universe
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <Button href="/use-cases" variant="secondary" size="lg">
                See what people build
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to us
              </Button>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                '✦ Open-source platform',
                '✦ AI bots included',
                '✦ Full admin control (Orbit)',
                '✦ Avatar catalog system',
                '✦ Commerce-ready',
                '✦ Self-hostable',
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <Section id="platform" className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-bawes-orange/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-4">The Platform</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Not an app. Not a metaverse concept.
              <br />
              <span className="bawes-gradient-text">A managed spatial platform.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Universe is built on WorkAdventure and extended with operator-grade tooling: a full admin panel (Orbit),
              AI-powered bots, a permission-aware avatar system, spatial access control, Discord integration, and
              commerce connectors. Operators launch worlds. Players inhabit them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: 'Universe → World → Room',
                desc: 'A three-layer spatial hierarchy. Universes hold worlds, worlds hold rooms. Each level has its own permissions, members, and configuration.',
                icon: '🌐',
              },
              {
                label: 'Orbit Admin Panel',
                desc: 'Every universe gets a dedicated admin dashboard. Manage worlds, members, bots, avatars, access rules, and maps from one place.',
                icon: '🛸',
              },
              {
                label: 'Open-source core',
                desc: 'The full platform stack is open-source. Self-host it, fork it, extend it, or let BAWES run it for you. Your world, your rules.',
                icon: '🔓',
              },
            ].map(({ label, desc, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-card rounded-2xl text-center"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <p className="font-bold text-white mb-2">{label}</p>
                <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PLATFORM PILLARS */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10 opacity-20" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-bawes-orange text-sm font-semibold uppercase tracking-widest mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Everything in one <span className="bawes-gradient-text">platform</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PillarCard
              icon="🗺️"
              title="Spatial Worlds"
              features={[
                'Universes, Worlds, and Rooms hierarchy',
                'Custom maps built with Tiled',
                'Room templates for fast launch',
                'Real-time presence — see who\'s around',
                'Spatial audio and video proximity',
              ]}
              delay={0}
            />
            <PillarCard
              icon="🛸"
              title="Orbit — Operator Admin"
              features={[
                'Full admin dashboard per universe',
                'World and room management',
                'Member roles and access tags',
                'Map editor + Area editor',
                'Audit logs and governance tools',
              ]}
              delay={0.05}
            />
            <PillarCard
              icon="🤖"
              title="AI Bots"
              features={[
                'Conversational bots per room',
                'Persistent memory across sessions',
                'Emotion-aware responses',
                'Powered by Qwen / LMStudio',
                'Bot-only NPC avatar assignment',
              ]}
              delay={0.1}
            />
            <PillarCard
              icon="🎭"
              title="Avatar &amp; Identity"
              features={[
                'Managed avatar catalog (Sets)',
                'Per-world and per-universe scoping',
                'Role-gated and subscription-gated sets',
                'Bot loadout visual picker',
                'Event drops and time-limited releases',
              ]}
              delay={0.15}
            />
            <PillarCard
              icon="🔐"
              title="Access Control"
              features={[
                'Spatial area permissions',
                'Membership tag system',
                'Open spaces with protected cores',
                'Email-domain scoped universes',
                'Direct user grants',
              ]}
              delay={0.2}
            />
            <PillarCard
              icon="🛒"
              title="Commerce &amp; Integrations"
              features={[
                'Shopify, booking, and custom connectors',
                'Shared market experiences',
                'Discord + Matrix (chat.bawes.net)',
                'StudentHub and Plugn integrations',
                'Crypto and wallet infrastructure (roadmap)',
              ]}
              delay={0.25}
            />
          </div>

          <div className="text-center mt-10">
            <Button href="/platform">
              Full platform overview &rarr;
            </Button>
          </div>
        </div>
      </Section>

      {/* USE CASES */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-bawes-gold/5 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-bawes-red text-sm font-semibold uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Built for operators who need
              <br />
              <span className="bawes-gradient-text">real worlds, not demos</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Universe is not a proof-of-concept. These are live, operational deployments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              icon="🏛️"
              title="Museums &amp; Cultural Institutions"
              who="Cultural operators"
              description="Run guided NPC animal bots, staff avatars with proper uniforms, and visitor-only character sets — all without custom engineering."
              outcomes={[
                'Hidden zoo-animal bots (NPC-only sets)',
                'Staff guide avatars (tag-gated)',
                'Visitor picker stays clean',
              ]}
              color="gold"
              delay={0}
            />
            <UseCaseCard
              icon="🏫"
              title="Universities &amp; Campuses"
              who="Education operators"
              description="Give students a persistent campus with study rooms, AI tutors, club spaces, mentor rooms, and career fair worlds."
              outcomes={[
                'AI tutors and office-hour bots',
                'Room templates for lectures and labs',
                'StudentHub integration',
              ]}
              color="red"
              delay={0.05}
            />
            <UseCaseCard
              icon="🏢"
              title="Branded Corporate Universes"
              who="Enterprise clients"
              description="A private universe for your company. Branded avatars restricted to @yourcompany.com emails, custom maps, and full admin governance."
              outcomes={[
                'Email-domain scoped avatar sets',
                'Custom uniform characters',
                'Orbit admin per client',
              ]}
              color="blue"
              delay={0.1}
            />
            <UseCaseCard
              icon="🛍️"
              title="Markets &amp; Commerce Spaces"
              who="Commerce operators"
              description="Embed shops, service providers, and marketplaces into shared spatial rooms. Connect Shopify, booking systems, or custom stacks."
              outcomes={[
                'Tool-agnostic commerce connectors',
                'Shared market room experiences',
                'Plugn integration',
              ]}
              color="orange"
              delay={0.15}
            />
            <UseCaseCard
              icon="🎉"
              title="Events &amp; Seasonal Activations"
              who="Event producers"
              description="Launch time-limited event worlds with special avatar drops, gated VIP rooms, and scheduled openings and closings."
              outcomes={[
                'Time-gated avatar sets',
                'VIP area permissions',
                'Automatic expiry after event',
              ]}
              color="purple"
              delay={0.2}
            />
            <UseCaseCard
              icon="🎮"
              title="Gaming &amp; Community Hubs"
              who="Community builders"
              description="Run persistent communities with game rooms, hangout worlds, Discord-bridged chat, and exclusive subscriber avatar clubs."
              outcomes={[
                'Discord + Matrix integration',
                'Subscription avatar clubs',
                'Persistent community presence',
              ]}
              color="teal"
              delay={0.25}
            />
          </div>

          <div className="text-center mt-10">
            <Button href="/use-cases" variant="secondary">
              All use cases &rarr;
            </Button>
          </div>
        </div>
      </Section>

      {/* AVATAR PLATFORM SPOTLIGHT */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-bawes-gold/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-4">New &mdash; Avatar Platform</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Avatar identity as a
                <span className="bawes-gradient-text"> product asset</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                The Avatar Platform turns character customization into a managed, revenue-ready catalog.
                Create sets, scope them per world, gate by membership or subscription, assign NPC bots,
                and track every change in audit logs &mdash; without custom engineering.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'NPC-only bot sets (players never see them in picker)',
                  'Staff-only avatars gated by membership tag',
                  'Premium subscription fashion clubs',
                  'Branded client universes with @company.com scoping',
                  'Time-limited event drops with automatic expiry',
                  'Celebrity / one-off user avatar grants',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 text-white/70 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-bawes-gold shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Button href="/avatar-platform">
                Read the full Avatar Platform overview &rarr;
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              {[
                {
                  scenario: '🦁  Zoo experience',
                  detail: 'Animal NPC bots spawn with lion/giraffe avatars. Visitors never see those in their picker.',
                  badge: 'NPC-only',
                  badgeColor: 'bg-bawes-gold/20 text-bawes-gold',
                },
                {
                  scenario: '🏢  Corporate universe',
                  detail: '@acme.com employees see branded uniforms. No one outside the universe can access them.',
                  badge: 'Email-domain scoped',
                  badgeColor: 'bg-blue-500/20 text-blue-400',
                },
                {
                  scenario: '👑  Subscription club',
                  detail: 'Subscribers unlock exclusive seasonal fashion sets. Access expires with the subscription.',
                  badge: 'Subscription-gated',
                  badgeColor: 'bg-purple-500/20 text-purple-400',
                },
                {
                  scenario: '🎃  Halloween drop',
                  detail: 'Spooky avatars active Oct 15 – Nov 5. Resolution engine removes them automatically after end date.',
                  badge: 'Time-limited',
                  badgeColor: 'bg-bawes-orange/20 text-bawes-orange',
                },
              ].map(({ scenario, detail, badge, badgeColor }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-xl p-5 border border-white/8"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-semibold text-white text-sm">{scenario}</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${badgeColor}`}>{badge}</span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="relative">
        <div className="absolute inset-0 grid-pattern -z-10 opacity-15" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-bawes-orange text-sm font-semibold uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From zero to a live world
              <br />
              <span className="bawes-gradient-text">in four steps</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-transparent via-bawes-gold/30 to-transparent" />
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', icon: '🗺️', label: 'Design your world', desc: 'Pick a template or build a custom map. Define your universe hierarchy.' },
                { step: '02', icon: '🛸', label: 'Configure in Orbit', desc: 'Set access rules, member roles, avatar sets, bot characters, and room permissions.' },
                { step: '03', icon: '🤖', label: 'Deploy AI bots', desc: 'Add conversational bots to rooms. Give them names, personas, memories, and avatars.' },
                { step: '04', icon: '🚀', label: 'Launch &amp; invite', desc: 'Share your universe URL. Players arrive, explore, and engage in real time.' },
              ].map(({ step, icon, label, desc }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-2xl glass-card border border-bawes-gold/20 flex items-center justify-center text-3xl mb-4 relative">
                    {icon}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-bawes-gold text-black text-xs font-bold flex items-center justify-center">{step.slice(1)}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{label}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Button href="/how-it-works" variant="secondary">
              Detailed walkthrough &rarr;
            </Button>
          </div>
        </div>
      </Section>

      {/* OPEN BY DEFAULT */}
      <Section className="relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-14 border border-bawes-gold/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-bawes-gold/5 via-bawes-red/5 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 relative">
                  <Image src="/images/bawes-logo.png" alt="BAWES" fill className="object-contain" />
                </div>
                <span className="text-bawes-gold text-sm font-semibold uppercase tracking-widest">BAWES Universe</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Open-source, social-impact,
                <br />
                <span className="bawes-gradient-text">people-first</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-2xl">
                BAWES is a fully open-source, social impact organization. Universe is the platform we&apos;re
                building in public &mdash; where every person can network, grow, collaborate, and build their own
                universe. The code is open, the community is open, and the future is collaborative.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Open-source platform', icon: '🔓' },
                  { label: 'Public community on Discord', icon: '💬' },
                  { label: 'Transparent build process', icon: '🏗️' },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/8">
                    <span className="text-2xl">{icon}</span>
                    <p className="text-sm font-medium text-white/80">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://universe.bawes.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-8 py-4 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white hover:shadow-xl hover:shadow-bawes-gold/20 transition-shadow"
                >
                  Enter the Universe
                </motion.a>
                <Button href="/manifesto" variant="secondary" size="lg">
                  Read the manifesto
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
