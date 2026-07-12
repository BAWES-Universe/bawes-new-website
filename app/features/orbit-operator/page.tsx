'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function OrbitOperatorPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 pt-24 pb-0 text-xs text-text-muted max-w-container-max mx-auto px-gutter">
        <Link href="/build" className="hover:text-primary transition-colors">Build & Create</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary">Orbit Operator</span>
      </div>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="material-symbols-outlined text-sm text-primary">space_dashboard</span>
            <span className="text-caption font-label-navigation uppercase tracking-widest text-primary">Orbit Operator Console</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Your Universe, <span className="text-gradient">In Command.</span>
          </h1>
          <p className="text-body-md text-text-secondary max-w-xl">
            Orbit Operator gives you manual control over your universe. Review logs, manage worlds, monitor performance, and control bots — all from a single dashboard.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="neon-gradient px-8 py-4 rounded-full text-white font-bold flex items-center gap-2 active:scale-95 transition-transform">
              Launch Dashboard
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
            <button className="glass-card px-8 py-4 rounded-full text-on-surface font-bold hover:bg-surface-glass transition-all">
              View Documentation
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
          <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 aspect-video">
            <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/30">dashboard</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-[2rem] relative overflow-hidden">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-6">Ready to take command?</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">Get instant access to the Orbit Operator dashboard and start managing your universe like a pro.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-gradient px-10 py-4 rounded-full text-white font-bold active:scale-95 transition-transform">Launch Dashboard</button>
            <button className="glass-card px-10 py-4 rounded-full text-on-surface font-bold hover:bg-surface-glass transition-all">Talk to Sales</button>
          </div>
        </div>
      </section>
    </main>
  );
}
