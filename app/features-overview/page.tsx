'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function FeaturesOverviewPage() {
  return (
    <main className="max-w-container-max mx-auto px-gutter space-y-24 pb-section-padding-v">
      {/* Hero */}
      <header className="pt-40 pb-20">
        <div className="text-center md:text-left max-w-3xl">
          <h1 className="font-display-hero text-display-hero md:text-display-hero mb-6">
            <span className="text-gradient">Everything</span> Universe can do.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed">
            Explore every feature, component, and capability in the BAWES Universe platform. Click any feature to learn more about the future of spatial intelligence.
          </p>
        </div>
      </header>

      {/* SECTION 1: Platform Core */}
      <section>
        <div className="mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Category 01</span>
          <h2 className="font-headline-section text-headline-section mb-4">Platform Core</h2>
          <p className="text-text-secondary max-w-2xl">The foundation of our ecosystem, providing secure, scalable infrastructure for spatial experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <Link href="/workadventure-fork" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <span className="px-2 py-1 rounded text-[10px] font-bold text-primary bg-primary/10 border border-primary/20">INHERITED</span>
            </div>
            <h3 className="font-headline-card text-lg mb-2">WorkAdventure Fork</h3>
            <p className="text-text-secondary text-sm flex-grow">A high-performance fork of WorkAdventure optimized for the BAWES ecosystem.</p>
          </Link>
          <Link href="/features/self-hosting" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">dns</span>
              <span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span>
            </div>
            <h3 className="font-headline-card text-lg mb-2">Self-Hosting</h3>
            <p className="text-text-secondary text-sm flex-grow">Complete data sovereignty. Deploy BAWES Universe on your own private infrastructure.</p>
          </Link>
          <Link href="/features/oidc-auth" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">fingerprint</span>
              <span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span>
            </div>
            <h3 className="font-headline-card text-lg mb-2">OIDC Auth</h3>
            <p className="text-text-secondary text-sm flex-grow">Enterprise-grade security with OpenID Connect integration for seamless identity management.</p>
          </Link>
          <Link href="/features/admin-api" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">api</span>
              <span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span>
            </div>
            <h3 className="font-headline-card text-lg mb-2">Admin API</h3>
            <p className="text-text-secondary text-sm flex-grow">Full programmatic control over worlds, users, and permissions through our robust REST API.</p>
          </Link>
        </div>
      </section>

      {/* SECTION 2: Spatial World */}
      <section>
        <div className="mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Category 02</span>
          <h2 className="font-headline-section text-headline-section mb-4">Spatial World</h2>
          <p className="text-text-secondary max-w-2xl">Immersive environments where proximity matters. Connect, collaborate, and explore 2D and 3D spaces.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <Link href="/features/proximity-chat" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">forum</span><span className="px-2 py-1 rounded text-[10px] font-bold text-primary bg-primary/10 border border-primary/20">INHERITED</span></div>
            <h3 className="font-headline-card text-lg mb-2">Proximity Chat</h3>
            <p className="text-text-secondary text-sm">Natural conversation dynamics where volume depends on your avatar&apos;s distance.</p>
          </Link>
          <Link href="/features/maps" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">map</span><span className="px-2 py-1 rounded text-[10px] font-bold text-primary bg-primary/10 border border-primary/20">INHERITED</span></div>
            <h3 className="font-headline-card text-lg mb-2">Maps</h3>
            <p className="text-text-secondary text-sm">Infinite tiled maps with layered collision and interaction zones.</p>
          </Link>
          <Link href="/features/avatar-platform" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">face_6</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Avatar Platform</h3>
            <p className="text-text-secondary text-sm">Advanced character customization and integration with external avatar systems.</p>
          </Link>
          <Link href="/features/map-editor" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">edit_square</span><span className="px-2 py-1 rounded text-[10px] font-bold text-primary bg-primary/10 border border-primary/20">INHERITED</span></div>
            <h3 className="font-headline-card text-lg mb-2">Inline Map Editor</h3>
            <p className="text-text-secondary text-sm">Edit your world in real-time without leaving the platform.</p>
          </Link>
          <Link href="/features/megaphone" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">diversity_3</span><span className="px-2 py-1 rounded text-[10px] font-bold text-primary bg-primary/10 border border-primary/20">INHERITED</span></div>
            <h3 className="font-headline-card text-lg mb-2">Megaphone</h3>
            <p className="text-text-secondary text-sm">Broadcast your voice across entire zones for announcements or events.</p>
          </Link>
          <Link href="/features/map-templates" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">dashboard_customize</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Map Templates</h3>
            <p className="text-text-secondary text-sm">Pre-configured spatial blueprints for offices, campuses, and events.</p>
          </Link>
        </div>
      </section>

      {/* SECTION 3: AI Agents */}
      <section className="relative">
        <div className="mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Category 03</span>
          <h2 className="font-headline-section text-headline-section mb-4">AI Agents</h2>
          <p className="text-text-secondary max-w-2xl">Intelligence that lives in your space. These aren&apos;t just chatbots; they are residents with memory and utility.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <Link href="/features/bot-behaviors" className="glass-card p-6 rounded-xl flex flex-col h-full border-primary/30 cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">psychology</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Bot Behaviors</h3>
            <p className="text-text-secondary text-sm">Program complex routines for AI residents to follow within the world.</p>
          </Link>
          <Link href="/features/bot-memory" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">memory</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Bot Memory</h3>
            <p className="text-text-secondary text-sm">Bots remember past interactions, creating persistent relationships with users.</p>
          </Link>
          <Link href="/features/bot-streaming" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">stream</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Streaming Chat</h3>
            <p className="text-text-secondary text-sm">Low-latency, real-time voice and text responses from spatial AI agents.</p>
          </Link>
          <Link href="/features/bot-tools" className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">construction</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Bot Tool Calling</h3>
            <p className="text-text-secondary text-sm">Bots can interact with APIs and external tools to perform real-world tasks.</p>
          </Link>
        </div>
      </section>

      {/* SECTION 4: MCP Integration */}
      <section>
        <div className="mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Category 04</span>
          <h2 className="font-headline-section text-headline-section mb-4">MCP Integration</h2>
          <p className="text-text-secondary max-w-2xl">The Model Context Protocol allows BAWES to connect to any data source or service seamlessly.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">hub</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Server Management</h3>
            <p className="text-text-secondary text-sm">Full lifecycle management for Model Context Protocol servers.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">key</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Auth Protocols</h3>
            <p className="text-text-secondary text-sm">Support for OAuth, Bearer, and API Key authentication for secure MCP connections.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">visibility</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">Observability</h3>
            <p className="text-text-secondary text-sm">Real-time monitoring and logging of all MCP tool executions.</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4"><span className="material-symbols-outlined text-primary text-3xl">lock</span><span className="px-2 py-1 rounded text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20">LIVE</span></div>
            <h3 className="font-headline-card text-lg mb-2">MCP Encryption</h3>
            <p className="text-text-secondary text-sm">End-to-end encryption for all data processed through MCP nodes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
