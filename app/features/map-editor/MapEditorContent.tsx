'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function MapEditorPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Map Editor"
        title={<>Build your world <span className="text-gradient-accent">in real time</span></>}
        lead={<>Change your map right in the browser: lay floors, mark zones, place objects. You see every change at once.</>}
        detail={[
          <>Live map editing tools in the browser. Modify tiles, add zones, place entities, and see changes instantly — no reload needed. Direct feedback loop for creators.</>,
        ]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_map_editor"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Editor Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">edit_square</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tile Editing</h3>
              <p className="text-white/60">Paint, erase, and swap tiles on your map grid. Modify terrain, walls, and floors with intuitive brush tools.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">grid_view</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zone Drawing</h3>
              <p className="text-white/60">Draw rectangular or polygonal zones directly on the map. Assign properties and triggers to each zone in real-time.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">visibility</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Preview</h3>
              <p className="text-white/60">See your changes reflected immediately. Walk through your edited space without leaving the editor or reloading the page.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to edit your world?</>}
        body={<>Open the inline map editor and start building.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_map_editor"
      />
    </div>
  )
}
