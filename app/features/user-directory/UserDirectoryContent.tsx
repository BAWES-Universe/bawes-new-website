'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function UserDirectoryPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="User Directory"
        title={<>See who is around. <span className="text-gradient-accent">Find anyone.</span></>}
        lead={<>Browse who is online, see their status, and find where they are on the map.</>}
        detail={[
          <>Browse users, see their status, and locate them on the map. Know who's online across your universe in real-time with zero friction.</>,
        ]}
        scene="fire"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_user_directory"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Browse Users</h3>
              <p className="text-white/60 text-sm">See all members and filter by group or world with advanced tagging.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <span className="material-symbols-outlined">sensors</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Status Indicators</h3>
              <p className="text-white/60 text-sm">Real-time Online, Busy, and Away status with synchronized color coding.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Locate on Map</h3>
              <p className="text-white/60 text-sm">Jump directly to anyone's location with one-click map tracking and pathing.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-400">
                <span className="material-symbols-outlined">sync</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform Sync</h3>
              <p className="text-white/60 text-sm">Automatic status synchronization with Discord, Matrix, and BAWES Kernel.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to find your team?</>}
        body={<>Browse the directory and locate your fellow explorers.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_user_directory"
      />
    </div>
  )
}
