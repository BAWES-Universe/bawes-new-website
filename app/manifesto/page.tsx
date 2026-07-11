'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ManifestoPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative max-w-container-max mx-auto px-gutter mb-section-padding-v text-center">
        <h1 className="font-display-hero text-display-hero md:text-display-hero text-display-hero-mobile font-bold tracking-tight mb-12">
          The BAWES Universe Manifesto
        </h1>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="font-headline-section text-headline-section md:text-headline-section text-headline-section leading-tight text-on-background/90">
            We are not building an app. We are building a universe. A people-first environment designed to help ideas turn into action, faster, smarter, and with less friction.
          </p>
        </div>
        <div className="glass-card p-10 rounded-2xl max-w-2xl mx-auto border-purple inline-block">
          <p className="font-headline-card text-headline-card italic text-primary">
            &ldquo;We don&apos;t just support execution. We are execution.&rdquo;
          </p>
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
