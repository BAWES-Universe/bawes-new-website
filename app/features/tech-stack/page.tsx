'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function TechStackPage() {
  return (
    <main className="relative">
      {/* Breadcrumb */}
      <div className="max-w-container-max mx-auto px-gutter pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/platform" className="hover:text-primary transition-colors">Platform</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Technology Stack</span>
        </div>
      </div>
      {/* Hero Section */}
      <Section className="max-w-container-max mx-auto px-gutter mb-section-padding-v text-center md:text-left grid md:grid-cols-2 items-center gap-12">
        <div className="relative z-10">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero mb-6 text-on-surface">
            The Stack Behind <br /><span className="text-primary">the Universe.</span>
          </h1>
          <p className="text-text-secondary max-w-lg text-lg mb-8">
            TypeScript, Node.js, WebRTC, AI, MCP — the technologies that power every world. We've engineered a fluid, real-time ecosystem designed for infinite scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full border-purple/30">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
              <span className="text-caption font-bold tracking-wider uppercase">Open Core</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full border-purple/30">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="text-caption font-bold tracking-wider uppercase">Ultra Low Latency</span>
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
                  <div className="text-xs text-text-low-emphasis">Reactive Svelte Canvas</div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl border-purple/40 w-5/6 self-center flex items-center gap-4 ml-8">
                <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">hub</span>
                </div>
                <div>
                  <div className="text-caption font-bold text-secondary">REAL-TIME SYNC</div>
                  <div className="text-xs text-text-low-emphasis">WebRTC + Colyseus Authority</div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-xl border-purple/40 w-3/4 self-center flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container">psychology</span>
                </div>
                <div>
                  <div className="text-caption font-bold text-tertiary">AGENTIC AI</div>
                  <div className="text-xs text-text-low-emphasis">MCP Protocol Node</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
              <span className="text-caption text-text-low-emphasis uppercase tracking-widest">Visual Fidelity Tier</span>
              <div className="flex gap-1">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
                <div className="w-12 h-1 bg-surface-container-highest rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 glass-card rounded-2xl p-card-padding border-tertiary/20 group">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-tertiary text-4xl">smart_toy</span>
              <h3 className="font-headline-card text-headline-card text-on-surface">AI Layer</h3>
            </div>
            <p className="text-text-secondary mb-6">Autonomous agents with cross-platform intelligence using MCP protocol.</p>
            <div className="space-y-4">
              <div className="p-3 bg-surface-container-low rounded-xl border border-divider group-hover:border-tertiary/30 transition-colors">
                <div className="text-caption text-tertiary font-bold mb-1">MCP Integration</div>
                <div className="text-xs text-text-low-emphasis">Model Context Protocol for seamless knowledge retrieval.</div>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-divider group-hover:border-tertiary/30 transition-colors">
                <div className="text-caption text-tertiary font-bold mb-1">Multi-Provider</div>
                <div className="text-xs text-text-low-emphasis">GPT-4, Claude 3.5, and Llama 3 local inference support.</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 glass-card rounded-2xl p-card-padding border-secondary/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-4xl">dns</span>
              <h3 className="font-headline-card text-headline-card text-on-surface">Backend</h3>
            </div>
            <p className="text-text-secondary mb-6">Real-time state synchronization and world management at scale.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span> Node.js / TypeScript
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span> Colyseus State Sync
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span> Horizontal Scaling
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 glass-card rounded-2xl p-card-padding">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">settings_input_antenna</span>
              <h3 className="font-headline-card text-headline-card text-on-surface">Communication</h3>
            </div>
            <p className="text-text-secondary mb-4">Low-latency spatial audio and video scaling via WebRTC.</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-surface-glass p-2 rounded text-center text-xs font-bold text-on-surface-variant">LiveKit</div>
              <div className="bg-surface-glass p-2 rounded text-center text-xs font-bold text-on-surface-variant">Coturn</div>
              <div className="bg-surface-glass p-2 rounded text-center text-xs font-bold text-on-surface-variant">WebRTC</div>
              <div className="bg-surface-glass p-2 rounded text-center text-xs font-bold text-on-surface-variant">SFU Mesh</div>
            </div>
          </div>
          <div className="md:col-span-4 glass-card rounded-2xl p-card-padding">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">database</span>
              <h3 className="font-headline-card text-headline-card text-on-surface">Storage</h3>
            </div>
            <p className="text-text-secondary mb-4">Reliable, high-speed data persistence for persistent worlds.</p>
            <div className="flex items-center gap-6 mt-6">
              <div className="text-center">
                <div className="text-headline-card text-on-surface font-bold">PG</div>
                <div className="text-caption uppercase text-text-low-emphasis">Relational</div>
              </div>
              <div className="h-10 w-px bg-divider"></div>
              <div className="text-center">
                <div className="text-headline-card text-on-surface font-bold">Redis</div>
                <div className="text-caption uppercase text-text-low-emphasis">Caching</div>
              </div>
              <div className="h-10 w-px bg-divider"></div>
              <div className="text-center">
                <div className="text-headline-card text-on-surface font-bold">S3</div>
                <div className="text-caption uppercase text-text-low-emphasis">Assets</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Callout */}
      <Section className="max-w-container-max mx-auto px-gutter mb-section-padding-v">
        <div className="glass-card rounded-3xl p-12 text-center border-purple/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-on-surface mb-2">15ms</div>
              <div className="text-caption uppercase text-text-low-emphasis tracking-widest">Average Latency</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-on-surface mb-2">10k+</div>
              <div className="text-caption uppercase text-text-low-emphasis tracking-widest">CCU per World</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-on-surface mb-2">99.9%</div>
              <div className="text-caption uppercase text-text-low-emphasis tracking-widest">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-on-surface mb-2">60fps</div>
              <div className="text-caption uppercase text-text-low-emphasis tracking-widest">Canvas Render</div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
