'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import PageHero from '@/components/page/PageHero'
import PageClosing from '@/components/page/PageClosing'
export default function UseCaseLearningPageContent() {
  return (
    <main className="pt-20">
      <PageHero
        crumbs={[{ label: 'Use Cases', href: '/use-cases' }]}
        here="For Learning"
        title={<>Learn together, <span className="text-gradient-accent">wherever you are</span></>}
        lead={<>Digital campuses, study rooms, and mentorship spaces. Walk into a lecture, join a study group, or meet your mentor in their virtual office.</>}
        scene="class"
        actions={[{ label: 'Build your campus', href: '/contact' }, { label: 'How it works', href: '/how-it-works' }]}
        source="page_use_cases_learning"
      />

      {/* How It Works */}
      <section className="py-section-padding-v relative">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Walk Into Class</h3>
              <p className="font-body-md text-body-md text-text-secondary">Enter the lecture hall. See the presentation, hear the teacher, ask questions in chat.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">groups</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Study Groups</h3>
              <p className="font-body-md text-body-md text-text-secondary">Join a quiet study room with classmates. Proximity chat for discussion, text chat for sharing links.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary">meeting_room</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Office Hours</h3>
              <p className="font-body-md text-body-md text-text-secondary">Walk to the professor&apos;s virtual office. No booking system needed — just knock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-section-padding-v bg-surface-container-lowest/30">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/3">
            <h2 className="font-headline-section text-headline-section text-on-surface mb-6">Key Features for Learning</h2>
            <p className="font-body-md text-body-md text-text-secondary mb-8">
              The BAWES Universe provides specialized modular environments designed specifically for pedagogical needs, from massive lecture halls to intimate 1:1 sessions.
            </p>
            <div className="p-6 glass-card rounded-xl border-primary/40 bg-primary/5">
              <div className="flex items-center gap-4 text-primary mb-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-label-navigation text-label-navigation">LIVEKIT ENABLED</span>
              </div>
              <p className="text-caption font-caption text-text-low-emphasis">Built on professional-grade low-latency infrastructure for seamless educational experiences.</p>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">meeting_room</span>
              <h4 className="font-bold text-lg mb-2">Lecture Halls</h4>
              <p className="text-text-low-emphasis text-sm">Large-scale presentation rooms with screen sharing and Q&amp;A. Support hundreds of concurrent students.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-secondary mb-4 text-3xl">groups</span>
              <h4 className="font-bold text-lg mb-2">Study Rooms</h4>
              <p className="text-text-low-emphasis text-sm">Quiet zones with optional proximity chat. Perfect for group projects and collaborative learning.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">badge</span>
              <h4 className="font-bold text-lg mb-2">Mentor Offices</h4>
              <p className="text-text-low-emphasis text-sm">Dedicated rooms for 1:1 guidance. Bots can handle scheduling and intake.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">campaign</span>
              <h4 className="font-bold text-lg mb-2">Event Broadcasts</h4>
              <p className="text-text-low-emphasis text-sm">Commencements, guest lectures, and orientations at scale with megaphone broadcasting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-center mb-16">Learning Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary/30">school</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Universities</h3>
              <p className="text-text-secondary">Full campus digitization. Lecture halls, admin offices, student lounges.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-secondary/30">code</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Coding Bootcamps</h3>
              <p className="text-text-secondary">Pair programming, instructor help rooms, and project demos in spatial environments.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-48 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-tertiary/30">auto_stories</span>
            </div>
            <div className="p-8">
              <h3 className="font-headline-card text-headline-card mb-4">Workshops & Training</h3>
              <p className="text-text-secondary">Interactive workshops with live demos, breakout rooms, and hands-on exercises.</p>
            </div>
          </div>
        </div>
      </section>
      <PageClosing
        title={<>Open the doors to your campus</>}
        body={<>Walk in, say hello, and look around.</>}
        links={[{ label: 'Build your campus', href: '/contact' }, { label: 'All use cases', href: '/use-cases' }]}
        source="page_use_cases_learning"
      />
    </main>
  );
}
