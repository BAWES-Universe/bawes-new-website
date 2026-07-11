'use client'

import Link from 'next/link'

export default function MeetingRoomsPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Walk In. Talk.<br/>Walk Out.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction.
          </p>
        </div>
      </section>

      {/* How They Work */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How They Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white">map</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Zone-Based</h3>
              <p className="text-white/60">Meeting rooms are area zones on the map. Walk into the zone to auto-join. Your audio and video stream only to those inside.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white">present_to_all</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Screen Sharing</h3>
              <p className="text-white/60">Share your screen within the meeting room. Everyone in the zone sees it automatically on their primary viewport or local displays.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white">hub</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Seamless</h3>
              <p className="text-white/60">Handled through your P2P and LiveKit infrastructure. No external service setup needed — it's native to the spatial experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Variations */}
      <section className="relative z-10 py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Room Variations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Spontaneous Rooms</h3>
              <p className="text-white/60 mb-8">Walk in and start talking. No calendar, no invite. Perfect for quick huddles and rapid decision making during the flow of work.</p>
              <ul className="space-y-3 mb-8 text-white/60">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Zero friction entry</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Visual status indicators</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Public availability</li>
              </ul>
            </div>
            <div className="glass-card p-10 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Scheduled Sessions</h3>
              <p className="text-white/60 mb-8">Book the room ahead of time. Calendar integration available. Great for recurring meetings, classes, or formal office hours.</p>
              <ul className="space-y-3 mb-8 text-white/60">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Google/Outlook Sync</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Room locking logic</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Guest access codes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Built for Every Use Case</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl border-l-4 border-l-primary">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">groups</span>
              <h4 className="text-xl font-semibold text-white mb-4">Team Standups</h4>
              <p className="text-white/60">Walk into the team room at 9am. Everyone's there already. No Zoom links to find or click.</p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-4 border-l-secondary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">handshake</span>
              <h4 className="text-xl font-semibold text-white mb-4">Client Meetings</h4>
              <p className="text-white/60">Set up a private meeting room. Share your screen, walk through a demo, and offer a premium experience.</p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-4 border-l-tertiary">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">school</span>
              <h4 className="text-xl font-semibold text-white mb-4">Classrooms</h4>
              <p className="text-white/60">Teacher in the room zone, students in audience. Raise hand zones for questions and breakout areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to walk in and talk?</h2>
          <p className="text-white/60 mb-8">Set up your first meeting room in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/communication" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              See all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
