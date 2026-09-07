'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import LivingWorld from '@/components/home/LivingWorld'
import FeatureTour from '@/components/home/FeatureTour'
import BotTranscript from '@/components/home/BotTranscript'
import Ecosystem from '@/components/home/Ecosystem'
import { captureEnterUniverse, captureCtaClick, captureExternalLink, getCrossDomainUrl, UNIVERSE_URL } from '@/lib/posthog'

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const promises = [
  { icon: 'directions_walk', title: 'Just walk in', desc: 'Works in your browser. No download, no install, no account to start.' },
  { icon: 'record_voice_over', title: 'Talk like you are there', desc: 'Get close to someone and you can hear them. Step away and you cannot.' },
  { icon: 'smart_toy', title: 'Meet the residents', desc: 'AI characters who live in the rooms, remember you and actually help.' },
  { icon: 'home_work', title: 'Make it yours', desc: 'Build a room, invite friends or your team, and change it any time.' },
]

const box = [
  { icon: 'meeting_room', color: '#a78bfa', title: 'Meeting rooms', desc: 'Walk in to auto-join. Video, screen share and a shared screen on the wall — no invites, no links.', href: '/features/meeting-rooms', wide: true },
  { icon: 'campaign', color: '#fbbf24', title: 'Megaphone & broadcasting', desc: 'Address a whole room at once, or stream a main stage to everyone in the world.', href: '/features/broadcasting' },
  { icon: 'forum', color: '#93c5fd', title: 'Matrix chat', desc: 'Federated text chat that follows you from room to room, with a searchable directory.', href: '/features/matrix-chat' },
  { icon: 'face', color: '#f9a8d4', title: 'Avatar catalog', desc: 'Curated avatar sets and companions with per-universe entitlements and audit logs.', href: '/features/avatar-platform' },
  { icon: 'select_all', color: '#6ee7b7', title: 'Area zones', desc: 'Draw a zone and give it a job: open a website, play audio, teleport, start a meeting. 18+ behaviours.', href: '/features/area-zones' },
  { icon: 'code', color: '#c4b5fd', title: 'Scripting API', desc: 'A typed API for rooms: popups, triggers, variables, custom UI, anything you can script.', href: '/features/scripting' },
  { icon: 'shield_person', color: '#93c5fd', title: 'OIDC single sign-on', desc: 'Bring your identity provider. Access is spatial and tag-based, not one global switch.', href: '/features/oidc-auth' },
  { icon: 'dns', color: '#34d399', title: 'Self-host everything', desc: 'Docker Compose or Kubernetes. Your domain, your logos, your data, your models.', href: '/features/self-hosting', wide: true },
  { icon: 'explore', color: '#fbbf24', title: 'Orbit', desc: 'See where you are, who is online and jump straight to where activity is happening.', href: '/features/orbit-operator' },
]

const botCaps = [
  { icon: 'memory', title: 'Memory', desc: 'Per-person memory and history that survives sessions.', href: '/features/bot-memory' },
  { icon: 'mood', title: 'Emotions', desc: 'Sentiment, tone and frustration tracked and adapted to.', href: '/features/bot-emotions' },
  { icon: 'waving_hand', title: 'Greetings', desc: 'Notices who walks up and greets them by name.', href: '/features/bot-greetings' },
  { icon: 'description', title: 'Reads files', desc: 'PDF, Word, Excel and web pages, parsed on the spot.', href: '/features/bot-file-parsing' },
  { icon: 'stream', title: 'Streams', desc: 'Token-by-token replies, tool calls mid-stream.', href: '/features/bot-streaming' },
  { icon: 'perm_media', title: 'Sends media', desc: 'Images, audio, video and files, delivered in-world.', href: '/features/bot-media-sending' },
  { icon: 'directions_walk', title: 'Behaviours', desc: 'Idle, patrol or social. Real pathfinding on the real map.', href: '/features/bot-behaviors' },
  { icon: 'tune', title: 'Any model', desc: 'OpenAI, local models via LM Studio, vision models per bot.', href: '/features/bot-provider-config' },
  { icon: 'account_tree', title: 'Bots that build bots', desc: 'Hand a bot the admin API and it can provision more.', href: '/features/recursive-bots' },
]

