'use client'

import Link from 'next/link'

export default function BotGreetingsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-0">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Bot Greetings</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            First <span className="text-gradient">Impressions</span> Matter.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Custom greeting messages that play when someone approaches a bot. Make your bots welcoming, helpful, or delightfully mysterious.
          </p>
        </div>
      </section>

      {/* Core Components */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Core Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Custom Messages</h3>
              <p className="text-white/60">Set any greeting text for your bots with support for dynamic variables and multi-language strings.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-3xl">sensors</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proximity-Triggered</h3>
              <p className="text-white/60">Greeting plays automatically when a user enters the defined approach radius within the universe.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personality</h3>
              <p className="text-white/60">Match the greeting tone and style to the bot's unique personality profile for deep immersion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Under the Hood</h2>
                <p className="text-white/60 mb-6">Integration is simple. Our API uses standard JSON configurations to define interaction boundaries and response logic. Deploy in seconds.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>Lightweight WebSocket triggers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>Low-latency proximity checks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>Cross-platform event hooks</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-white/40">greeting_config.json</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <pre className="text-purple-200 leading-relaxed">
{'{'}
  <span className="text-orange-400">{'"bot_id"'}</span>: <span className="text-blue-400">{'"nexus_guard_04"'}</span>,
  <span className="text-orange-400">{'"proximity_radius"'}</span>: <span className="text-white">3</span>,
  <span className="text-orange-400">{'"message"'}</span>: <span className="text-blue-400">{'"Welcome to the Nexus!"'}</span>,
  <span className="text-orange-400">{'"trigger"'}</span>: <span className="text-blue-400">{'"on_approach"'}</span>,
  <span className="text-orange-400">{'"cooldown"'}</span>: <span className="text-white">300</span>,
  <span className="text-orange-400">{'"animations"'}</span>: [
    <span className="text-blue-400">{'"wave"'}</span>,
    <span className="text-blue-400">{'"glow_pulse"'}</span>
  ]
{'}'}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to create a greeting?</h2>
          <p className="text-white/60 mb-8">Make your bots welcoming from the very first encounter.</p>
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
