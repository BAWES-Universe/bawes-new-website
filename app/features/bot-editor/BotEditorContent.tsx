'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function BotEditorPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Editor"
        title={<>Build a bot. <span className="text-gradient-accent">No code.</span></>}
        lead={<>Set up everything about your bot on one screen: how it acts, what it knows, and how it looks.</>}
        detail={[
          <>A visual interface for configuring your bot's entire soul. Define behaviors, personality, knowledge, and appearance from one unified dashboard.</>,
        ]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_editor"
      />

      {/* Features Grid */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Visual Builder Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Behavior Wizard</h3>
              <p className="text-white/60">Step-by-step configuration of bot movement, patrol paths, and reactive triggers with a visual drag-and-drop interface.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">face</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personality Tuning</h3>
              <p className="text-white/60">Fine-tune moods, emotional baselines, and response styles from cheerful guide to professional assistant.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">database</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Knowledge Injection</h3>
              <p className="text-white/60">Upload documents or connect knowledge bases to give your bot domain-specific expertise anchored in your data.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">preview</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Preview</h3>
              <p className="text-white/60">See how your bot behaves in real-time with an embedded 3D preview panel. Test interactions before deploying to the universe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Panel */}
      <section className="relative z-10 py-24 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Configuration Panel</h2>
                <p className="text-white/60">The editor presents every bot property in a clean, categorized panel. No JSON editing required, but you can always export your configuration for programmatic use.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <strong className="text-white block">Identity & Appearance</strong>
                      <span className="text-white/40 text-sm">Name, avatar, visual style</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <strong className="text-white block">Behavior & Movement</strong>
                      <span className="text-white/40 text-sm">Idle, patrol, social modes, waypoints</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <strong className="text-white block">AI & Personality</strong>
                      <span className="text-white/40 text-sm">Provider config, emotional state, greeting messages</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="glass-card rounded-2xl border border-white/10 p-6 bg-black/30">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="font-mono text-sm leading-relaxed text-white/80">
                  <div className="text-primary">Bot Editor v2.4</div>
                  <div className="text-white/40 mt-2">{'//'} Visual configuration mode</div>
                  <div className="mt-4 space-y-1">
                    <div><span className="text-primary">Behavior:</span> <span className="text-blue-400">Patrol</span></div>
                    <div><span className="text-primary">Personality:</span> <span className="text-blue-400">Friendly Guide</span></div>
                    <div><span className="text-primary">Provider:</span> <span className="text-blue-400">Anthropic Claude</span></div>
                    <div><span className="text-primary">Avatar:</span> <span className="text-blue-400">Nexus_Guide_v2</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to build your first bot?</>}
        body={<>The visual editor makes it easy. No coding required.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_editor"
      />
    </div>
  )
}
