'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function UseCaseCommunityPage() {
  return (
    <main>
      {/* Hero Section */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="Use Cases" className="hover:text-primary transition-colors">/use-cases</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">For Community</span>
        </div>
      </div>
            <section className="relative pt-32 pb-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
              Spaces Where <span className="text-gradient">Communities</span> Come Alive.
            </h1>
            <p className="text-text-secondary text-lg max-w-xl">
              Hangouts, gaming groups, fan communities, meetups — build a space where people actually want to spend time.
            </p>
            <div className="flex gap-4 pt-4">
              <Button href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-8 py-4 rounded-full font-label-navigation text-white shadow-lg transition-transform hover:scale-105">
                Create Your Space
              </Button>
              <Button href="/how-it-works" className="px-8 py-4 rounded-full font-label-navigation border border-white/30 text-white hover:bg-white/5 transition-all">
                View Demo
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative glass-card rounded-2xl overflow-hidden aspect-video shadow-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/30">diversity_3</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-section text-headline-section">The Mechanics of Connection</h2>
          <p className="text-text-secondary">Effortless world management for any community size.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
            </div>
            <h3 className="font-headline-card text-headline-card">Your Space, Your Rules</h3>
            <p className="text-text-low-emphasis">Create a world for your community. Set the map, permissions, and bots. Invite your members with full control over the ecosystem.</p>
          </div>
          <div className="glass-card p-8 rounded-xl space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            </div>
            <h3 className="font-headline-card text-headline-card">Always On</h3>
            <p className="text-text-low-emphasis">The space is always open. Members come and go. Conversations happen naturally across timezones in a persistent environment.</p>
          </div>
          <div className="glass-card p-8 rounded-xl space-y-4 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>broadcast_on_home</span>
            </div>
            <h3 className="font-headline-card text-headline-card">Events & Gatherings</h3>
            <p className="text-text-low-emphasis">Schedule live events. Broadcast to everyone with megaphone. Record with LiveKit egress for high-fidelity archival.</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto bg-surface-container-low/30 rounded-[40px] border border-divider">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section">Designed for Engagement</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">map</span>
            <h4 className="font-headline-card text-[18px] mb-2">Custom Worlds</h4>
            <p className="text-caption text-text-low-emphasis">Design your community&apos;s space with Tiled maps, zones, and interactive objects.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">smart_toy</span>
            <h4 className="font-headline-card text-[18px] mb-2">AI Bots</h4>
            <p className="text-caption text-text-low-emphasis">Greeters, moderators, and activity bots that live in your space and interact with members.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">campaign</span>
            <h4 className="font-headline-card text-[18px] mb-2">Megaphone</h4>
            <p className="text-caption text-text-low-emphasis">Announcements, live streams, and events. Reach everyone in the world at once.</p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-on-primary-fixed-variant mb-4 text-3xl">forum</span>
            <h4 className="font-headline-card text-[18px] mb-2">Persistent Chat</h4>
            <p className="text-caption text-text-low-emphasis">Matrix-powered chat history. Conversations survive between visits and sessions.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-section-padding-v px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-section text-headline-section mb-4">Every Community Has a Home</h2>
            <p className="text-text-secondary">From hardcore gaming guilds to local knitting clubs, BAWES provides the infrastructure for presence.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="relative glass-card rounded-2xl overflow-hidden mb-6 aspect-square flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-6xl text-primary/30">sports_esports</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-2">Gaming Communities</h3>
            <p className="text-text-low-emphasis">Game nights, watch parties, LFG rooms. Voice chat in the same space as the game for seamless immersion.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative glass-card rounded-2xl overflow-hidden mb-6 aspect-square flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-6xl text-secondary/30">auto_awesome</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-2">Fan Communities</h3>
            <p className="text-text-low-emphasis">Watch parties, listening sessions, and creative showcases. Build a space for your fandom to gather.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="relative glass-card rounded-2xl overflow-hidden mb-6 aspect-square flex items-center justify-center transition-all group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <span className="material-symbols-outlined text-6xl text-tertiary/30">handshake</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-2">Professional Networks</h3>
            <p className="text-text-low-emphasis">Industry meetups, alumni networks, and professional groups. Networking that feels natural.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