const useCases = [
  { emoji: '🏠', title: 'Personal', desc: 'Your own space, your own AI companions, friends welcome anytime.', href: '/use-cases/personal' },
  { emoji: '🏢', title: 'Work', desc: 'Team rooms, focus pods, standup bots and a watercooler that works.', href: '/use-cases/work' },
  { emoji: '🎮', title: 'Community', desc: 'Event halls, gaming rooms, a bot that greets every newcomer by name.', href: '/use-cases/community' },
  { emoji: '🎓', title: 'Learning', desc: 'Lecture halls, study groups and teaching assistants that never sleep.', href: '/use-cases/learning' },
  { emoji: '🌐', title: 'Events', desc: 'Sponsor rooms, networking zones and a main stage for thousands.', href: '/use-cases/events' },
  { emoji: '💰', title: 'Commerce', desc: 'Subscriptions, tickets and payments wired to your existing stack.', href: '/use-cases/commerce' },
  { emoji: '🛍️', title: 'Market', desc: 'Brand showrooms, social shopping and pop-up shops in shared space.', href: '/use-cases/market' },
]

/* ═══════════════════════════════════════════════════════════════
   PRIMITIVES
   ═══════════════════════════════════════════════════════════════ */

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

function EnterCta({ source, className = '' }: { source: string; className?: string }) {
  return (
    <a
      href={UNIVERSE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault()
        captureEnterUniverse(source)
        window.open(getCrossDomainUrl(UNIVERSE_URL), '_blank')
      }}
      className={`cta-primary ${className}`}
    >
      Enter the Universe
      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
    </a>
  )
}

