'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function ScreenSharingPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Screen Sharing"
        title={<>Share your screen. <span className="text-gradient-accent">Stay in the room.</span></>}
        lead={<>Show your screen to the people you are talking with at the press of a button. No other app, no link.</>}
        detail={[
          <>Share your screen with everyone in your conversation bubble. No separate app, no link to click — just a button. Experience seamless spatial collaboration.</>,
        ]}
        scene="room"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_screen_sharing"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Unmatched Presence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">group_work</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">In-Bubble Sharing</h3>
              <p className="text-white/60">Share with everyone in your proximity bubble automatically. No need to manage participants manually; proximity is your permissions layer.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-2xl">meeting_room</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Meeting Rooms</h3>
              <p className="text-white/60">Share in walk-in meeting zones. Everyone in the zone sees your screen on the wall or in their personal viewport instantly.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">One-Click</h3>
              <p className="text-white/60">Activate instantly with the screenShareButton in the main action bar. Zero friction, total presence, no context switching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
            <div>
              <span className="material-symbols-outlined text-primary mb-2">speed</span>
              <div className="text-4xl font-bold text-white mb-1">20ms</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Latency</div>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">hd</span>
              <div className="text-4xl font-bold text-white mb-1">4K</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Resolution</div>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">security</span>
              <div className="text-4xl font-bold text-white mb-1">AES</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Encrypted</div>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">groups</span>
              <div className="text-4xl font-bold text-white mb-1">∞</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Participants</div>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to expand your universe?</>}
        body={<>Join thousands of pioneers already building, collaborating, and exploring in the BAWES Universe.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_screen_sharing"
      />
    </div>
  )
}
