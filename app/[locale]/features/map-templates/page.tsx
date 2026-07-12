'use client'

import { useTranslations, useLocale } from 'next-intl'

import Link from 'next/link'

export default function MapTemplatesPage() {
  const t = useTranslations('build')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward'
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">{t('breadcrumbFeatures')}</Link>
          <span className="text-white/20">/</span>
          <Link href="/build" className="hover:text-primary transition-colors">{t('build.breadcrumbHub', {defaultValue: "Build & Create"})}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Map Templates</span>
        </div>
      </div>
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Start with a Blueprint.<br/><span className="text-primary">Build from There.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Pre-built room layouts for common use cases — office floors, conference rooms, auditoriums, lounges, and event spaces. Extend or customize.
          </p>
        </div>
      </section>

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
                <span className="material-symbols-outlined text-primary">{arrowIcon}</span>
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
                <span className="material-symbols-outlined text-primary">{arrowIcon}</span>
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
                <span className="material-symbols-outlined text-primary">{arrowIcon}</span>
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
                <span className="material-symbols-outlined text-primary">{arrowIcon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start building?</h2>
          <p className="text-white/60 mb-8">Browse the template library and customize your space.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">{arrowIcon}</span>
              Explore the Universe
            </Link>
            <Link href="/features-overview" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              {t('seeAllFeatures')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
