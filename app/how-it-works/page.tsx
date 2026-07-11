'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="pt-40 pb-section-padding-v px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <span className="glass-card px-4 py-1.5 rounded-full text-caption font-label-navigation text-primary">Presence matters.</span>
              <span className="glass-card px-4 py-1.5 rounded-full text-caption font-label-navigation text-primary">Context matters.</span>
              <span className="glass-card px-4 py-1.5 rounded-full text-caption font-label-navigation text-primary">Where you are shapes what you can do.</span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white leading-none">
              Universe, simply <span className="text-gradient">explained.</span>
            </h1>
            <p className="font-body-md text-body-md text-text-secondary max-w-xl">
              Universe is composed of universes, worlds, and rooms people move through — not interfaces people click through.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative rounded-3xl overflow-hidden glass-card aspect-video border-2 border-white/10 flex items-center justify-center">
              <div className="z-10 bg-black/40 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 border border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl">play_circle</span>
                <span className="font-semibold text-white">Watch Universe in action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ORBIT */}
      <section className="py-section-padding-v px-gutter max-w-container-max mx-auto border-t border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">explore</span>
                <h4 className="font-headline-card text-headline-card">Discover</h4>
                <p className="text-caption text-text-secondary">Explore universes and worlds around you.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
                <h4 className="font-headline-card text-headline-card">Orient</h4>
                <p className="text-caption text-text-secondary">Understand exactly where you sit in the space.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
                <h4 className="font-headline-card text-headline-card">Jump</h4>
                <p className="text-caption text-text-secondary">Instant teleportation to active rooms.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">group</span>
                <h4 className="font-headline-card text-headline-card">Connect</h4>
                <p className="text-caption text-text-secondary">See live presence across the entire world.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">Orbit — Your Navigation Layer</span>
            <h2 className="font-headline-section text-headline-section text-white">Orbit shows you where you are</h2>
            <p className="font-body-md text-body-md text-text-secondary">
              Orbit is the navigation layer of Universe. It shows you your location and position, helps you discover what exists around you, and lets you jump directly to where activity is happening. Think of Orbit as orientation, not hierarchy.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-body-md">Discover universes, worlds, and rooms</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-body-md">Understand what exists in your space</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-body-md">Jump directly to active rooms</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-body-md">See who's online and where</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE STRUCTURE */}
      <section className="py-section-padding-v px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">The Hierarchy of Existence</span>
            <h2 className="font-headline-section text-headline-section text-white">Three levels. Infinite possibilities.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">public</span>
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-3xl">public</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white mb-4">Universes</h3>
              <p className="font-body-md text-text-secondary flex-grow mb-8">
                A first-class environment. An organization, community, project, brand, or personal ecosystem each gets its own universe. Think of it as your digital home — everything you build lives here.
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-caption text-primary font-semibold block mb-2">EXAMPLES</span>
                <p className="text-caption text-text-low-emphasis">Workspace, Campus, Gaming Community</p>
              </div>
            </div>
            <div className="glass-card p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">language</span>
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">language</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white mb-4">Worlds</h3>
              <p className="font-body-md text-text-secondary flex-grow mb-8">
                A functional domain inside a Universe. Worlds organize activity by purpose — work, learning, commerce, social, events.
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-caption text-secondary font-semibold block mb-2">EXAMPLES</span>
                <p className="text-caption text-text-low-emphasis">Team World, Market World, Social World</p>
              </div>
            </div>
            <div className="glass-card p-10 rounded-3xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">meeting_room</span>
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">meeting_room</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-white mb-4">Rooms</h3>
              <p className="font-body-md text-text-secondary flex-grow mb-8">
                Where things actually happen. Rooms are spatial, contextual, and alive — people move through them, interact with them, and shape them.
              </p>
              <div className="pt-6 border-t border-divider">
                <span className="text-caption text-tertiary font-semibold block mb-2">EXAMPLES</span>
                <p className="text-caption text-text-low-emphasis">Collaboration Rooms, Shop, Event Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAPS & TEMPLATES */}
      <section className="py-section-padding-v px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32 space-y-6">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">Maps & Room Templates</span>
            <h2 className="font-headline-section text-headline-section text-white">Start fast with proven layouts</h2>
            <p className="font-body-md text-body-md text-text-secondary">
              Rooms are built using maps. Universe provides room templates — proven layouts designed for specific use cases — so people can start fast and build with confidence.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/features/maps" className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
                <div className="w-full h-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl text-primary/30">business</span>
                </div>
              </div>
              <h4 className="font-headline-card text-headline-card text-white">Office Layout</h4>
            </Link>
            <Link href="/features/map-templates" className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
                <div className="w-full h-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl text-secondary/30">school</span>
                </div>
              </div>
              <h4 className="font-headline-card text-headline-card text-white">Classroom Layout</h4>
            </Link>
            <Link href="/features/map-templates" className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
                <div className="w-full h-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl text-tertiary/30">theater_comedy</span>
                </div>
              </div>
              <h4 className="font-headline-card text-headline-card text-white">Event Hall Layout</h4>
            </Link>
            <Link href="/features/maps" className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 mb-4">
                <div className="w-full h-full bg-surface-container-high flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl text-primary/30">diversity_3</span>
                </div>
              </div>
              <h4 className="font-headline-card text-headline-card text-white">Community Hub</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMUNICATION */}
      <section className="py-section-padding-v px-gutter bg-surface-container">
        <div className="max-w-container-max mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-primary font-bold tracking-widest text-caption uppercase">Communication in Universe</span>
            <h2 className="font-headline-section text-headline-section text-white">Talk naturally. No scheduling needed.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">spatial_audio_off</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">Proximity Chat</h4>
                <p className="text-body-md text-text-secondary text-sm">Audio/video activates when you&apos;re near someone. Walk away to end.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-2xl">call</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">Phone Chat</h4>
                <p className="text-body-md text-text-secondary text-sm">Direct calls across rooms for quick one-on-one syncs.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-2xl">forum</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">Text Chat</h4>
                <p className="text-body-md text-text-secondary text-sm">Per-room channels with integrated bot streaming support.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-2xl">campaign</span>
              </div>
              <div>
                <h4 className="font-headline-card text-[20px] text-white mb-2">Megaphone Broadcast</h4>
                <p className="text-body-md text-text-secondary text-sm">One-to-many audio/video and screen sharing for the entire room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEMBERSHIP */}
      <section className="py-section-padding-v px-gutter max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-primary font-bold tracking-widest text-caption uppercase">Membership & Access</span>
          <h2 className="font-headline-section text-headline-section text-white">All spaces are open to explore</h2>
          <p className="font-body-md text-body-md text-text-secondary">
            Membership exists at the world level and grants capabilities, not exclusivity. Access control is spatial, not global. Using the Area Editor, members define zones inside rooms and control who can enter, who can interact, and who can edit.
          </p>
          <div className="pt-10 flex justify-center">
            <div className="glass-card p-8 rounded-full flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-background-page overflow-hidden bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">person</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-background-page overflow-hidden bg-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-xl">person</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-background-page overflow-hidden bg-tertiary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-xl">person</span>
                </div>
              </div>
              <span className="text-white font-semibold">Join thousands of world builders</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EDITORS */}
      <section className="py-section-padding-v px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <Link href="/features/map-editor" className="glass-card p-12 rounded-[40px] space-y-8 group cursor-pointer">
            <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-5xl">architecture</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline-section text-white">Map Editor</h3>
              <p className="font-body-md text-text-secondary">
                Decorate rooms, customize layouts, and shape the environment visually. Every pixel of your world can be tailored to match your brand or community&apos;s vibe.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
              Explore Map Editing <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
          <Link href="/features/area-zones" className="glass-card p-12 rounded-[40px] space-y-8 group cursor-pointer">
            <div className="w-20 h-20 rounded-3xl bg-secondary/20 flex items-center justify-center transition-all group-hover:scale-110">
              <span className="material-symbols-outlined text-secondary text-5xl">admin_panel_settings</span>
            </div>
            <div className="space-y-4">
              <h3 className="font-headline-section text-white">Area Editor</h3>
              <p className="font-body-md text-text-secondary">
                Define zones, assign permissions, and control access and editing. Create private meeting spots or interactive stages with simple spatial logic.
              </p>
            </div>
            <div className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
              Manage Permissions <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-gutter">
        <div className="max-w-container-max mx-auto relative overflow-hidden glass-card rounded-[60px] p-20 text-center space-y-8">
          <div className="relative z-10 space-y-6">
            <h2 className="font-display-hero text-display-hero-mobile md:text-headline-section text-white">Ready to enter the Universe?</h2>
            <p className="text-body-md text-text-secondary max-w-xl mx-auto">
              Experience a spatial digital world that feels like being there. Start building your ecosystem today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/contact" className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-bold px-12 py-5 rounded-full text-lg shadow-lg shadow-purple-500/30 hover:scale-105 active:scale-95 transition-all inline-block">
                Get Started
              </Link>
              <Button className="glass-card text-white font-bold px-12 py-5 rounded-full text-lg border border-white/20 hover:bg-white/10 active:scale-95 transition-all">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
