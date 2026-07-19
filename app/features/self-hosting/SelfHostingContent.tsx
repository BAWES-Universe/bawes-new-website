'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
export default function SelfHostingPageContent() {
  return (
    <main className="pt-32">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/platform" className="hover:text-primary transition-colors">Platform</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Self-Hosting</span>
        </div>
      </div>
      {/* Hero Section */}
      <Section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[716px] mb-section-padding-v">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-glass border border-border-purple">
            <span className="material-symbols-outlined text-[18px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="text-caption font-caption text-tertiary uppercase tracking-widest">Self-Hosting Stack v4.2.0</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-none">
            Run Your Own <br /><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Universe.</span>
          </h1>
          <p className="font-body-md text-text-secondary max-w-xl text-lg">
            Self-host the entire BAWES Universe stack on your infrastructure. Experience total sovereignty with full control over your data, privacy, and performance.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/features/self-hosting" className="px-8 py-4 rounded-full font-label-navigation text-label-navigation bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-bold text-lg neon-glow-purple flex items-center gap-3 active:scale-95 transition-transform">
              Launch Self-Host Guide
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-label-navigation text-label-navigation border border-border-purple text-on-surface hover:bg-surface-glass flex items-center gap-3 transition-all inline-block">
              <span className="material-symbols-outlined">code</span>
              View on GitHub
            </a>
          </div>
          <div className="flex items-center gap-8 pt-8">
            <div className="flex flex-col">
              <span className="text-headline-card font-bold text-white">99.9%</span>
              <span className="text-caption font-caption text-text-low-emphasis uppercase tracking-wider">Uptime Reliability</span>
            </div>
            <div className="w-px h-10 bg-divider"></div>
            <div className="flex flex-col">
              <span className="text-headline-card font-bold text-white">0ms</span>
              <span className="text-caption font-caption text-text-low-emphasis uppercase tracking-wider">Data Latency</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-[80px] opacity-30 rounded-full group-hover:opacity-50 transition-opacity"></div>
          <div className="relative glass-card rounded-3xl p-4 overflow-hidden border-2 border-white/10">
            <div className="aspect-square rounded-2xl bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">dns</span>
            </div>
            <div className="absolute bottom-10 right-10 glass-card p-4 rounded-xl flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-caption font-caption text-white font-bold">NODE-01 ONLINE</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Bento */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-section text-headline-section text-white">Uncompromising Freedom</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">The BAWES Self-Host stack is designed for power users who refuse to settle for centralized limitations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 glass-card p-card-padding rounded-[2rem] flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary">dock</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Docker Deploy</h3>
              <p className="text-on-surface-variant">One-command Docker setup for the entire platform. Deploy to any cloud or on-premise hardware in minutes.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg bg-black/40 p-4 font-mono text-sm text-primary-container border border-white/5">
              <span className="text-text-low-emphasis">$</span> docker-compose up -d
            </div>
          </div>
          <div className="lg:col-span-8 glass-card p-card-padding rounded-[2rem] flex flex-col md:flex-row gap-8 items-center group overflow-hidden">
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined text-secondary">domain</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Custom Domain</h3>
              <p className="text-on-surface-variant">Your domain, your branding. Fully white-labeled experience that lives where you want it. No mandatory BAWES watermarks or subdomains.</p>
            </div>
            <div className="flex-1 h-full w-full min-h-[200px] relative rounded-xl border border-white/10 bg-surface-container overflow-hidden">
              <div className="absolute inset-0 p-6 flex flex-col gap-3 justify-center">
                <div className="h-8 w-3/4 rounded bg-white/5 animate-pulse"></div>
                <div className="h-8 w-1/2 rounded bg-white/5 animate-pulse delay-75"></div>
                <div className="h-8 w-2/3 rounded bg-white/5 animate-pulse delay-150"></div>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-secondary">universe.yourbrand.io</div>
            </div>
          </div>
          <div className="lg:col-span-7 glass-card p-card-padding rounded-[2rem] space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary">security</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white">Full Control</h3>
            <p className="text-on-surface-variant">Complete data ownership. Your users, your messages, and your world assets stay strictly on your infrastructure. Encrypted at rest, encrypted in transit, entirely yours.</p>
            <div className="pt-4 grid grid-cols-3 gap-4">
              <div className="h-1 bg-primary/20 rounded-full overflow-hidden"><div className="h-full bg-primary w-full"></div></div>
              <div className="h-1 bg-secondary/20 rounded-full overflow-hidden"><div className="h-full bg-secondary w-full"></div></div>
              <div className="h-1 bg-tertiary/20 rounded-full overflow-hidden"><div className="h-full bg-tertiary w-full"></div></div>
            </div>
          </div>
          <div className="lg:col-span-5 glass-card p-card-padding rounded-[2rem] space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary">layers</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white">Stack Included</h3>
            <p className="text-on-surface-variant">A complete ecosystem in one repo: LiveKit for spatial audio, Matrix for persistent chat, and the BAWES app server.</p>
            <div className="flex gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">LiveKit</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">Matrix</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">Redis</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Specs */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v border-t border-divider">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="font-headline-section text-headline-section text-white">Included in the Stack</h2>
            <p className="text-text-secondary leading-relaxed">Our modular architecture ensures each component is world-class. Each piece of the BAWES stack is optimized for high-concurrency spatial interactions.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all">
              View Architecture Diagram
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider border border-divider rounded-2xl overflow-hidden">
            <div className="bg-background-page p-8 hover:bg-surface-glass transition-colors">
              <h4 className="text-white font-bold mb-2">LiveKit SFU</h4>
              <p className="text-sm text-on-surface-variant">Enterprise-grade WebRTC Selective Forwarding Unit for real-time spatial audio and video.</p>
            </div>
            <div className="bg-background-page p-8 hover:bg-surface-glass transition-colors">
              <h4 className="text-white font-bold mb-2">Matrix/Synapse</h4>
              <p className="text-sm text-on-surface-variant">The secure, decentralized backbone for all persistent messaging, world history, and state.</p>
            </div>
            <div className="bg-background-page p-8 hover:bg-surface-glass transition-colors">
              <h4 className="text-white font-bold mb-2">Postgres & Redis</h4>
              <p className="text-sm text-on-surface-variant">Robust relational storage paired with lightning-fast in-memory caching for world state.</p>
            </div>
            <div className="bg-background-page p-8 hover:bg-surface-glass transition-colors">
              <h4 className="text-white font-bold mb-2">Spatial Engine</h4>
              <p className="text-sm text-on-surface-variant">The proprietary BAWES core managing 3D physics, spatial boundaries, and avatar coordination.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Deep Dives */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest text-center opacity-60">Related Deep Dives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/white-label" className="glass-card p-8 rounded-2xl group hover:bg-primary/5 cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">brush</span>
            <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">White Label Rebranding</h4>
            <p className="text-sm text-on-surface-variant">Learn how to customize the UI theme, logos, and entry points for a fully branded experience.</p>
          </Link>
          <Link href="/features/oidc-auth" className="glass-card p-8 rounded-2xl group hover:bg-secondary/5 cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">key</span>
            <h4 className="text-white font-bold text-lg mb-2 group-hover:text-secondary transition-colors">OIDC Auth</h4>
            <p className="text-sm text-on-surface-variant">Secure your universe with enterprise-grade identity providers like Okta, Auth0, or Microsoft Entra ID.</p>
          </Link>
          <Link href="/features/admin-api" className="glass-card p-8 rounded-2xl group hover:bg-tertiary/5 cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">api</span>
            <h4 className="text-white font-bold text-lg mb-2 group-hover:text-tertiary transition-colors">Admin API</h4>
            <p className="text-sm text-on-surface-variant">Full programmatic control over worlds, users, and permissions via our comprehensive REST API.</p>
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="font-headline-section text-headline-section text-white">Ready to deploy?</h2>
            <p className="text-text-secondary max-w-xl mx-auto">Join thousands of developers hosting their own sovereign digital worlds. Our documentation will guide you every step of the way.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://github.com/BAWES-Universe" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-label-navigation text-label-navigation bg-white text-background font-bold hover:bg-opacity-90 transition-all active:scale-95 inline-block">Read the Docs</a>
              <a href="https://discord.gg/CXceJWnwNT" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-label-navigation text-label-navigation border border-white/20 text-white font-bold hover:bg-white/5 transition-all inline-block">Join the Discord</a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
