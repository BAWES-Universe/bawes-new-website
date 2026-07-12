'use client'

import Link from 'next/link'

export default function EmojiReactionsPage() {
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
          <span className="text-primary">Emoji Reactions</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            New Feature Released
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            React Without <span className="text-gradient">Words.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">touch_app</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Select Reaction</h3>
              <p className="text-white/60">Click the emoji button in the action bar to open the quick-select menu. Access a curated set of expressions at your fingertips.</p>
            </div>
            <div className="glass-card p-8 rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Instant Expression</h3>
              <p className="text-white/60">The chosen reaction appears briefly above your avatar's head. It's fluid, animated, and perfectly timed with your interaction.</p>
            </div>
            <div className="glass-card p-8 rounded-[24px]">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">group</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Shared Presence</h3>
              <p className="text-white/60">Nearby players see your reaction in real-time within your proximity bubble. Build connections without typing a single word.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Reactions */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Core Reactions</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="glass-card p-8 rounded-[24px] flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-6">👋</div>
              <div className="text-lg font-semibold text-white">Wave</div>
              <div className="text-xs text-white/40 mt-1">Greeting</div>
            </div>
            <div className="glass-card p-8 rounded-[24px] flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-6">😂</div>
              <div className="text-lg font-semibold text-white">Laugh</div>
              <div className="text-xs text-white/40 mt-1">Joy</div>
            </div>
            <div className="glass-card p-8 rounded-[24px] flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-6">👏</div>
              <div className="text-lg font-semibold text-white">Clap</div>
              <div className="text-xs text-white/40 mt-1">Appreciation</div>
            </div>
            <div className="glass-card p-8 rounded-[24px] flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-6">👍</div>
              <div className="text-lg font-semibold text-white">Thumbs Up</div>
              <div className="text-xs text-white/40 mt-1">Agreement</div>
            </div>
            <div className="glass-card p-8 rounded-[24px] flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-6">❤️</div>
              <div className="text-lg font-semibold text-white">Heart</div>
              <div className="text-xs text-white/40 mt-1">Love</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-[40px] p-12 md:p-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ready to express yourself?</h2>
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
