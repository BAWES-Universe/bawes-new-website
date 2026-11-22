'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function AvatarPlatformPageContent() {
  return (
    <main className="relative pt-20">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Avatar Platform"
        eyebrow="Avatar infrastructure"
        title={<>Identity <span className="text-gradient-accent">across worlds</span></>}
        lead={<>Your character goes with you: the same look and the same you in every universe you visit.</>}
        detail={[
          <>The Avatar Platform powers cross-world identity. Your character, your items, your presence — persistent across every universe you visit.</>,
        ]}
        scene="looks"
        actions={[{ label: 'Talk to us', href: '/contact' }, { label: 'View documentation', href: 'https://github.com/BAWES-Universe' }]}
        source="page_features_avatar_platform"
      />

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
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">Avatars</h3>
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
      <PageClosing
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Talk to us', href: '/contact' }]}
        source="page_features_avatar_platform"
      />
    </main>
  );
}
