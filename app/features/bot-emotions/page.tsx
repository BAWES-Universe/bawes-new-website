'use client'

import Link from 'next/link'

export default function BotEmotionsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            New Feature: Affective AI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots Have <span className="text-gradient">Feelings</span> Too.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Emotional states that change how bots respond. Happy bots are more helpful; serious bots keep it professional. Configurable per bot.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Evolutionary Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">face</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Emotional States</h3>
              <p className="text-white/60">Happy, neutral, serious, playful. Choose the core personality of your bot.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">forum</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Response Modulation</h3>
              <p className="text-white/60">Vocabulary and tone automatically shift based on the active emotional state.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">tune</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Configurable</h3>
              <p className="text-white/60">Granular controls per individual bot. No global overrides required.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">auto_fix_high</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Dynamic</h3>
              <p className="text-white/60">Emotions shift fluidly based on user interaction sentiment analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Emotions Work */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">How Emotions Work</h2>
                <p className="text-white/60">Our Affective Computing engine processes inputs through three primary filters: length, vocabulary, and helpfulness.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <strong className="text-white">Length Vector</strong>
                      <span className="text-white/40 block">Playful bots are wordy; Serious bots are concise.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <strong className="text-white">Vocabulary Semantic Bias</strong>
                      <span className="text-white/40 block">Adjusts word choice toward empathetic or objective lexicons.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="text-white/40 text-xs ml-2 uppercase tracking-widest">emotion_engine.json</span>
                </div>
                <div className="space-y-2 text-white/80">
                  <div className="text-purple-400">{'"bot_state"'}: <span className="text-blue-300">{'{'}</span></div>
                  <div className="pl-4 text-purple-400">{'"current"'}: <span className="text-green-300">{'"JOYFUL"'}</span>,</div>
                  <div className="pl-4 text-purple-400">{'"intensity"'}: <span className="text-orange-300">0.85</span>,</div>
                  <div className="pl-4 text-purple-400">{'"modifiers"'}: <span className="text-blue-300">{'{'}</span></div>
                  <div className="pl-8 text-purple-400">{'"sentence_expansion"'}: <span className="text-orange-300">1.2</span>,</div>
                  <div className="pl-8 text-purple-400">{'"empathetic_bias"'}: <span className="text-orange-300">0.9</span>,</div>
                  <div className="pl-8 text-purple-400">{'"professional_filter"'}: <span className="text-green-300">false</span></div>
                  <div className="pl-4 text-blue-300">{'}'}</div>
                  <div className="text-blue-300">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to give your bot emotions?</h2>
          <p className="text-white/60 mb-8">Configure emotional states through the bot editor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/ai-bots" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300">
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
