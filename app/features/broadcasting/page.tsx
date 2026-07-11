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
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/communication" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300">
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
