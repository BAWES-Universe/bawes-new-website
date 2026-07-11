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
   Communication cards data (Stitch V6 descriptions)
   ────────────────────────────────────────────── */
const communicationCards = [
  { icon: 'spatial_audio', title: 'Proximity Chat', desc: 'Real-time voice and video activates when you walk near someone. Private bubbles for focused conversations. No scheduling.', href: '/features/proximity-chat', iconBg: 'bg-orb-purple' },
  { icon: 'chat', title: 'Text Chat', desc: 'Per-room chat with proximity bubbles. Messages appear above avatars. Bot streaming responses flow directly.', href: '/features/text-chat', iconBg: 'bg-orb-blue' },
  { icon: 'hub', title: 'Matrix Chat', desc: 'Optional Matrix/Synapse integration for persistent chat history. Conversations survive between visits.', href: '/features/matrix-chat', iconBg: 'bg-orb-purple' },
  { icon: 'campaign', title: 'Megaphone', desc: 'Broadcast audio and messages to every room. Tag-based access control for announcements and events.', href: '/features/megaphone', iconBg: 'bg-orb-blue' },
  { icon: 'video_chat', title: 'Meeting Rooms', desc: 'Walk into a zone — instant meeting. Spontaneous or scheduled. Video, audio, screen share supported.', href: '/features/meeting-rooms', iconBg: 'bg-orb-purple' },
  { icon: 'present_to_all', title: 'Screen Sharing', desc: 'Share your screen inside any conversation bubble. Present to a room or a private group effortlessly.', href: '/features/screen-sharing', iconBg: 'bg-orb-blue' },
  { icon: 'podcasts', title: 'Events', desc: 'Live stream to every room. Stage zones for speakers. Moderation controls. Record and replay easily.', href: '/features/broadcasting', iconBg: 'bg-orb-purple' },
  { icon: 'music_note', title: 'Play Audio', desc: 'Zone-triggered sounds. Entrance music. Announcement chimes. Ambient atmosphere per room.', href: '/features/play-audio', iconBg: 'bg-orb-blue' },
]

/* ──────────────────────────────────────────────
   AI Bots cards data (Stitch V6 descriptions)
   ────────────────────────────────────────────── */
const aiBotsCards = [
  { icon: 'psychology', title: 'Watch Them Think', desc: 'Bot responses stream word by word above their heads. You see them process in real time.', href: '/features/bot-streaming', iconBg: 'bg-orb-purple' },
  { icon: 'memory', title: 'They Remember You', desc: 'Past conversations. Your name. What you talked about. Context that carries across visits.', href: '/features/bot-memory', iconBg: 'bg-orb-blue' },
  { icon: 'favorite', title: 'They Have Feelings', desc: 'Happy, serious, playful, confused. The mood changes how they respond dynamically.', href: '/features/bot-emotions', iconBg: 'bg-orb-purple' },
  { icon: 'waving_hand', title: 'They Greet You', desc: 'Walk up to a bot — it says your name. First impressions matter, every single time.', href: '/features/bot-greetings', iconBg: 'bg-orb-blue' },
  { icon: 'handyman', title: 'They Do Things', desc: 'Open websites. Trigger scripts. Set variables. Connect to your tools via MCP plugins.', href: '/features/bot-behaviors', iconBg: 'bg-orb-purple' },
  { icon: 'settings', title: 'Choose Their Brain', desc: 'OpenAI, Anthropic, Deepseek, or open-source. Pick the right AI for each specific bot.', href: '/features/bot-provider-config', iconBg: 'bg-orb-blue' },
  { icon: 'device_hub', title: 'Bots Build Bots', desc: 'They spawn other bots with their own configs and personalities. Self-architecting AI systems.', href: '/features/recursive-bots', iconBg: 'bg-orb-purple' },
  { icon: 'edit', title: 'Place Them Anywhere', desc: 'Drag a bot onto any map from the editor. Simple, intuitive, and absolutely no code needed.', href: '/features/bot-editor', iconBg: 'bg-orb-blue' },
]

/* ──────────────────────────────────────────────
   Build tools cards data (Stitch V6 descriptions)
   ────────────────────────────────────────────── */
