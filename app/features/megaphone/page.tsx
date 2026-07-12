'use client'

import Link from 'next/link'

export default function MegaphonePage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-4 text-xs text-text-muted w-full justify-start">
        <Link href="/communication" className="hover:text-primary transition-colors">Communication</Link>
        <span>/</span>
        <span className="text-primary">Megaphone</span>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">volume_up</span>
            Proximity Broadcast
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Speak Loud. <br/><span className="text-gradient">Be Heard.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Zone-based megaphone: designate speakers and listeners within area zones. Amplify your voice to a whole room — or silence it with a silent zone.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Megaphone Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">campaign</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Speaker Zones</h3>
              <p className="text-white/60">Designate zones where users become megaphone speakers. Their voice reaches the entire designated area or room.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">hearing</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Listener Zones</h3>
              <p className="text-white/60">Users in listener zones receive the broadcast. Control who hears what across your spatial environments.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">volume_off</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Silent Zones</h3>
              <p className="text-white/60">Mute audio/video for players inside silent zones. Useful for libraries, presentations, or focus areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Config */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Zone Properties</h2>
                <p className="text-white/60 mb-6">Configure megaphone behavior through simple zone properties in the inline map editor. No coding required.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> megaphoneSpeaker — Designates broadcast origin</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> megaphoneListener — Designates broadcast receiver</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> silentZone — Mutes audio in restricted areas</li>
                </ul>
              </div>
              <div className="glass-card p-6 rounded-xl bg-black/40 border border-white/10 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white/40 text-xs ml-2 uppercase">zone_config.json</span>
                </div>
                <pre className="text-white/70">
                  <span className="text-orange-400">{'"zone_id"'}</span>: <span className="text-blue-400">{'"stage_01"'}</span>,{'\n'}
                  <span className="text-orange-400">{'"type"'}</span>: <span className="text-blue-400">{'"megaphoneSpeaker"'}</span>,{'\n'}
                  <span className="text-orange-400">{'"range"'}</span>: <span className="text-white">50</span>,{'\n'}
                  <span className="text-orange-400">{'"persistent"'}</span>: <span className="text-purple-400">true</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to broadcast your voice?</h2>
          <p className="text-white/60 mb-8">Set up megaphone zones in your universe today.</p>
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
