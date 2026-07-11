'use client'

import Link from 'next/link'

export default function BroadcastingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">podcasts</span>
            Live Events Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Broadcast to <span className="text-gradient">Everywhere.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Create live events that stream audio and video across the entire universe. Stage + audience zone layouts for virtual summits, concerts, and all-hands.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Broadcast Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">campaign</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">World-Wide Audio</h3>
              <p className="text-white/60">Broadcast your voice to every connected user in the universe — not just the room you're in. Your message reaches everyone.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">live_tv</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Stage & Audience</h3>
              <p className="text-white/60">Designated broadcast zones let speakers present while audiences listen in. Supports Q&A handoff and moderator controls.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">meeting_room</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Event Scheduling</h3>
              <p className="text-white/60">Plan broadcasts ahead of time with calendar integration. Auto-start at scheduled times with recording capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to broadcast your message?</h2>
          <p className="text-white/60 mb-8">Set up your first live event in minutes.</p>
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
