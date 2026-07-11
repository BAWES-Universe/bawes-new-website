'use client'

import Link from 'next/link'

export default function FollowPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-[14px]">visibility</span>
            Feature Spotlight
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Never Lose Sight of <span className="text-gradient">Your Team.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Click to follow another player through the map. Your view tracks their movement. Perfect for tours, escorts, and staying together in crowded spaces.
          </p>
        </div>
      </section>

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
                <p className="text-white/60">Seamless camera synchronization is handled via the core spatial engine, ensuring zero latency between the leader and follower.</p>
                <div className="p-4 rounded-lg bg-black/40 border-l-4 border-primary font-mono text-sm text-white/70">
                  WA.player.proximityMeeting.followMe();
                </div>
                <p className="text-white/40 text-xs">* Supported across all modern desktop browsers via BAWES Native SDK.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">0ms</div>
                  <div className="text-white/40 text-xs uppercase">Input Lag</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">60fps</div>
                  <div className="text-white/40 text-xs uppercase">Motion Sync</div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-primary text-3xl font-bold mb-1">100%</div>
                  <div className="text-white/40 text-xs uppercase">Privacy Safe</div>
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

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to stay together?</h2>
          <p className="text-white/60 mb-8">Try follow mode on your next team exploration.</p>
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
