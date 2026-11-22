'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function MapTemplatesPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Map Templates"
        title={<>Start with a blueprint. <span className="text-gradient-accent">Build from there.</span></>}
        lead={<>Ready-made rooms for common needs: offices, meeting rooms, halls, lounges and event spaces. Use one as it is or make it your own.</>}
        detail={[
          <>Pre-built room layouts for common use cases — office floors, conference rooms, auditoriums, lounges, and event spaces. Extend or customize.</>,
        ]}
        scene="build"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_map_templates"
      />

      {/* Templates */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Foundation Blueprints</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">corporate_fare</span>
                <h3 className="text-xl font-semibold text-white mb-3">Office Layouts</h3>
                <p className="text-white/60">Cubicles, meeting rooms, break areas optimized for professional collaboration and team focus.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center opacity-60">
                <span className="text-xs uppercase tracking-wider text-white/60">Pre-built</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">theater_comedy</span>
                <h3 className="text-xl font-semibold text-white mb-3">Event Spaces</h3>
                <p className="text-white/60">Stage + audience layouts, stage zones, and broadcasting ready configurations for virtual summits.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center opacity-60">
                <span className="text-xs uppercase tracking-wider text-white/60">Pre-built</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">nightlife</span>
                <h3 className="text-xl font-semibold text-white mb-3">Social Lounges</h3>
                <p className="text-white/60">Casual seating, interactive chat areas, and high-engagement community hubs for networking.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center opacity-60">
                <span className="text-xs uppercase tracking-wider text-white/60">Pre-built</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full border-primary/30 bg-primary/5">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">edit_square</span>
                <h3 className="text-xl font-semibold text-white mb-3">Customizable</h3>
                <p className="text-white/60">Extend any template, change tile textures, and add custom interaction zones with our no-code editor.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center opacity-60">
                <span className="text-xs uppercase tracking-wider text-white/60">Infinite Possibilities</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to start building?</>}
        body={<>Browse the template library and customize your space.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_map_templates"
      />
    </div>
  )
}
