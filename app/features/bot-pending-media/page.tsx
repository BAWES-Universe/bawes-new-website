import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'

export const metadata: Metadata = {
  title: 'Bot Pending Media — Reliable Delivery on Re-Entry',
  description: 'If you walk away while a bot is generating media, it queues the result and delivers it the moment you return. Nothing gets lost.',
  openGraph: {
    title: 'Bot Pending Media — Reliable Delivery on Re-Entry',
    description: 'If you walk away while a bot is generating media, it queues the result and delivers it the moment you return. Nothing gets lost.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Pending Media — Reliable Delivery on Re-Entry',
    description: 'If you walk away while a bot is generating media, it queues the result and delivers it the moment you return. Nothing gets lost.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotPendingMediaPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Pending Media"
        title={<>Nothing <span className="text-gradient-accent">gets lost</span></>}
        lead={<>Walk away while a bot is still making your picture? It keeps it safe and hands it over the moment you are back.</>}
        detail={[
          <>If you walk away while a bot is generating media, it queues the result and delivers it the moment you return. No lost images, no repeated requests.</>,
        ]}
        scene="resident"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_pending_media"
      />

      {/* The Problem */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">The Problem</h2>
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-red-500/10">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-red-400/60 text-2xl mt-1">person</span>
                <p className="text-white/60">User walks up to a bot and asks it to generate an image.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-400/60 text-2xl mt-1">hourglass_top</span>
                <p className="text-white/60">The bot calls a tool (e.g. ComfyUI) — generation takes 10-30 seconds.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-red-400/60 text-2xl mt-1">logout</span>
                <p className="text-white/60">User walks away to another part of the room. The tool finishes. The image is ready — but there's nobody to send it to.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-red-400/60 text-2xl mt-1">cancel</span>
                <p className="text-white/60">Without pending media: the image is lost. The user comes back and has to ask again.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Fix */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">The Fix</h2>
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-green-500/10">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400/60 text-2xl mt-1">lock_clock</span>
                <p className="text-white/60"><strong className="text-white">Pre-queue</strong> — URLs from tool results are queued to <code className="text-primary">pendingMedia</code> immediately after the tool finishes, before the AI generates its response.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400/60 text-2xl mt-1">login</span>
                <p className="text-white/60"><strong className="text-white">Re-entry detection</strong> — when the user walks back to the bot, <code className="text-primary">flushPendingMedia</code> delivers all queued media.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400/60 text-2xl mt-1">filter_alt</span>
                <p className="text-white/60"><strong className="text-white">Deduplication</strong> — <code className="text-primary">originalUrl</code> tracking prevents the bot from re-sending the same image if the user already received it.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400/60 text-2xl mt-1">chat</span>
                <p className="text-white/60"><strong className="text-white">Greeting context</strong> — the bot's greeting on re-entry notes that media was delivered while away, so the AI doesn't try to re-generate it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Delivery Flow</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">build</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">1. Tool Runs</h3>
              <p className="text-white/50 text-xs">Bot calls MCP tool, gets result with media URLs</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4 mx-auto border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-2xl">queue</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">2. Pre-Queue</h3>
              <p className="text-white/50 text-xs">URLs saved to pendingMedia immediately</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center mb-4 mx-auto border border-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-2xl">login</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">3. User Returns</h3>
              <p className="text-white/50 text-xs">Re-entry triggers flushPendingMedia</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 mx-auto border border-green-500/20">
                <span className="material-symbols-outlined text-green-400 text-2xl">mark_email_read</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">4. Delivered</h3>
              <p className="text-white/50 text-xs">Media sent to chat, greeting notes delivery</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>Reliable by design</>}
        body={<>Walk away, come back — your media is waiting.</>}
        links={[{ label: 'See bot media sending', href: '/features/bot-media-sending' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_pending_media"
      />
    </div>
  )
}
