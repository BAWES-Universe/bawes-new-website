'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function MegaphonePageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Megaphone"
        title={<>Speak loud. <span className="text-gradient-accent">Be heard.</span></>}
        lead={<>Stand on the right spot and your voice reaches the whole room. Great for announcements, and quiet zones stay quiet.</>}
        detail={[
          <>Zone-based megaphone: designate speakers and listeners within area zones. Amplify your voice to a whole room — or silence it with a silent zone.</>,
        ]}
        scene="stage"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_megaphone"
      />

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

      <PageClosing
        title={<>Ready to broadcast your voice?</>}
        body={<>Set up megaphone zones in your universe today.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_megaphone"
      />
    </div>
  )
}
