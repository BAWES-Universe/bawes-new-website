'use client'

import Link from 'next/link'

export default function RecursiveBotsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">psychology</span>
            Next-Gen Autonomy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots That <span className="text-gradient">Build Bots.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Bots can spawn other bots. Each spawned bot gets its own provider config, behavior, and memory. Self-architecting AI systems designed for infinite scalability.
          </p>
          <p className="text-base text-white/40 max-w-2xl mx-auto mt-6">
            Parent bots pass context, instructions, and state to child bots via the BAWES Scripting API. This enables specialized intelligence delegation with dynamic provider switching for cost-optimized subtask execution.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Architectural Primitives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">account_tree</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bot Spawning</h3>
              <p className="text-white/60 text-sm">Bots can create new bots. Dynamically expand your agent workforce based on real-world triggers, events, or logical conditions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 text-secondary">
                <span className="material-symbols-outlined text-3xl">settings_input_component</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Config Inheritance</h3>
              <p className="text-white/60 text-sm">Spawned bots get their own settings. Customize LLM providers, temperature, and specific toolsets for every child bot in the tree.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">schema</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Self-Architecting</h3>
              <p className="text-white/60 text-sm">Build complex bot hierarchies. Create trees of intelligence that handle multi-step workflows autonomously with zero human oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical - simple description without code */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Recursion Protocol</h2>
              <p className="text-white/60 text-lg">Parent bots can pass context and specific instructions to child bots via the BAWES Scripting API. This allows specialized intelligence delegating tasks to more efficient micro-agents.</p>
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
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-semibold text-white block">Memory Isolation</span>
                    <span className="text-white/40 text-sm">Each spawned bot maintains its own memory context for task-focused reasoning.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                <span className="text-white font-semibold">How Spawning Works</span>
              </div>
              <ol className="space-y-4 text-white/60 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">1</span>
                  <span>Parent bot detects a workload that can be delegated, such as a data burst or document analysis request.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">2</span>
                  <span>Parent calls the spawn API with behavior definition, provider config, memory scope, and task instructions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">3</span>
                  <span>Child bot processes the assigned task independently and returns results to the parent when complete.</span>
                </li>
              </ol>
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
