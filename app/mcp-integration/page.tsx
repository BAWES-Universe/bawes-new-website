'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function McpIntegrationPage() {
  return (
    <main className="relative pt-20">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="material-symbols-outlined text-sm text-primary">hub</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">MCP Protocol v1.0</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Connect <span className="text-gradient">Everything.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-xl">
            Model Context Protocol (MCP) integration lets your bots connect to any tool, API, or data source. Give your AI agents real-time access to calendars, databases, ticketing systems, and more — all from inside your universe.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="primary-gradient text-white px-8 py-4 rounded-full font-bold neon-glow-purple active:scale-95 transition-all flex items-center gap-2">
              View MCP Servers
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="glass-card text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
              Documentation
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-2xl p-8 overflow-hidden border-purple/30">
            <div className="flex items-center gap-2 mb-6 border-b border-divider pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="ml-4 text-caption text-text-low-emphasis font-mono">mcp-config.json</div>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-primary overflow-x-auto">{`{
  "mcpServers": {
    "calendar": {
      "url": "https://mcp.bawes.io/calendar",
      "tools": ["list_events", "create_event"]
    },
    "ticketing": {
      "url": "https://mcp.bawes.io/jira",
      "tools": ["search_issues", "create_ticket"]
    }
  }
}`}</pre>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <span className="material-symbols-outlined text-[200px]">hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">Extend Bot Intelligence</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">MCP turns your bots from conversational agents into capable assistants that can act on your behalf.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">api</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">MCP Protocol Support</h3>
              <p className="text-text-secondary">BAWES integrates with the Model Context Protocol, allowing AI agents to interact with your spatial worlds through a standardized API.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">smart_toy</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Agent-Driven Automation</h3>
              <p className="text-text-secondary">Let AI agents manage maps, bots, users, and events programmatically. Automate moderation, spawn bots, and orchestrate complex workflows.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">build</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Extensible Tool System</h3>
              <p className="text-text-secondary">Extend BAWES with custom MCP servers and tools. Add your own capabilities that AI agents can discover and use within your universe.</p>
            </div>
            <div className="glass-card p-card-padding rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">code</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Developer-Friendly API</h3>
              <p className="text-text-secondary">Well-documented API endpoints and TypeScript types make integration straightforward. Build custom MCP clients and servers with minimal friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Related Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/bot-tools" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">handyman</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">Bot Tool Calling</h3>
            <p className="text-text-secondary text-sm">Bots invoke tools inside conversations to perform real-world actions.</p>
          </Link>
          <Link href="/features/bot-behaviors" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">psychology</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">Bot Behaviors</h3>
            <p className="text-text-secondary text-sm">Define complex behavioral patterns and personality-driven AI responses.</p>
          </Link>
          <Link href="/features/scripting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">terminal</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">Scripting API</h3>
            <p className="text-text-secondary text-sm">Write custom in-world logic with JS/TS for complete control.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-6">Ready to connect your bots?</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">Give your AI agents the power to act. MCP integration unlocks a new dimension of bot capabilities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="primary-gradient text-white px-10 py-4 rounded-full font-bold neon-glow-purple active:scale-95 transition-all">Get Started with MCP</button>
            <button className="glass-card text-on-surface px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all">View Documentation</button>
          </div>
        </div>
      </section>
    </main>
  );
}
