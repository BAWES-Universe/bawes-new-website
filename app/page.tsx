'use client'

import Link from 'next/link'
import { motion, MotionConfig } from 'framer-motion'
import Plaza from '@/components/home/Plaza'
import FeelLoops from '@/components/home/FeelLoops'
import BrickSection from '@/components/home/BrickSection'
import EnterCta from '@/components/home/EnterCta'
import Parade from '@/components/home/Parade'
import { Avatar, Brick, vars, type AvatarId } from '@/components/home/sprites'
import { captureCtaClick, captureExternalLink } from '@/lib/posthog'
import '@/components/home/home.css'

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const box = [
  { icon: 'meeting_room', color: '#a78bfa', title: 'Meeting rooms', desc: 'Walk in to auto-join. Video, screen share and a shared screen on the wall — no invites, no links.', href: '/features/meeting-rooms', wide: true },
  { icon: 'campaign', color: '#fbbf24', title: 'Megaphone & broadcasting', desc: 'Address a whole room at once, or stream a main stage to everyone in the world.', href: '/features/broadcasting' },
  { icon: 'forum', color: '#93c5fd', title: 'Matrix chat', desc: 'Federated text chat that follows you from room to room, with a searchable directory.', href: '/features/matrix-chat' },
  { icon: 'face', color: '#f9a8d4', title: 'Avatar catalog', desc: 'Curated avatar sets and companions with per-universe entitlements and audit logs.', href: '/features/avatar-platform' },
  { icon: 'select_all', color: '#6ee7b7', title: 'Area zones', desc: 'Draw a zone and give it a job: open a website, play audio, teleport, start a meeting. 18+ behaviours.', href: '/features/area-zones' },
  { icon: 'code', color: '#c4b5fd', title: 'Scripting API', desc: 'A typed API for rooms: popups, triggers, variables, custom UI, anything you can script.', href: '/features/scripting' },
  { icon: 'shield_person', color: '#93c5fd', title: 'OIDC single sign-on', desc: 'Bring your identity provider. Access is spatial and tag-based, not one global switch.', href: '/features/oidc-auth' },
  { icon: 'dns', color: '#34d399', title: 'Self-host everything', desc: 'Docker Compose. Your domain, your logos, your data, your models.', href: '/features/self-hosting', wide: true },
  { icon: 'explore', color: '#fbbf24', title: 'Orbit', desc: 'See where you are, who is online and jump straight to where activity is happening.', href: '/features/orbit-operator' },
  { icon: 'map', color: '#f9a8d4', title: 'Map editor', desc: 'Drag a tile, place a desk, draw a zone. Every change is live for everyone in the room.', href: '/features/map-editor' },
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
  { icon: 'account_tree', title: 'Bots that build bots', desc: 'Ask your Brick for a helper and it makes one on the spot.', href: '/features/recursive-bots' },
]

const useCases = [
  { emoji: '🏠', title: 'Personal', desc: 'Your own space, your own AI companions, friends welcome anytime.', href: '/use-cases/personal' },
  { emoji: '🏢', title: 'Work', desc: 'Team rooms, focus pods, standup bots and a watercooler that works.', href: '/use-cases/work' },
  { emoji: '🎮', title: 'Community', desc: 'Event halls, gaming rooms, a bot that greets every newcomer by name.', href: '/use-cases/community' },
  { emoji: '🎓', title: 'Learning', desc: 'Lecture halls, study groups and teaching assistants that never sleep.', href: '/use-cases/learning' },
  { emoji: '🌐', title: 'Events', desc: 'Sponsor rooms, networking zones and a main stage.', href: '/use-cases/events' },
  { emoji: '💰', title: 'Commerce', desc: 'A shop people walk into, with your own payment tools behind it.', href: '/use-cases/commerce' },
  { emoji: '🛍️', title: 'Market', desc: 'Brand showrooms, social shopping and pop-up shops in shared space.', href: '/use-cases/market' },
]

const account = [
  { title: 'Orbit', desc: 'See which rooms have people in them and jump straight in.' },
  { title: 'Your universes', desc: 'Create your own universe with worlds and rooms. Keep it open, or members only.' },
  { title: 'Your passport', desc: 'Stamps from the places you visit most, and stars on the ones you love.' },
  { title: 'Your artifacts', desc: 'Everything you have made, in one list, ready to open or share.' },
  { title: 'Your people', desc: 'Friends, direct messages and voice notes follow you from room to room.' },
  { title: 'Your AI keys', desc: 'Add your own keys once and every resident you make can use them.' },
]

