'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface FeatureCardProps {
  href: string;
  icon: string;
  title: string;
  desc: string;
}

function FeatureCard({ href, icon, title, desc }: FeatureCardProps) {
  return (
    <Link href={href} className="glass-card p-6 rounded-xl flex flex-col h-full cursor-pointer hover-lift">
      <div className="mb-4">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
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
  title: string;
  desc: string;
}

function InfoCard({ icon, title, desc }: InfoCardProps) {
  return (
    <div className="info-card p-6 rounded-xl flex flex-col h-full" style={{ cursor: 'default' }}>
      <div className="mb-4">
        <span className="material-symbols-outlined text-3xl" style={{ color: 'rgba(167,139,250,0.5)' }}>{icon}</span>
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

      {/* SECTION 1: Communication */}
      <section>
        <div className="mb-12">
          <h2 className="font-headline-section text-headline-section mb-4">
            <Link href="/communication" className="hover:text-primary transition-colors">Communication</Link>
          </h2>
          <p className="text-text-secondary max-w-2xl">Connect, converse, and collaborate in real-time across your universe. From proximity voice to broadcasting, stay in touch with everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <FeatureCard href="/features/proximity-chat" icon="forum" title="Proximity Chat" desc="Natural conversation dynamics where volume depends on your avatar&apos;s distance." />
          <FeatureCard href="/features/megaphone" icon="diversity_3" title="Megaphone" desc="Broadcast your voice across entire zones for announcements or events." />
          <FeatureCard href="/features/broadcasting" icon="podcasts" title="Broadcasting" desc="Create live events that stream audio and video across the entire universe." />
          <FeatureCard href="/features/meeting-rooms" icon="meeting_room" title="Meeting Rooms" desc="Dedicated video conferencing rooms with spatial audio support." />
          <FeatureCard href="/features/text-chat" icon="chat" title="Text Chat" desc="Real-time text messaging between users and groups within your universe." />
          <FeatureCard href="/features/matrix-chat" icon="hub" title="Matrix Chat" desc="Federated chat via Matrix protocol for cross-universe conversations." />
          <FeatureCard href="/features/screen-sharing" icon="present_to_all" title="Screen Sharing" desc="Share your screen with others in real-time during meetings." />
          <FeatureCard href="/features/play-audio" icon="music_note" title="Play Audio" desc="Play music, sounds, and audio files in spatial environments." />
          <FeatureCard href="/features/follow" icon="group_work" title="Follow" desc="Follow other users to navigate the universe together." />
          <FeatureCard href="/features/lock-discuss" icon="verified_user" title="Lock & Moderate" desc="Moderate conversations, lock channels, and manage permissions." />
          <FeatureCard href="/features/emoji-reactions" icon="emoji_emotions" title="Emoji Reactions" desc="Express yourself with emoji reactions in chat and spatial spaces." />
          <FeatureCard href="/features/availability-status" icon="circle" title="Availability Status" desc="Show your presence — online, away, busy, or invisible — across the universe." />
          <FeatureCard href="/features/user-directory" icon="group" title="User Directory" desc="Browse and connect with users across your universe." />
        </div>
      </section>

      {/* SECTION 2: AI Bots */}
      <section className="relative">
        <div className="mb-12">
          <h2 className="font-headline-section text-headline-section mb-4">
            <Link href="/ai-bots" className="hover:text-primary transition-colors">AI Bots</Link>
          </h2>
          <p className="text-text-secondary max-w-2xl">Intelligent agents that inhabit your universe. Create, configure, and deploy bots that interact, remember, and act.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <FeatureCard href="/features/bot-behaviors" icon="psychology" title="Bot Behaviors" desc="Program complex routines for AI residents to follow within the world." />
          <FeatureCard href="/features/bot-memory" icon="memory" title="Bot Memory" desc="Bots remember past interactions, creating persistent relationships with users." />
          <FeatureCard href="/features/bot-streaming" icon="stream" title="Streaming Chat" desc="Low-latency, real-time voice and text responses from spatial AI agents." />
          <FeatureCard href="/features/bot-tools" icon="construction" title="Bot Tool Calling" desc="Bots can interact with APIs and external tools to perform real-world tasks." />
          <FeatureCard href="/features/bot-avatars" icon="face" title="Bot Avatars" desc="Customize bot appearances with unique avatars and visual identities." />
          <FeatureCard href="/features/bot-emotions" icon="favorite" title="Bot Emotions" desc="Emotional states and mood-driven responses for lifelike interactions." />
          <FeatureCard href="/features/bot-greetings" icon="waving_hand" title="Bot Greetings" desc="Personalized welcome messages and greeting behaviors for every visitor." />
          <FeatureCard href="/features/bot-provider-config" icon="settings" title="Bot Provider Config" desc="Configure AI providers — OpenAI, Anthropic, local models, and more." />
          <FeatureCard href="/features/recursive-bots" icon="device_hub" title="Recursive Bots" desc="Bots that spawn and coordinate other bots for complex multi-agent tasks." />
          <FeatureCard href="/features/bot-editor" icon="edit" title="Bot Editor" desc="Visual editor to create, tweak, and manage your entire bot fleet." />
        </div>
      </section>

      {/* SECTION 3: Build & Create */}
      <section>
        <div className="mb-12">
          <h2 className="font-headline-section text-headline-section mb-4">
            <Link href="/build" className="hover:text-primary transition-colors">Build &amp; Create</Link>
          </h2>
          <p className="text-text-secondary max-w-2xl">Everything you need to build, shape, and expand your universe. Maps, entities, scripts, and more — all at your fingertips.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <FeatureCard href="/features/maps" icon="map" title="Maps" desc="Infinite tiled maps with layered collision and interaction zones." />
          <FeatureCard href="/features/map-templates" icon="dashboard_customize" title="Map Templates" desc="Pre-configured spatial blueprints for offices, campuses, and events." />
          <FeatureCard href="/features/map-editor" icon="edit_square" title="Inline Map Editor" desc="Edit your world in real-time without leaving the platform." />
          <FeatureCard href="/features/avatar-platform" icon="face_6" title="Avatar Platform" desc="Advanced character customization and integration with external avatar systems." />
          <FeatureCard href="/features/woka-avatars" icon="face" title="Woka Avatars" desc="Pipoya-style pixel art avatars — colorful, expressive, and endlessly customizable." />
          <FeatureCard href="/features/area-zones" icon="widgets" title="Area Zones" desc="Define zones with custom behaviors, permissions, and environmental effects." />
          <FeatureCard href="/features/entity-editor" icon="view_in_ar" title="Entity Editor" desc="Place, configure, and manage interactive entities on your maps." />
          <FeatureCard href="/features/scripting" icon="code" title="Scripting API" desc="Extend functionality with a powerful scripting API for custom logic." />
          <FeatureCard href="/features/teleport" icon="near_me" title="Teleport" desc="Teleport users between maps, zones, and universes instantly." />
          <FeatureCard href="/features/orbit-operator" icon="space_dashboard" title="Orbit Operator" desc="Manual control over your universe — logs, worlds, performance, and bots." />
          <FeatureCard href="/features/searchable" icon="search" title="Searchable" desc="Make your universe content searchable with full-text discovery." />
        </div>
      </section>

      {/* SECTION 4: Platform */}
      <section>
        <div className="mb-12">
          <h2 className="font-headline-section text-headline-section mb-4">
            <Link href="/platform" className="hover:text-primary transition-colors">Platform</Link>
          </h2>
          <p className="text-text-secondary max-w-2xl">The engine that powers your universe. Self-host, customize, and scale with enterprise-grade infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          <FeatureCard href="/features/self-hosting" icon="dns" title="Self-Hosting" desc="Complete data sovereignty. Deploy BAWES Universe on your own private infrastructure." />
          <FeatureCard href="/features/admin-api" icon="api" title="Admin API" desc="Full programmatic control over worlds, users, and permissions through our robust REST API." />
          <FeatureCard href="/features/oidc-auth" icon="fingerprint" title="OIDC Auth" desc="Enterprise-grade security with OpenID Connect integration for seamless identity management." />
          <FeatureCard href="/features/white-label" icon="palette" title="White Label" desc="Custom domain, logos, and branding for your universe instance." />
          <FeatureCard href="/features/tech-stack" icon="layers" title="Technology Stack" desc="TypeScript, Node.js, WebRTC, AI, MCP — the technologies that power every world." />
        </div>
      </section>

      {/* MCP & Extensions */}
      <section>
        <div className="mb-12">
          <h2 className="font-headline-section text-headline-section mb-4">
            <Link href="/mcp-integration" className="hover:text-primary transition-colors">MCP &amp; Extensions</Link>
          </h2>
          <p className="text-text-secondary max-w-2xl">Connect to any data source or extend the platform with Model Context Protocol and open-source foundations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <FeatureCard href="/mcp-integration" icon="hub" title="Server Management" desc="Full lifecycle management for Model Context Protocol servers." />
          <FeatureCard href="/mcp-integration" icon="key" title="Auth Protocols" desc="Support for OAuth, Bearer, and API Key authentication for secure MCP connections." />
          <FeatureCard href="/mcp-integration" icon="visibility" title="Observability" desc="Real-time monitoring and logging of all MCP tool executions." />
          <FeatureCard href="/mcp-integration" icon="lock" title="MCP Encryption" desc="End-to-end encryption for all data processed through MCP nodes." />
          <FeatureCard href="/workadventure-fork" icon="terminal" title="WorkAdventure Fork" desc="A high-performance fork of WorkAdventure optimized for the BAWES ecosystem." />
        </div>
      </section>
    </main>
  );
}
