'use client'

import Link from 'next/link'

export default function EntityEditorPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            V2.4 RELEASED
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Objects That <span className="text-gradient">Do Things.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Place and configure interactive objects on maps. Click an object to open a website, trigger a script, or start an interaction.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Powerful Entity Orchestration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">widgets</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Place Objects</h3>
              <p className="text-white/60">Drag and drop interactive items into your space. Choose from a library of 3D assets or upload your own.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">tune</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Configure Actions</h3>
              <p className="text-white/60">Set precisely what happens when a player interacts. Toggle states, open modals, or move players.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">link</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Link URLs</h3>
              <p className="text-white/60">Turn any object into a portal. Open external websites, project boards, or documentation directly on click.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">code</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Script Triggers</h3>
              <p className="text-white/60">Run custom logic on interaction. Integrate with the BAWES Scripting API for complex world behaviors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Under the Hood */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 rounded-xl font-mono text-sm border-l-4 border-l-primary">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-white/60">entity_config.json</span>
              </div>
              <pre className="text-white/70">
                {'{'}{'\n'}
                {'  '}<span className="text-orange-400">{'"id"'}</span>: <span className="text-blue-400">{'"nexus_portal_v1"'}</span>,{'\n'}
                {'  '}<span className="text-orange-400">{'"type"'}</span>: <span className="text-blue-400">{'"interactive_object"'}</span>,{'\n'}
                {'  '}<span className="text-orange-400">{'"properties"'}</span>: {'{'}
                {'\n    '}<span className="text-orange-400">{'"label"'}</span>: <span className="text-blue-400">{'"Central Hub"'}</span>,{'\n'}
                {'    '}<span className="text-orange-400">{'"animation"'}</span>: <span className="text-blue-400">{'"idle_pulse"'}</span>{'\n'}
                {'  }'},{'\n'}
                {'  '}<span className="text-orange-400">{'"actions"'}</span>: [{'\n'}
                {'    '}{'{'}{'\n'}
                {'      '}<span className="text-orange-400">{'"on"'}</span>: <span className="text-blue-400">{'"click"'}</span>,{'\n'}
                {'      '}<span className="text-orange-400">{'"trigger"'}</span>: <span className="text-blue-400">{'"OPEN_MODAL"'}</span>{'\n'}
                {'    }'}{'\n'}
                {'  }']{'\n'}
                {'}'}
              </pre>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Under the Hood</h2>
              <p className="text-white/60">Our Entity system uses the industry-standard WAM (World Asset Metadata) format. This allows for seamless portability between different universes and deep integration with the BAWES Scripting API.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Fully extensible JSON schema</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Low-latency state syncing</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Native support for WASM scripting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to create interactive objects?</h2>
          <p className="text-white/60 mb-8">Place your first entity and configure its actions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/features/build" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Build
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
