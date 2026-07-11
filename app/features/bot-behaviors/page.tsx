'use client'

import Link from 'next/link'

export default function BotBehaviorsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span>/</span>
          <span className="text-primary">Bot Behaviors</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-gradient">Bot Behaviors</span> — AI That Moves Through Your Space
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Bots don't just wait for commands. They patrol, lead, guide, introduce, and respond to summons — making them active participants in your universe.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/60 leading-relaxed">
            Universe bots have three core behavior modes that determine how they interact with players in the spatial world. Each mode serves a different purpose, from quiet information kiosks to proactive tour guides. In addition to their default behavior, all bots support two special capabilities: summoning and leading.
          </p>
        </div>
      </section>

      {/* Behavior Modes */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Behavior Modes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Idle Mode</h3>
              <p className="text-white/60 mb-6 flex-grow">The bot waits quietly for players to approach. Ideal for help desks, information points, and stationary service stations.</p>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-primary">check_circle</span>
                  <span>Triggers on player proximity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-primary">check_circle</span>
                  <span>Greeting message activates when someone walks near</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-primary">check_circle</span>
                  <span>Best for: reception, FAQ, support, ticketing</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>route</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Patrol Mode</h3>
              <p className="text-white/60 mb-6 flex-grow">The bot walks a set of waypoints around the room autonomously. It follows a defined path, pausing at key points, before looping back.</p>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-secondary">check_circle</span>
                  <span>Configurable waypoints set in Orbit admin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-secondary">check_circle</span>
                  <span>Pauses at designated stops (info points, landmarks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-secondary">check_circle</span>
                  <span>Best for: museum tours, store guides, orientation</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>forum</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Social Mode</h3>
              <p className="text-white/60 mb-6 flex-grow">The bot proactively greets nearby users without waiting to be approached. Perfect for spaces that want visitors to feel welcomed immediately.</p>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-tertiary">check_circle</span>
                  <span>Proactively moves toward nearby players</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-tertiary">check_circle</span>
                  <span>Initiates conversations or offers tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-1 text-tertiary">check_circle</span>
                  <span>Best for: event entrances, community hubs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Capabilities */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Special Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-xl flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full primary-gradient flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">follow_the_signs</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Leading — Bots That Guide</h3>
                <p className="text-white/60 mb-6">Bots can lead people through your universe. When a bot offers a tour or directions, it walks alongside the player, showing the way to specific rooms, areas, or other players.</p>
              </div>
            </div>
            <div className="glass-card p-10 rounded-xl flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0566d9] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">hail</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Summoning — Bots That Come to You</h3>
                <p className="text-white/60 mb-6">Bots can be summoned by players to walk to their current location. Instead of finding the bot, you call it — and it navigates through rooms and corridors to reach you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="relative z-10 py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How It Works Under the Hood</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">settings_suggest</span>
              <div>
                <h4 className="font-semibold text-white mb-2">Configuration</h4>
                <p className="text-sm text-white/60">Manage behavior modes, waypoints, and summon permissions easily in the Orbit admin dashboard.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">radar</span>
              <div>
                <h4 className="font-semibold text-white mb-2">Proximity Detection</h4>
                <p className="text-sm text-white/60">Highly precise detection of players within a configurable radius to trigger localized interactions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-tertiary text-3xl">handshake</span>
              <div>
                <h4 className="font-semibold text-white mb-2">Graceful Handoff</h4>
                <p className="text-sm text-white/60">Automated flags for human takeover when interaction limits are reached, preserving conversation context.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to bring AI into your space?</h2>
          <p className="text-white/60 mb-8">Configure bots in minutes through Orbit.</p>
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
