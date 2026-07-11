'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ScriptingApiPage() {
  return (
    <main className="relative z-10 pt-24 max-w-container-max mx-auto px-gutter">
      {/* Hero Section */}
      <section className="min-h-[819px] flex flex-col md:flex-row items-center justify-between py-section-padding-lg gap-stack-lg">
        <div className="w-full md:w-1/2 space-y-stack-md">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span>/</span>
          <span className="text-primary">Scripting API</span>
        </div>
        <h1 className="font-display-hero text-display-hero leading-tight text-white">
            Code That <span className="text-primary">Shapes</span> Worlds.
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-xl">
            <span className="api-token">WA.ui</span>, <span className="api-token">WA.room</span>, <span className="api-token">WA.player</span>, <span className="api-token">WA.state</span> — the scripting API from WorkAdventure. Control rooms, players, state, and UI elements from your map scripts.
          </p>
          <div className="flex gap-stack-md pt-stack-md">
            <button className="accent-gradient-bg px-8 py-4 rounded-full font-label-sm text-label-sm text-white accent-glow hover:brightness-110 transition-all">
              View API Reference
            </button>
            <button className="glass px-8 py-4 rounded-full font-label-sm text-label-sm text-white hover:bg-glass-surface/10 transition-all">
              Examples
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[500px] glass rounded-xl relative overflow-hidden flex items-center justify-center p-card-padding">
          <div className="relative z-10 w-full">
            <div className="glass p-stack-md rounded-lg mb-stack-md border-l-4 border-primary">
              <pre className="font-code-block text-code-block text-link-purple"><code>{`WA.room.onEnterZone('zone-1', () => {
  WA.ui.openModal({
    title: "Welcome to BAWES",
    content: "The gateway is now open."
  });
});`}</code></pre>
            </div>
            <div className="absolute -right-4 -bottom-4 w-48 h-48">
              <div className="w-full h-full glass rounded-xl flex items-center justify-center rotate-3 animate-pulse">
                <span className="material-symbols-outlined text-primary text-6xl">terminal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Pillars */}
      <section className="py-section-padding-lg">
        <div className="mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-white mb-stack-sm">API Pillars</h2>
          <p className="text-text-secondary">Core modules for environment manipulation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
          <div className="glass p-card-padding rounded-xl hover-card flex flex-col gap-stack-md">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">web_asset</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white">WA.ui</h3>
            <p className="text-text-secondary">Create UI elements, buttons, and high-fidelity modals directly within the world canvas.</p>
          </div>
          <div className="glass p-card-padding rounded-xl hover-card flex flex-col gap-stack-md">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">meeting_room</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white">WA.room</h3>
            <p className="text-text-secondary">Control room properties, layer visibility, and spatial triggers with precision.</p>
          </div>
          <div className="glass p-card-padding rounded-xl hover-card flex flex-col gap-stack-md">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">person_play</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white">WA.player</h3>
            <p className="text-text-secondary">Manage player position, custom avatars, and transient state data during sessions.</p>
          </div>
          <div className="glass p-card-padding rounded-xl hover-card flex flex-col gap-stack-md">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">database</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-white">WA.state</h3>
            <p className="text-text-secondary">Handle persistent room variables and synchronization across multiple users.</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-section-padding-lg grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div className="order-2 md:order-1">
          <div className="w-full rounded-2xl glass shadow-2xl aspect-video bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-primary/30">code</span>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-stack-md pl-0 md:pl-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-white">Scripting Events</h2>
          <p className="text-text-secondary mb-stack-md">Reactive patterns to build living environments.</p>
          <div className="space-y-stack-md">
            <div className="flex items-center gap-stack-md group">
              <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary">login</span>
              </div>
              <div>
                <span className="api-token text-lg">onEnter</span>
                <p className="text-text-muted text-sm">Fires when a player enters the map or a specific zone.</p>
              </div>
            </div>
            <div className="flex items-center gap-stack-md group">
              <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary">logout</span>
              </div>
              <div>
                <span className="api-token text-lg">onLeave</span>
                <p className="text-text-muted text-sm">Trigger actions when a user departs a defined spatial area.</p>
              </div>
            </div>
            <div className="flex items-center gap-stack-md group">
              <div className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <div>
                <span className="api-token text-lg">onEvent</span>
                <p className="text-text-muted text-sm">The generic listener for custom inter-script messaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Deep Dives */}
      <section className="py-section-padding-lg">
        <h2 className="font-headline-lg text-headline-lg text-white mb-stack-lg text-center">Related Deep Dives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <Link href="/features/map-editor" className="relative group h-64 rounded-2xl overflow-hidden glass hover-card cursor-pointer">
            <div className="absolute inset-0 bg-surface-container-high transition-transform duration-500 group-hover:scale-110 opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-card-padding">
              <span className="label-sm px-3 py-1 rounded bg-primary/20 text-primary mb-stack-sm inline-block">Advanced Tooling</span>
              <h3 className="font-headline-md text-headline-md text-white">Inline Map Editor</h3>
              <p className="text-text-secondary text-sm">Modify your universe in real-time with our browser-based editor.</p>
            </div>
          </Link>
          <Link href="/features/area-zones" className="relative group h-64 rounded-2xl overflow-hidden glass hover-card cursor-pointer">
            <div className="absolute inset-0 bg-surface-container-high transition-transform duration-500 group-hover:scale-110 opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-card-padding">
              <span className="label-sm px-3 py-1 rounded bg-secondary/20 text-secondary mb-stack-sm inline-block">Architecture</span>
              <h3 className="font-headline-md text-headline-md text-white">Area Zones</h3>
              <p className="text-text-secondary text-sm">Define interactions based on geographic proximity and room logic.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
