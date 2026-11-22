'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function TechStackPageContent() {
  return (
    <main className="pt-20 relative">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Platform', href: '/platform' }]}
        here="Technology Stack"
        title={<>The stack behind <span className="text-gradient-accent">the Universe</span></>}
        lead={<>For builders: the languages and tools Universe is made of.</>}
        detail={[
          <>TypeScript, Node.js, WebRTC, AI, MCP — the technologies that power every world. We've engineered a fluid, real-time ecosystem designed for infinite scale.</>,
        ]}
        scene="desks"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="page_features_tech_stack"
      />

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

      <PageClosing
        title={<>Come and see it for yourself</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Developer hub', href: '/developers' }]}
        source="page_features_tech_stack"
      />
    </main>
  );
}
