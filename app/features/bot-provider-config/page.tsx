'use client'

import Link from 'next/link'

export default function BotProviderConfigPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Choose Your <br/>
            <span className="text-gradient">Bot's Brain.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Configure which AI model powers each bot. OpenAI, Anthropic, open-source models — pick what fits your use case. Build a diverse ecosystem of specialized intelligence.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Intelligent Model Control</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Provider</h3>
              <p className="text-white/60">Seamless support for OpenAI, Anthropic, and open-source models like Llama 3 and Mistral. Never be locked into a single ecosystem.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Per-Bot Config</h3>
              <p className="text-white/60">Assign different models to different bots based on their role. A fast model for chat, a reasoning model for logic.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">speed</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Model Selection</h3>
              <p className="text-white/60">Optimize for capability, latency, or cost. Our selection engine helps you choose the perfect balance for your spatial intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="relative z-10 py-24 px-4 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Seamless Integration</h2>
              <p className="text-white/60 mb-8">Under the hood, the BAWES Universe uses a provider-agnostic abstraction layer. Swapping a bot's brain is as simple as updating a single JSON key.</p>
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
            <div className="bg-black/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">provider_orchestrator.ts</span>
              </div>
              <pre className="p-8 font-mono text-sm leading-relaxed text-white/70">
                <span className="text-blue-400">async</span> <span className="text-purple-400">function</span> <span className="text-orange-400">updateBotBrain</span>(botId, config) {'{'}{'\n'}
                {'  '}<span className="text-blue-400">const</span> provider = <span className="text-blue-400">await</span> Registry.get(config.provider);{'\n'}
                {'\n'}
                {'  '}<span className="text-white/40">// Hot-swaps the model without rebooting the bot</span>{'\n'}
                {'  '}<span className="text-blue-400">return</span> <span className="text-blue-400">await</span> provider.reconfigure({{'{'}}{'\n'}
                {'    '}id: botId,{'\n'}
                {'    '}model: config.model,{'\n'}
                {'    '}spatialContext: <span className="text-purple-400">true</span>{'\n'}
                {'  '});{'\n'}
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to configure your bot's brain?</h2>
          <p className="text-white/60 mb-8">Pick the perfect model for every use case.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/features/ai-bots" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to AI Bots
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300">
              <span className="material-symbols-outlined text-lg">explore</span>
              Explore the Universe
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
