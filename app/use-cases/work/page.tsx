'use client'

export default function WorkPage() {
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
            <span className="material-symbols-outlined text-lg">work</span>
            Use Cases
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Work
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Redesign the way your team collaborates. BAWES transforms remote work into an immersive, spatial experience where presence and connection come naturally.
          </p>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            Move beyond endless video calls and chat threads. BAWES creates a digital workplace where teams gather in spatial rooms, collaborate in real time, and feel genuinely connected — no matter where they are in the world.
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
                <span className="material-symbols-outlined text-2xl text-purple-300">groups</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Spaces</h3>
              <p className="text-sm text-white/60 leading-relaxed">Dedicated spatial rooms for each team. Drop by to say hi, catch up on projects, or run standups with natural proximity-based conversation.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">psychiatry</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Focus Rooms</h3>
              <p className="text-sm text-white/60 leading-relaxed">Distraction-free zones for deep work. Set your status to focus mode and let your team know you&apos;re in the zone — without being alone.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">forum</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Async Collaboration</h3>
              <p className="text-sm text-white/60 leading-relaxed">Leave messages, share files, and update docs across time zones. In-world whiteboards and persistent chat ensure nothing gets lost.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">domain</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Digital HQ</h3>
              <p className="text-sm text-white/60 leading-relaxed">A permanent virtual office that your team calls home. Customize your HQ with branded spaces, watercooler areas, and dedicated project rooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 min-h-[40vh] flex items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto text-center border border-purple-500/15">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Build your digital workplace</h2>
          <p className="text-white/60 mb-8">Explore more use cases for the BAWES Universe.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/features-overview" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Use Cases
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
