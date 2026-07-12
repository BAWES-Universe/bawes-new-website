'use client'

import Link from 'next/link'

export default function LockDiscussPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
            {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/communication" className="hover:text-primary transition-colors">Communication</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Lock & Discuss</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            New Privacy Control
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Lock In. <span className="text-gradient">Focus Up.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Seamless Privacy Control</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 text-white pointer-events-none">1</div>
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">touch_app</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Click Lock</h3>
              <p className="text-white/60">Click the lock icon on your active conversation bubble to immediately secure your current session.</p>
            </div>
            <div className="glass-card p-10 rounded-xl relative overflow-hidden border-primary/40 bg-white/5 scale-105">
              <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 text-white pointer-events-none">2</div>
              <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">shield_person</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Stay Private</h3>
              <p className="text-white/60">New people cannot join the bubble while it is locked. Your conversation remains exclusive to existing participants.</p>
            </div>
            <div className="glass-card p-10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 text-white pointer-events-none">3</div>
              <div className="w-14 h-14 rounded-full bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">lock_open</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Open Again</h3>
              <p className="text-white/60">Simply click unlock whenever you're ready to allow others to join and expand the conversation dynamic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-tertiary text-sm uppercase tracking-widest font-semibold">Contexts</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Modern Flow</h2>
            </div>
            <p className="text-white/60 max-w-md">Whether you are collaborating on a global project or catching up 1:1, BAWES Lock adapts to your rhythm.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Private 1:1s</h3>
              <p className="text-white/60">Have confidential 1:1 meetings even in the middle of a busy campus or room without interruptions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Focused Group Work</h3>
              <p className="text-white/60">Block out distractions and prevent accidental walk-ins during deep-work team sessions in shared hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to lock in and focus?</h2>
          <p className="text-white/60 mb-8">Secure your conversations with one click.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/features-overview" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
