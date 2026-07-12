'use client';

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link';
import React from 'react';
import Section from '@/components/Section';

export default function TechStackPage() {
  const t = useTranslations('platform')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward'
  return (
    <main className="pt-20 relative">
      {/* Breadcrumb */}
      <div className="max-w-container-max mx-auto px-gutter pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">{t('breadcrumbFeatures')}</Link>
          <span className="text-white/20">/</span>
          <Link href="/platform" className="hover:text-primary transition-colors">{t('platform.breadcrumbHub', {defaultValue: "Platform"})}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Technology Stack</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter mb-section-padding-v grid md:grid-cols-2 items-center gap-12">
        <div className="relative z-10">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero mb-6 text-on-surface">
            The Stack Behind <br /><span className="text-primary">the Universe.</span>
          </h1>
          <p className="text-text-secondary max-w-lg text-lg mb-8">
            TypeScript, Node.js, WebRTC, AI, MCP — the technologies that power every world across the platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full border-purple/30">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
              <span className="text-caption font-bold tracking-wider uppercase">Open Core</span>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl blur-3xl"></div>
          <div className="relative w-full h-full glass-card rounded-3xl p-8 overflow-hidden border-purple/10 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="glass-card p-4 rounded-xl border-purple/40 w-3/4 self-center flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container">layers</span>
                </div>
                <div>
                  <div className="text-caption font-bold text-primary">UI LAYER</div>
                  <div className="text-xs text-text-low-emphasis">Svelte + Phaser.js + WebGL</div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl border-purple/40 w-5/6 self-center flex items-center gap-4 ml-8">
                <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">hub</span>
                </div>
                <div>
                  <div className="text-caption font-bold text-secondary">REAL-TIME SYNC</div>
                  <div className="text-xs text-text-low-emphasis">WebRTC + LiveKit + Pusher</div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl border-purple/40 w-3/4 self-center flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">psychology</span>
                </div>
                <div>
                  <div className="text-caption font-bold text-tertiary">AGENTIC AI</div>
                  <div className="text-xs text-text-low-emphasis">MCP Protocol + OpenAI/Anthropic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Stack */}
      <Section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-center mb-16 text-on-surface">The Core Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 glass-card rounded-2xl p-card-padding flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">web_asset</span>
                <h3 className="font-headline-card text-headline-card text-on-surface">Frontend</h3>
              </div>
              <p className="text-text-secondary text-lg mb-4">High-performance rendering and reactive UI.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-md bg-surface-container text-primary text-caption font-bold">Svelte 5</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-primary text-caption font-bold">Phaser.js</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-primary text-caption font-bold">WebGL 2.0</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-primary text-caption font-bold">Tailwind CSS</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-divider flex justify-between items-center">
              <span className="text-caption text-text-low-emphasis uppercase tracking-widest">Visual Tier</span>
              <div className="flex gap-1">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 glass-card rounded-2xl p-card-padding flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">cloud</span>
                <h3 className="font-headline-card text-headline-card text-on-surface">Backend</h3>
              </div>
              <p className="text-text-secondary text-lg mb-4">Real-time multiplayer server infrastructure.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-md bg-surface-container text-secondary text-caption font-bold">Node.js</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-secondary text-caption font-bold">TypeScript</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-secondary text-caption font-bold">Colyseus</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-secondary text-caption font-bold">PostgreSQL</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-secondary text-caption font-bold">Redis</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-divider flex justify-between items-center">
              <span className="text-caption text-text-low-emphasis uppercase tracking-widest">Concurrency Tier</span>
              <div className="flex gap-1">
                <div className="w-12 h-1 bg-secondary rounded-full"></div>
                <div className="w-12 h-1 bg-secondary/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Infrastructure */}
      <Section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-center mb-16 text-on-surface">Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card rounded-2xl p-card-padding text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 inline-block">dns</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Servers</h3>
            <p className="text-text-secondary text-sm">Docker Compose on bare metal (Hetzner). Self-hosted or deploy anywhere.</p>
          </div>
          <div className="glass-card rounded-2xl p-card-padding text-center">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4 inline-block">storage</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Storage</h3>
            <p className="text-text-secondary text-sm">PostgreSQL for state, Redis for caching, S3 for map assets and textures.</p>
          </div>
          <div className="glass-card rounded-2xl p-card-padding text-center">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4 inline-block">lock</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Auth</h3>
            <p className="text-text-secondary text-sm">OIDC with PKCE. Self-hosted or connect any identity provider.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