function SectionHead({ eyebrow, title, body, align = 'left' }: { eyebrow: string; title: React.ReactNode; body?: string; align?: 'left' | 'center' }) {
  return (
    <motion.div {...rise()} className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-[720px]`}>
      <div className={`eyebrow mb-5 ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</div>
      <h2 className="font-display text-[34px] sm:text-5xl md:text-[56px] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-5 text-balance">
        {title}
      </h2>
      {body && <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-[560px]">{body}</p>}
    </motion.div>
  )
}

function Wrap({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="relative z-10 overflow-x-clip">
      {/* ═══ HERO ═══ */}
      <section className="relative pt-28 md:pt-36 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 grid-fade opacity-70" />
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[900px] h-[500px] -z-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 60%)' }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-5">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-[44px] sm:text-6xl lg:text-[64px] xl:text-[72px] leading-[1.0] font-bold text-white tracking-[-0.035em] mb-6"
            >
              Where people and{' '}
              <span className="text-gradient-accent">AI actually live</span>{' '}
              together.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-lg text-white/60 leading-relaxed max-w-[480px] mb-8"
            >
              Universe is made of rooms you walk into, not links you click. See who&apos;s around,
              walk over and talk naturally — with people and bots that have memories, feelings,
              and real tools to help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <EnterCta source="hero" />
              <Link href="/how-it-works" onClick={() => captureCtaClick('How it works', 'hero')} className="cta-secondary">
                How it works
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/45"
            >
              <span className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-emerald-300">check</span> No credit card</span>
              <span className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-emerald-300">check</span> Works in the browser</span>
              <span className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-emerald-300">check</span> Free to start</span>
            </motion.div>
          </div>

          {/* Living world */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="hero-frame">
              <div className="rounded-[18px] overflow-hidden">
                <LivingWorld />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-[12px] text-white/45">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-amber-300">science</span>
                Live simulation of a Universe room, drawn in your browser. Not a video.
              </span>
              <span className="hidden sm:inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400/70" /> proximity bubble</span>
                <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber-400/80" /> you</span>
                <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[13px] text-purple-300">smart_toy</span> resident bot</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PROMISES ═══ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="divider-glow mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {promises.map((p, i) => (
              <motion.div key={p.title} {...rise(i * 0.05)} className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-purple-500/12 border border-purple-400/20 text-purple-200 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-white leading-tight mb-1">{p.title}</span>
                  <span className="block text-[13px] text-white/50 leading-relaxed">{p.desc}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SIGNATURE FEATURES ═══ */}
      <Wrap id="different">
        <SectionHead
          eyebrow="What makes it different"
          title={<>Not a tool. Not a game.<br />A <span className="text-gradient-accent">living space</span>.</>}
          body="Four things a video call, a chat app or a 3D metaverse can't give you. Every panel is a working illustration, not a mockup."
        />
        <motion.div {...rise(0.1)}>
          <FeatureTour />
        </motion.div>
      </Wrap>

      {/* ═══ BOTS ═══ */}
      <Wrap className="!pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHead
              eyebrow="AI residents"
              title={<>A bot is a resident,<br />not a chat window.</>}
              body="Universe bots join rooms as players. They walk the map, notice who is nearby, remember every conversation and call real tools — then bring you the result in person."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5 -mt-6">
              {botCaps.map((c, i) => (
                <motion.div key={c.title} {...rise(0.03 * i)}>
                  <Link href={c.href} className="surface-card surface-card-hover flex items-start gap-3 p-3.5 h-full">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-200 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">{c.icon}</span>
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white leading-tight mb-0.5">{c.title}</span>
                      <span className="block text-[12.5px] text-white/50 leading-snug">{c.desc}</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div {...rise(0.2)} className="mt-6">
              <Link href="/ai-bots" onClick={() => captureCtaClick('Everything bots can do', 'bots')} className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 hover:text-white transition-colors group">
                Everything bots can do
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
          <motion.div {...rise(0.1)} className="lg:col-span-7">
            <BotTranscript />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { k: 'Provider', v: 'OpenAI · LM Studio' },
                { k: 'Tools', v: '8 built-in + MCP' },
                { k: 'Memory', v: 'per person, persistent' },
              ].map((s) => (
                <div key={s.k} className="surface-card px-3.5 py-3">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-white/35 mb-1">{s.k}</div>
                  <div className="text-[13px] font-medium text-white/85">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Wrap>

      {/* ═══ EVERYTHING IN THE BOX ═══ */}
      <Wrap>
        <SectionHead
          eyebrow="Everything in the box"
          title={<>The whole office, campus or venue. <span className="text-gradient-accent">Already built.</span></>}
          body="Everything WorkAdventure does, plus what we added on top. Every card links to the feature page."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {box.map((f, i) => (
            <motion.div key={f.title} {...rise(0.04 * i)} className={f.wide ? 'sm:col-span-2' : ''}>
              <Link href={f.href} className="surface-card surface-card-hover block h-full p-6 group relative overflow-hidden">
                <span
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${f.color}33, transparent 70%)` }}
                />
                <span className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${f.color}1f`, color: f.color }}>
                  <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
                </span>
                <h3 className="text-[17px] font-semibold text-white mb-1.5 leading-tight">{f.title}</h3>
                <p className="text-[13.5px] text-white/50 leading-relaxed">{f.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-semibold text-purple-300/80 group-hover:text-purple-200 transition-colors">
                  Learn more <span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...rise(0.2)} className="mt-8 text-center">
          <Link href="/features-overview" onClick={() => captureCtaClick('All features', 'box')} className="cta-secondary !py-3 !text-sm">
            See all features
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </motion.div>
      </Wrap>

      {/* ═══ ECOSYSTEM ═══ */}
      <Wrap className="!pt-8">
        <SectionHead
          eyebrow="How it fits together"
          title={<>One universe.<br />Everything <span className="text-gradient-accent">connected.</span></>}
          body="Universe is the space itself — universes, the worlds inside them, and the rooms you walk through. Around it we built the control room, the AI residents, the tools they can use and a link to your Discord."
        />
        <motion.div {...rise(0.1)}>
          <Ecosystem />
        </motion.div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {[
            { icon: 'account_tree', title: 'Universes → Worlds → Rooms', desc: 'Three levels, one URL per room. Orbit shows you where you are and lets you jump to where activity is.', href: '/how-it-works' },
            { icon: 'lock', title: 'Spatial access control', desc: 'Open spaces with protected cores. Membership tags decide who can enter a room, edit a map or run a bot.', href: '/features/oidc-auth' },
            { icon: 'code', title: 'Open source, self-hostable', desc: 'Built on WorkAdventure and developed in the open. Run it on our cloud or on your own servers.', href: '/open-source' },
          ].map((c, i) => (
            <motion.div key={c.title} {...rise(0.05 * i)}>
              <Link href={c.href} className="surface-card surface-card-hover block h-full p-5">
                <span className="material-symbols-outlined text-[22px] text-purple-300 mb-3 block">{c.icon}</span>
                <h3 className="text-[15px] font-semibold text-white mb-1.5">{c.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{c.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Wrap>

      {/* ═══ USE CASES ═══ */}
      <Wrap className="!pt-8">
        <SectionHead
          eyebrow="What people build"
          title={<>Universes for work, school,<br />community and more.</>}
          body="Same platform, different worlds. Pick a starting point and walk in."
        />
        <div className="scroll-rail flex gap-3.5 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {useCases.map((u, i) => (
            <motion.div key={u.title} {...rise(0.04 * i)} className="min-w-[260px] sm:min-w-0">
              <Link href={u.href} className="surface-card surface-card-hover block h-full p-5">
                <span className="text-3xl block mb-4">{u.emoji}</span>
                <h3 className="text-[16px] font-semibold text-white mb-1.5">For {u.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{u.desc}</p>
              </Link>
            </motion.div>
          ))}
          <motion.div {...rise(0.3)} className="min-w-[260px] sm:min-w-0">
            <Link href="/use-cases" className="surface-card surface-card-hover flex flex-col justify-center items-start h-full p-5 border-dashed">
              <span className="material-symbols-outlined text-[28px] text-purple-300 mb-3">add</span>
              <h3 className="text-[16px] font-semibold text-white mb-1.5">Something else?</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">Rooms are just maps. If you can draw it, you can host it.</p>
            </Link>
          </motion.div>
        </div>
      </Wrap>

      {/* ═══ OPEN BY DEFAULT ═══ */}
      <Wrap className="!pt-8">
        <div className="surface-card p-6 sm:p-10 md:p-14 overflow-hidden relative">
          <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-5">Open by default</div>
              <h2 className="font-display text-[34px] sm:text-5xl font-bold text-white leading-[1.05] tracking-[-0.03em] mb-5">
                Standing on giant shoulders. <span className="text-gradient-accent">Building in the open.</span>
              </h2>
              <p className="text-base md:text-lg text-white/55 leading-relaxed mb-6 max-w-[520px]">
                Universe is a fork of WorkAdventure, the open source virtual office by our partners at
                TheCodingMachine. We kept everything that makes it great and added the AI residents,
                the control plane and the tool bridge. Every line is public.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/BAWES-Universe"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => captureExternalLink('github', 'https://github.com/BAWES-Universe')}
                  className="cta-secondary !py-3 !text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                  GitHub
                </a>
                <Link href="/workadventure-fork" className="cta-secondary !py-3 !text-sm">
                  Why we forked
                </Link>
                <Link href="/open-source" className="cta-secondary !py-3 !text-sm">
                  Open source
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#0a0814] border border-white/8 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[11px] text-white/35 mono">self-host · docker compose</span>
                </div>
                <pre className="mono text-[12.5px] leading-relaxed p-4 sm:p-5 text-white/80 overflow-x-auto">
                  <span className="text-white/35">$</span> git clone https://github.com/BAWES-Universe/workadventure-universe{'\n'}
                  <span className="text-white/35">$</span> cd workadventure-universe{'\n'}
                  <span className="text-white/35">$</span> docker compose \{'\n'}
                  {'    '}-f docker-compose.yaml \{'\n'}
                  {'    '}-f docker-compose.bots.yaml \{'\n'}
                  {'    '}-f docker-compose.livekit.yaml up{'\n\n'}
                  <span className="text-emerald-300">✓</span> play, back, pusher, map-storage{'      '}<span className="text-white/35">ready</span>{'\n'}
                  <span className="text-emerald-300">✓</span> bot-server · 3 residents awake{'       '}<span className="text-white/35">ready</span>{'\n'}
                  <span className="text-emerald-300">✓</span> livekit · matrix · redis{'             '}<span className="text-white/35">ready</span>{'\n'}
                  <span className="text-purple-300">→</span> https://play.your-domain.com/@/your-universe/hq/lobby
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Wrap>

      {/* ═══ FINAL CTA ═══ */}
      <Wrap className="!pt-4 !pb-32">
        <motion.div
          {...rise()}
          className="relative rounded-[32px] p-10 sm:p-16 md:p-24 text-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 50% 120%, rgba(139,92,246,0.30), rgba(10,8,20,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            border: '1px solid rgba(167,139,250,0.2)',
          }}
        >
          <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="eyebrow justify-center mb-6">Free to enter</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-[64px] font-bold text-white leading-[1.02] tracking-[-0.03em] mb-5 text-balance">
              Step into a universe<br />that&apos;s waiting for you.
            </h2>
            <p className="text-base md:text-lg text-white/55 max-w-[520px] mx-auto mb-9">
              No credit card, no commitment. Walk in, meet the residents, build a room, invite a friend.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <EnterCta source="footer_cta" />
              <Link href="/contact" onClick={() => captureCtaClick('Talk to us', 'footer_cta')} className="cta-secondary">
                Talk to us
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-white/40">
              <a href="https://discord.gg/CXceJWnwNT" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Join the Discord →</a>
              <Link href="/manifesto" className="hover:text-white transition-colors">Read the manifesto →</Link>
              <Link href="/developers" className="hover:text-white transition-colors">Developer hub →</Link>
            </div>
          </div>
        </motion.div>
      </Wrap>
    </div>
  )
}
