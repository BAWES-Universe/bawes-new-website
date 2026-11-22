'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function SearchablePageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Build & Create', href: '/build' }]}
        here="Searchable"
        title={<>Find what you need. <span className="text-gradient-accent">Instantly.</span></>}
        lead={<>Mark a place or an object as searchable and people can find it from anywhere with a quick search.</>}
        detail={[
          <>Make areas and entities discoverable in Orbit search. Tag any zone or object as searchable so users can find it from anywhere.</>,
        ]}
        scene="travel"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_searchable"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary text-[28px]">explore</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Orbit Discovery</h3>
              <p className="text-white/60">All tagged items appear instantly in the global Orbit search bar, accessible from any point in the universe.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-[28px]">location_on</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Zone Searchable</h3>
              <p className="text-white/60">Set the 'searchable' property on any area zone to make it a global destination for instant teleportation.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-[28px]">smart_toy</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Entity Searchable</h3>
              <p className="text-white/60">Make any interactive object, AI bot, or unique entity findable across the entire BAWES ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to make your world searchable?</>}
        body={<>Start indexing your entities today and provide your users with the ultimate navigation experience.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_searchable"
      />
    </div>
  )
}
