'use client'

import Link from 'next/link'

export default function MapsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-xs text-text-muted">
        <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
        <span>/</span>
        <span className="text-primary">Maps</span>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">map</span>
            Spatial Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Every Space Has <span className="text-gradient">a Place.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Maps are the structural foundation of the BAWES Universe. Upload your own pixel-art maps, organize them into worlds and rooms, and create complex spatial hierarchies.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Map Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">map</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Uploads</h3>
              <p className="text-white/60">Upload your own tile maps in standard formats. BAWES supports Tiled JSON maps, PNG exports, and various pixel-art formats.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">layers</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">World Hierarchy</h3>
              <p className="text-white/60">Organize maps into worlds and rooms. Create nested spatial structures that mirror real or fantastical geographies.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">edit_square</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Editing</h3>
              <p className="text-white/60">Modify maps in real-time using the inline editor. Add zones, move entities, and update environments without redeployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build your world?</h2>
          <p className="text-white/60 mb-8">Upload your first map and start creating spatial experiences.</p>
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
