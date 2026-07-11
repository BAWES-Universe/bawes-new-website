'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface FeatureCardProps {
  href: string;
  icon: string;
  label: string;
  title: string;
  desc: string;
}

function FeatureCard({ href, icon, label, title, desc }: FeatureCardProps) {
  return (
    <Link href={href} className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        <span className="px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap"
          style={{
            color: label === 'INHERITED' ? '#a78bfa' : '#34d399',
            background: label === 'INHERITED' ? 'rgba(167,139,250,0.1)' : 'rgba(52,211,153,0.1)',
            borderColor: label === 'INHERITED' ? 'rgba(167,139,250,0.2)' : 'rgba(52,211,153,0.2)',
            borderWidth: 1,
          }}
        >
          {label}
        </span>
      </div>
      <h3 className="font-headline-card text-lg mb-2">{title}</h3>
      <p className="text-text-secondary text-sm flex-grow">{desc}</p>
      <div className="card-arrow">
        Learn more <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </Link>
  );
}

interface InfoCardProps {
  icon: string;
  label: string;
  title: string;
  desc: string;
}

function InfoCard({ icon, label, title, desc }: InfoCardProps) {
  return (
    <div className="info-card p-6 rounded-xl flex flex-col h-full" style={{ cursor: 'default' }}>
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-3xl" style={{ color: 'rgba(167,139,250,0.5)' }}>{icon}</span>
        <span className="px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap"
          style={{
            color: '#34d399',
            background: 'rgba(52,211,153,0.1)',
            border: '1px solid rgba(52,211,153,0.2)',
          }}
        >
          {label}
        </span>
      </div>
      <h3 className="font-headline-card text-lg mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{title}</h3>
      <p className="text-sm flex-grow" style={{ color: 'rgba(231,224,237,0.4)' }}>{desc}</p>
      <div className="card-label mt-2">Feature detail coming soon</div>
    </div>
  );
}

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
          <FeatureCard href="/workadventure-fork" icon="terminal" label="INHERITED" title="WorkAdventure Fork" desc="A high-performance fork of WorkAdventure optimized for the BAWES ecosystem." />
          <FeatureCard href="/features/self-hosting" icon="dns" label="LIVE" title="Self-Hosting" desc="Complete data sovereignty. Deploy BAWES Universe on your own private infrastructure." />
          <FeatureCard href="/features/oidc-auth" icon="fingerprint" label="LIVE" title="OIDC Auth" desc="Enterprise-grade security with OpenID Connect integration for seamless identity management." />
          <FeatureCard href="/features/admin-api" icon="api" label="LIVE" title="Admin API" desc="Full programmatic control over worlds, users, and permissions through our robust REST API." />
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
          <FeatureCard href="/features/proximity-chat" icon="forum" label="INHERITED" title="Proximity Chat" desc="Natural conversation dynamics where volume depends on your avatar&apos;s distance." />
          <FeatureCard href="/features/maps" icon="map" label="INHERITED" title="Maps" desc="Infinite tiled maps with layered collision and interaction zones." />
          <FeatureCard href="/features/avatar-platform" icon="face_6" label="LIVE" title="Avatar Platform" desc="Advanced character customization and integration with external avatar systems." />
          <FeatureCard href="/features/map-editor" icon="edit_square" label="INHERITED" title="Inline Map Editor" desc="Edit your world in real-time without leaving the platform." />
          <FeatureCard href="/features/megaphone" icon="diversity_3" label="INHERITED" title="Megaphone" desc="Broadcast your voice across entire zones for announcements or events." />
          <FeatureCard href="/features/map-templates" icon="dashboard_customize" label="LIVE" title="Map Templates" desc="Pre-configured spatial blueprints for offices, campuses, and events." />
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
          <FeatureCard href="/features/bot-behaviors" icon="psychology" label="LIVE" title="Bot Behaviors" desc="Program complex routines for AI residents to follow within the world." />
          <FeatureCard href="/features/bot-memory" icon="memory" label="LIVE" title="Bot Memory" desc="Bots remember past interactions, creating persistent relationships with users." />
          <FeatureCard href="/features/bot-streaming" icon="stream" label="LIVE" title="Streaming Chat" desc="Low-latency, real-time voice and text responses from spatial AI agents." />
          <FeatureCard href="/features/bot-tools" icon="construction" label="LIVE" title="Bot Tool Calling" desc="Bots can interact with APIs and external tools to perform real-world tasks." />
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
          <FeatureCard href="/mcp-integration" icon="hub" label="LIVE" title="Server Management" desc="Full lifecycle management for Model Context Protocol servers." />
          <FeatureCard href="/mcp-integration" icon="key" label="LIVE" title="Auth Protocols" desc="Support for OAuth, Bearer, and API Key authentication for secure MCP connections." />
          <FeatureCard href="/mcp-integration" icon="visibility" label="LIVE" title="Observability" desc="Real-time monitoring and logging of all MCP tool executions." />
          <FeatureCard href="/mcp-integration" icon="lock" label="LIVE" title="MCP Encryption" desc="End-to-end encryption for all data processed through MCP nodes." />
        </div>
      </section>
    </main>
  );
}
