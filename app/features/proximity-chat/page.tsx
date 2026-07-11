'use client'
import Link from 'next/link'

export default function ProximityChatPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Background Orbs */}
      <div className="bg-orb bg-orb-purple top-[-10%] left-[-10%] w-[500px] h-[500px]" />
      <div className="bg-orb bg-orb-purple bottom-[-10%] right-[-10%] w-[600px] h-[600px]" />
      <div className="bg-orb bg-orb-blue top-1/3 right-1/4 w-[400px] h-[400px]" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">spatial_audio</span>
            Communication Feature
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Proximity Chat
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Voice chat that respects distance and presence in the spatial world. Walk closer to hear someone louder, move away and their voice naturally fades — just like real life.
          </p>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            Proximity chat creates immersive audio experiences by dynamically adjusting volume based on the spatial distance between users. No menus, no channels — just natural conversation that flows through physical space.
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
                <span className="material-symbols-outlined text-2xl text-purple-300">volume_up</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Spatial Audio</h3>
              <p className="text-sm text-white/60 leading-relaxed">Volume and directionality map to real-world positions, creating natural conversations that feel like face-to-face interactions.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">distance</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Distance-Based Fade</h3>
              <p className="text-sm text-white/60 leading-relaxed">Audio automatically fades in and out as users move closer or farther apart — zero configuration required.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">mic</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Push-to-Talk &amp; Voice Modes</h3>
              <p className="text-sm text-white/60 leading-relaxed">Choose between open mic, push-to-talk, or voice activity detection for flexible communication styles.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">groups</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Group Dynamics</h3>
              <p className="text-sm text-white/60 leading-relaxed">Clusters of users talking together naturally form conversation groups based on who is within earshot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 min-h-[40vh] flex items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto text-center border border-purple-500/15">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience spatial communication</h2>
          <p className="text-white/60 mb-8">Jump back to the Communication Hub to explore more features.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/communication" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Communication Hub
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
