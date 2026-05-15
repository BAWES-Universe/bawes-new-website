'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import Button from '@/components/ui/Button'

// ---------- DATA ----------

const audiences = [
  {
    id: 'students',
    label: '🎓 Students',
    headline: 'Your career starts here.',
    sub: 'Join the Universe, build your profile, connect with top companies, and unlock jobs, internships, events, and mentors — all in one space.',
    cta: { label: 'Enter the Universe →', href: 'https://universe.bawes.net' },
    pills: ['100% Free', 'Jobs & Internships', 'Mentorship', 'Workshops', 'Community'],
  },
  {
    id: 'employers',
    label: '🏢 Employers',
    headline: 'Hire the talent shaping tomorrow.',
    sub: 'Access a verified pool of motivated students. Post opportunities, engage your brand on campus, and find your next hire — fast.',
    cta: { label: 'Post a Job →', href: '/contact' },
    pills: ['< 30 min hire time', 'Targeted reach', 'Brand visibility', 'Event sponsorship'],
  },
  {
    id: 'organizations',
    label: '🌍 Organizations',
    headline: 'Launch your own Universe.',
    sub: 'Any organization — university, association, community — can spin up a fully branded spatial world on their own domain. No engineering required.',
    cta: { label: 'Build your Universe →', href: '/contact' },
    pills: ['Custom domain', 'Branded avatars', 'AI bots', 'Access control', 'Admin panel'],
  },
  {
    id: 'governments',
    label: '🏦 Governments',
    headline: 'A digital public presence — reimagined.',
    sub: 'Run visa centers, citizen services, or government career hubs as spatial worlds. Gated access, full audit logs, and complete control over who enters.',
    cta: { label: 'Talk to us →', href: '/contact' },
    pills: ['Gated access', 'Audit logs', 'Self-hosted option', 'Custom domain', 'Compliant'],
  },
]

const features = [
  { icon: '🤖', label: 'AI Bots', desc: 'Conversational characters that live inside your world' },
  { icon: '🎭', label: 'Avatar System', desc: 'Branded identities, role-gated and scoped per world' },
  { icon: '🔐', label: 'Access Control', desc: 'Open spaces with protected cores, membership tags' },
  { icon: '🌐', label: 'Custom Domains', desc: 'studenthub.com.kw or visas.gov.kw — your world, your URL' },
  { icon: '💬', label: 'Discord Bridge', desc: 'Sync your community chat with in-world presence' },
  { icon: '🛒', label: 'Commerce', desc: 'Shopify, booking systems, and custom integrations' },
  { icon: '🛸', label: 'Orbit Admin', desc: 'Full dashboard — maps, members, bots, analytics' },
  { icon: '💻', label: 'Open Source', desc: 'Self-host, fork, extend — or let us run it for you' },
]

const steps = [
  { num: '01', icon: '🗺️', label: 'Design your world', desc: 'Pick a template or build a custom map.' },
  { num: '02', icon: '🛸', label: 'Configure in Orbit', desc: 'Set access, avatars, bots, and rooms.' },
  { num: '03', icon: '🤖', label: 'Add AI characters', desc: 'Give each bot a name, memory, and persona.' },
  { num: '04', icon: '🚀', label: 'Go live', desc: 'Share your URL. Players arrive in seconds.' },
]

