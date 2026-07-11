'use client'
import Link from 'next/link'

export default function AvatarPlatformPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Background Orbs */}
            {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">face</span>
            Build Feature
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Avatar Platform
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Create, customize, and collect avatars that represent your identity across the BAWES Universe. Your look is your identity.
          </p>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            The Avatar Platform is a full-featured system for designing and managing digital identities. From simple customizations to exclusive collectible avatars, express yourself in ways that go beyond a flat profile picture.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">brush</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Avatar Creation</h3>
              <p className="text-sm text-white/60 leading-relaxed">Deep customization tools — choose outfits, accessories, hairstyles, colors, and more. Build a look that truly represents you.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">store</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Avatar Marketplace</h3>
              <p className="text-sm text-white/60 leading-relaxed">Browse and purchase exclusive avatar designs, premium accessories, and limited-edition items created by the community and BAWES team.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">collections_bookmark</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">NFT / Gallery Support</h3>
              <p className="text-sm text-white/60 leading-relaxed">Showcase your collection in a personal gallery. Support for verifiable digital ownership and displaying proof-of-collectible items in your profile.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">public</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cross-Universe Avatars</h3>
              <p className="text-sm text-white/60 leading-relaxed">Your avatar travels with you across all BAWES worlds. One identity, one look — consistent presence everywhere you go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 min-h-[40vh] flex items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto text-center border border-purple-500/15">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Design your identity</h2>
          <p className="text-white/60 mb-8">Jump back to the Build Hub to explore more features.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Build Hub
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
