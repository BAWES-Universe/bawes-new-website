'use client'

import Link from 'next/link'

export default function PlayAudioPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">spatial_audio</span>
            Spatial Audio Engine
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Sound That <span className="text-gradient">Follows You.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Configure areas to trigger audio files when someone walks in. Perfect for entrance music, announcement chimes, or ambient atmosphere.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Spatial Audio Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zone-Triggered</h3>
              <p className="text-white/60 text-sm">Audio plays automatically upon area entry, creating seamless transitions between environments.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 text-secondary">
                <span className="material-symbols-outlined text-3xl">audio_file</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">File-Based</h3>
              <p className="text-white/60 text-sm">Easily upload any common audio format. Low-latency playback ensures immediate interaction.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30 text-tertiary">
                <span className="material-symbols-outlined text-3xl">surround_sound</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ambiance</h3>
              <p className="text-white/60 text-sm">Set persistent background music for specific rooms with fine-tuned volume attenuation.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30 text-red-400">
                <span className="material-symbols-outlined text-3xl">campaign</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Announcements</h3>
              <p className="text-white/60 text-sm">Trigger chimes or alerts for global events and real-time updates within your universe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Spatial Audio Engine</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary font-bold text-xs">01</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Culling & Optimization</h4>
                    <p className="text-white/60 text-sm">Our engine only processes active audio sources within the user's vicinity, ensuring high performance even in crowded spaces.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary font-bold text-xs">02</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Spatial Attenuation</h4>
                    <p className="text-white/60 text-sm">Volume and frequency response adjust dynamically based on the distance and orientation between the listener and the trigger zone.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary font-bold text-xs">03</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Decentralized Storage</h4>
                    <p className="text-white/60 text-sm">Audio assets are stored on decentralized protocols, guaranteeing that your soundscapes remain online and accessible forever.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-1 overflow-hidden rounded-3xl">
              <div className="bg-black/40 rounded-2xl p-8">
                <div className="font-mono text-xs text-primary/60 mb-6 flex justify-between items-center border-b border-white/5 pb-2">
                  <span>// AUDIO_CORE_LOGIC.TS</span>
                </div>
                <pre className="text-sm font-mono text-white/60">
                  <span className="text-blue-400">const</span> <span className="text-primary">audioEngine</span> = <span className="text-blue-400">new</span> SpatialEngine();{'\n'}
                  <span className="text-blue-400">audioEngine</span>.<span className="text-white">setZone</span>({{'{'}}{'\n'}
                  {'  '}id: <span className="text-orange-400">"entrance_01"</span>,{'\n'}
                  {'  '}trigger: <span className="text-orange-400">"on_entry"</span>,{'\n'}
                  {'  '}file: <span className="text-orange-400">"ipfs://Qm...welcome.wav"</span>,{'\n'}
                  {'  '}attenuation: <span className="text-orange-400">"linear"</span>{'\n'}
                  {'}'});
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to add spatial audio?</h2>
          <p className="text-white/60 mb-8">Configure zone-triggered audio in your universe today.</p>
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
