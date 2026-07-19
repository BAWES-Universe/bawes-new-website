'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
export default function ManifestoPageContent() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  })

  return (
    <main className="pt-32">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Manifesto</span>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-20 overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text side */}
          <div className="flex-1 max-w-[600px]">
            <motion.h1
              {...fadeUp(0.05)}
              className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] font-bold text-white mb-8 tracking-[-0.03em]"
            >
              The BAWES Universe<br />
              <span
                className="bg-[length:200%_200%] animate-shimmer bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)' }}
              >
                Manifesto
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="text-lg md:text-xl text-text-muted leading-relaxed mb-10"
            >
              We are not building an app. We are building a universe. A people-first environment designed to help ideas turn into action, faster, smarter, and with less friction.
            </motion.p>

            <motion.div
              {...fadeUp(0.15)}
              className="glass-card p-6 md:p-8 rounded-2xl border border-purple-500/20 inline-block"
            >
              <p className="text-lg md:text-xl italic text-purple-300 font-medium leading-relaxed">
                &ldquo;We don&rsquo;t just support execution. We are execution.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Visual side — floating emblems */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex-1 w-full max-w-[500px]"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(20,16,40,0.6)] to-[rgba(10,8,20,0.8)] border border-white/10">
              {/* Mini grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M80 66 C120 120, 180 80, 220 50" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                  <animate attributeName="stroke-dashoffset" from="0" to="100" dur="8s" repeatCount="indefinite" />
                </path>
                <path d="M320 105 C270 150, 200 160, 150 140" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                  <animate attributeName="stroke-dashoffset" from="0" to="100" dur="6s" repeatCount="indefinite" />
                </path>
                <path d="M120 210 C160 180, 200 190, 240 170" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="3 3" fill="none">
                  <animate attributeName="stroke-dashoffset" from="0" to="100" dur="10s" repeatCount="indefinite" />
                </path>
              </svg>
              {/* Floating orbs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-purple-300/60">public</span>
                  {/* Orbiting dots */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-amber-400/30 border border-amber-400/40" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-blue-400/30 border border-blue-400/40" />
                  <div className="absolute top-1/2 -right-8 w-3 h-3 rounded-full bg-purple-400/30 border border-purple-400/40" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="mb-16">
          <h2 className="font-headline-section text-headline-section mb-4">Core Principles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Open by Default</h3>
            <p className="text-text-secondary">Universes are interoperable and accessible. We build in the open, not behind walls.</p>
          </div>
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Spatial, Not Hierarchical</h3>
            <p className="text-text-secondary">Presence and context shape experience. Navigation is orientation, not control.</p>
          </div>
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Tool-Agnostic</h3>
            <p className="text-text-secondary">We don&apos;t lock you in. Connect what works. Build what you need.</p>
          </div>
          <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 mb-6">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Execution Over Promise</h3>
            <p className="text-text-secondary">Real work, real systems, real progress. We build, not just plan.</p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="glass-card p-12 rounded-3xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="font-headline-section text-headline-section mb-6">Who we are</h2>
              <div className="space-y-6 text-text-secondary font-body-md text-lg leading-relaxed">
                <p>BAWES was founded by <span className="text-on-surface font-bold">Khalid Almutawa</span>. We build and operate shared digital environments — universes, worlds, and rooms — where people work, learn, trade, and collaborate in real time.</p>
                <p>Universe is a fork of <span className="text-secondary">WorkAdventure</span> by TheCodingMachine, extended with AI agents, MCP integration, and spatial presence features to create a truly connected digital frontier.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border-purple shadow-2xl rotate-3 bg-surface-container-high flex items-center justify-center aspect-video">
              <span className="material-symbols-outlined text-6xl text-primary/30">public</span>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v text-center">
        <div className="py-20 px-10 glass-card rounded-[40px] border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="font-headline-section text-headline-section mb-6">There&apos;s always a seat at the table</h2>
          <p className="font-body-md text-body-md max-w-2xl mx-auto text-text-secondary mb-12">
            The Empty Seat is an open invitation. Contribute, collaborate, or just be part of the community. The seat exists, but no one rules forever.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-10 py-4 rounded-full font-headline-card hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto w-fit">
            Join the conversation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
