'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function LockDiscussPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Lock & Discuss"
        title={<>Lock in. <span className="text-gradient-accent">Focus up.</span></>}
        lead={<>Lock your conversation so nobody else can join. A private talk, even in a busy room.</>}
        detail={[
          <>Lock your conversation bubble to prevent others from joining. When you need a private conversation in a crowded room, just lock the bubble.</>,
        ]}
        scene="talk"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_lock_discuss"
      />

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Seamless Privacy Control</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 text-white pointer-events-none">1</div>
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">touch_app</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Click Lock</h3>
              <p className="text-white/60">Click the lock icon on your active conversation bubble to immediately secure your current session.</p>
            </div>
            <div className="glass-card p-10 rounded-xl relative overflow-hidden border-primary/40 bg-white/5 scale-105">
              <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 text-white pointer-events-none">2</div>
              <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">shield_person</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Stay Private</h3>
              <p className="text-white/60">New people cannot join the bubble while it is locked. Your conversation remains exclusive to existing participants.</p>
            </div>
            <div className="glass-card p-10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-8xl opacity-5 text-white pointer-events-none">3</div>
              <div className="w-14 h-14 rounded-full bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">lock_open</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Open Again</h3>
              <p className="text-white/60">Simply click unlock whenever you're ready to allow others to join and expand the conversation dynamic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-tertiary text-sm uppercase tracking-widest font-semibold">Contexts</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Modern Flow</h2>
            </div>
            <p className="text-white/60 max-w-md">Whether you are collaborating on a global project or catching up 1:1, BAWES Lock adapts to your rhythm.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Private 1:1s</h3>
              <p className="text-white/60">Have confidential 1:1 meetings even in the middle of a busy campus or room without interruptions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Focused Group Work</h3>
              <p className="text-white/60">Block out distractions and prevent accidental walk-ins during deep-work team sessions in shared hubs.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to lock in and focus?</>}
        body={<>Secure your conversations with one click.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_lock_discuss"
      />
    </div>
  )
}
