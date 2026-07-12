'use client'

import { useTranslations, useLocale } from 'next-intl'

import Link from 'next/link'

export default function BotAvatarsPage() {
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
          <span className="text-primary">Bot Avatars</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">smart_toy</span>
            New Update: Neo-AI Integration
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Give Your Bot <span className="text-primary">a Face.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Assign visual appearances to AI bots from the avatar platform. Bots look like they belong in the world, transitioning seamlessly between helper roles and community mascots.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Intelligent Visualization</h2>
              <p className="text-white/60 mt-2">Bring your bots to life with our unified identity system.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[28px]">library_add</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Avatar Assignment</h3>
              <p className="text-white/60">Choose any avatar for your bot from the global library. Switch appearances instantly as roles change without complex re-coding.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-[#0566d9] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[28px]">sync_alt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Platform Integration</h3>
              <p className="text-white/60">Uses the same high-fidelity avatar catalog as users. Seamless synchronization across all meta-worlds and decentralized apps.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg border border-primary flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">identity_platform</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visual Identity</h3>
              <p className="text-white/60">Bots get distinct looks that reflect their purpose. From friendly guides to expert assistants, the visual matches the behavior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto bg-white/5 rounded-3xl p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Under the Hood</h2>
              <p className="text-white/60">Our real-time rendering engine ensures bots are indistinguishable from users in terms of visual quality, while maintaining clear functional markers.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <div>
                    <p className="font-semibold text-white">API First Architecture</p>
                    <p className="text-sm text-white/40">Assign IDs via simple REST calls.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                  <span className="material-symbols-outlined text-secondary">memory</span>
                  <div>
                    <p className="font-semibold text-white">Real-time Mapping</p>
                    <p className="text-sm text-white/40">Low-latency appearance propagation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                </div>
                <span className="text-xs text-white/40">bot-config.json</span>
              </div>
              <pre className="font-mono text-sm text-white/60">
                <span className="text-orange-400">{'"bot_0128"'}</span>: {'{'} <br/>
                {'  '}<span className="text-primary">{'"identity"'}</span>: <span className="text-blue-400">{'"Market_Advisor"'}</span>, <br/>
                {'  '}<span className="text-primary">{'"avatar_id"'}</span>: <span className="text-blue-400">{'"BAW_882_GLOW"'}</span>, <br/>
                {'  '}<span className="text-primary">{'"behaviors"'}</span>: [<span className="text-blue-400">{'"helpful"'}</span>, <span className="text-blue-400">{'"proactive"'}</span>], <br/>
                {'  '}<span className="text-primary">{'"render_state"'}</span>: {'{'} <br/>
                {'    '}<span className="text-primary">{'"emission"'}</span>: <span className="text-orange-400">{'"1.2"'}</span>, <br/>
                {'    '}<span className="text-primary">{'"transparency"'}</span>: <span className="text-orange-400">{'"0.4"'}</span> <br/>
                {'  }'} <br/>
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Explore the Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/features/woka-avatars" className="glass-card p-8 rounded-xl group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-secondary">groups</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Woka Avatars</h4>
              <p className="text-white/40 text-sm mb-6">Discover specialized pixel-art sprites for lightweight world rendering.</p>
              <div className="flex items-center text-secondary font-semibold gap-2">
                View Details <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </div>
            </Link>
            <Link href="/features/bot-editor" className="glass-card p-8 rounded-xl group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-tertiary">edit_note</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Bot Editor</h4>
              <p className="text-white/40 text-sm mb-6">Connect logic to appearance in our visual configuration tool.</p>
              <div className="flex items-center text-tertiary font-semibold gap-2">
                View Details <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </div>
            </Link>
            <Link href="/features/avatar-platform" className="glass-card p-8 rounded-xl group relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-primary">person_search</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Avatar Platform</h4>
              <p className="text-white/40 text-sm mb-6">Browse the main catalog and customize your personal identity.</p>
              <div className="flex items-center text-primary font-semibold gap-2">
                View Details <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to give your bot a face?</h2>
          <p className="text-white/60 mb-8">Open the Avatar Manager and start customizing.</p>
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
