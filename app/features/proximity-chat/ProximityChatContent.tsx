'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function ProximityChatPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Proximity Chat"
        title={<>Talk like you are <span className="text-gradient-accent">in the same room</span></>}
        lead={<>Walk up to someone and you can hear each other. Walk away and the sound fades, just like real life.</>}
        detail={[
          <>Proximity-based spatial voice chat with WebRTC. Walk closer to hear better, walk away to fade out. Powered by LiveKit for ultra-low latency.</>,
        ]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_proximity_chat"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Voice Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">spatial_audio</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Spatial Audio</h3>
              <p className="text-white/60">3D positional audio that makes voices sound like they're coming from the right direction and distance.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">graphic_eq</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Distance Attenuation</h3>
              <p className="text-white/60">Volume naturally decreases with distance. Whispers up close, muffled from across the room — just like real life.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">mic</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Push-to-Talk</h3>
              <p className="text-white/60">Optional PTT mode for cleaner audio environments. Configurable keybindings for advanced workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powered by LiveKit</h2>
              <p className="text-white/60 mb-8">All proximity voice runs on top of LiveKit's battle-tested WebRTC infrastructure, ensuring high-quality audio and smooth scaling from 2 to 2000 participants.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Ultra-low latency WebRTC</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Self-hostable SFU servers</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Opus codec for crisp voice</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl bg-black/40 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Audio Stack</h4>
              <div className="space-y-3 text-white/60">
                <div className="flex justify-between"><span>Codec</span><span className="text-primary">Opus</span></div>
                <div className="flex justify-between"><span>Latency</span><span className="text-primary">&lt;50ms</span></div>
                <div className="flex justify-between"><span>SFU</span><span className="text-primary">LiveKit</span></div>
                <div className="flex justify-between"><span>Spatial</span><span className="text-primary">HRTF 3D</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to talk in spatial audio?</>}
        body={<>Experience voice chat that feels as natural as being in the same room.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_proximity_chat"
      />
    </div>
  )
}
