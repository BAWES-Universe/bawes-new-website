'use client'

import Link from 'next/link'

export default function BotMemoryPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-xs text-text-muted">
        <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
        <span>/</span>
        <span className="text-primary">Bot Memory</span>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">psychology</span>
            Advanced Memory Systems
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots That <span className="text-gradient">Remember.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Persistent conversation memory for your bot. It remembers past interactions, user preferences, and important context across sessions.
          </p>
        </div>
      </section>

      {/* Memory Types */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Memory Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">history</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Conversation History</h3>
              <p className="text-white/60">Bots retain the full context of ongoing conversations, allowing them to reference earlier messages and maintain coherent dialogue.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">manage_search</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Vector Search</h3>
              <p className="text-white/60">Semantic search over past conversations enables bots to recall relevant details from any previous interaction automatically.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">stylus_note</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Persistent Notes</h3>
              <p className="text-white/60">Bots can write and recall persistent notes about users, capturing preferences, facts, and important details for future reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Memory Engine</h2>
              <p className="text-white/60">Powered by a hybrid retrieval system combining short-term context windows with long-term vector storage. Memories persist across sessions and are shared appropriately between bots.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Hybrid short-term + long-term memory</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Automatic context summarization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Privacy-preserving memory isolation</span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white/40 text-xs ml-2 uppercase">memory_store.ts</span>
              </div>
              <pre className="font-mono text-sm text-white/70">
                <span className="text-purple-400">const</span> memory = <span className="text-purple-400">await</span> bot.memory.query({'{'}<br/>
                {'  '}userId: <span className="text-green-300">"usr_8f2a"</span>,<br/>
                {'  '}type: <span className="text-green-300">"preference"</span>,<br/>
                {'  '}limit: 5<br/>
                {'}'});<br/>
                <br/>
                <span className="text-purple-400">if</span> (memory.length &gt; 0) {'{'}<br/>
                {'  '}<span className="text-blue-300">{'//'} Bot recalls user's preference</span><br/>
                {'  '}<span className="text-purple-400">return</span> `I remember you like $<span className="text-orange-300">{'{memory[0].value}'}</span>`;<br/>
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to give your bot memory?</h2>
          <p className="text-white/60 mb-8">Enable persistent memory through the bot editor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/features-overview" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
