'use client'

import Link from 'next/link'

export default function MatrixChatPage() {
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
          <span className="text-primary">Matrix Chat</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-sm">hub</span>
            SYNAPSE PROTOCOL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Chat That <span className="text-primary">Persists.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Optional Matrix/Synapse integration for persistent chat history. Conversations survive between visits. Cross-room message sync across the entire digital frontier.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Infrastructure for Continuity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-purple-500/20">
                <span className="material-symbols-outlined">history</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Persistent History</h3>
              <p className="text-white/60">Messages survive when you leave. Pick up exactly where you left off, every time.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Synapse Backend</h3>
              <p className="text-white/60">Self-hosted Matrix server support. Full control over your data and infrastructure.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary border border-tertiary/20">
                <span className="material-symbols-outlined">sync_alt</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Cross-Room Sync</h3>
              <p className="text-white/60">Conversation continuity across the entire universe. Stay connected as you move.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/20">
                <span className="material-symbols-outlined">settings_suggest</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Optional Setup</h3>
              <p className="text-white/60">Not required for core chat. A powerful enhancement for teams needing archival support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card py-20 px-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready for persistent presence?</h2>
            <p className="text-white/60 mb-10">Join the distributed network and take control of your communication history today.</p>
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
