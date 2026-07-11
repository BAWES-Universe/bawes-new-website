'use client'

export default function MatrixChatPage() {
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
            <span className="material-symbols-outlined text-lg">hub</span>
            Communication Feature
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Matrix Chat
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Federated chat that bridges Matrix communities directly into your universe. Connect with the broader Matrix ecosystem without leaving your space.
          </p>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            Matrix Chat brings the power of the open Matrix protocol into your universe. Join public Matrix rooms, bridge existing communities, and enable cross-universe conversations through a decentralized communication backbone.
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
                <span className="material-symbols-outlined text-2xl text-purple-300">account_tree</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Federated Protocol</h3>
              <p className="text-sm text-white/60 leading-relaxed">Built on the Matrix open protocol, enabling decentralized communication across any Matrix-compatible server.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">bridge</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Bridges</h3>
              <p className="text-sm text-white/60 leading-relaxed">Bridge existing Matrix rooms and communities directly into your universe for seamless cross-platform conversations.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">lock</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-white/60 leading-relaxed">Matrix-native E2EE ensures private conversations stay private, even across federated servers.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">sync_alt</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cross-Universe Sync</h3>
              <p className="text-sm text-white/60 leading-relaxed">Messages sync across all connected servers and clients, so conversations are never siloed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 min-h-[40vh] flex items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto text-center border border-purple-500/15">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connect beyond boundaries</h2>
          <p className="text-white/60 mb-8">Jump back to the Communication Hub to explore more features.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/communication" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Communication Hub
            </a>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300">
              <span className="material-symbols-outlined text-lg">explore</span>
              Explore the Universe
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
