'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function BroadcastingPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Broadcasting"
        title={<>Broadcast to <span className="text-gradient-accent">everywhere</span></>}
        lead={<>Run a live event that everyone can hear and see: a talk, a concert, or a whole-company meeting, with a stage and room for a crowd.</>}
        detail={[
          <>Create live events that stream audio and video across the entire universe. Stage + audience zone layouts for virtual summits, concerts, and all-hands.</>,
        ]}
        scene="stage"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_broadcasting"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Broadcast Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">campaign</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">World-Wide Audio</h3>
              <p className="text-white/60">Broadcast your voice to every connected user in the universe — not just the room you're in. Your message reaches everyone.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">live_tv</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Stage & Audience</h3>
              <p className="text-white/60">Designated broadcast zones let speakers present while audiences listen in. Supports Q&A handoff and moderator controls.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">meeting_room</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Event Scheduling</h3>
              <p className="text-white/60">Plan broadcasts ahead of time with calendar integration. Auto-start at scheduled times with recording capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to broadcast your message?</>}
        body={<>Set up your first live event in minutes.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_broadcasting"
      />
    </div>
  )
}
