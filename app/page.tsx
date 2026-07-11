'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/* ──────────────────────────────────────────────
   Reusable sub-components
   ────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

function SectionWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-section-padding-v px-gutter ${className}`}>
      <div className="max-w-container-max mx-auto">{children}</div>
    </section>
  )
}

function SectionHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-headline-section text-headline-section text-on-surface text-center mb-16 ${className}`}>
      {children}
    </h2>
  )
}

interface IconCardProps {
  icon: string
  title: string
  desc: string
  href: string
  iconBg?: string
  link?: string
}

function IconCard({ icon, title, desc, href, iconBg = 'bg-orb-purple', link = 'Learn more' }: IconCardProps) {
  return (
    <Link href={href} className="block group">
      <motion.div
        {...fadeUp(0.05)}
        className="glass-card rounded-2xl p-card-padding hover-lift group/card relative overflow-hidden cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: iconBg === 'bg-orb-purple' ? 'rgba(139,92,246,0.15)' : 'rgba(59,130,246,0.15)' }}>
          <span className="material-symbols-outlined text-2xl text-primary">{icon}</span>
        </div>
        <h3 className="font-headline-card text-headline-card text-white mb-3 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-purple-300 group-hover/card:to-blue-300 transition-all">{title}</h3>
        <p className="font-body-md text-body-md text-text-secondary mb-5">{desc}</p>
        <span className="font-label-navigation text-label-navigation text-primary">{link} →</span>
      </motion.div>
    </Link>
  )
}

interface SimpleCardProps {
  icon: string
  title: string
  desc: string
  href: string
}

function SimpleCard({ icon, title, desc, href }: SimpleCardProps) {
  return (
    <Link href={href} className="block group">
      <motion.div
        {...fadeUp(0.05)}
        className="glass-card rounded-2xl p-card-padding hover-lift group/card text-center cursor-pointer"
      >
        <span className="material-symbols-outlined text-3xl text-primary mb-4 block group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-purple-300 group-hover/card:to-blue-300 transition-all">{icon}</span>
        <h3 className="font-headline-card text-headline-card text-white mb-3">{title}</h3>
        <p className="font-body-md text-body-md text-text-secondary">{desc}</p>
      </motion.div>
    </Link>
  )
}

/* ──────────────────────────────────────────────
   Stats bar data
   ────────────────────────────────────────────── */
const stats = [
  { number: '10,000+', label: 'Active Rooms' },
  { number: '50,000+', label: 'Community Members' },
  { number: '1,000+', label: 'AI Bots' },
  { number: '80+', label: 'Open Source Repos' },
]

/* ──────────────────────────────────────────────
   Communication cards data
   ────────────────────────────────────────────── */
const communicationCards = [
  { icon: 'spatial_audio', title: 'Proximity Chat', desc: 'Hear people as you move closer. Walk away and their voice fades — just like real life.', href: '/features/proximity-chat', iconBg: 'bg-orb-purple' },
  { icon: 'chat', title: 'Text Chat', desc: 'Instant messaging in rooms, direct messages, and group conversations.', href: '/features/text-chat', iconBg: 'bg-orb-blue' },
  { icon: 'hub', title: 'Matrix Chat', desc: 'Federated chat that bridges Matrix communities directly into your room.', href: '/features/matrix-chat', iconBg: 'bg-orb-purple' },
  { icon: 'campaign', title: 'Megaphone', desc: 'Broadcast announcements to everyone in a world or to specific zones.', href: '/features/megaphone', iconBg: 'bg-orb-blue' },
  { icon: 'video_chat', title: 'Meeting Rooms', desc: 'Private and public video rooms with screen sharing and recording.', href: '/features/meeting-rooms', iconBg: 'bg-orb-purple' },
  { icon: 'present_to_all', title: 'Screen Sharing', desc: 'Share your screen with anyone in the room — no separate app needed.', href: '/features/screen-sharing', iconBg: 'bg-orb-blue' },
  { icon: 'podcasts', title: 'Broadcasting & Events', desc: 'Stream live events, presentations, and performances to thousands.', href: '/features/broadcasting', iconBg: 'bg-orb-purple' },
  { icon: 'music_note', title: 'Play Audio', desc: 'Play music, sound effects, or ambient audio that everyone in the room hears.', href: '/features/play-audio', iconBg: 'bg-orb-blue' },
]

