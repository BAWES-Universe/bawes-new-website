'use client'

import Link from 'next/link'

export default function AreaZonesPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
            {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/build" className="hover:text-primary transition-colors">Build & Create</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Area Zones</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Area Zones v2.4
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Trigger Actions <span className="text-primary italic">with Every Step</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Walk over a zone and something happens — open a website, play audio, teleport to another world, start a meeting, or trigger a megaphone broadcast. 18+ zone properties at your fingertips.
          </p>
        </div>
      </section>

      {/* How They Work */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How They Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-purple-500/20">
                <span className="material-symbols-outlined text-primary">login</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Entry/Exit Triggers</h3>
              <p className="text-white/60">Actions fire when a player walks into or out of a zone. Configured in the inline map editor.</p>
            </div>
            <div className="glass-card p-8 rounded-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-purple-500/20">
                <span className="material-symbols-outlined text-primary">volume_off</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Silent Zones</h3>
              <p className="text-white/60">Mute audio/video for players inside. Useful for libraries, presentations, or focus areas.</p>
            </div>
            <div className="glass-card p-8 rounded-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-purple-500/20">
                <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Restricted Rights</h3>
              <p className="text-white/60">Control who can interact within a zone using access tags. Only tagged users can enter or act.</p>
            </div>
            <div className="glass-card p-8 rounded-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-purple-500/20">
                <span className="material-symbols-outlined text-primary">video_call</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Meeting Room Zones</h3>
              <p className="text-white/60">Walk into a zone to auto-join a Jitsi/BBB meeting or LiveKit room instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Properties */}
      <section className="relative z-10 py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Zone Properties</h2>
          <p className="text-white/60 mb-12">Atomic attributes that define zone behavior.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              ['language', 'openWebsite'],
              ['music_note', 'playAudio'],
              ['fort', 'teleport'],
              ['data_object', 'setVariable'],
              ['groups', 'livekitRoom'],
              ['forum', 'jitsiRoom'],
              ['meeting_room', 'bbbRoom'],
              ['campaign', 'megaphoneSpeaker'],
              ['hearing', 'megaphoneListener'],
              ['mic_off', 'startWithAudioMuted'],
              ['videocam_off', 'startWithVideoMuted'],
              ['volume_off', 'silentZone'],
              ['lock', 'restrictedRights'],
              ['search', 'searchable'],
            ].map(([icon, label]) => (
              <div key={label} className="glass-card p-4 rounded-xl flex flex-col items-center text-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
                <span className="text-xs text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 md:p-24 rounded-[40px] text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to define your space?</h2>
            <p className="text-white/60 mb-8">Join thousands of creators building interactive experiences in the BAWES Universe.</p>
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
