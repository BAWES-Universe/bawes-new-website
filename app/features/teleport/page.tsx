'use client'

import Link from 'next/link'

export default function TeleportPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            Next-Gen Spatial Travel
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Jump Between Worlds <span className="text-primary">Instantly</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Teleport between universes, worlds, and rooms via area zone property. Set a destination coordinate on any zone — walk in and arrive somewhere else.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Spatial Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl">language</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Universal Teleport</h3>
              <p className="text-white/60">Teleport between any universe, world, or room in the digital frontier without restrictions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-3xl">target</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Zone-Triggered</h3>
              <p className="text-white/60">Configured directly as an area zone property in the editor for precise behavioral control.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Seamless</h3>
              <p className="text-white/60">Instant transition with zero loading screens for a truly immersive and fluid spatial feel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="glass-card rounded-2xl overflow-hidden border border-primary/20">
                <div className="bg-white/5 h-8 flex items-center px-4 gap-1.5 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                </div>
                <div className="aspect-video bg-black/40 flex items-center justify-center p-4">
                  <span className="text-white/60 text-sm">Teleport Zone Editor</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Master the Spatial Triggers</h2>
              <p className="text-white/60">Every zone can be a gateway to another world. Our inline map editor gives you surgical precision over teleportation properties, allowing you to create complex web-like connections between disparate spatial environments.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Pixel-perfect coordinate mapping</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Cross-universe destination support</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Programmable arrival orientations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-[2rem] p-12 md:p-20 text-center border-primary/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Teleport?</h2>
            <p className="text-white/60 mb-8">The frontier is waiting. Start building your interconnected spatial experience today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                Explore the Universe
              </Link>
              <Link href="/build" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300">
                See all features →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