const liveUniverses = [
  { name: 'StudentHub Kuwait', tag: 'Career & Networking', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', dot: 'bg-cyan-400' },
  { name: 'BAWES HQ', tag: 'Open Community', color: 'from-bawes-gold/20 to-bawes-orange/20', border: 'border-bawes-gold/30', dot: 'bg-bawes-gold' },
  { name: 'Your Universe', tag: 'Coming soon — could be yours', color: 'from-white/5 to-white/5', border: 'border-white/10 border-dashed', dot: 'bg-white/20' },
]

const stats = [
  { value: '90K+', label: 'Students in the Universe' },
  { value: '600+', label: 'Companies hiring' },
  { value: '32K+', label: 'Discord members' },
  { value: '< 30 min', label: 'Average hire time' },
]

// ---------- COMPONENTS ----------

function AudienceTab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        active
          ? 'bg-white text-black'
          : 'text-white/50 hover:text-white/80'
      }`}
    >
      {label}
    </button>
  )
}

// ---------- PAGE ----------

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)
  const current = audiences[activeTab]

  return (
    <div className="overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(15,25,40,0.9),transparent)]" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-bawes-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-bawes-gold/30 bg-bawes-gold/10 text-bawes-gold text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-bawes-gold animate-pulse" />
                Live Now — Enter the Universe
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                <span className="text-white">Build your</span>
                <br />
                <span className="bawes-gradient-text">own Universe.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
                A spatial platform where anyone — students, employers, governments, and communities — can launch a live digital world on their own domain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.a
                  href="https://universe.bawes.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 font-bold rounded-xl px-8 py-4 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white shadow-lg hover:shadow-bawes-gold/20 transition-shadow"
                >
                  🎮 Enter the Universe
                </motion.a>
                <Button href="/contact" variant="secondary" size="lg">
                  Build your own →
                </Button>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2">
                {['100% Free for Students', '🇰🇼 Kuwait Focused', 'Open Source', 'Community Driven'].map((p) => (
                  <span key={p} className="px-3 py-1.5 rounded-full glass text-white/60 text-xs font-medium">{p}</span>
                ))}
              </div>
            </motion.div>

            {/* Right — pixel art hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-bawes-gold/10 to-bawes-red/10 rounded-3xl blur-2xl" />
                <Image
                  src="/images/enter-univ.png"
                  alt="StudentHub Universe — a live spatial world"
                  width={700}
                  height={700}
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Floating stat pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 glass-card rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-white font-bold text-sm">90,247 students</p>
                  <p className="text-white/40 text-xs">inside right now</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <div className="border-y border-white/8 bg-white/2">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold bawes-gradient-text">{s.value}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── WHO IS THIS FOR (audience tabs) ─── */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-15" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-bawes-orange text-sm font-semibold uppercase tracking-widest mb-3">Who it&apos;s for</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">One platform. Every world.</h2>
          </motion.div>

          {/* Tab bar */}
          <div className="flex gap-2 justify-center flex-wrap mb-8 p-1 rounded-full glass-card max-w-max mx-auto">
            {audiences.map((a, i) => (
              <AudienceTab key={a.id} active={i === activeTab} onClick={() => setActiveTab(i)} label={a.label} />
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange rounded-t-3xl" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{current.headline}</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{current.sub}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {current.pills.map((p) => (
                  <span key={p} className="px-4 py-1.5 rounded-full glass border border-white/10 text-white/70 text-sm">{p}</span>
                ))}
              </div>
              <motion.a
                href={current.cta.href}
                target={current.cta.href.startsWith('http') ? '_blank' : undefined}
                rel={current.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 font-bold rounded-xl px-8 py-4 text-base bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white"
              >
                {current.cta.label}
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* ─── LIVE UNIVERSES ─── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-3">Already running</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Real universes. Real people. Right now.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {liveUniverses.map((u, i) => (
              <motion.div
                key={u.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${u.color} border ${u.border} overflow-hidden`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${u.dot} ${i < 2 ? 'animate-pulse' : ''}`} />
                  <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">{i < 2 ? 'Live' : 'Coming soon'}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{u.name}</h3>
                <p className="text-white/50 text-sm">{u.tag}</p>
                {i === 2 && (
                  <Link href="/contact" className="mt-4 inline-block text-bawes-gold text-sm font-medium hover:underline">
                    Apply to launch →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── HOW IT WORKS ─── */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-bawes-gold/5 to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-bawes-red text-sm font-semibold uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Up and running in minutes.</h2>
          </motion.div>

          <div className="relative grid md:grid-cols-4 gap-6">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-bawes-gold/30 to-transparent" />

            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 rounded-2xl glass-card border border-bawes-gold/20 flex items-center justify-center text-3xl mb-5">
                  {s.icon}
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-gradient-to-br from-bawes-gold to-bawes-orange text-black text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-2">{s.label}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── FEATURES GRID ─── */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-15" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-bawes-orange text-sm font-semibold uppercase tracking-widest mb-3">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Everything you need. Nothing you don&apos;t.</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-5 hover:border-bawes-gold/30 transition-colors group"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <p className="text-white font-semibold text-sm mb-1 group-hover:text-bawes-gold transition-colors">{f.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CUSTOM DOMAIN CALLOUT ─── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange" />
            <div className="absolute inset-0 bg-gradient-to-br from-bawes-gold/5 via-transparent to-bawes-red/5" />
            <div className="relative z-10">
              <div className="text-5xl mb-6">🌐</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Point your domain.
                <br />
                <span className="bawes-gradient-text">Own your Universe.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
                Any organization can hook their domain to load their own fully branded Universe. No shared platform branding. No custom engineering. Just your world, at your URL.
              </p>

              {/* Domain examples */}
              <div className="flex flex-col gap-3 mb-10 max-w-lg">
                {[
                  { domain: 'studenthub.com.kw', label: 'StudentHub Kuwait', color: 'text-cyan-400' },
                  { domain: 'careers.acme.com', label: 'ACME Corporate Hub', color: 'text-bawes-gold' },
                  { domain: 'visas.gov.kw', label: 'Visa Services Center', color: 'text-green-400' },
                  { domain: 'yourname.com', label: 'Your Universe →', color: 'text-bawes-orange' },
                ].map(({ domain, label, color }, i) => (
                  <motion.div
                    key={domain}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 py-3 border-b border-white/8 last:border-0"
                  >
                    <code className={`font-mono text-sm font-bold ${color}`}>{domain}</code>
                    <span className="text-white/30 text-sm">—</span>
                    <span className="text-white/60 text-sm">{label}</span>
                  </motion.div>
                ))}
              </div>

              <Button href="/contact" size="lg">
                Launch your Universe →
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── OPEN SOURCE STRIP ─── */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 glass-card rounded-3xl p-8 md:p-12">
            <div className="max-w-xl">
              <p className="text-bawes-gold text-sm font-semibold uppercase tracking-widest mb-3">Open Source</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built in public.
                <span className="bawes-gradient-text"> For everyone.</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                BAWES is a social-impact organization. Universe is fully open-source — self-host it, fork it, extend it, or let us run it for you. The code is public. The community is open.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <motion.a
                href="https://universe.bawes.net"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 font-bold rounded-xl px-8 py-4 bg-gradient-to-r from-bawes-gold via-bawes-red to-bawes-orange text-white"
              >
                🎮 Enter the Universe
              </motion.a>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to us →
              </Button>
            </div>
          </div>
        </div>
      </Section>

    </div>
  )
}
