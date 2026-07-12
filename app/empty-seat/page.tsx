'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function EmptySeatPage() {
  return (
    <main>
      {/* Hero Section */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="About" className="hover:text-primary transition-colors">/about</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">The Empty Seat</span>
        </div>
      </div>
            <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 glass-card rounded-full font-label-navigation text-label-navigation text-primary">
              Core Philosophy
            </span>
            <h1 className="font-display-hero text-display-hero md:text-display-hero text-on-surface mb-8">
              The Empty <br /><span className="text-gradient">Seat</span>
            </h1>
            <p className="font-headline-section text-headline-section font-bold text-on-surface-variant leading-tight">
              No one owns the throne. No one rules forever. Power is borrowed, not held.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-full aspect-square glass-card rounded-3xl flex items-center justify-center p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <span className="material-symbols-outlined text-8xl text-primary/20" style={{ fontVariationSettings: "'FILL' 1" }}>weekend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-section-padding-v border-t border-divider">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="max-w-3xl">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-xl">
              The Empty Seat is a structural decision that protects continuity, creativity, and execution without ego. Leadership is functional, not symbolic. In traditional organizations, leadership positions become permanent fixtures.
              <br /><br />
              The person in the seat becomes the seat itself. The Empty Seat principle means that leadership roles are temporary, contextual, and transferable. The seat exists, but no one person owns it permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Three Implications Section */}
      <section className="py-section-padding-v bg-surface-container-lowest relative">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-16 text-center">Core Implications</h2>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-shadow">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Functional Authority</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Leadership emerges from capability and context, not from titles or tenure. Authority is specific to the task at hand.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-secondary shadow-[0_0_15px_rgba(173,198,255,0.3)] group-hover:shadow-[0_0_25px_rgba(173,198,255,0.5)] transition-shadow">
                <span className="material-symbols-outlined">sync_alt</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Natural Rotation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">As needs change, different people step into leadership roles without friction or power struggles. The flow is organic.</p>
            </div>
            <div className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 text-primary-container shadow-[0_0_15px_rgba(160,120,255,0.3)] group-hover:shadow-[0_0_25px_rgba(160,120,255,0.5)] transition-shadow">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Reduced Friction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Decisions flow from what needs to happen, not from who has the authority to decide. Efficiency through collective intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="glass-card p-12 md:p-20 rounded-3xl text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-section text-headline-section text-on-surface mb-6">There&apos;s always a seat at the table</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-10 text-lg">
                The Empty Seat is not just a principle — it&apos;s a literal empty chair in Universe. An open invitation to anyone who wants to contribute, collaborate, or join the community.
              </p>
              <Link href="/manifesto" className="inline-block border border-on-surface/30 hover:border-on-surface/60 px-8 py-3.5 rounded-full font-label-navigation text-label-navigation transition-all hover:scale-105">
                Learn more about our approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
