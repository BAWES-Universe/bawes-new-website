'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function FollowPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Follow"
        title={<>Never lose sight of <span className="text-gradient-accent">your team</span></>}
        lead={<>Click someone to follow them, and you go where they go. Handy for tours and for sticking together in a crowd.</>}
        detail={[
          <>Click to follow another player through the map. Your view tracks their movement. Perfect for tours, escorts, and staying together in crowded spaces.</>,
        ]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_follow"
      />

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">mouse</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Click Follow</h3>
              <p className="text-white/60">Click the follow icon on any nearby player's context menu to initiate the link.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">sync_alt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Synchronized View</h3>
              <p className="text-white/60">Your camera automatically tracks their avatar as they navigate the complex world map.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">link_off</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Auto-Drop</h3>
              <p className="text-white/60">The follow state automatically disconnects when you walk away or click to stop manually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-[2rem]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Under the Hood</h2>
                <p className="text-white/60">Following is built into the game itself, and a map script can start it too. This call asks everyone in your conversation to follow you.</p>
                <div className="p-4 rounded-lg bg-black/40 border-l-4 border-primary font-mono text-sm text-white/70">
                  WA.player.proximityMeeting.followMe();
                </div>
                <p className="text-white/40 text-xs">From the map scripting API.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">1 click</div>
                  <div className="text-white/40 text-xs uppercase">To start</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">Any time</div>
                  <div className="text-white/40 text-xs uppercase">You can stop</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">Tours</div>
                  <div className="text-white/40 text-xs uppercase">Made easy</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">API</div>
                  <div className="text-white/40 text-xs uppercase">Extensible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to stay together?</>}
        body={<>Try follow mode on your next team exploration.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_follow"
      />
    </div>
  )
}
