'use client'

import Link from 'next/link'

export default function SearchablePage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/build" className="hover:text-primary transition-colors">Build & Create</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Searchable</span>
        </div>
      </div>
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Find What You Need. <span className="text-gradient">Instantly.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Make areas and entities discoverable in Orbit search. Tag any zone or object as searchable so users can find it from anywhere.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-[28px]">explore</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Orbit Discovery</h3>
              <p className="text-white/60">All tagged items appear instantly in the global Orbit search bar, accessible from any point in the universe.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-[28px]">location_on</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Zone Searchable</h3>
              <p className="text-white/60">Set the 'searchable' property on any area zone to make it a global destination for instant teleportation.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-[28px]">smart_toy</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Entity Searchable</h3>
              <p className="text-white/60">Make any interactive object, AI bot, or unique entity findable across the entire BAWES ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-[32px] p-12 md:p-24 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to make your world searchable?</h2>
            <p className="text-white/60 mb-8">Start indexing your entities today and provide your users with the ultimate navigation experience.</p>
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
        </div>
      </section>
    </div>
  )
}
