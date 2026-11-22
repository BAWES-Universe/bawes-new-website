import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'

export const metadata: Metadata = {
  title: 'Bot Streaming Chat — Real-Time AI Responses',
  description: 'Bot responses stream token-by-token into chat bubbles. Watch the AI think, compose, and respond in real time. Tool calls and media delivery happen mid-stream.',
  openGraph: {
    title: 'Bot Streaming Chat — Real-Time AI Responses',
    description: 'Bot responses stream token-by-token into chat bubbles. Watch the AI think, compose, and respond in real time. Tool calls and media delivery happen mid-stream.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Streaming Chat — Real-Time AI Responses',
    description: 'Bot responses stream token-by-token into chat bubbles. Watch the AI think, compose, and respond in real time. Tool calls and media delivery happen mid-stream.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotStreamingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Streaming Chat"
        title={<>Watch AI think <span className="text-gradient-accent">in real time</span></>}
        lead={<>A bot&apos;s answer appears word by word as it writes, so you are never staring at an empty bubble.</>}
        detail={[
          <>Bot responses stream token-by-token directly into chat bubbles. See the artificial intelligence think, compose, and respond as it happens.</>,
        ]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_streaming"
      />

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
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Tool calls produce media output mid-stream — images and video appear in chat automatically</span>
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

      <PageClosing
        title={<>Ready to see AI think in real-time?</>}
        body={<>Enable streaming on your bots through the provider config.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_streaming"
      />
    </div>
  )
}
