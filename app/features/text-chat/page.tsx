'use client'

import Link from 'next/link'

export default function TextChatPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">chat_bubble</span>
            Feature Spotlight
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Chat That Lives in the <span className="text-gradient">World</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Every room has its own chat channel. Text appears in bubbles above players. Messages are proximity-based — you see what's near you.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">meeting_room</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Per-Room Channels</h3>
              <p className="text-white/60">Each room has its own chat. Switch rooms, switch conversations instantly and seamlessly.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">groups</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proximity Visibility</h3>
              <p className="text-white/60">Messages appear in bubbles above nearby players. Walk closer to see more of the conversation naturally.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">smart_toy</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Bot Streaming</h3>
              <p className="text-white/60">AI bot responses stream token-by-token into chat bubbles in real-time. See the artificial intelligence think.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">history_edu</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Message History</h3>
              <p className="text-white/60">Scroll back through room history whenever you need to. You will never lose context of the journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spatial Communication */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Experience Spatial Communication</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl border-l-4 border-primary">
              <h4 className="text-lg font-semibold text-primary mb-4">In-World Display</h4>
              <p className="text-white/60">Messages float above players as interactive speech bubbles. It feels natural, spatial, and reduces the need for sidebar noise.</p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-4 border-secondary">
              <h4 className="text-lg font-semibold text-secondary mb-4">Bubble Visibility</h4>
              <p className="text-white/60">Privacy by geometry. Only visible to players within a certain range. Private conversations stay naturally shielded from afar.</p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-4 border-tertiary">
              <h4 className="text-lg font-semibold text-tertiary mb-4">Bot Integration</h4>
              <p className="text-white/60">AI agents possess their own distinct chat bubbles with streaming indicators, making digital life feel indistinguishable from human interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to join the conversation?</h2>
          <p className="text-white/60 mb-8">Enter the universe and start chatting.</p>
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
      </section>
    </div>
  )
}
