'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function BotProviderConfigPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Provider Config"
        title={<>Choose your <span className="text-gradient-accent">bot&apos;s brain</span></>}
        lead={<>Pick which AI model runs each bot. Use a different one for each job, and change it whenever you like.</>}
        detail={[
          <>Configure which AI model powers each bot. OpenAI, Anthropic, open-source models — pick what fits your use case. Build a diverse ecosystem of specialized intelligence.</>,
          <>A provider-agnostic abstraction layer handles all the complexity. Swapping a bot brain is as simple as updating a single configuration key — no code changes needed.</>,
        ]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_provider_config"
      />

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Intelligent Model Control</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Provider</h3>
              <p className="text-white/60 text-sm">Seamless support for OpenAI, Anthropic, and open-source models like Llama 3 and Mistral. Never be locked into a single ecosystem.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 text-secondary">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Per-Bot Config</h3>
              <p className="text-white/60 text-sm">Assign different models to different bots based on their role. A fast model for chat, a reasoning model for logic.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30 text-tertiary">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Model Selection</h3>
              <p className="text-white/60 text-sm">Optimize for capability, latency, or cost. The selection engine helps you choose the perfect balance for your spatial intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integration - simplified without code */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Seamless Integration</h2>
              <p className="text-white/60 mb-8">Under the hood, the BAWES Universe uses a provider-agnostic abstraction layer. Swapping a bot brain is as simple as updating a single configuration key.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-semibold text-white">Unified API Surface</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-semibold text-white">Automatic Token Truncation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-semibold text-white">Fallback Model Logic</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                <span className="text-white font-semibold">Provider Abstraction</span>
              </div>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Registry resolves provider by name from available backends
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Hot-swaps model without rebooting the bot process
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Spatial context flag enables environment-aware responses
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Automatic fallback to secondary model on timeout or error
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to configure your bot brain?</>}
        body={<>Pick the perfect model for every use case.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_provider_config"
      />
    </div>
  )
}
