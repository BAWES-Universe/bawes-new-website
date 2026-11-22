import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'

export const metadata: Metadata = {
  title: 'Bot Media Sending — Auto-Send Tool-Generated Images',
  description: 'When a bot calls a tool that returns media — images, video, files — the result is auto-sent to the user. ComfyUI, Higgsfield, Firecrawl, and more.',
  openGraph: {
    title: 'Bot Media Sending — Auto-Send Tool-Generated Images',
    description: 'When a bot calls a tool that returns media — images, video, files — the result is auto-sent to the user. ComfyUI, Higgsfield, Firecrawl, and more.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Media Sending — Auto-Send Tool-Generated Images',
    description: 'When a bot calls a tool that returns media — images, video, files — the result is auto-sent to the user. ComfyUI, Higgsfield, Firecrawl, and more.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotMediaSendingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Media Sending"
        title={<>Bots that <span className="text-gradient-accent">send pictures</span></>}
        lead={<>Ask a bot for a picture, a video or a file and it arrives in your chat. No extra steps.</>}
        detail={[
          <>When a bot calls a tool that returns media — images, video, files — the result is auto-sent to the user. No extra prompts, no manual steps.</>,
        ]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_media_sending"
      />

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="text-5xl font-bold text-primary/30 mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Tool Returns Media</h3>
              <p className="text-white/60">The bot calls an MCP tool that returns a URL — an image, a video clip, a generated file.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary/30 mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Auto-Send Interceptor</h3>
              <p className="text-white/60">The media interceptor detects URLs in tool results and sends them directly to the user's chat.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="text-5xl font-bold text-tertiary/30 mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Continues</h3>
              <p className="text-white/60">The bot confirms delivery and continues the conversation naturally — no duplicate sends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Tool Examples */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Works With Any MCP Tool</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">ComfyUI</h3>
              <p className="text-white/60 text-sm">&ldquo;Generate an image of a dragon&rdquo; → the bot sends the generated image directly to chat.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">movie</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Higgsfield</h3>
              <p className="text-white/60 text-sm">&ldquo;Create a 5-second video clip of a sunset&rdquo; → the bot delivers the video to the user.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-3xl">travel_explore</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Firecrawl</h3>
              <p className="text-white/60 text-sm">&ldquo;Scrape this webpage and send me a screenshot&rdquo; → bot scrapes, captures, and delivers.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center mb-6 border border-accent-amber/20">
                <span className="material-symbols-outlined text-amber-400 text-3xl">search</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tavily</h3>
              <p className="text-white/60 text-sm">&ldquo;Research this topic and send me the key sources&rdquo; → bot searches, summarizes, and links.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">palette</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">DALL·E / SD MCPs</h3>
              <p className="text-white/60 text-sm">Any image-generation MCP — the bot takes the prompt, calls the tool, and delivers the result.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">extension</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Any MCP Tool</h3>
              <p className="text-white/60 text-sm">If a tool returns a URL, the interceptor picks it up. Media-agnostic by design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Smart Delivery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">collections</span>
              <h3 className="text-lg font-semibold text-white mb-2">Auto-Batching</h3>
              <p className="text-white/60 text-sm">2+ images from the same tool call are automatically batched into a single gallery message. Single images use direct send.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">change_circle</span>
              <h3 className="text-lg font-semibold text-white mb-2">Graceful Fallback</h3>
              <p className="text-white/60 text-sm">If gallery send fails (e.g. user left the space), the bot falls back to individual sends or queues for later delivery.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4 block">filter_alt</span>
              <h3 className="text-lg font-semibold text-white mb-2">Deduplication</h3>
              <p className="text-white/60 text-sm">originalUrl tracking prevents the bot from sending the same media twice across turns or iterations.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-amber-400 text-3xl mb-4 block">token</span>
              <h3 className="text-lg font-semibold text-white mb-2">CDN-Backed</h3>
              <p className="text-white/60 text-sm">Media URLs use CDN delivery for fast, reliable image loading across all client connections.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Ready to give your bots media?</>}
        body={<>Connect any image, video, or file-generation tool via MCP.</>}
        links={[{ label: 'See gallery messages', href: '/features/bot-gallery' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_media_sending"
      />
    </div>
  )
}