/* ──────────────────────────────────────────────
   AI Bots cards data
   ────────────────────────────────────────────── */
const aiBotsCards = [
  { icon: 'psychology', title: 'Watch Them Think', desc: 'See their reasoning in real-time as they process your requests and context.', href: '/features/bot-streaming', iconBg: 'bg-orb-purple' },
  { icon: 'memory', title: 'They Remember You', desc: 'Past conversations, preferences, and relationships persist across sessions.', href: '/features/bot-memory', iconBg: 'bg-orb-blue' },
  { icon: 'favorite', title: 'They Have Feelings', desc: 'Moods, personality, and emotional states that evolve through interaction.', href: '/features/bot-emotions', iconBg: 'bg-orb-purple' },
  { icon: 'waving_hand', title: 'They Greet You', desc: 'Bots recognize when you enter a room and initiate natural conversation.', href: '/features/bot-greetings', iconBg: 'bg-orb-blue' },
  { icon: 'handyman', title: 'They Do Things', desc: 'Bots can execute actions: moderate, welcome, guide, automate workflows.', href: '/features/bot-behaviors', iconBg: 'bg-orb-purple' },
  { icon: 'settings', title: 'Choose Their Brain', desc: 'Swap AI providers — OpenAI, Anthropic, local models, or custom inference.', href: '/features/bot-provider-config', iconBg: 'bg-orb-blue' },
  { icon: 'device_hub', title: 'Bots Build Bots', desc: 'Authorized bots can spawn and manage other bots to distribute tasks.', href: '/features/recursive-bots', iconBg: 'bg-orb-purple' },
  { icon: 'edit', title: 'Place Them Anywhere', desc: 'Drag bots into any room, world, or zone. Each placement changes their context.', href: '/features/bot-editor', iconBg: 'bg-orb-blue' },
]

/* ──────────────────────────────────────────────
   Build tools cards data
   ────────────────────────────────────────────── */
const buildToolsCards = [
  { icon: 'map', title: 'Maps & Templates', desc: 'Start from a blank canvas or remix community templates.', href: '/features/maps', link: 'Explore maps' },
  { icon: 'edit_square', title: 'Inline Map Editor', desc: 'Edit maps live — draw walls, place objects, change terrain in real-time.', href: '/features/map-editor', link: 'Try the editor' },
  { icon: 'widgets', title: 'Area Zones', desc: 'Define interactive zones that trigger actions when people walk through them.', href: '/features/area-zones', link: 'Learn about zones' },
  { icon: 'view_in_ar', title: 'Entity Editor', desc: 'Place and configure entities: doors, portals, signs, objects, and scripts.', href: '/features/entity-editor', link: 'Edit entities' },
  { icon: 'code', title: 'Scripting API', desc: 'Full scripting API for custom behaviors, game logic, and integrations.', href: '/features/scripting', link: 'Read the docs' },
  { icon: 'near_me', title: 'Teleport & Portals', desc: 'Link rooms and worlds with teleporters, portals, and navigation hubs.', href: '/features/teleport', link: 'Set up portals' },
]

/* ──────────────────────────────────────────────
   What people build data
   ────────────────────────────────────────────── */
const useCaseCards = [
  { icon: 'work', title: 'Work', desc: 'Team spaces, focus rooms, spontaneous collaboration, real execution.', href: '/use-cases/work' },
  { icon: 'school', title: 'Learning', desc: 'Personal study rooms, group learning, mentorship, digital campuses.', href: '/use-cases/learning' },
  { icon: 'diversity_3', title: 'Community', desc: 'Hangouts, gaming groups, events, casual meetups.', href: '/use-cases/community' },
  { icon: 'store', title: 'Commerce', desc: 'Shops, services, and marketplaces embedded into shared spaces.', href: '/market' },
]

