'use client'

import Link from 'next/link'

export default function ProximityChatPage() {
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
          <span className="text-primary">Proximity Chat</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">spatial_audio</span>
            Spatial Voice Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Talk Like You're <span className="text-gradient">In the Same Room.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Proximity-based spatial voice chat with WebRTC. Walk closer to hear better, walk away to fade out. Powered by LiveKit for ultra-low latency.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Voice Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">spatial_audio</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Spatial Audio</h3>
              <p className="text-white/60">3D positional audio that makes voices sound like they're coming from the right direction and distance.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">graphic_eq</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Distance Attenuation</h3>
              <p className="text-white/60">Volume naturally decreases with distance. Whispers up close, muffled from across the room — just like real life.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">mic</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Push-to-Talk</h3>
              <p className="text-white/60">Optional PTT mode for cleaner audio environments. Configurable keybindings for advanced workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powered by LiveKit</h2>
              <p className="text-white/60 mb-8">All proximity voice runs on top of LiveKit's battle-tested WebRTC infrastructure, ensuring high-quality audio and smooth scaling from 2 to 2000 participants.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Ultra-low latency WebRTC</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Self-hostable SFU servers</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Opus codec for crisp voice</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl bg-black/40 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Audio Stack</h4>
              <div className="space-y-3 text-white/60">
                <div className="flex justify-between"><span>Codec</span><span className="text-primary">Opus</span></div>
                <div className="flex justify-between"><span>Latency</span><span className="text-primary">&lt;50ms</span></div>
                <div className="flex justify-between"><span>SFU</span><span className="text-primary">LiveKit</span></div>
                <div className="flex justify-between"><span>Spatial</span><span className="text-primary">HRTF 3D</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to talk in spatial audio?</h2>
          <p className="text-white/60 mb-8">Experience voice chat that feels as natural as being in the same room.</p>
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
