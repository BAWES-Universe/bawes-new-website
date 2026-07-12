'use client'

import { useTranslations, useLocale } from 'next-intl'

import Link from 'next/link'

export default function BotEditorPage() {
  const t = useTranslations('aiBots')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const arrowIcon = isRtl ? 'arrow_back' : 'arrow_forward'
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
            {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">{t('breadcrumbFeatures')}</Link>
          <span className="text-white/20">/</span>
          <Link href="/ai-bots" className="hover:text-primary transition-colors">{t('aiBots.breadcrumbHub', {defaultValue: "AI Bots"})}</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Bot Editor</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Visual Bot Builder
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build a Bot. <span className="text-gradient">No Code.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            A visual interface for configuring your bot's entire soul. Define behaviors, personality, knowledge, and appearance from one unified dashboard.
          </p>
        </div>
      </section>

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

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build your first bot?</h2>
          <p className="text-white/60 mb-8">The visual editor makes it easy. No coding required.</p>
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
