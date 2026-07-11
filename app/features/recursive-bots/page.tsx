'use client'

import Link from 'next/link'

export default function RecursiveBotsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            Next-Gen Autonomy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots That <br/>
            <span className="text-gradient">Build Bots.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory. Self-architecting AI systems designed for infinite scalability.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Architectural Primitives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-3xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">account_tree</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Bot Spawning</h3>
                <p className="text-white/60">Bots can create new bots. Dynamically expand your agent workforce based on real-world triggers, events, or logical conditions.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">settings_input_component</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Config Inheritance</h3>
                <p className="text-white/60">Spawned bots get their own settings. Customize LLM providers, temperature, and specific toolsets for every child bot in the tree.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">schema</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Self-Architecting</h3>
                <p className="text-white/60">Build complex bot hierarchies. Create trees of intelligence that handle multi-step workflows autonomously with zero human oversight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="relative z-10 py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Recursion Protocol</h2>
              <p className="text-white/60 text-lg">Parent bots can pass context and specific instructions to child bots via the BAWES Scripting API. This allows for specialized intelligence delegating tasks to more efficient micro-agents.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-semibold text-white block">Context Injection</span>
                    <span className="text-white/40 text-sm">Pass partial conversation history and state variables down the tree.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-semibold text-white block">Dynamic Providers</span>
                    <span className="text-white/40 text-sm">Switch from GPT-4 to Llama-3 mid-workflow for cost-optimized subtasks.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-3xl p-1 bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-xs text-white/40 ml-4">recursion_protocol.js</span>
              </div>
              <pre className="p-8 text-sm text-white/70">
                <span className="text-purple-400">const</span> orchestrator = WA.bot.init(<span className="text-orange-400">'parent_v1'</span>);{'\n\n'}
                <span className="text-white/40">// Detect high-volume data request</span>{'\n'}
                orchestrator.on(<span className="text-orange-400">'data_burst'</span>, <span className="text-purple-400">async</span> (event) =&gt; {'{'}{'\n'}
                {'  '}<span className="text-white/40">// Spawn specialized worker bot</span>{'\n'}
                {'  '}<span className="text-purple-400">const</span> worker = <span className="text-purple-400">await</span> WA.bot.spawn({{'{'}}{'\n'}
                {'    '}behavior: <span className="text-orange-400">'data_processor'</span>,{'\n'}
                {'    '}provider: {{'{'}}{'\n'}
                {'      '}model: <span className="text-orange-400">'claude-3-haiku'</span>,{'\n'}
                {'      '}temp: <span className="text-blue-300">0.2</span>{'\n'}
                {'    '}{'}'},{'\n'}
                {'    '}memory: event.context_id,{'\n'}
                {'    '}instructions: <span className="text-orange-400">'Analyze logs and summarize.'</span>{'\n'}
                {'  '});{'\n\n'}
                {'  '}worker.send(<span className="text-orange-400">'Start processing batch_id: '</span> + event.id);{'\n'}
                {'}'});
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to build recursive intelligence?</h2>
          <p className="text-white/60 mb-8">Create self-architecting AI systems with autonomous bot spawning.</p>
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
