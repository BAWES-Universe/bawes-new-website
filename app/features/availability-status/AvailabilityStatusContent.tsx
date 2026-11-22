'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function AvailabilityStatusPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Availability Status"
        title={<>Let people know <span className="text-gradient-accent">when you are busy</span></>}
        lead={<>Set yourself to online, busy or away, so nobody walks up at the wrong moment.</>}
        detail={[
          <>Set your status — Online, Busy, or Away. Syncs across platforms so everyone knows when you're available in the digital frontier.</>,
        ]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_availability_status"
      />

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

      <PageClosing
        title={<>Ready to set your status?</>}
        body={<>Let the universe know when you're available.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_availability_status"
      />
    </div>
  )
}
