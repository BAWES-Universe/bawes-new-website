'use client'

import Link from 'next/link'
export default function ScreenSharingPageContent() {
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
          <span className="text-primary">Screen Sharing</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            New Feature Release
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Share Your Screen. <br/>
            <span className="text-primary">Stay in the Room.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button. Experience seamless spatial collaboration.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Unmatched Presence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">group_work</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">In-Bubble Sharing</h3>
              <p className="text-white/60">Share with everyone in your proximity bubble automatically. No need to manage participants manually; proximity is your permissions layer.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-2xl">meeting_room</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Meeting Rooms</h3>
              <p className="text-white/60">Share in walk-in meeting zones. Everyone in the zone sees your screen on the wall or in their personal viewport instantly.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">One-Click</h3>
              <p className="text-white/60">Activate instantly with the screenShareButton in the main action bar. Zero friction, total presence, no context switching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
            <div>
              <span className="material-symbols-outlined text-primary mb-2">speed</span>
              <div className="text-4xl font-bold text-white mb-1">20ms</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Latency</div>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">hd</span>
              <div className="text-4xl font-bold text-white mb-1">4K</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Resolution</div>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">security</span>
              <div className="text-4xl font-bold text-white mb-1">AES</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Encrypted</div>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">groups</span>
              <div className="text-4xl font-bold text-white mb-1">∞</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Participants</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card py-20 px-8 rounded-[32px]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to expand your universe?</h2>
            <p className="text-white/60 mb-10">Join thousands of pioneers already building, collaborating, and exploring in the BAWES Universe.</p>
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
