import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bot Tool Calling — MCP Integration',
  description: 'Bots interact with APIs and external tools through MCP. Generate images via ComfyUI, video via Higgsfield, research via Firecrawl and Tavily, and more.',
}

export default function BotToolsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
            {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/ai-bots" className="hover:text-primary transition-colors">AI Bots</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Bot Tool Calling</span>
        </div>
      </div>
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">build</span>
            Bot Tool System
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots That <span className="text-gradient">Do Things.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Bots can interact with APIs and external tools through MCP. Trigger actions, manage permissions, and connect to real-world systems directly from within the universe.
          </p>
          <p className="text-base text-white/40 max-w-2xl mx-auto mt-6">
            The Model Context Protocol provides a standardized interface for tool discovery, execution, and permission management — allowing bots from any provider to execute actions with full auditability.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Tool Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">MCP Integration</h3>
              <p className="text-white/60 text-sm">Bots call tools via Model Context Protocol for seamless execution across providers.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 text-secondary">
                <span className="material-symbols-outlined text-3xl">api</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">API Access</h3>
              <p className="text-white/60 text-sm">Connect to any REST API securely with managed authentication tokens and rate limiting.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30 text-tertiary">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Action Triggers</h3>
              <p className="text-white/60 text-sm">Bots can set variables, open websites, or teleport players instantly within the universe.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl">layers</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">External Systems</h3>
              <p className="text-white/60 text-sm">Full interoperability with your existing tech stack through standardized webhooks.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 text-secondary">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">File Analysis</h3>
              <p className="text-white/60 text-sm">Bots read PDF, Word, Excel, and web pages. Upload a file and ask questions about it. <Link href="/features/bot-file-parsing" className="text-primary hover:underline">Learn more →</Link></p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30 text-tertiary">
                <span className="material-symbols-outlined text-3xl">image</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Media Output</h3>
              <p className="text-white/60 text-sm">Tools can return images and video — auto-sent to users as chat messages or galleries. <Link href="/features/bot-media-sending" className="text-primary hover:underline">Learn more →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Tool Examples */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Real-World MCP Tools</h2>
          <p className="text-white/50 text-center mb-16 max-w-2xl mx-auto">Connect any MCP-compatible tool. Here are popular integrations that work out of the box.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ComfyUI</h3>
              <p className="text-white/60 text-sm mb-3">Image generation workflows. Bot takes a prompt, calls ComfyUI, and delivers the generated image to chat.</p>
              <Link href="/features/bot-media-sending" className="text-primary text-sm hover:underline">See media sending →</Link>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">movie</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Higgsfield</h3>
              <p className="text-white/60 text-sm mb-3">AI video generation. Bot generates short video clips and delivers them directly to the user.</p>
              <Link href="/features/bot-media-sending" className="text-primary text-sm hover:underline">See media sending →</Link>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-3xl">travel_explore</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Firecrawl</h3>
              <p className="text-white/60 text-sm mb-3">Web scraping and content extraction. Bot scrapes pages, extracts content, and answers questions about any URL.</p>
              <Link href="/features/bot-file-parsing" className="text-primary text-sm hover:underline">See file parsing →</Link>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">search</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tavily</h3>
              <p className="text-white/60 text-sm mb-3">AI web search and research. Bot searches the web, synthesizes results, and delivers findings with sources.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">task_alt</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Linear / Attio</h3>
              <p className="text-white/60 text-sm mb-3">CRM and project management. Bot creates issues, checks deal status, manages tickets — all from chat.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-3xl">extension</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Any MCP Tool</h3>
              <p className="text-white/60 text-sm mb-3">If it speaks MCP, your bots can use it. The standardized protocol works with any provider.</p>
              <Link href="/mcp-integration" className="text-primary text-sm hover:underline">See MCP integration →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical - simplified without code */}
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
                    <p className="text-white/60">Standardized MCP schemas allow bots from any provider to speak the same tool language.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                  <span className="text-white font-semibold">MCP Execution Flow</span>
                </div>
                <ol className="space-y-3 text-white/60 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">1</span>
                    <span>Bot identifies the need for an external action and selects a tool from its registered capabilities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">2</span>
                    <span>Bot sends an MCP execute request with bot identity, tool name, and typed parameters.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">3</span>
                    <span>System validates permissions, executes the tool, and returns structured response data to the bot.</span>
                  </li>
                </ol>
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
