'use client'

import Link from 'next/link'

export default function AvailabilityStatusPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let Them Know <span className="text-primary">You're Busy.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Set your status — Online, Busy, or Away. Syncs across platforms so everyone knows when you're available in the digital frontier.
          </p>
        </div>
      </section>

      {/* Status Options */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Presence is Presence.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/30">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Available</h3>
              <p className="text-white/60">You're active and ready for spontaneous proximity chat or calls. Perfect for collaborative exploring.</p>
              <div className="mt-8 text-green-400 font-semibold flex items-center gap-2">
                Online <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/30">
                <span className="material-symbols-outlined text-red-400">block</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Do Not Disturb</h3>
              <p className="text-white/60">Stay focused. Proximity chat is muted and notifications are silenced. You are visible but unreachable.</p>
              <div className="mt-8 text-red-400 font-semibold flex items-center gap-2">
                Busy <span className="w-2 h-2 rounded-full bg-red-400"></span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary">schedule</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Idle</h3>
              <p className="text-white/60">You're currently away from your keyboard or in another tab. Status updates automatically based on activity.</p>
              <div className="mt-8 text-tertiary font-semibold flex items-center gap-2">
                Away <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Sync */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">diamond</span>
                </div>
                <span className="font-semibold text-white">Discord</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-4xl">hub</span>
                </div>
                <span className="font-semibold text-white">Matrix</span>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Sync Everywhere.</h2>
              <p className="text-white/60">Your BAWES status automatically propagates to your connected social hubs. Whether you're in the Universe or browsing the web, your friends on Discord and Matrix stay updated.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary">sync</span> Real-time state replication</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary">lock</span> Secure API handshakes</li>
                <li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary">settings</span> Granular platform controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to set your status?</h2>
          <p className="text-white/60 mb-8">Let the universe know when you're available.</p>
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
