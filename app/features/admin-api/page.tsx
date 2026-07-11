'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AdminApiPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-12 items-center min-h-[819px]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-purple/30">
            <span className="material-symbols-outlined text-[14px] text-primary">terminal</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">v2.4 Released</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Administer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">at Scale.</span>
          </h1>
          <p className="text-text-secondary font-body-md text-body-md max-w-lg">
            REST API for managing users, worlds, rooms, and bots programmatically. Automate your universe with robust endpoints and low-latency synchronization.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-gradient-neon text-white px-8 py-4 rounded-full font-headline-card text-body-md neon-glow-primary hover:scale-105 transition-transform flex items-center gap-2">
              Explore API Docs
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
            <Button className="glass-card text-on-surface px-8 py-4 rounded-full font-headline-card text-body-md hover:bg-white/5 transition-colors">
              Get API Key
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="glass-card rounded-2xl p-4 overflow-hidden relative border-purple/30">
            <div className="aspect-video rounded-xl bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/30">api</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-page/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">api</span>
                </div>
                <div>
                  <div className="text-white font-headline-card text-body-md">Universe Core v2</div>
                  <div className="text-primary text-caption font-caption">API Connection: Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-surface-container-low py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">Powerful Tooling for Creators</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Full control over your decentralized infrastructure with specialized endpoints for every component of your world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">group_add</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">User Management</h3>
              <p className="text-text-secondary font-caption text-body-md">Programmatic control over user roles, permissions, and session authentication tokens.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">public</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">World CRUD</h3>
              <p className="text-text-secondary font-caption text-body-md">Create, Read, Update, and Delete world instances and advanced spatial configurations.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20 group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Bot Administration</h3>
              <p className="text-text-secondary font-caption text-body-md">Deploy and manage AI agents, their behaviors, and provider settings via REST API.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">query_stats</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Analytics Access</h3>
              <p className="text-text-secondary font-caption text-body-md">Extract real-time engagement data and complex spatial metrics for your universe.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Section */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <div className="glass-card p-8 rounded-2xl border-purple/30 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6 border-b border-divider pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="ml-4 text-caption text-text-low-emphasis font-mono">POST /v1/worlds/create</div>
            </div>
            <pre className="font-mono text-[14px] leading-relaxed text-primary">{`{
  "world_id": "cyber_sector_09",
  "max_capacity": 128,
  "region": "us-east-universe",
  "features": {
    "ai_moderation": true,
    "p2p_voice": true
  }
}`}</pre>
          </div>
        </div>
        <div className="space-y-8 order-1 md:order-2">
          <h2 className="font-headline-section text-headline-section text-on-surface">Built for Performance & Security</h2>
          <p className="text-text-secondary">Our infrastructure is architected to handle high-frequency programmatic interactions without compromising on latency or data integrity.</p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary"><span className="material-symbols-outlined">bolt</span></div>
              <div>
                <div className="text-white font-bold">&lt;50ms Global Latency</div>
                <div className="text-text-secondary text-caption">Ultra-fast response times globally via our edge network.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary"><span className="material-symbols-outlined">verified_user</span></div>
              <div>
                <div className="text-white font-bold">AES-256 Encryption</div>
                <div className="text-text-secondary text-caption">End-to-end encryption for all API communications and data at rest.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary"><span className="material-symbols-outlined">cloud_done</span></div>
              <div>
                <div className="text-white font-bold">99.9% Uptime SLA</div>
                <div className="text-text-secondary text-caption">Enterprise-grade reliability guaranteed for critical automation tasks.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Systems Bento */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Deep Dives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/orbit-operator" className="glass-card p-card-padding rounded-2xl col-span-1 flex flex-col justify-between border-purple/20 cursor-pointer hover-lift">
            <div>
              <span className="material-symbols-outlined text-secondary mb-4 text-[32px]">dashboard_customize</span>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Orbit Admin</h3>
              <p className="text-text-secondary text-caption">The premium UI layer for manual management of your universe instances.</p>
            </div>
            <div className="text-primary font-bold flex items-center gap-2 mt-8 group">
              Launch Dashboard <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
          <Link href="/features/scripting" className="glass-card p-card-padding rounded-2xl col-span-1 flex flex-col justify-between border-purple/20 bg-primary/5 cursor-pointer hover-lift">
            <div>
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">javascript</span>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Scripting API</h3>
              <p className="text-text-secondary text-caption">Direct in-world logic for rooms and players. Write custom behaviors in JS/TS.</p>
            </div>
            <div className="text-primary font-bold flex items-center gap-2 mt-8 group">
              Script Docs <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
          <Link href="/features/self-hosting" className="glass-card p-card-padding rounded-2xl col-span-1 flex flex-col justify-between border-purple/20 cursor-pointer hover-lift">
            <div>
              <span className="material-symbols-outlined text-secondary mb-4 text-[32px]">dns</span>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Self-Hosting</h3>
              <p className="text-text-secondary text-caption">Take full ownership. Deploy the BAWES stack on your own infrastructure.</p>
            </div>
            <div className="text-primary font-bold flex items-center gap-2 mt-8 group">
              Server Guide <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        </div>
      </Section>
    </main>
  );
}