const buildToolsCards = [
  { icon: 'map', title: 'Maps & Templates', desc: 'Design intricate rooms with Tiled. Start from professional blueprints to launch in minutes.', href: '/features/maps', link: 'Explore maps' },
  { icon: 'edit_square', title: 'Inline Map Editor', desc: 'Edit your maps live directly in your browser. Real-time changes for a truly living world.', href: '/features/map-editor', link: 'Try the editor' },
  { icon: 'widgets', title: 'Area Zones', desc: 'Define properties, custom triggers, and granular permissions for every zone you create.', href: '/features/area-zones', link: 'Learn about zones' },
  { icon: 'view_in_ar', title: 'Entity Editor', desc: 'Place interactive objects that perform actions. Doors, buttons, and switches at your command.', href: '/features/entity-editor', link: 'Edit entities' },
  { icon: 'code', title: 'Scripting API', desc: 'Full control over world behavior. Script any complex interaction or automation you imagine.', href: '/features/scripting', link: 'Read the docs' },
  { icon: 'near_me', title: 'Teleport & Portals', desc: 'Seamlessly connect rooms, worlds, and entire universes. Navigation has never been so fluid.', href: '/features/teleport', link: 'Set up portals' },
]

/* ──────────────────────────────────────────────
   Use cases data (Stitch V6 content)
   ────────────────────────────────────────────── */
const useCaseCards = [
  { icon: 'work', title: 'A Company Universe', desc: 'Meeting rooms, focus pods, lounge areas, and daily standup bots that keep distributed teams perfectly synchronized.', href: '/use-cases/company' },
  { icon: 'school', title: 'A Campus Universe', desc: 'Lecture halls, interactive study rooms, and AI teaching assistants available 24/7 for students.', href: '/use-cases/campus' },
  { icon: 'diversity_3', title: 'A Community Universe', desc: 'Event halls, gaming rooms, and welcome bots that greet every new member by name.', href: '/use-cases/community' },
  { icon: 'group', title: 'A Conference Universe', desc: 'Sponsor rooms, networking zones, and main stages that handle thousands of simultaneous attendees.', href: '/use-cases/conference' },
  { icon: 'person', title: 'A Personal Universe', desc: 'Build your own digital sanctuary. Custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.', href: '/use-cases/personal' },
]

