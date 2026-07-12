'use client';

import React from 'react';
import Link from 'next/link';

export default function UseCaseCommercePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="Use Cases" className="hover:text-primary transition-colors">/use-cases</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Commerce</span>
        </div>
      </div>
            <section className="max-w-container-max mx-auto px-gutter py-section-padding-v flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
            <Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
            <span>/</span>
            <span className="text-primary">Commerce</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight">
            Monetize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">Universe.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            Turn your spatial world into a revenue engine. Sell subscriptions, tickets, services, and products — all from inside the experience.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all inline-block">
              Set Up Commerce
            </Link>
            <Link href="/how-it-works" className="font-label-navigation px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all inline-block">
              How It Works
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">payments</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* Revenue Models */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Revenue models that work in spatial worlds</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">subscriptions</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Subscriptions</h3>
            <p className="text-on-surface-variant leading-relaxed">Charge monthly or yearly for access to your Universe. Tiered plans for different levels of access, premium rooms, or private spaces. Recurring revenue, predictable growth.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">confirmation_number</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Ticketed Events</h3>
            <p className="text-on-surface-variant leading-relaxed">Sell tickets to conferences, concerts, workshops, and meetups. Live broadcasting, VIP rooms, and sponsor booths — all gateable by ticket tier.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary border border-tertiary/20">
              <span className="material-symbols-outlined text-3xl">sell</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Service Fees</h3>
            <p className="text-on-surface-variant leading-relaxed">Charge for premium services: tutoring sessions, consulting hours, private tours, or AI agent subscriptions. Pay-as-you-go or bundled.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white mb-4">Connect your existing commerce stack</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Universe does not replace your commerce infrastructure. It gives it a spatial front-end. Connect what you already use.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">shopping_cart</span>
              <span className="text-sm font-semibold">Stripe</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">payments</span>
              <span className="text-sm font-semibold">Shopify</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">confirmation_number</span>
              <span className="text-sm font-semibold">TicketMaster API</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">link</span>
              <span className="text-sm font-semibold">Payment Links</span>
            </div>
            <div className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center group transition-colors hover:border-primary/50">
              <span className="material-symbols-outlined text-primary text-2xl">build</span>
              <span className="text-sm font-semibold">Custom APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Commerce in action</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Real ways people are monetizing their spatial worlds.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">school</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">Premium Campus</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">A university sells semester access to its virtual campus. Students get lecture halls, study rooms, and AI tutoring — all under one subscription.</p>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">celebration</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">Ticketed Conference</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">A conference sells General Admission and VIP tickets. VIP holders get backstage rooms, speaker meetups, and premium seating in the broadcast area.</p>
              <Link href="/features/broadcasting" className="text-primary font-bold inline-flex items-center gap-2 text-sm group/link">
                See Broadcasting <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="h-48 relative overflow-hidden bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">groups</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background-page to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="font-headline-card text-headline-card text-white">Community Membership</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">A creator community charges a monthly fee for access to exclusive rooms, member-only events, and AI-powered networking bots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Links */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary/5 to-secondary/5 p-12 md:p-16 border border-primary/10">
          <div className="text-center mb-10">
            <h2 className="font-headline-section text-headline-section text-white mb-4">Related features</h2>
            <p className="text-on-surface-variant">The capabilities that make commerce possible in your Universe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/features/bot-tools" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl">construction</span>
              <h3 className="font-headline-card text-headline-card text-white">Bot Tool Calling</h3>
              <p className="text-on-surface-variant text-sm">Bots process checkout, issue tickets, and handle refunds via connected APIs.</p>
              <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </Link>
            <Link href="/features/bot-memory" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl">memory</span>
              <h3 className="font-headline-card text-headline-card text-white">Bot Memory</h3>
              <p className="text-on-surface-variant text-sm">AI concierges remember customer preferences, past purchases, and support history.</p>
              <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </Link>
            <Link href="/features/self-hosting" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-primary text-3xl">dns</span>
              <h3 className="font-headline-card text-headline-card text-white">Self-Hosting</h3>
              <p className="text-on-surface-variant text-sm">Keep all transaction data on your own infrastructure with full sovereignty.</p>
              <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
