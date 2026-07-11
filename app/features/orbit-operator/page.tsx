'use client'

export default function OrbitOperatorPage() {
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
            <span className="material-symbols-outlined text-lg">dashboard_customize</span>
            Platform Feature
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Orbit Operator
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-4">
            Full command center for your spatial universe. Monitor, manage, and optimize every aspect of your BAWES deployment from one powerful dashboard.
          </p>
          <p className="text-lg text-white/50 leading-relaxed max-w-3xl mx-auto">
            Orbit Operator gives administrators real-time insights into usage, users, bots, and system health. Whether you&apos;re running a small community or a global enterprise deployment, the Operator keeps you in control.
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
                <span className="material-symbols-outlined text-2xl text-purple-300">monitoring</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Usage Analytics</h3>
              <p className="text-sm text-white/60 leading-relaxed">Real-time dashboards showing active users, popular maps, peak hours, and retention trends. Make data-driven decisions about your community.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">group</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">User Management</h3>
              <p className="text-sm text-white/60 leading-relaxed">Browse, search, and manage users. Assign roles, apply permissions, suspend accounts, and view detailed activity histories.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">smart_toy</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bot Monitoring</h3>
              <p className="text-sm text-white/60 leading-relaxed">See all active bots at a glance — health status, conversation volumes, token usage, and error rates across your entire AI ecosystem.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">map</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Map Performance</h3>
              <p className="text-sm text-white/60 leading-relaxed">Track map load times, concurrent users per room, and performance metrics. Identify bottlenecks and optimize your world layouts.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="material-symbols-outlined text-2xl text-purple-300">notifications_active</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">System Alerts</h3>
              <p className="text-sm text-white/60 leading-relaxed">Configure thresholds and receive proactive alerts for unusual activity, server load, or system errors — before they impact your users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 min-h-[40vh] flex items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-10 max-w-2xl mx-auto text-center border border-purple-500/15">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Command your universe</h2>
          <p className="text-white/60 mb-8">Jump back to the Platform Hub to explore more features.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/platform" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Platform Hub
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
