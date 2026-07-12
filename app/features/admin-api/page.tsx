'use client';

import React from 'react';
import Section from '@/components/Section';
import Link from 'next/link';

export default function AdminApiPage() {
  return (
    <main className="pt-20 relative">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/platform" className="hover:text-primary transition-colors">Platform</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Admin API</span>
        </div>
      </div>
      {/* Hero Section */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-12 items-center min-h-[819px]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-purple/30">
            <span className="material-symbols-outlined text-[14px] text-primary">terminal</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">REST API</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Administer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">at Scale.</span>
          </h1>
          <p className="text-text-secondary font-body-md text-body-md max-w-lg">
            Programmatic control over universes, worlds, rooms, users, bots, AI providers, and MCP servers — the same API that powers the Orbit Admin panel.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/features/orbit-operator" className="bg-gradient-neon text-white px-8 py-4 rounded-full font-headline-card text-body-md neon-glow-primary hover:scale-105 transition-transform flex items-center gap-2">
              Orbit Admin Panel
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link href="/contact" className="glass-card text-on-surface px-8 py-4 rounded-full font-headline-card text-body-md hover:bg-white/5 transition-colors inline-block">
              Get API Access
            </Link>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="glass-card rounded-2xl overflow-hidden relative border-purple/30">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface-dim/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="ml-3 text-xs text-text-low-emphasis font-mono">POST /api/admin/worlds</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto font-mono bg-surface-dim/40" dangerouslySetInnerHTML={{
              __html: `<span class="text-purple-400">// Create a new world via the Admin API</span>
<span class="text-purple-300">const</span> response <span class="text-purple-300">=</span> <span class="text-blue-300">await</span> <span class="text-yellow-300">fetch</span>(<span class="text-amber-300">'https://admin.youruniverse.com/api/admin/worlds'</span>, {
  method: <span class="text-amber-300">'POST'</span>,
  headers: {
    <span class="text-amber-300">'Authorization'</span>: <span class="text-amber-300">'Bearer ADMIN_API_TOKEN'</span>,
    <span class="text-amber-300">'Content-Type'</span>: <span class="text-amber-300">'application/json'</span>
  },
  body: JSON.<span class="text-yellow-300">stringify</span>({
    universeId: <span class="text-amber-300">'550e8400-e29b-41d4-a716-446655440000'</span>,
    slug: <span class="text-amber-300">'cyber-sector-09'</span>,
    name: <span class="text-amber-300">'Cyber Sector 09'</span>,
    isPublic: <span class="text-blue-300">true</span>
  })
});

<span class="text-purple-300">const</span> world <span class="text-purple-300">=</span> <span class="text-blue-300">await</span> response.<span class="text-yellow-300">json</span>();
<span class="text-blue-300">console</span>.<span class="text-yellow-300">log</span>(world);`
            }} />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-surface-container-low py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">What the Admin API Manages</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Every endpoint is shared with the Orbit Admin panel — automate anything you can do from the dashboard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">language</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Universes</h3>
              <p className="text-text-secondary font-caption text-body-md">Create, list, update, and delete universes. Each universe is an isolated space with its own worlds and configuration.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">public</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Worlds</h3>
              <p className="text-text-secondary font-caption text-body-md">Full CRUD for worlds within a universe. Manage slugs, visibility, featured status, and thumbnail URLs.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20 group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined">meeting_room</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Rooms</h3>
              <p className="text-text-secondary font-caption text-body-md">Create rooms with map URLs, template maps, world assignment, access control, and room-level tags.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">group</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Users</h3>
              <p className="text-text-secondary font-caption text-body-md">List, search, and manage users by admin token or session. Super admin access for user oversight.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Bots</h3>
              <p className="text-text-secondary font-caption text-body-md">List, create, and configure AI bots with pagination and search. Manage bot behaviors, memory, and provider settings.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20 group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined">memory</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">AI Providers</h3>
              <p className="text-text-secondary font-caption text-body-md">Manage AI provider configurations with encrypted API keys. Configure OpenAI, Anthropic, and custom endpoints per bot.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">extension</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">MCP Servers</h3>
              <p className="text-text-secondary font-caption text-body-md">Register and manage MCP server connections with paginated listing, search, and bot-server associations.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">bar_chart</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Analytics</h3>
              <p className="text-text-secondary font-caption text-body-md">Query analytics data across universes, worlds, rooms, and users. Aggregate counts and usage metrics.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Endpoints Example */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-1">
          <h2 className="font-headline-section text-headline-section text-on-surface">Real Endpoints, Real Control</h2>
          <p className="text-text-secondary">The Admin API is a Next.js REST API with Prisma-backed database access.</p>
          <div className="space-y-4">
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <span className="px-2 py-1 rounded text-xs font-mono bg-green-500/10 text-green-400 font-bold">GET</span>
              <span className="font-mono text-sm text-on-surface">/api/admin/worlds</span>
              <span className="text-text-low-emphasis text-xs ml-auto">List worlds</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <span className="px-2 py-1 rounded text-xs font-mono bg-green-500/10 text-green-400 font-bold">GET</span>
              <span className="font-mono text-sm text-on-surface">/api/admin/worlds/[id]</span>
              <span className="text-text-low-emphasis text-xs ml-auto">Get world</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <span className="px-2 py-1 rounded text-xs font-mono bg-blue-500/10 text-blue-400 font-bold">POST</span>
              <span className="font-mono text-sm text-on-surface">/api/admin/worlds</span>
              <span className="text-text-low-emphasis text-xs ml-auto">Create world</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <span className="px-2 py-1 rounded text-xs font-mono bg-yellow-500/10 text-yellow-400 font-bold">PATCH</span>
              <span className="font-mono text-sm text-on-surface">/api/admin/worlds/[id]</span>
              <span className="text-text-low-emphasis text-xs ml-auto">Update world</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <span className="px-2 py-1 rounded text-xs font-mono bg-red-500/10 text-red-400 font-bold">DELETE</span>
              <span className="font-mono text-sm text-on-surface">/api/admin/worlds/[id]</span>
              <span className="text-text-low-emphasis text-xs ml-auto">Delete world</span>
            </div>
          </div>
          <p className="text-text-secondary text-sm pt-2">Same pattern applies to universes, rooms, users, and bots.</p>
        </div>
        <div className="space-y-6 order-2">
          <div className="glass-card p-6 rounded-2xl border-purple/30">
            <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Authentication</h3>
            <p className="text-text-secondary text-sm mb-4">Two auth methods:</p>
            <div className="space-y-3">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-white font-bold text-sm mb-1">Admin Token</div>
                <code className="text-xs text-primary">Authorization: Bearer ADMIN_API_TOKEN</code>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-white font-bold text-sm mb-1">Session</div>
                <code className="text-xs text-primary">Super admin session via Orbit dashboard</code>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl border-purple/30">
            <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">Prisma</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">PostgreSQL</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">Zod Validation</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">AES-256 Encryption</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Deep Dives */}
      <Section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Deep Dives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/orbit-operator" className="glass-card p-card-padding rounded-2xl col-span-1 flex flex-col justify-between border-purple/20 cursor-pointer hover-lift">
            <div>
              <span className="material-symbols-outlined text-secondary mb-4 text-[32px]">dashboard_customize</span>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-2">Orbit Admin</h3>
              <p className="text-text-secondary text-caption">The UI layer that consumes this API. Manage your universe visually.</p>
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
              <p className="text-text-secondary text-caption">Deploy the full stack including the Admin API on your own infrastructure.</p>
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
