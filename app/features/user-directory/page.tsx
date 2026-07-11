'use client'

import Link from 'next/link'

export default function UserDirectoryPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            See Who's Around. <span className="text-gradient">Find Anyone.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Browse users, see their status, and locate them on the map. Know who's online across your universe in real-time with zero friction.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Browse Users</h3>
              <p className="text-white/60 text-sm">See all members and filter by group or world with advanced tagging.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined">sensors</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Status Indicators</h3>
              <p className="text-white/60 text-sm">Real-time Online, Busy, and Away status with synchronized color coding.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Locate on Map</h3>
              <p className="text-white/60 text-sm">Jump directly to anyone's location with one-click map tracking and pathing.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-400">
                <span className="material-symbols-outlined">sync</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform Sync</h3>
              <p className="text-white/60 text-sm">Automatic status synchronization with Discord, Matrix, and BAWES Kernel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to find your team?</h2>
          <p className="text-white/60 mb-8">Browse the directory and locate your fellow explorers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/communication" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
