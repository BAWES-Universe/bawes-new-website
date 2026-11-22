'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function WokaAvatarsPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Avatars"
        title={<>Pixel art. <span className="text-gradient-accent">Infinite personalities.</span></>}
        lead={<>Pick a colourful pixel-art avatar, change its look whenever you like, and take it with you into every world.</>}
        detail={[
          <>Pipoya-style user avatars — colorful, expressive pixel art characters. Customize your look and express yourself in every world.</>,
        ]}
        scene="looks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_woka_avatars"
      />

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

      <PageClosing
        title={<>Ready to enter the Universe?</>}
        body={<>Your adventure starts with your avatar.</>}
        links={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_woka_avatars"
      />
    </main>
  );
}