const artifacts: { kind: string; colour?: string; thumb: 'app' | 'page' | 'doc' | 'draw'; tint: string; title: string; desc: string; by: string; avatar: AvatarId }[] = [
  { kind: 'App', colour: '#93c5fd', thumb: 'app', tint: '#1a2147', title: 'Team trivia night', desc: 'Small working apps: a quiz, a tracker, a game, a calculator.', by: 'Noura', avatar: 'a' },
  { kind: 'Page', thumb: 'page', tint: '#231a4d', title: 'Studio open day', desc: 'Pages people can visit: an invite, a portfolio, a menu.', by: 'Omar', avatar: 'j' },
  { kind: 'Document', colour: '#34d399', thumb: 'doc', tint: '#12302f', title: 'Study plan, week 3', desc: 'Plans, notes, reports and guides you can keep editing.', by: 'Sara', avatar: 'd' },
  { kind: 'Drawing', colour: '#fbbf24', thumb: 'draw', tint: '#2b1a38', title: 'Room poster', desc: 'Logos, diagrams and posters, drawn to order.', by: 'Yousef', avatar: 'g' },
]

const appTiles = ['#93c5fd', '#fbbf24', '#f472b6', '#34d399', '#a78bfa', '#67e8f9']

/* Names shown in the moving rows. Apps: well-known ones from the 1,700+ list. AI and voice: providers Universe supports today. */
const appNames = ['Gmail', 'Google Calendar', 'Notion', 'GitHub', 'Slack', 'Google Drive', 'Linear', 'Google Sheets', 'Figma', 'Trello', 'Airtable', 'HubSpot', 'Discord', 'Outlook', 'Asana', 'Jira', 'Dropbox', 'Shopify', 'YouTube', 'Calendly']
const aiNames = ['Universe AI', 'OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'xAI', 'Mistral', 'Groq', 'OpenRouter', 'Qwen', 'Kimi', 'Together AI', 'Fireworks AI', 'Cerebras', 'Hugging Face', 'LM Studio', 'Ollama', 'Any OpenAI-compatible server']
const voiceNames = ['ElevenLabs', 'Cartesia', 'Deepgram', 'Soniox', 'Fish Audio', 'Hume', 'Azure AI Speech', 'Google', 'OpenAI', 'AssemblyAI', 'Speechmatics', 'Rime', 'Inworld', 'MiniMax', 'Resemble AI', 'Gladia']

const steps = [
  { n: 'Step 1', title: 'Start free', desc: 'Universe AI is built in. Residents answer from your first minute, on a generous free plan.' },
  { n: 'Step 2', title: 'Bring your own keys', desc: 'Already pay for an AI provider? Add your key and your residents run on it.' },
  { n: 'Step 3', title: 'Or let us set it up', desc: 'Want more, or want it done for you? Meet the team. We set it up with you or raise your limits.' },
]

/* The closing parade: avatars walk right, Bricks hop right. */
/* ═══════════════════════════════════════════════════════════════
   PRIMITIVES
   ═══════════════════════════════════════════════════════════════ */

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay },
})

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

