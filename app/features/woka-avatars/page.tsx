'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function WokaAvatarsPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="max-w-container-max mx-auto px-gutter pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/build" className="hover:text-primary transition-colors">Build & Create</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Woka Avatars</span>
        </div>
      </div>
      {/* Hero Section */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v relative overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-caption font-label-navigation text-on-surface-variant">V2.0 Avatar Engine Live</span>
            </div>
            <h1 className="font-display-hero text-display-hero mb-6 text-on-surface">
              Pixel Art. <br />
              <span className="text-gradient">Infinite Personalities.</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 max-w-lg">
              Pipoya-style user avatars — colorful, expressive pixel art characters. Customize your look and express yourself in every world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full primary-gradient text-white font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
                Launch Avatar Manager
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-4 rounded-full glass-card text-on-surface font-bold transition-all active:scale-95">
                View Documentation
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="glass-card p-4 rounded-3xl relative overflow-hidden aspect-[1.79/1]">
              <div className="absolute inset-0 bg-gradient-to-t from-background-page/80 via-transparent to-transparent z-10"></div>
              <div className="w-full h-full rounded-2xl bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-7xl text-primary/30" style={{ fontVariationSettings: "'FILL' 1" }}>face</span>
              </div>
              <div className="absolute top-8 left-8 glass-card p-3 rounded-xl z-20 flex items-center gap-3 border-purple">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-border-purple">
                  <span className="material-symbols-outlined text-primary text-xl">person</span>
                </div>
                <div>
                  <p className="text-caption font-bold">Zenith_Pixel</p>
                  <p className="text-[10px] text-primary">Active in Plaza</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 glass-card p-4 rounded-xl z-20 max-w-[200px] border-purple">
                <p className="text-caption italic leading-tight text-on-surface-variant">&ldquo;The level of detail in this pixel world is insane! I love how my avatar looks here.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-4">Expressive by Design</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Built on the legacy of Pipoya aesthetic, our avatars offer unmatched charm and technical versatility.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-8 rounded-2xl group transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Pipoya Style</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Classic pixel art aesthetic with high-vibrancy and charm. We stay true to the golden era of 2D RPG visuals while adding modern effects.</p>
          </div>
          <div className="glass-card p-8 rounded-2xl group transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-tertiary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Customization</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Deep control over hair, clothes, and accessories to make your character unique. Thousands of combinations at your fingertips.</p>
          </div>
          <div className="glass-card p-8 rounded-2xl group transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Multi-World</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Your avatar is persistent; it follows you through every universe and world you visit. Maintain your identity wherever you go.</p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v bg-surface-container-lowest rounded-3xl my-10 border border-divider">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="material-symbols-outlined text-primary mb-2 text-3xl">groups</span>
            <p className="font-headline-section text-headline-section text-on-surface">500k+</p>
            <p className="font-label-navigation text-label-navigation text-text-low-emphasis">Active Avatars</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-secondary mb-2 text-3xl">shopping_bag</span>
            <p className="font-headline-section text-headline-section text-on-surface">12k+</p>
            <p className="font-label-navigation text-label-navigation text-text-low-emphasis">Unique Items</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-tertiary mb-2 text-3xl">public</span>
            <p className="font-headline-section text-headline-section text-on-surface">45+</p>
            <p className="font-label-navigation text-label-navigation text-text-low-emphasis">Connected Worlds</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-error mb-2 text-3xl">bolt</span>
            <p className="font-headline-section text-headline-section text-on-surface">2.4ms</p>
            <p className="font-label-navigation text-label-navigation text-text-low-emphasis">Sync Latency</p>
          </div>
        </div>
      </Section>

      {/* Related Features */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Beyond the Avatar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/features/avatar-platform" className="relative rounded-3xl overflow-hidden glass-card h-80 group cursor-pointer border-purple">
            <div className="absolute inset-0 bg-surface-container-high transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/30">dashboard</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h4 className="font-headline-card text-headline-card text-on-surface mb-2">Avatar Platform</h4>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">Explore the underlying infrastructure that powers our cross-world identity system.</p>
              <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                Learn More <span className="material-symbols-outlined">trending_flat</span>
              </span>
            </div>
          </Link>
          <Link href="/features/proximity-chat" className="relative rounded-3xl overflow-hidden glass-card h-80 group cursor-pointer border-purple">
            <div className="absolute inset-0 bg-surface-container-high transition-transform duration-700 group-hover:scale-110 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-secondary/30">spatial_audio</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h4 className="font-headline-card text-headline-card text-on-surface mb-2">Proximity Chat</h4>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">Communicate naturally with spatial audio and real-time social gestures.</p>
              <span className="inline-flex items-center gap-2 text-secondary font-bold group-hover:translate-x-2 transition-transform">
                Learn More <span className="material-symbols-outlined">trending_flat</span>
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="primary-gradient rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="font-display-hero text-display-hero text-white mb-6">Ready to enter the Universe?</h2>
            <p className="font-body-md text-body-md text-white/80 max-w-xl mx-auto mb-10">Join thousands of players and creators building the future of digital identity. Your adventure starts with your avatar.</p>
            <button className="bg-white text-[#6d3bd7] px-12 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl active:scale-95">
              Create Your Character
            </button>
          </div>
        </div>
      </Section>
    </main>
  );
}