/* ══════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="relative bg-[#0a0a14]">
      {/* ─── Fixed background orbs ─── */}
      <div className="bg-orb bg-orb-purple w-[600px] h-[600px] top-[-200px] right-[-200px]" />
      <div className="bg-orb bg-orb-blue w-[500px] h-[500px] bottom-[20%] left-[-150px]" />
      <div className="bg-orb bg-orb-purple w-[400px] h-[400px] top-[40%] left-[10%]" />

      {/* ═══════════════════════════════════════
         1. HERO
         ═══════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-center items-center px-gutter relative z-10">
        <div className="max-w-container-max mx-auto text-center">
          {/* Badge pill */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple/20 text-sm font-label-navigation text-text-secondary mb-8"
          >
            <span className="material-symbols-outlined text-base">rocket</span>
            <span>Platform 06 — Open Beta</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display-hero text-display-hero text-white mb-6"
          >
            Enter the <span className="text-gradient">Universe</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.2)}
            className="font-body-md text-body-md text-text-secondary max-w-2xl mx-auto mb-12"
          >
            Walk into rooms full of people. Real-time voice and video. AI that remembers you. Build anything, go anywhere.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link
              href="/communication"
              className="primary-gradient neon-glow-purple text-white px-8 py-4 rounded-full font-headline-card hover:scale-105 transition-all inline-block"
            >
              Explore the Universe
            </Link>
            <Link
              href="/features-overview"
              className="glass-card border-white/30 text-white font-headline-card px-8 py-4 rounded-full hover:bg-white/10 transition-all inline-block"
            >
              See what&apos;s inside
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            {...fadeUp(0.4)}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-divider pt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-headline-section text-headline-section text-white">{stat.number}</p>
                <p className="font-label-navigation text-label-navigation text-text-low-emphasis mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         2. WHAT IS UNIVERSE
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto">
          <SectionHeader>What is Universe?</SectionHeader>
          <p className="font-body-md text-body-md text-text-secondary mb-6 leading-relaxed">
            Universe is a shared digital environment built from rooms and worlds. People move through spaces, see who&apos;s around, and interact naturally — no app switching, no context loss. AI bots live alongside humans, portals connect distant worlds, and everything is open for you to build on.
          </p>
          <Link href="/build" className="font-label-navigation text-label-navigation text-primary hover:underline inline-block mt-4">
            Explore what you can build →
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         3. COMMUNICATION
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>Walk in. See who&apos;s around. Talk naturally.</SectionHeader>
        <div className="grid md:grid-cols-2 gap-6">
          {communicationCards.map((card) => (
            <IconCard key={card.title} {...card} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/communication" className="font-label-navigation text-label-navigation text-primary hover:underline">
            See all communication features →
          </Link>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         4. AI BOTS
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>AI that actually lives here.</SectionHeader>
        <div className="grid md:grid-cols-2 gap-6">
          {aiBotsCards.map((card) => (
            <IconCard key={card.title} {...card} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/ai-bots" className="font-label-navigation text-label-navigation text-primary hover:underline">
            See all bot features →
          </Link>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         5. BUILD TOOLS
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>Build anything. Change anything.</SectionHeader>
        <div className="grid md:grid-cols-3 gap-6">
          {buildToolsCards.map((card) => (
            <IconCard key={card.title} {...card} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/build" className="font-label-navigation text-label-navigation text-primary hover:underline">
            See all build tools →
          </Link>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         6. WHAT PEOPLE BUILD
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>What people build</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCaseCards.map((card) => (
            <SimpleCard key={card.title} {...card} />
          ))}
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         7. OPEN SOURCE
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-orb-purple flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl text-primary">code</span>
          </div>
          <h2 className="font-headline-section text-headline-section text-white mb-6">Built in the open.</h2>
          <p className="font-body-md text-body-md text-text-secondary mb-8">
            Released under the MIT license. A fork of WorkAdventure. 80+ open source repositories spanning maps, bots, infrastructure, SDKs, and tooling.
          </p>
          <a
            href="https://github.com/BAWES-Universe"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient neon-glow-purple text-white px-8 py-4 rounded-full font-headline-card hover:scale-105 transition-all inline-block"
          >
            View on GitHub
          </a>
        </motion.div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         8. FREE TO START
         ═══════════════════════════════════════ */}
      <SectionWrapper className="pb-24">
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Free to explore. Free to build.</h2>
          <p className="font-body-md text-body-md text-text-secondary mb-10">No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/communication"
              className="primary-gradient neon-glow-purple text-white px-8 py-4 rounded-full font-headline-card hover:scale-105 transition-all"
            >
              Explore the Universe
            </Link>
            <Link
              href="/contact"
              className="glass-card border border-purple/30 text-white font-headline-card px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Talk to us
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  )
}
