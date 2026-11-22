'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function OrbitOperatorPageContent() {
  return (
<main className="pt-20 max-w-screen-xl mx-auto px-6">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Orbit Operator"
        eyebrow="Orbit"
        title={<>Your universe, <span className="text-gradient-accent">in command</span></>}
        lead={<>Orbit is where you run your universe: manage worlds, check what is happening, and look after your bots from one place.</>}
        detail={[
          <>Orbit Operator gives you manual control over your universe. Review logs, manage worlds, monitor performance, and control bots — all from a single dashboard.</>,
        ]}
        scene="desks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_orbit_operator"
      />

      {/* Features Grid */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-4">Everything at your fingertips</h2>
          <p className="text-text-secondary max-w-xl mx-auto">Manage every aspect of your universe from a single, unified dashboard designed for operators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-card-padding rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">monitor_heart</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">Live Monitoring</h3>
            <p className="text-text-secondary">Real-time metrics on server load, concurrent users, and resource utilization across all worlds.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">manage_accounts</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">User Management</h3>
            <p className="text-text-secondary">Review active sessions, moderate users, and manage roles across your entire universe hierarchy.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">description</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">Audit Logs</h3>
            <p className="text-text-secondary">Complete activity trail for every administrative action. Track changes, permissions, and world modifications.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">Bot Control</h3>
            <p className="text-text-secondary">Deploy, configure, and manage AI bots across your worlds. Start, stop, or relocate agents live.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">map</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">World Management</h3>
            <p className="text-text-secondary">Create, duplicate, archive, and delete worlds. Manage map assignments and room configurations.</p>
          </div>
          <div className="glass-card p-card-padding rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">api</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-on-surface">API Access</h3>
            <p className="text-text-secondary">Generate and manage API tokens for programmatic access. Configure webhooks and integration endpoints.</p>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v border-t border-divider">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Related Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/admin-api" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">code</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">Admin API</h3>
            <p className="text-text-secondary text-sm">Programmatic access to the same powerful operations via our REST API.</p>
          </Link>
          <Link href="/features/self-hosting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">dns</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">Self-Hosting</h3>
            <p className="text-text-secondary text-sm">Run the BAWES stack on your own infrastructure with full control.</p>
          </Link>
          <Link href="/features/scripting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">terminal</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">Scripting API</h3>
            <p className="text-text-secondary text-sm">Write custom behaviors and in-world logic with our JS/TS SDK.</p>
          </Link>
        </div>
      </section>

      <PageClosing
        title={<>Ready to take command?</>}
        body={<>Open Orbit and start managing your universe.</>}
        links={[{ label: 'Talk to us', href: '/contact' }, { label: 'See all features', href: '/features-overview' }]}
        source="page_features_orbit_operator"
      />
    </main>
  );
}