/* ══════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="relative bg-[#0a0a14]">
      {/* ─── Blurred background orbs ─── */}
      <div className="bg-orb bg-orb-purple w-[600px] h-[600px] top-[-200px] right-[-200px]" />
      <div className="bg-orb bg-orb-blue w-[500px] h-[500px] bottom-[20%] left-[-150px]" />
      <div className="bg-orb bg-orb-purple w-[400px] h-[400px] top-[40%] left-[10%]" />

      {/* ═══════════════════════════════════════
         1. HERO
         ═══════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-center items-center px-gutter relative z-10">
        <div className="max-w-container-max mx-auto text-center">
          {/* Headline */}
          <motion.h1
            {...fadeUp(0)}
            className="font-display-hero text-display-hero text-white mb-6"
          >
            Enter the <span className="text-gradient">Universe</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-body-md text-body-md text-text-secondary max-w-2xl mx-auto mb-12"
          >
            Walk into rooms full of people. Real-time voice and video. AI that remembers you. Build anything, go anywhere.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.2)}
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
            {...fadeUp(0.3)}
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
         2. WHAT IS UNIVERSE (Stitch V6)
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)} className="glass-card rounded-[2rem] p-12 text-center max-w-4xl mx-auto border border-purple/20">
          <SectionHeader className="!mb-8">Universe is a platform where you build your own universe.</SectionHeader>
          <p className="font-body-md text-body-md text-text-secondary mb-10 leading-relaxed">
            Rooms, worlds, AI bots, portals, tools. Some people build for their company. Some for their community, their classroom, or just themselves. Everyone fills them with people, AI, and purpose. It&apos;s open source. It&apos;s yours. And anyone can walk in.
          </p>
          <Link href="/build" className="font-label-navigation text-label-navigation text-primary hover:underline inline-flex items-center gap-2">
            Explore what you can build <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         3. COMMUNICATION (Stitch V6)
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>
          Walk in. See who&apos;s around. <span className="text-gradient">Talk naturally.</span>
        </SectionHeader>
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible pb-4 md:pb-0 -mx-gutter px-gutter md:mx-0 md:px-0">
          {communicationCards.map((card) => (
            <div key={card.title} className="flex-shrink-0 w-[280px] md:w-auto snap-start">
              <IconCard key={card.title} {...card} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/communication" className="font-label-navigation text-label-navigation text-primary hover:underline inline-flex items-center gap-1">
            See all communication features <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         4. AI BOTS (Stitch V6)
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>
          AI that <span className="text-gradient">actually lives here.</span>
        </SectionHeader>
        <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible pb-4 md:pb-0 -mx-gutter px-gutter md:mx-0 md:px-0">
          {aiBotsCards.map((card) => (
            <div key={card.title} className="flex-shrink-0 w-[280px] md:w-auto snap-start">
              <IconCard key={card.title} {...card} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/ai-bots" className="font-label-navigation text-label-navigation text-primary hover:underline inline-flex items-center gap-1">
            See all bot features <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         5. BUILD TOOLS (Stitch V6)
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>
          Build anything. <span className="text-gradient">Change anything.</span>
        </SectionHeader>
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible pb-4 md:pb-0 -mx-gutter px-gutter md:mx-0 md:px-0">
          {buildToolsCards.map((card) => (
            <div key={card.title} className="flex-shrink-0 w-[280px] md:w-auto snap-start">
              <IconCard key={card.title} {...card} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/build" className="font-label-navigation text-label-navigation text-primary hover:underline inline-flex items-center gap-1">
            See all build tools <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         6. WHAT PEOPLE BUILD (Stitch V6 use cases)
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <SectionHeader>What people are building</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseCards.map((card) => (
            <SimpleCard key={card.title} {...card} />
          ))}
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         7. OPEN SOURCE (Stitch V6)
         ═══════════════════════════════════════ */}
      <SectionWrapper>
        <motion.div {...fadeUp(0)} className="glass-card rounded-[2rem] p-12 border border-purple/20 overflow-hidden relative">
          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline-section text-headline-section text-white mb-6">Built in the open.</h2>
              <p className="font-body-md text-body-md text-text-secondary mb-8">
                We believe the future of digital space belongs to everyone. MIT license. Fork of WorkAdventure. 80+ active repositories and counting.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BAWES-Universe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all text-white"
                >
                  <span className="material-symbols-outlined">code</span>
                  <span className="font-headline-card">View on GitHub</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl border border-divider hover:bg-white/5 transition-all text-white"
                >
                  <span className="material-symbols-outlined">groups</span>
                  <span className="font-headline-card">Community</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-surface-container-lowest/50 rounded-2xl border border-divider">
                <h5 className="font-headline-card text-white mb-2">MIT Licensed</h5>
                <p className="font-body-md text-body-md text-text-low-emphasis">Full freedom to modify, host, and distribute your universe however you see fit.</p>
              </div>
              <div className="p-6 bg-surface-container-lowest/50 rounded-2xl border border-divider">
                <h5 className="font-headline-card text-white mb-2">Built on WorkAdventure</h5>
                <p className="font-body-md text-body-md text-text-low-emphasis">Leveraging the world&apos;s most robust engine for map-based social interaction.</p>
              </div>
              <div className="p-6 bg-surface-container-lowest/50 rounded-2xl border border-divider">
                <h5 className="font-headline-card text-white mb-2">The Team</h5>
                <p className="font-body-md text-body-md text-text-low-emphasis">A global collective of developers, designers, and visionaries building the open metaverse.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════
         8. FREE TO START (Stitch V6 CTA)
         ═══════════════════════════════════════ */}
      <SectionWrapper className="pb-24">
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline-section text-headline-section text-white mb-4">
            Free to explore. <span className="text-gradient">Free to build.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-secondary mb-10">
            No credit card. No commitment. Build your universe, invite people, and watch your AI agents come to life.
          </p>
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
