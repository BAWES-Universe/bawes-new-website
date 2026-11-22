'use client'

import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function MeetingRoomsPageContent() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      <PageHero
        crumbs={[{ label: 'Features', href: '/features-overview' }, { label: 'Communication', href: '/communication' }]}
        here="Meeting Rooms"
        title={<>Walk in. Talk. <span className="text-gradient-accent">Walk out.</span></>}
        lead={<>Turn any area of your map into a meeting room. Step inside and you are in the call. No invites, no links.</>}
        detail={[
          <>Designate areas on the map as meeting rooms. Walk in to auto-join — no invites, no links, no scheduling friction.</>,
        ]}
        scene="room"
        actions={[{ label: 'See all features', href: '/features-overview' }]}
        source="feature_meeting_rooms"
      />

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

      <PageClosing
        title={<>Ready to walk in and talk?</>}
        body={<>Set up your first meeting room in minutes.</>}
        links={[{ label: 'See all features', href: '/features-overview' }, { label: 'Back to the home page', href: '/' }]}
        source="feature_meeting_rooms"
      />
    </div>
  )
}
