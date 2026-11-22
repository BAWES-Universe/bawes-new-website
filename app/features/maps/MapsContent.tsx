'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function MapsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Maps"
        title={<>Every space has <span className="text-gradient-accent">a place</span></>}
        lead={<>Maps are the ground you walk on. Bring your own pixel-art maps and arrange them into worlds and rooms.</>}
        detail={[
          <>Maps are the structural foundation of the BAWES Universe. Upload your own pixel-art maps, organize them into worlds and rooms, and create complex spatial hierarchies.</>,
        ]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_maps"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Map Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">map</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Uploads</h3>
              <p className="text-white/60">Upload your own tile maps in standard formats. BAWES supports Tiled JSON maps, PNG exports, and various pixel-art formats.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">layers</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">World Hierarchy</h3>
              <p className="text-white/60">Organize maps into worlds and rooms. Create nested spatial structures that mirror real or fantastical geographies.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">edit_square</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Live Editing</h3>
              <p className="text-white/60">Modify maps in real-time using the inline editor. Add zones, move entities, and update environments without redeployment.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to build your world?</>}
        body={<>Upload your first map and start creating spatial experiences.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_maps"
      />
    </div>
  )
}
