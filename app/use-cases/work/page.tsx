'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function UseCaseWorkPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="Use Cases" className="hover:text-primary transition-colors">/use-cases</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">For Work</span>
        </div>
      </div>
            <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero leading-tight">
            Work That Moves.<br />
            <span className="text-primary">Not Meetings That Stall.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-lg">
            Replace the endless Slack threads and Zoom links with a spatial office. Walk into a room, see who&apos;s there, and start working.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] px-8 py-4 rounded-full font-label-navigation text-white hover:opacity-90 transition-all">
              Build Your Workspace
            </Button>
            <Button href="/how-it-works" className="px-8 py-4 rounded-full border border-white/30 font-label-navigation text-white hover:bg-white/5 transition-all">
              View Demo
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
          <div className="relative rounded-2xl overflow-hidden glass-card p-2 border-purple">
            <div className="aspect-video rounded-xl bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/30">business</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section mb-4">How It Works</h2>
          <p className="text-text-secondary">Spatial connectivity built for modern teams.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl">directions_walk</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Walk In</h3>
            <p className="text-text-secondary">Enter your team&apos;s room. See who&apos;s online. Hear the hum of activity as if you were in a physical studio.</p>
          </div>
          <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl">forum</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Connect</h3>
            <p className="text-text-secondary">Walk near a teammate to start a conversation. No scheduling, no links, just natural human proximity.</p>
          </div>
          <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl">center_focus_strong</span>
            </div>
            <h3 className="font-headline-card text-headline-card mb-4">Focus</h3>
            <p className="text-text-secondary">Need quiet? Move to a focus room. Need help? Walk to the support desk for immediate live collaboration.</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-surface-container-low py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-section text-headline-section mb-4">Key Features for Work</h2>
              <p className="text-text-secondary max-w-xl">Every feature is designed to reduce friction and increase the speed of high-bandwidth communication.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-6 rounded-xl flex flex-col h-full border-white/5">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>meeting_room</span>
              <h4 className="font-bold text-lg mb-2">Team Rooms</h4>
              <p className="text-text-low-emphasis text-sm">Permanent rooms for every team. Standups, brainstorming, watercooler chat — all in one space.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col h-full border-white/5">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>do_not_disturb_on</span>
              <h4 className="font-bold text-lg mb-2">Focus Zones</h4>
              <p className="text-text-low-emphasis text-sm">Silent areas with no audio for deep work mode. Eliminate interruptions without leaving the team space.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col h-full border-white/5">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <h4 className="font-bold text-lg mb-2">Private Meetings</h4>
              <p className="text-text-low-emphasis text-sm">Walk-in zones for client calls or 1:1s. Encrypted audio and high-fidelity screen sharing included.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col h-full border-white/5">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
              <h4 className="font-bold text-lg mb-2">Cross-Team Visibility</h4>
              <p className="text-text-low-emphasis text-sm">See who&apos;s in the building at a glance. Bump into people from other teams naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-center mb-16">Infinite Possibilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group rounded-2xl overflow-hidden glass-card">
            <div className="h-48 w-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">groups</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Remote-First Teams</h3>
              <p className="text-text-secondary mb-6">Your whole company in one spatial office. No more &quot;can you hop on a call?&quot; — just walk over.</p>
              <Link href="/features/proximity-chat" className="text-primary font-bold inline-flex items-center group/link">
                Learn more <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden glass-card">
            <div className="h-48 w-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-secondary/30">support_agent</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Client-Facing Teams</h3>
              <p className="text-text-secondary mb-6">Bring clients into a branded room for demos, walkthroughs, and support.</p>
              <Link href="/features/white-label" className="text-primary font-bold inline-flex items-center group/link">
                Learn more <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden glass-card">
            <div className="h-48 w-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-tertiary/30">celebration</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Co-Working Spaces</h3>
              <p className="text-text-secondary mb-6">Open plan studios where freelancers, startups, and creators coexist and collaborate.</p>
              <Link href="/how-it-works" className="text-primary font-bold inline-flex items-center group/link">
                Learn more <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
