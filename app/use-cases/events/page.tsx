'use client';

import React from 'react';
import Link from 'next/link';

export default function UseCaseEventsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="Use Cases" className="hover:text-primary transition-colors">/use-cases</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Events</span>
        </div>
      </div>
            <section className="max-w-container-max mx-auto px-gutter py-section-padding-v flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
            <Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
            <span>/</span>
            <span className="text-primary">Events</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight">
            Events That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">Fill the Room.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the entire universe. Stage + audience zones, sponsor halls, and networking that actually works.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all inline-block">
              Plan Your Event
            </Link>
            <Link href="/features/broadcasting" className="font-label-navigation px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all inline-block">
              See Broadcasting Feature
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">podcasts</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* Event Types */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Events of every scale</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">campaign</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Conferences & Summits</h3>
            <p className="text-on-surface-variant leading-relaxed">Multi-track conferences with main stages, breakout rooms, sponsor halls, and networking lounges. Broadcast audio and video to thousands of attendees simultaneously.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">music_note</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Concerts & Performances</h3>
            <p className="text-on-surface-variant leading-relaxed">Live music, comedy shows, and performances with spatial audio. The stage becomes the focal point while the audience fills the room together.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary border border-tertiary/20">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Meetups & Workshops</h3>
            <p className="text-on-surface-variant leading-relaxed">Intimate gatherings for hands-on workshops, AMAs, and networking. Small enough to have real conversations, big enough to matter.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white mb-4">How events work</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">From setup to broadcast, every piece is built for live experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">map</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Build the Venue</h3>
              <p className="text-on-surface-variant text-sm">Design your event space with maps, stages, seating zones, and backstage areas.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">podcasts</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Set Up Broadcasting</h3>
              <p className="text-on-surface-variant text-sm">Configure audio/video streams, stage camera angles, and screen sharing for presentations.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">confirmation_number</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Manage Access</h3>
              <p className="text-on-surface-variant text-sm">Gate rooms by ticket tier, set capacity limits, and let VIPs into exclusive areas.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">monitoring</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Go Live</h3>
              <p className="text-on-surface-variant text-sm">Launch the event, monitor attendance, broadcast to the world, and network with attendees naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary/5 to-secondary/5 p-12 md:p-16 border border-primary/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-purple-300 border border-purple-500/20">
                <span className="material-symbols-outlined text-sm">podcasts</span>
                Core Feature
              </div>
              <h2 className="font-headline-section text-headline-section text-white">
                Broadcasting — the engine behind every event.
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Broadcast to Everywhere. Create live events that stream audio and video across the entire universe. Stage + audience zone layouts for virtual summits, concerts, and all-hands. The broadcasting feature is what makes events at scale possible.
              </p>
              <Link href="/features/broadcasting" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                Explore Broadcasting Feature <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/20">rss_feed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Powered by these features</h2>
          <p className="text-on-surface-variant">Every event relies on a combination of spatial capabilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link href="/features/proximity-chat" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">forum</span>
            <h3 className="font-headline-card text-headline-card text-white">Proximity Chat</h3>
            <p className="text-on-surface-variant text-sm">Natural conversation in networking zones.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/megaphone" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
            <h3 className="font-headline-card text-headline-card text-white">Megaphone</h3>
            <p className="text-on-surface-variant text-sm">Broadcast announcements across entire zones.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/maps" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">map</span>
            <h3 className="font-headline-card text-headline-card text-white">Maps</h3>
            <p className="text-on-surface-variant text-sm">Stage layouts, audience zones, and venue design.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/bot-behaviors" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            <h3 className="font-headline-card text-headline-card text-white">Bot Behaviors</h3>
            <p className="text-on-surface-variant text-sm">Welcome bots, info desks, and event assistants.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="glass-card rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-display-hero text-headline-section md:text-display-hero text-white max-w-3xl mx-auto">
              Ready to host your first event?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-10 py-5 rounded-full shadow-lg active:scale-95 transition-all text-lg inline-block">
                Plan Your Event
              </Link>
              <Link href="/features/broadcasting" className="font-label-navigation px-10 py-5 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all text-lg inline-block">
                Broadcasting Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
