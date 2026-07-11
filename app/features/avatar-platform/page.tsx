'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AvatarPlatformPage() {
  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">Avatar Infrastructure</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Identity <span className="text-gradient">Across Worlds.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-lg">
            The Avatar Platform powers cross-world identity. Your character, your items, your presence — persistent across every universe you visit.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-gradient-to-r from-accent-purple to-accent-amber text-white px-8 py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all flex items-center gap-2">
              Launch Avatar Platform
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="glass-card text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all inline-block">
              View Documentation
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="glass-card rounded-2xl p-4 overflow-hidden border-purple/30">
            <div className="aspect-video rounded-xl bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">Platform Capabilities</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">The infrastructure layer that connects identity across the entire BAWES ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">badge</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Cross-World Identity</h3>
              <p className="text-text-secondary">Your avatar, items, and settings persist across every universe. One identity for the entire BAWES ecosystem.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">sync</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Real-Time Sync</h3>
              <p className="text-text-secondary">Sub-10ms state synchronization ensures your avatar position and appearance updates instantly across all connected worlds.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">extension</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Extensible System</h3>
              <p className="text-text-secondary">Integrate with external avatar systems or build custom rendering pipelines. The platform is designed for maximum flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Related Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/woka-avatars" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">face</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">Woka Avatars</h3>
            <p className="text-text-secondary text-sm">Pixel art avatar system with deep customization options and Pipoya aesthetics.</p>
          </Link>
          <Link href="/features/proximity-chat" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">spatial_audio</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">Proximity Chat</h3>
            <p className="text-text-secondary text-sm">Spatial audio that brings your avatar to life with natural voice presence.</p>
          </Link>
          <Link href="/build" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">build</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">Build & Create</h3>
            <p className="text-text-secondary text-sm">Design worlds and place objects with our full creation toolkit.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
