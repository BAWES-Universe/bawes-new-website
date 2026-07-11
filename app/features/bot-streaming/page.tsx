'use client'

import Link from 'next/link'

export default function BotStreamingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Watch AI Think <span className="text-primary">In Real Time.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Bot responses stream token-by-token directly into chat bubbles. See the artificial intelligence think, compose, and respond as it happens.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Streaming Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">stream</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Token-by-Token</h3>
              <p className="text-white/60">Every word appears as the model generates it. No loading spinners, no black boxes — just pure, visible intelligence.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">chat_bubble</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">In-World Bubbles</h3>
              <p className="text-white/60">Streams appear directly in proximity-based chat bubbles above the bot. The conversation feels alive and immediate.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Low Latency</h3>
              <p className="text-white/60">Optimized WebSocket pipeline keeps response delay to a minimum. First-token latency under 200ms for supported providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Streaming Architecture</h2>
              <p className="text-white/60 mb-8">Our streaming pipeline uses server-sent events and WebSocket connections to push tokens from the AI provider directly into the spatial chat system with minimal overhead.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Direct provider-to-browser streaming</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Automatic reconnection on interruption</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Multi-model streaming support</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white/40 text-xs ml-2 uppercase">stream_handler.ts</span>
              </div>
              <pre className="text-white/70">
                <span className="text-purple-400">const</span> stream = <span className="text-blue-400">await</span> bot.chat.stream({'{'}{'\n'}
                {'  '}message: userInput,{'\n'}
                {'  '}onToken: (token) =&gt; {'{'}{'\n'}
                {'    '}bubble.append(token);{'\n'}
                {'  '}{'}'},{'\n'}
                {'}'});{'\n\n'}
                <span className="text-white/40">{'//'} Each token appears in the bubble instantly</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to see AI think in real-time?</h2>
          <p className="text-white/60 mb-8">Enable streaming on your bots through the provider config.</p>
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
