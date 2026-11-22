import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'

export const metadata: Metadata = {
  title: 'Bot Gallery — Multi-Image Messages with Lightbox',
  description: 'Gallery messages display multiple images in a responsive grid with a full-screen lightbox. Keyboard nav, swipe gestures, and auto-disable character movement.',
  openGraph: {
    title: 'Bot Gallery — Multi-Image Messages with Lightbox',
    description: 'Gallery messages display multiple images in a responsive grid with a full-screen lightbox. Keyboard nav, swipe gestures, and auto-disable character movement.',
    type: 'website',
    images: [{ url: '/images/enter-univ.png', width: 1200, height: 630, alt: 'BAWES Universe' }],
  },
  twitter: {
    title: 'Bot Gallery — Multi-Image Messages with Lightbox',
    description: 'Gallery messages display multiple images in a responsive grid with a full-screen lightbox. Keyboard nav, swipe gestures, and auto-disable character movement.',
    card: 'summary_large_image',
    images: ['/images/enter-univ.png'],
  },
}

export default function BotGalleryPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">

      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'AI Bots', href: '/ai-bots' }]}
        here="Bot Gallery"
        title={<>Many pictures, <span className="text-gradient-accent">one message</span></>}
        lead={<>When a message has several pictures, they show as a tidy grid. Tap one to see it full screen.</>}
        detail={[
          <>Gallery messages display multiple images in a responsive grid with a full-screen lightbox. Works for both user-uploaded files and bot-generated images.</>,
        ]}
        scene="chat"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_bot_gallery"
      />

      {/* Layout */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Responsive Layout</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">view_agenda</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">2 Images</h3>
              <p className="text-white/60">Two-column layout — each image gets equal space, side by side.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-3xl">grid_view</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">3 Images</h3>
              <p className="text-white/60">Mosaic layout — one large image paired with two smaller ones for visual balance.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-3xl">dashboard</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">4+ Images</h3>
              <p className="text-white/60">Grid layout with overflow — the 6th cell shows a <code className="text-primary">+N</code> overlay indicating more images.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Full-Screen Lightbox</h2>
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/60 mb-6">Click any image in a gallery to open the full-screen lightbox. Navigate between images with keyboard, touch, or buttons.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">keyboard</span>
                    <span><strong className="text-white">Arrow keys</strong> — navigate left/right between images</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">swipe</span>
                    <span><strong className="text-white">Swipe gestures</strong> — swipe left/right on mobile devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">touch_app</span>
                    <span><strong className="text-white">Zoom &amp; pan</strong> — pinch to zoom, drag to pan, double-tap to zoom</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <span><strong className="text-white">Movement disabled</strong> — character stays still while browsing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-8 text-center">
                <span className="material-symbols-outlined text-6xl text-white/30 mb-4 block">photo_library</span>
                <p className="text-white/40 text-sm">Click any gallery image to open the lightbox</p>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <span className="material-symbols-outlined text-white/20">keyboard_arrow_left</span>
                  <span className="text-white/30 text-xs">prev</span>
                  <span className="text-white/20 mx-4">|</span>
                  <span className="text-white/30 text-xs">next</span>
                  <span className="material-symbols-outlined text-white/20">keyboard_arrow_right</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sender-Agnostic */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Works For Everyone</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">upload</span>
              <h3 className="text-lg font-semibold text-white mb-2">User Uploads</h3>
              <p className="text-white/60 text-sm">Drag multiple files into the chat — they're batched into a single gallery message instead of separate bubbles.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">smart_toy</span>
              <h3 className="text-lg font-semibold text-white mb-2">Bot-Generated Images</h3>
              <p className="text-white/60 text-sm">When a bot's tool call returns multiple images, they're auto-batched into a gallery and sent as one message.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        title={<>See galleries in action</>}
        body={<>Upload multiple files or ask a bot to generate images.</>}
        links={[{ label: 'See bot media sending', href: '/features/bot-media-sending' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_bot_gallery"
      />
    </div>
  )
}
