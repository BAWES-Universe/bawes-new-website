'use client'

import Link from 'next/link'

export default function BotToolsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots That Do Things. <br/>
            <span className="text-primary">Not Just Talk.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Bots can interact with APIs and external tools through MCP. Trigger actions, manage permissions, and connect to real-world systems directly from within the universe.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">hub</span>
              <h3 className="text-xl font-semibold text-white">MCP Integration</h3>
              <p className="text-white/60">Bots call tools via Model Context Protocol for seamless execution.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">api</span>
              <h3 className="text-xl font-semibold text-white">API Access</h3>
              <p className="text-white/60">Connect to any REST API securely with managed authentication tokens.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
              <h3 className="text-xl font-semibold text-white">Action Triggers</h3>
              <p className="text-white/60">Bots can set variables, open websites, or teleport players instantly.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">layers</span>
              <h3 className="text-xl font-semibold text-white">External Systems</h3>
              <p className="text-white/60">Full interoperability with your existing tech stack and webhooks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Under the Hood */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">The Technical Layer</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Under the Hood</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg h-fit">
                    <span className="material-symbols-outlined text-primary">search</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Tool Discovery</h4>
                    <p className="text-white/60">Automated registry where bots scan for available capabilities within the session context.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg h-fit">
                    <span className="material-symbols-outlined text-primary">security</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Permission Guardrails</h4>
                    <p className="text-white/60">Granular control over which bots can access specific API endpoints or world actions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg h-fit">
                    <span className="material-symbols-outlined text-primary">terminal</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Universal Logic</h4>
                    <p className="text-white/60">Standardized MCP schemas allow bots from any provider to speak the same language.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card rounded-2xl overflow-hidden p-1">
                <div className="bg-black/40 rounded-xl p-6 font-mono text-sm">
                  <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <pre className="text-white/70">
                    <span className="text-purple-400">async function</span> <span className="text-primary">callMcpTool</span>(botId, toolName) {'{'}{'\n'}
                    {'  '}<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> universe.mcp.execute({{'{'}}{'\n'}
                    {'    '}id: botId,{'\n'}
                    {'    '}tool: toolName,{'\n'}
                    {'    '}params: {{ zone: <span className="text-orange-400">"synapse_plaza"</span> }}{'\n'}
                    {'  '});{'\n'}
                    {'  '}<span className="text-purple-400">return</span> response.data;{'\n'}
                    {'}'}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to give your bots tools?</h2>
          <p className="text-white/60 mb-8">Connect your bots to APIs, databases, and services via MCP.</p>
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
