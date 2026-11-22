'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function AreaZonesPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Area Zones"
        title={<>Walk onto a spot and <span className="text-gradient-accent">something happens</span></>}
        lead={<>Mark any part of your map as a zone. Step into it and a website opens, music plays, a meeting starts, or you land somewhere new.</>}
        detail={[
          <>Walk over a zone and something happens — open a website, play audio, teleport to another world, start a meeting, or trigger a megaphone broadcast. 18+ zone properties at your fingertips.</>,
        ]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_area_zones"
      />

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

      <PageClosing
        title={<>Ready to define your space?</>}
        body={<>Join thousands of creators building interactive experiences in the BAWES Universe.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_area_zones"
      />
    </div>
  )
}
