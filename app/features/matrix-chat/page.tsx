'use client'

import Link from 'next/link'

export default function MatrixChatPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
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
              <Link href="/features/communication" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to Communication
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300">
                <span className="material-symbols-outlined text-lg">explore</span>
                Explore the Universe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
