'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
export default function LegalPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'About', href: '/about' }]}
        here="Legal"
        title={<><span className="text-gradient-accent">Transparency</span> by default</>}
        lead={<>Privacy policy, terms of service, and fair usage. We believe in clear, honest legal terms for the decentralized future.</>}
        detail={[
          <>GDPR Compliant · MIT Licensed</>,
        ]}
        scene="desks"
        noEnter
        source="page_legal"
      />

      {/* Content Bento Grid */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">fingerprint</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Privacy</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              We collect minimal data. Your identity is your own. We don&apos;t track your movements between worlds, and we don&apos;t sell your data to anyone. <strong>Decentralized by design</strong>, ensuring that your digital footprint remains exclusively yours.
            </p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">gavel</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Terms</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              Fair use and acceptable use policies. Respect the space, the bots, and the people. No malicious scraping or service disruption. We maintain a zero-tolerance policy towards harassment and exploitation within the BAWES Universe.
            </p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Open Source</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              Built for the future. Our core engine is <strong>MIT Licensed</strong>. We believe in open standards and the power of collective innovation. Our code is transparent, auditable, and ready for the community to expand upon.
            </p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">scale</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Fair Usage</h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              The free tier includes your first world and basic bot integrations. Usage-based pricing for AI-intensive agents and high-bandwidth server-heavy environments. Fair for creators, fair for us. We ensure sustainable scaling for all architects.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="bg-surface-container/30 py-section-padding-v border-y border-purple overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-headline-section text-headline-section mb-4">Related Deep Dives</h2>
              <p className="font-body-md text-body-md text-text-secondary">Explore the technical and philosophical foundations of the Universe.</p>
            </div>
            <span className="material-symbols-outlined text-6xl text-primary/10 hidden md:block" style={{ fontVariationSettings: "'wght' 100" }}>explore</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/open-source" className="glass-card p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary">code</span>
                <span className="material-symbols-outlined text-text-low-emphasis group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
              </div>
              <div>
                <h4 className="font-headline-card text-xl mb-1">Open Source</h4>
                <p className="font-caption text-caption text-text-secondary">Explore our public repositories and contribute to the core.</p>
              </div>
            </Link>
            <Link href="/team" className="glass-card p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary">groups</span>
                <span className="material-symbols-outlined text-text-low-emphasis group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
              </div>
              <div>
                <h4 className="font-headline-card text-xl mb-1">The Team</h4>
                <p className="font-caption text-caption text-text-secondary">Meet the architects, engineers, and visionaries building BAWES.</p>
              </div>
            </Link>
            <Link href="/features/self-hosting" className="glass-card p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary">dns</span>
                <span className="material-symbols-outlined text-text-low-emphasis group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
              </div>
              <div>
                <h4 className="font-headline-card text-xl mb-1">Self-Hosting</h4>
                <p className="font-caption text-caption text-text-secondary">Deploy your own node and maintain complete sovereignty.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
