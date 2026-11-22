'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function EntityEditorPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Entity Editor"
        title={<>Objects that <span className="text-gradient-accent">do things</span></>}
        lead={<>Put objects on your map that people can click: open a website, start something, or set off a little surprise.</>}
        detail={[
          <>Place and configure interactive objects on maps. Click an object to open a website, trigger a script, or start an interaction.</>,
          <>The entity editor uses the WAM format for defining interactive objects. Each entity carries position, properties, animations, and action triggers — all configurable through a visual interface or JSON schema.</>,
        ]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_entity_editor"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Powerful Entity Orchestration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">widgets</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Place Objects</h3>
              <p className="text-white/60 text-sm">Drag and drop interactive items into your space. Choose from a library of 3D assets or upload your own.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 text-secondary">
                <span className="material-symbols-outlined text-3xl">tune</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Configure Actions</h3>
              <p className="text-white/60 text-sm">Set precisely what happens when a player interacts. Toggle states, open modals, or move players between areas.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30 text-tertiary">
                <span className="material-symbols-outlined text-3xl">link</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Link URLs</h3>
              <p className="text-white/60 text-sm">Turn any object into a portal. Open external websites, project boards, or documentation directly on click.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Script Triggers</h3>
              <p className="text-white/60 text-sm">Run custom logic on interaction. Integrate with the BAWES Scripting API for complex world behaviors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical - simple description without code */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">description</span>
                <span className="text-white/40 text-sm font-mono">entity_config.json</span>
              </div>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Unique identifier and entity type classification
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Position, rotation, and scale in 3D space
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Interactive properties with label and animation state
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Action triggers for click, hover, and proximity events
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Under the Hood</h2>
              <p className="text-white/60">The Entity system uses the industry-standard WAM (World Asset Metadata) format. This allows for seamless portability between different universes and deep integration with the BAWES Scripting API.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Fully extensible JSON schema</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Low-latency state syncing</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Native support for WASM scripting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to create interactive objects?</>}
        body={<>Place your first entity and configure its actions.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_entity_editor"
      />
    </div>
  )
}
