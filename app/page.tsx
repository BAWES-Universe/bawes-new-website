'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

// ─── AI FEATURES ───────────────────────────────────────────────────────────────
const aiFeatures = [
  {
    tag: 'Memory',
    headline: 'Bots that remember who you are.',
    body: 'Every AI character in the Universe maintains persistent memory across sessions. A returning student gets greeted by name and picks up where they left off. Bots evolve with your community.',
    pills: ['Per-user memory', 'Session continuity', 'Context awareness'],
    icon: '\ud83e\udde0',
    accent: 'text-teal-400',
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/5',
  },
  {
    tag: 'Emotion Engine',
    headline: 'Characters that react, not just respond.',
    body: 'Emotion blocks in bot dialogue produce dynamic visual reactions — curiosity, warmth, surprise. Interactions feel human because the bots express, not just answer.',
    pills: ['Emotion blocks', 'Visual reactions', 'Dynamic personas'],
    icon: '\ud83c\udfad',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
  },
  {
    tag: 'Local LLM',
    headline: 'AI that runs on your infrastructure.',
    body: 'Universe bots run on LMStudio with Qwen 3B by default — fully offline capable. Swap in any OpenAI-compatible model. Your data stays on your servers. No API keys required.',
    pills: ['LMStudio + Qwen 3B', 'OpenAI-compatible', 'Offline capable', 'Self-hosted'],
    icon: '\ud83d\udcbb',
    accent: 'text-bawes-gold',
    border: 'border-bawes-gold/20',
    bg: 'bg-bawes-gold/5',
  },
  {
    tag: 'NPC System',
    headline: 'Assign identities to every character.',
    body: 'Each bot gets a unique avatar from NPC-only sets invisible to players. Give your bots names, uniforms, and visual personalities that match their role in your world.',
    pills: ['NPC-only avatar sets', 'Named characters', 'Role-matched visuals'],
    icon: '\ud83d\udc7e',
    accent: 'text-bawes-orange',
    border: 'border-bawes-orange/20',
    bg: 'bg-bawes-orange/5',
  },
]

// ─── PLATFORM PILLARS (bento) ──────────────────────────────────────────────────
const bento = [
  { icon: '\ud83d\uddfa\ufe0f', title: 'Spatial Worlds', desc: 'Three-layer hierarchy: Universes \u2192 Worlds \u2192 Rooms. Real-time presence, proximity audio/video via LiveKit.', span: 'md:col-span-2', accent: 'border-t-bawes-gold' },
  { icon: '\ud83d\udef8', title: 'Orbit Admin', desc: 'Full operator dashboard. Manage maps, members, bots, access rules, and avatar sets without touching code.', span: '', accent: 'border-t-blue-400' },
  { icon: '\ud83d\udd10', title: 'Access Control', desc: 'Tag-based membership, email-domain scoping, area permissions, OIDC/SSO, and direct grants.', span: '', accent: 'border-t-bawes-orange' },
  { icon: '\ud83c\udfad', title: 'Avatar & Identity', desc: 'Set-based catalog. Subscription fashion clubs, time-limited drops, NPC-only sets, branded domain scoping.', span: '', accent: 'border-t-purple-400' },
  { icon: '\ud83d\uded2', title: 'Commerce & Integrations', desc: 'Shopify connector, Plugn integration, booking systems, Discord + Matrix bridge, StudentHub career flows.', span: 'md:col-span-2', accent: 'border-t-bawes-red' },
]

