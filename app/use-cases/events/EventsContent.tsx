'use client'

'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function UseCaseEventsPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="Events"
        title={<>Events that <span className="text-gradient-accent">fill the room</span></>}
        lead={<>Conferences, concerts, meetups and all-hands, with a stage, an audience, and room to mingle afterwards.</>}
        detail={[
          <>Conferences, concerts, meetups, and all-hands — broadcast live to thousands across the entire universe. Stage + audience zones, sponsor halls, and networking that actually works.</>,
        ]}
        scene="stage"
        actions={[{ label: 'Plan your event', href: '/contact' }, { label: 'See broadcasting', href: '/features/broadcasting' }]}
        source="page_use_cases_events"
      />

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
            <p className="text-on-surface-variant leading-relaxed">Multi-track conferences with main stages, breakout rooms, sponsor halls, and networking lounges. Broadcast audio and video to the whole audience at once.</p>
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

      <PageClosing
        title={<>Ready to host your first event?</>}
        links={[{ label: 'Plan your event', href: '/contact' }, { label: 'Broadcasting details', href: '/features/broadcasting' }]}
        source="page_use_cases_events"
      />
    </main>
  );
}
