'use client';

import React from 'react';
import Link from 'next/link';

export default function UseCasePersonalPage() {
  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Personal</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white tracking-tight">
            A Universe That's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]">Yours.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            Build your own digital sanctuary. Custom AI companions, organized workspaces, and a place where friends are always welcome to drop in.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="https://universe.bawes.net" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all inline-block">
              Enter the Universe
            </Link>
            <Link href="/ai-bots" className="font-label-navigation px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all inline-block">
              Meet the Bots
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/30">home_heart</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Your universe, your rules</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">AI Companions</h3>
            <p className="text-on-surface-variant leading-relaxed">Create custom AI companions that remember you, know your name, and help with tasks. They live in your universe and are always there when you need them — no scheduling, no sign-up.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-3xl">edit_square</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Your Space</h3>
            <p className="text-on-surface-variant leading-relaxed">Design rooms the way you want. Organize workspaces, build a cozy hangout, or create a private lab for experiments. The map editor lets you change everything — live, in your browser.</p>
          </div>
          <div className="glass-card p-10 rounded-2xl group hover:translate-y-[-4px] transition-all duration-300">
            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary border border-tertiary/20">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <h3 className="font-headline-card text-headline-card text-white mb-4">Friends Welcome</h3>
            <p className="text-on-surface-variant leading-relaxed">Open your doors whenever you want. Drop in, hang out, explore your bot companions together. It's a place where people actually want to visit — because it feels like you.</p>
          </div>
        </div>
      </section>

      {/* Why Personal */}
      <section className="bg-surface-container-lowest/50 py-section-padding-v relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-white mb-4">Why build a personal universe?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">A place that's yours is different from everything else on the internet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">memory</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Bots Remember You</h3>
              <p className="text-on-surface-variant text-sm">Past conversations, your name, what you like. Your AI companions build a real relationship with you over time.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">lock</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Private by Default</h3>
              <p className="text-on-surface-variant text-sm">Choose who enters your universe. Your space, your community — you decide who's welcome.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">extension</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Connect Your Tools</h3>
              <p className="text-surface-variant text-sm">Your bots can open websites, trigger scripts, and talk to your real apps via MCP. Your personal universe does real work.</p>
            </div>
            <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">open_in_full</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white">Grows With You</h3>
              <p className="text-surface-variant text-sm">Start with one room and one bot. Add worlds, invite friends, build tools. Your universe scales as your ideas do.</p>
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
                <span className="material-symbols-outlined text-sm">favorite</span>
                The Soul of Your Universe
              </div>
              <h2 className="font-headline-section text-headline-section text-white">
                AI companions that feel like company.
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Your bots aren't chatbots — they're residents. They have personalities, remember your name, greet you when you walk in, and can do real things like open websites or run scripts. Customize their appearance, choose their AI provider, and give them unique emotional profiles. Build a bot that feels like yours.
              </p>
              <Link href="/ai-bots" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                Explore Bot Features <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl text-primary/20">favorite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding-v">
        <div className="text-center mb-16">
          <h2 className="font-headline-section text-headline-section text-white mb-4">Powered by these features</h2>
          <p className="text-on-surface-variant">Everything you need to build a personal universe that's truly yours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Link href="/features/bot-memory" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">memory</span>
            <h3 className="font-headline-card text-headline-card text-white">Bot Memory</h3>
            <p className="text-on-surface-variant text-sm">Your bots remember every conversation.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/bot-emotions" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
            <h3 className="font-headline-card text-headline-card text-white">Bot Emotions</h3>
            <p className="text-on-surface-variant text-sm">Personalities that feel alive.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/bot-greetings" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">waving_hand</span>
            <h3 className="font-headline-card text-headline-card text-white">Bot Greetings</h3>
            <p className="text-on-surface-variant text-sm">Walk in, get welcomed by name.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/proximity-chat" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">forum</span>
            <h3 className="font-headline-card text-headline-card text-white">Proximity Chat</h3>
            <p className="text-on-surface-variant text-sm">Hang out with friends — walk up, talk naturally.</p>
            <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
          </Link>
          <Link href="/features/map-editor" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
            <span className="material-symbols-outlined text-primary text-3xl">edit_square</span>
            <h3 className="font-headline-card text-headline-card text-white">Map Editor</h3>
            <p className="text-on-surface-variant text-sm">Design your space live.</p>
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
              Your universe is waiting.
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
              Free to explore. Free to build. No credit card. No commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="https://universe.bawes.net" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-label-navigation px-10 py-5 rounded-full shadow-lg active:scale-95 transition-all text-lg inline-block">
                Enter the Universe
              </Link>
              <Link href="/ai-bots" className="font-label-navigation px-10 py-5 rounded-full border border-white/30 text-white hover:bg-white/5 active:scale-95 transition-all text-lg inline-block">
                Meet the Bots
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