function SectionHead({ eyebrow, title, body, align = 'left' }: { eyebrow: string; title: React.ReactNode; body?: string; align?: 'left' | 'center' }) {
  return (
    <motion.div {...rise()} className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-[720px]`}>
      <div className={`eyebrow mb-5 ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</div>
      <h2 className={`font-display text-[34px] sm:text-5xl md:text-[56px] font-bold text-white leading-[1.05] tracking-[-0.03em] text-balance ${body ? 'mb-5' : ''}`}>
        {title}
      </h2>
      {body && <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-[560px]">{body}</p>}
    </motion.div>
  )
}

function Wrap({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

function MoreLink({ href, label, source }: { href: string; label: string; source: string }) {
  return (
    <Link href={href} onClick={() => captureCtaClick(label, source)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 hover:text-white transition-colors group">
      {label}
      <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
    </Link>
  )
}

/** A row of names that drifts sideways. The second copy only exists to make the loop seamless. */
function Ticker({ names, seconds, reverse = false }: { names: string[]; seconds: number; reverse?: boolean }) {
  return (
    <div className={`uh-tick ${reverse ? 'uh-rev' : ''}`} style={vars({ '--t': `${seconds}s` })}>
      <div>
        {names.map((n) => (
          <span key={n}>{n}</span>
        ))}
        {names.map((n) => (
          <span key={`${n}-2`} aria-hidden="true">{n}</span>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="uh relative z-10 overflow-x-clip">
      {/* ═══ HERO + PLAZA ═══ */}
      <section className="relative pt-28 md:pt-32 pb-6 md:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 grid-fade opacity-70" />
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[900px] h-[500px] -z-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18), transparent 60%)' }} />

        <div className="max-w-7xl mx-auto">
          <div className="uh-hero-top">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
              <div className="eyebrow">People and AI, living together</div>
              <h1 className="uh-h1">
                <span className="uh-ln">A <span className="uh-g">Universe</span></span>{' '}
                <span className="uh-ln">where you</span>{' '}
                <span className="uh-ln">belong.</span>
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="uh-lead">
                Walk in, meet people and make a space of your own. <b>Build anything</b> with Brick, the AI
                that lives here with you, and connect it to the Apps you already use.
              </p>
              <div className="uh-cta">
                <EnterCta source="hero" />
                <a href="#brick" onClick={() => captureCtaClick('Meet Brick', 'hero')} className="cta-secondary">
                  Meet Brick
                </a>
              </div>
              <ul className="uh-facts">
                <li>Free to start</li>
                <li>Works in the browser</li>
                <li>No download</li>
              </ul>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <Plaza />
          </motion.div>
        </div>
      </section>

      {/* ═══ HOW IT FEELS ═══ */}
      <Wrap id="feel">
        <SectionHead
          eyebrow="How it feels"
          title={<>Walk up. Say hi. <span className="text-gradient-accent">That is the whole trick.</span></>}
        />
        <motion.div {...rise(0.1)}>
          <FeelLoops />
        </motion.div>
        <motion.div {...rise(0.15)} className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <MoreLink href="/how-it-works" label="See how it works" source="feel" />
          <MoreLink href="/guide/start-here" label="Your first five minutes" source="feel" />
        </motion.div>
      </Wrap>

      {/* ═══ ORBIT AND YOUR ACCOUNT ═══ */}
      <Wrap id="orbit" className="!pt-8">
        <SectionHead
          eyebrow="Orbit and your account"
          title={<>One account. <span className="text-gradient-accent">A whole Universe</span> around you.</>}
          body="A universe holds worlds, and worlds hold rooms. Orbit shows you where people are right now and takes you there in one tap."
        />
        <motion.div {...rise(0.1)} className="uh-orbit-grid">
          <div className="uh-orbit" aria-hidden="true">
            <span className="uh-o" style={vars({ width: '96%', height: '96%', '--t': '80s' })}>
              <i style={vars({ '--c': '#a78bfa', '--a': '40deg', '--d': '20px' })} />
              <i style={vars({ '--c': '#fbbf24', '--a': '150deg', '--d': '16px' })} />
              <i style={vars({ '--c': '#93c5fd', '--a': '265deg', '--d': '18px' })} />
            </span>
            <span className="uh-o uh-r" style={vars({ width: '68%', height: '68%', '--t': '52s' })}>
              <i style={vars({ '--c': '#34d399', '--a': '70deg' })} />
              <i style={vars({ '--c': '#f472b6', '--a': '200deg' })} />
              <i style={vars({ '--c': '#a78bfa', '--a': '310deg', '--d': '12px' })} />
            </span>
            <span className="uh-o" style={vars({ width: '42%', height: '42%', '--t': '30s' })}>
              <i style={vars({ '--c': '#fbbf24', '--a': '30deg', '--d': '10px' })} />
              <i style={vars({ '--c': '#67e8f9', '--a': '150deg', '--d': '10px' })} />
              <i style={vars({ '--c': '#fb923c', '--a': '270deg', '--d': '10px' })} />
            </span>
            <span className="uh-lab" style={{ top: '2%' }}>Universes</span>
            <span className="uh-lab" style={{ top: '16%' }}>Worlds</span>
            <span className="uh-lab" style={{ top: '29%' }}>Rooms</span>
            <span className="uh-core" />
            <Avatar id="i">
              <span className="uh-tag uh-you">You</span>
            </Avatar>
          </div>
          <div>
            <div className="uh-acct">
              {account.map((a) => (
                <div key={a.title} className="surface-card">
                  <b>
                    {a.title}
                  </b>
                  <span className="uh-d">{a.desc}</span>
                </div>
              ))}
            </div>
            <div className="uh-crumb">
              <b>Universe</b>→<b>World</b>→<b>Room</b>
              <span>One link for every room.</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <MoreLink href="/features/orbit-operator" label="More about Orbit" source="orbit" />
              <MoreLink href="/guide/orbit" label="Orbit, step by step" source="orbit" />
            </div>
          </div>
        </motion.div>
      </Wrap>

      {/* ═══ BRICK ═══ */}
      <Wrap id="brick">
        <SectionHead
          eyebrow="Brick"
          title={<>Meet Brick. <span className="text-gradient-accent">Yours from day one.</span></>}
          body="Brick is your own AI companion. It starts free on Universe AI, and it gets more useful the more you give it to do."
        />
        <motion.div {...rise(0.1)}>
          <BrickSection />
        </motion.div>
        <motion.div {...rise(0.15)} className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <MoreLink href="/features/brick" label="More about Brick" source="brick" />
          <MoreLink href="/guide/your-brick" label="Your Brick, step by step" source="brick" />
          <MoreLink href="/ai-bots" label="Everything residents can do" source="brick" />
        </motion.div>
      </Wrap>

      {/* ═══ ARTIFACTS ═══ */}
      <Wrap id="artifacts" className="!pt-8">
        <SectionHead
          eyebrow="Artifacts"
          title={<>Ask for anything. <span className="text-gradient-accent">Keep what it makes.</span></>}
          body="Whatever a resident builds for you becomes an artifact. Open it inside Universe, ask for changes, go back a version, or share it with a link."
        />
        <div className="uh-shelf">
          {artifacts.map((a, i) => (
            <motion.article key={a.title} {...rise(0.05 * i)} className="uh-art surface-card">
              <div className={`uh-thumb uh-${a.thumb}`} style={vars({ '--t': a.tint })}>
                {a.thumb === 'app' && appTiles.map((b) => <i key={b} style={vars({ '--b': b })} />)}
              </div>
              <span className="uh-kind" style={a.colour ? vars({ '--k': a.colour }) : undefined}>{a.kind}</span>
              <b>{a.title}</b>
              <p>{a.desc}</p>
              <div className="uh-by">
                <Avatar id={a.avatar} />
                {a.by}
              </div>
            </motion.article>
          ))}
        </div>
        <p className="uh-note">
          Publish a finished version, and keep working on the next one in private.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <MoreLink href="/features/artifacts" label="More about artifacts" source="artifacts" />
          <MoreLink href="/features/artifact-community" label="See what people made" source="artifacts" />
          <MoreLink href="/guide/artifacts" label="How artifacts work" source="artifacts" />
        </div>
      </Wrap>

      {/* ═══ APPS AND AI ═══ */}
      <Wrap id="apps">
        <SectionHead
          eyebrow="Apps and AI"
          title={<>Hook up <span className="text-gradient-accent">anything.</span></>}
          body="Your residents work with the Apps you already use, think with the AI you choose, and speak with the voice you pick."
        />
        <motion.div {...rise(0.1)} className="uh-hook">
          <div className="uh-lane surface-card">
            <div>
              <b>
                <span className="uh-big text-gradient-accent">1,700+</span>Apps
              </b>
              <p>Connect one in a tap. Not listed? Paste its MCP link and add your own.</p>
            </div>
            <Ticker names={appNames} seconds={60} />
          </div>
          <div className="uh-lane surface-card">
            <div>
              <b>Any AI model</b>
              <p>Start on Universe AI. Switch a resident to your own key whenever you like.</p>
            </div>
            <Ticker names={aiNames} seconds={52} reverse />
          </div>
          <div className="uh-lane surface-card">
            <div>
              <b>Any voice</b>
              <p>Choose who your residents hear with and speak with.</p>
            </div>
            <Ticker names={voiceNames} seconds={56} />
          </div>
        </motion.div>
        <motion.div {...rise(0.15)} className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <MoreLink href="/features/apps" label="More about Apps" source="apps" />
          <MoreLink href="/mcp-integration" label="Add your own App with MCP" source="apps" />
          <MoreLink href="/features/bot-provider-config" label="Choosing an AI provider" source="apps" />
          <MoreLink href="/guide/ai-and-voice-providers" label="Every model and voice you can add" source="apps" />
        </motion.div>
      </Wrap>

      {/* ═══ USE CASES ═══ */}
      <Wrap id="use-cases" className="!pt-8">
        <SectionHead
          eyebrow="What people build"
          title={<>Universes for work, school,<br />community and more.</>}
          body="Same platform, different worlds. Pick a starting point and walk in."
        />
        <div className="scroll-rail flex gap-3.5 overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {useCases.map((u, i) => (
            <motion.div key={u.title} {...fade(0.04 * i)} className="min-w-[260px] sm:min-w-0">
              <Link href={u.href} className="surface-card surface-card-hover block h-full p-5">
                <span className="text-3xl block mb-4">{u.emoji}</span>
                <h3 className="text-[16px] font-semibold text-white mb-1.5">For {u.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{u.desc}</p>
              </Link>
            </motion.div>
          ))}
          <motion.div {...fade(0.3)} className="min-w-[260px] sm:min-w-0">
            <Link href="/use-cases" className="surface-card surface-card-hover flex flex-col justify-center items-start h-full p-5 border-dashed">
              <span className="material-symbols-outlined text-[28px] text-purple-300 mb-3">add</span>
              <h3 className="text-[16px] font-semibold text-white mb-1.5">Something else?</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">Rooms are just maps. If you can draw it, you can host it.</p>
            </Link>
          </motion.div>
        </div>
      </Wrap>

      {/* ═══ EVERYTHING IN THE BOX ═══ */}
      <Wrap id="features">
        <SectionHead
          eyebrow="Everything in the box"
          title={<>The whole office, campus or venue. <span className="text-gradient-accent">Already built.</span></>}
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

        <motion.div {...rise(0.15)} className="mt-10">
          <div className="text-[11px] uppercase tracking-[0.16em] text-white/35 mb-3">What residents can do</div>
          <div className="flex flex-wrap gap-2.5">
            {botCaps.map((c) => (
              <Link key={c.title} href={c.href} title={c.desc} className="surface-card surface-card-hover inline-flex items-center gap-2 !rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-white/85">
                <span className="material-symbols-outlined text-[18px] text-purple-300">{c.icon}</span>
                {c.title}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div {...rise(0.2)} className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/features-overview" onClick={() => captureCtaClick('All features', 'box')} className="cta-secondary !py-3 !text-sm">
            See all features
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link href="/ai-bots" onClick={() => captureCtaClick('Everything bots can do', 'box')} className="cta-secondary !py-3 !text-sm">
            Everything residents can do
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </motion.div>
      </Wrap>

      {/* ═══ UNIVERSE AI ═══ */}
      <Wrap id="universe-ai" className="!pt-8">
        <SectionHead
          eyebrow="Universe AI"
          title={<>Free to start. <span className="text-gradient-accent">Room to grow.</span></>}
        />
        <motion.div {...rise(0.1)} className="uh-path surface-card">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="uh-n">{s.n}</span>
              <b>{s.title}</b>
              <p>{s.desc}</p>
            </div>
          ))}
        </motion.div>
        <div className="uh-after">
          <EnterCta source="universe_ai" />
          <Link href="/contact" onClick={() => captureCtaClick('Talk to us', 'universe_ai')} className="cta-secondary">
            Talk to us
          </Link>
          <MoreLink href="/guide/universe-ai" label="Universe AI and your own keys" source="universe_ai" />
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
          className="relative rounded-[32px] px-6 pt-14 sm:px-16 sm:pt-20 md:pt-24 text-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 50% 120%, rgba(139,92,246,0.30), rgba(10,8,20,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            border: '1px solid rgba(167,139,250,0.2)',
          }}
        >
          <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="eyebrow justify-center mb-6">Free to enter</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-[68px] font-bold text-white leading-[1.02] tracking-[-0.03em] mb-5 text-balance">
              Your <span className="text-gradient-accent">Brick</span> is waiting.
            </h2>
            <p className="text-base md:text-lg text-white/55 max-w-[520px] mx-auto mb-9">
              Walk in, say hello, and see what you build together.
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
          <Parade />
        </motion.div>
      </Wrap>
    </div>
    </MotionConfig>
  )
}
