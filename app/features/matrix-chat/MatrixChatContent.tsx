'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function MatrixChatPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Matrix Chat"
        title={<>Chat that <span className="text-gradient-accent">persists</span></>}
        lead={<>Your conversations are still there when you come back, and they follow you from room to room.</>}
        detail={[
          <>Optional Matrix/Synapse integration for persistent chat history. Conversations survive between visits. Cross-room message sync across the entire digital frontier.</>,
        ]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_matrix_chat"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Infrastructure for Continuity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-purple-500/20">
                <span className="material-symbols-outlined">history</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Persistent History</h3>
              <p className="text-white/60">Messages survive when you leave. Pick up exactly where you left off, every time.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Synapse Backend</h3>
              <p className="text-white/60">Self-hosted Matrix server support. Full control over your data and infrastructure.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary border border-tertiary/20">
                <span className="material-symbols-outlined">sync_alt</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Cross-Room Sync</h3>
              <p className="text-white/60">Conversation continuity across the entire universe. Stay connected as you move.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white border border-white/20">
                <span className="material-symbols-outlined">settings_suggest</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Optional Setup</h3>
              <p className="text-white/60">Not required for core chat. A powerful enhancement for teams needing archival support.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready for persistent presence?</>}
        body={<>Join the distributed network and take control of your communication history today.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_matrix_chat"
      />
    </div>
  )
}
