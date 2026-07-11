'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WorkAdventureForkPage() {
  return (
    <main className="relative pt-20">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center min-h-[700px]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="material-symbols-outlined text-sm text-primary">fork_left</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">Built on MIT Open Source</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Standing on <span className="text-gradient">Giant Shoulders.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-xl">
            BAWES Universe is a fork of WorkAdventure (MIT), the pioneering open-source spatial platform. We extend their foundation with new features while maintaining upstream compatibility and contributing back.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-8 py-4 rounded-full font-bold neon-glow-purple active:scale-95 transition-all flex items-center gap-2">
              View on GitHub
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="glass-card text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
              WorkAdventure Project
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all"></div>
          <div className="relative glass-card rounded-2xl p-4 overflow-hidden border-white/10">
            <div className="aspect-video rounded-xl bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">account_tree</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">Our Fork Philosophy</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">We believe in open source. BAWES extends WorkAdventure, maintains compatibility, and actively gives back to the community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Built on WorkAdventure</h3>
              <p className="text-text-secondary">BAWES is a fork of the open-source WorkAdventure project. We extend the foundation with new features while maintaining upstream compatibility.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">auto_awesome</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Extended Feature Set</h3>
              <p className="text-text-secondary">Adds AI-powered bots, advanced scripting, enhanced communication tools, and a richer map ecosystem beyond what WorkAdventure provides out of the box.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">sync</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Upstream Alignment</h3>
              <p className="text-text-secondary">We actively track upstream WorkAdventure releases and merge compatible changes. The fork stays aligned while adding BAWES-specific innovations.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">diversity_3</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Community-Driven Evolution</h3>
              <p className="text-text-secondary">The fork direction is shaped by community needs. Feature requests and contributions from WorkAdventure users inspire our development priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Related</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/about" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">groups</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">About Us</h3>
            <p className="text-text-secondary text-sm">Learn more about the team and vision behind BAWES Universe.</p>
          </Link>
          <Link href="/features/self-hosting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">dns</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">Self-Hosting</h3>
            <p className="text-text-secondary text-sm">Deploy the BAWES stack on your own infrastructure for full control.</p>
          </Link>
          <Link href="/features/white-label" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">palette</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">White Label</h3>
            <p className="text-text-secondary text-sm">Rebrand the entire experience with custom domains and logos.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-6">Contribute to the fork</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">BAWES Universe is MIT-licensed open source. Browse our repositories, submit issues, and contribute to the future of spatial computing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white px-10 py-4 rounded-full font-bold neon-glow-purple active:scale-95 transition-all">Explore Repositories</button>
            <button className="glass-card text-on-surface px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all">Read Contributing Guide</button>
          </div>
        </div>
      </section>
    </main>
  );
}
