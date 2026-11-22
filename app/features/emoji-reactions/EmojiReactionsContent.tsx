'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function EmojiReactionsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Emoji Reactions"
        title={<>React without <span className="text-gradient-accent">words</span></>}
        lead={<>Pop a quick emoji over your avatar to laugh, cheer or wave without cutting in.</>}
        detail={[
          <>Quick emoji reactions that appear above your avatar. Laugh, cheer, wave, or acknowledge — without interrupting the conversation.</>,
        ]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_emoji_reactions"
      />

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

      <PageClosing
        title={<>Ready to express yourself?</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_emoji_reactions"
      />
    </div>
  )
}
