'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function TeleportPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Teleport"
        title={<>Jump between worlds <span className="text-gradient-accent">instantly</span></>}
        lead={<>Step onto a teleport spot and arrive in another room, another world, or another universe.</>}
        detail={[
          <>Teleport between universes, worlds, and rooms via area zone property. Set a destination coordinate on any zone — walk in and arrive somewhere else.</>,
        ]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_teleport"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Spatial Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl">language</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Universal Teleport</h3>
              <p className="text-white/60">Teleport between any universe, world, or room in the digital frontier without restrictions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-3xl">target</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Zone-Triggered</h3>
              <p className="text-white/60">Configured directly as an area zone property in the editor for precise behavioral control.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Seamless</h3>
              <p className="text-white/60">Instant transition with zero loading screens for a truly immersive and fluid spatial feel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="glass-card rounded-2xl overflow-hidden border border-primary/20">
                <div className="bg-white/5 h-8 flex items-center px-4 gap-1.5 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                </div>
                <div className="aspect-video bg-black/40 flex items-center justify-center p-4">
                  <span className="text-white/60 text-sm">Teleport Zone Editor</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Master the Spatial Triggers</h2>
              <p className="text-white/60">Every zone can be a gateway to another world. Our inline map editor gives you surgical precision over teleportation properties, allowing you to create complex web-like connections between disparate spatial environments.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Pixel-perfect coordinate mapping</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Cross-universe destination support</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Programmable arrival orientations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to Teleport?</>}
        body={<>The frontier is waiting. Start building your interconnected spatial experience today.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_teleport"
      />
    </div>
  )
}
