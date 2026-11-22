'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function WorkAdventureForkPageContent() {
  return (
    <main className="relative pt-20">
      <PageHero
        crumbs={[{ label: 'Developers', href: '/developers' }]}
        here="WorkAdventure Fork"
        eyebrow="Built on open source"
        title={<>Standing on <span className="text-gradient-accent">giant shoulders</span></>}
        lead={<>Universe is built on WorkAdventure, the open-source project that pioneered walk-around spaces online. We add our own features on top and give back.</>}
        detail={[
          <>BAWES Universe is a fork of WorkAdventure, the pioneering open-source spatial platform. We extend their foundation with new features while maintaining upstream compatibility and contributing back.</>,
        ]}
        scene="desks"
        actions={[{ label: 'View on GitHub', href: 'https://github.com/workadventure/workadventure' }, { label: 'WorkAdventure project', href: 'https://workadventu.re/' }]}
        source="page_workadventure_fork"
      />

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

      <PageClosing
        title={<>Contribute to the fork</>}
        links={[{ label: 'Explore repositories', href: 'https://github.com/BAWES-Universe' }, { label: 'Read the contributing guide', href: 'https://github.com/BAWES-Universe/workadventure-universe/blob/universe/CONTRIBUTING.md' }]}
        source="page_workadventure_fork"
      />
    </main>
  );
}