// ─── USE CASES ─────────────────────────────────────────────────────────────────
const useCases = [
  {
    icon: '\ud83c\udf93',
    title: 'University Career Hub',
    who: 'For universities & student unions',
    desc: 'A spatial world where students browse jobs, attend career fairs, meet employers, and book mentorship sessions — all in one place.',
    tags: ['Jobs & Internships', 'Career Events', 'Mentorship'],
    color: 'from-cyan-500/10 to-blue-600/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
  },
  {
    icon: '\ud83c\udfe2',
    title: 'Corporate HQ World',
    who: 'For companies & employers',
    desc: 'Brand your own virtual HQ. Host recruiting events, onboarding sessions, and team spaces with role-gated rooms and AI reception bots.',
    tags: ['Recruiting', 'Onboarding', 'Team Rooms'],
    color: 'from-bawes-gold/10 to-bawes-orange/10',
    border: 'border-bawes-gold/20',
    text: 'text-bawes-gold',
  },
  {
    icon: '\ud83c\udfe6',
    title: 'Government Service Center',
    who: 'For public sector & ministries',
    desc: 'Digitize citizen services — visa inquiries, public information desks, licensed service booths — with AI-staffed rooms and gated access.',
    tags: ['Citizen Services', 'Audit Logs', 'Gated Access'],
    color: 'from-green-500/10 to-teal-600/10',
    border: 'border-green-500/20',
    text: 'text-green-400',
  },
  {
    icon: '\ud83d\uded2',
    title: 'Marketplace World',
    who: 'For service platforms & marketplaces',
    desc: 'Let vendors set up virtual booths inside a shared spatial market. Shopify products, booking flows, and Plugn providers under one roof.',
    tags: ['Shopify', 'Plugn', 'Booking'],
    color: 'from-bawes-red/10 to-bawes-orange/10',
    border: 'border-bawes-red/20',
    text: 'text-bawes-red',
  },
]

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bawes-gold/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bawes-red/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

            {/* Left copy */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/12 bg-white/5 text-white/60 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-bawes-gold" />
                Open Source · Kuwait-built · Spatial Platform
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] mb-6 tracking-tight">
                <span className="text-white">The spatial platform</span>
                <br />
                <span className="bawes-gradient-text">for your community.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/55 max-w-xl mb-10 leading-relaxed">
                Launch a fully branded interactive world on your own domain. Real-time presence, AI characters with memory, role-gated spaces, and a complete operator admin — no engineering required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <a
                  href="https://universe.bawes.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-7 py-3.5 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white transition-opacity hover:opacity-90"
                >
                  Enter StudentHub Universe
                </a>
                <Button href="/contact" variant="secondary" size="lg">
                  Build your Universe
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/35">
                <span>\u2713 Free for students</span>
                <span>\u2713 Custom domain</span>
                <span>\u2713 AI-powered bots</span>
                <span>\u2713 Open source</span>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-bawes-gold/8 via-transparent to-cyan-500/8 rounded-3xl blur-2xl" />
              <Image
                src="/images/enter-univ.png"
                alt="StudentHub Universe — a live spatial world built on BAWES Universe"
                width={600}
                height={600}
                className="relative w-full h-auto object-contain rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ WHAT IT IS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* Light section — Slack-style contrast break */}
      <section className="bg-[#f8f7f4] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-bawes-brown text-sm font-semibold uppercase tracking-widest mb-4">What is Universe?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                A spatial world platform your organization actually owns.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Universe is an open-source platform for building interactive spatial worlds — think of it as a virtual space where your members walk around, talk to each other, interact with AI characters, and access services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                It\'s built on top of WorkAdventure, extended with a full operator admin (Orbit), AI bot infrastructure, avatar management, access control, and commerce integrations. You point your domain. You own the world.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Real-time presence', 'Spatial audio/video', 'AI characters', 'Your domain', 'Open source'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-gray-900/8 text-gray-700 text-sm font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                { icon: '\ud83c\udfe2', title: 'For organizations', desc: 'Universities, companies, governments, and communities launch branded worlds in minutes.' },
                { icon: '\ud83d\udc65', title: 'For communities', desc: 'Members arrive as avatars, explore spaces, join events, and connect in real time.' },
                { icon: '\ud83e\udd16', title: 'AI-first by design', desc: 'Every world can have AI characters with memory, emotion, and persona — not just chatbots.' },
                { icon: '\ud83d\udd13', title: 'Governed and gated', desc: 'Full access control: open public areas, protected inner rooms, membership tags, SSO.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ AI FEATURES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-bawes-orange text-sm font-semibold uppercase tracking-widest mb-4">AI Infrastructure</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug max-w-xl">
                Not chatbots.
                <span className="bawes-gradient-text"> Characters.</span>
              </h2>
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                Universe\'s AI system is designed for spatial worlds — characters with persistent memory, visual emotion, and offline-capable local LLMs.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {aiFeatures.map((f, i) => (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-7 border ${f.border} ${f.bg} hover:bg-white/5 transition-colors`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{f.icon}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${f.accent}`}>{f.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{f.headline}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{f.body}</p>
                <div className="flex flex-wrap gap-2">
                  {f.pills.map(p => (
                    <span key={p} className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-white/60 text-xs font-medium">{p}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-2xl border border-white/8 bg-white/3 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          >
            <div>
              <p className="text-white font-semibold mb-1">Bot config lives in Orbit, your operator dashboard.</p>
              <p className="text-white/45 text-sm">Set bot name, persona, LLM model, memory settings, and avatar assignment — no code, no deploys.</p>
            </div>
            <Link href="/ai-bots" className="text-bawes-gold text-sm font-semibold whitespace-nowrap hover:underline shrink-0">
              Deep dive into AI Bots \u2192
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ━━━ USE CASES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#f8f7f4] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-bawes-brown text-sm font-semibold uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What you can build with Universe.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-7 bg-gradient-to-br ${u.color} border ${u.border}`}
              >
                <span className="text-3xl block mb-4">{u.icon}</span>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${u.text}`}>{u.who}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{u.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{u.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {u.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-gray-900/8 text-gray-700 text-xs font-medium">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/use-cases" className="text-bawes-brown font-semibold text-sm hover:underline">
              See all use cases \u2192
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ PLATFORM BENTO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-bawes-orange text-sm font-semibold uppercase tracking-widest mb-4">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Six pillars. One platform.</h2>
            <p className="text-white/45 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Each pillar is a complete system. Together they make Universe the most capable spatial platform available.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {bento.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`${
                  b.span
                } rounded-2xl p-7 bg-white/5 border border-white/8 border-t-2 ${b.accent} hover:bg-white/8 transition-colors`}
              >
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/platform" className="text-bawes-gold text-sm font-semibold hover:underline">
              Explore the full platform \u2192
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ LIVE WORLDS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#f8f7f4] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-bawes-brown text-sm font-semibold uppercase tracking-widest mb-4">Live today</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Worlds running on Universe.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* StudentHub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/8 to-blue-600/8"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-500 text-xs font-bold uppercase tracking-widest">Live</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">StudentHub Kuwait</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Kuwait\'s first spatial career platform. Students build profiles, browse jobs, attend career events, and meet employers — all inside a spatial world.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Jobs & Internships', 'Career Events', 'Mentorship', 'Community'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-gray-900/8 text-gray-700 text-xs font-medium">{t}</span>
                  ))}
                </div>
                <a
                  href="https://universe.bawes.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-semibold hover:underline"
                >
                  Enter StudentHub Universe \u2192
                </a>
              </div>
            </motion.div>

            {/* BAWES HQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-bawes-gold/20 bg-gradient-to-br from-bawes-gold/8 to-bawes-orange/8"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-bawes-gold animate-pulse" />
                  <span className="text-bawes-gold text-xs font-bold uppercase tracking-widest">Live</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">BAWES HQ</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  The open community world for BAWES. Join the community, meet the team, explore what Universe can do, and connect with contributors and partners.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Open Community', 'Meet the Team', 'Contributors'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-gray-900/8 text-gray-700 text-xs font-medium">{t}</span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-bawes-brown text-sm font-semibold hover:underline"
                >
                  Get access \u2192
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Launch your own CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 rounded-2xl p-8 border border-dashed border-gray-300 bg-white text-center"
          >
            <p className="text-2xl mb-3">\ud83c\udf10</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Launch your Universe</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Any organization can launch a branded world on their own domain. We handle setup; you own the world.
            </p>
            <Button href="/contact" size="lg">Talk to us about launching</Button>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CUSTOM DOMAIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-4">Custom Domains</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                Your world.
                <span className="bawes-gradient-text"> Your URL.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Point any domain to Universe and it loads your fully branded world. No BAWES branding. No shared platform. Just your organization\'s space at your address.
              </p>
              <Button href="/contact">Launch your Universe \u2192</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              {[
                { domain: 'universe.bawes.net', label: 'StudentHub Universe', active: true },
                { domain: 'careers.yourcompany.com', label: 'Your corporate world', active: false },
                { domain: 'hub.youruniversity.edu', label: 'Your university hub', active: false },
                { domain: 'services.gov.kw', label: 'Your government portal', active: false },
              ].map(({ domain, label, active }) => (
                <div
                  key={domain}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${
                    active ? 'border-bawes-gold/30 bg-bawes-gold/8' : 'border-white/8 bg-white/4'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                    active ? 'bg-green-400 animate-pulse' : 'bg-white/20'
                  }`} />
                  <code className={`font-mono text-sm font-medium ${
                    active ? 'text-bawes-gold' : 'text-white/50'
                  }`}>{domain}</code>
                  <span className={`text-xs ml-auto ${
                    active ? 'text-white/60' : 'text-white/25'
                  }`}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━ OPEN SOURCE / FINAL CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#f8f7f4] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-bawes-brown text-sm font-semibold uppercase tracking-widest mb-6">Built by BAWES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A social-impact organization
              <br />
              building in public.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
              BAWES is a non-profit organization focused on community, education, and technology in Kuwait. Universe is fully open-source — self-host it, fork it, or let us run it. The code is public and the community is open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://universe.bawes.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-7 py-3.5 bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white hover:opacity-90 transition-opacity"
              >
                Enter the Universe
              </a>
              <Button href="/contact" variant="secondary" size="lg">Get in touch</Button>
              <a
                href="https://github.com/BAWES-Universe/workadventure-universe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-7 py-3.5 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors bg-white"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
