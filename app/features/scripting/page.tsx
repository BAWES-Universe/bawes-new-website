'use client'

import Link from 'next/link'

export default function ScriptingApiPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/build" className="hover:text-primary transition-colors">Build & Create</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Scripting API</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">code</span>
            Map Scripting
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Code That <span className="text-gradient">Shapes</span> Worlds.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-lg font-mono">WA.ui</code>,{' '}
            <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-lg font-mono">WA.room</code>,{' '}
            <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-lg font-mono">WA.player</code>,{' '}
            <code className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-lg font-mono">WA.state</code>
            — the scripting API from WorkAdventure. Control rooms, players, state, and UI from your map scripts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">code</span>
              Scripting Docs
            </a>
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting/references"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm inline-flex items-center gap-2 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">menu_book</span>
              API Reference
            </a>
          </div>
        </div>
      </section>

      {/* API Pillars */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">API Pillars</h2>
            <p className="text-white/60 max-w-xl mx-auto">Core modules for environment manipulation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-purple-400">web_asset</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WA.ui</h3>
              <p className="text-white/50 text-sm">Create UI elements, buttons, and modals within the world canvas. Open modal windows, add action bar buttons, and build custom interfaces.</p>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <code className="block text-xs text-purple-300 font-mono">WA.ui.openModal()</code>
                <code className="block text-xs text-purple-300 font-mono">WA.ui.actionBar.addButton()</code>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-purple-400">meeting_room</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WA.room</h3>
              <p className="text-white/50 text-sm">Control room properties, layer visibility, and spatial triggers. Hide/show layers, enter/leave zones, and manage the room state.</p>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <code className="block text-xs text-purple-300 font-mono">WA.room.onEnterZone()</code>
                <code className="block text-xs text-purple-300 font-mono">WA.room.hideLayer()</code>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-purple-400">person_play</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WA.player</h3>
              <p className="text-white/50 text-sm">Manage player position, avatars, and session data. Move players between maps, set custom avatars, and access user profile information.</p>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <code className="block text-xs text-purple-300 font-mono">WA.player.moveTo()</code>
                <code className="block text-xs text-purple-300 font-mono">WA.player.setPlayerBadge()</code>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-purple-400">database</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WA.state</h3>
              <p className="text-white/50 text-sm">Handle persistent room variables and cross-user synchronization. Store, retrieve, and share state across all players in a room.</p>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <code className="block text-xs text-purple-300 font-mono">WA.state.saveVariable()</code>
                <code className="block text-xs text-purple-300 font-mono">WA.state.onVariableChange()</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border border-purple-500/20">
            <div className="flex items-center gap-2 px-6 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="ml-4 text-xs text-white/40 font-mono">script.ts</span>
            </div>
            <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>
                <div className="space-y-1.5 text-white/80">
                  <div><span className="text-gray-500">{'// Listen for zone entry'}</span></div>
                  <div><span className="text-purple-400">WA.room</span>.<span className="text-blue-300">onEnterZone</span>(<span className="text-green-300">'welcome-zone'</span>, <span className="text-yellow-300">()</span> <span className="text-blue-300">=&gt;</span> {'{'}</div>
                  <div className="pl-4"><span className="text-gray-500">{'// Open a welcome modal'}</span></div>
                  <div className="pl-4"><span className="text-purple-400">WA.ui</span>.<span className="text-blue-300">openModal</span>({'{'}</div>
                  <div className="pl-8 text-purple-400">title: <span className="text-green-300">{"\"Welcome!\""}</span>,</div>
                  <div className="pl-8 text-purple-400">content: <span className="text-green-300">{"\"<p>You've entered the BAWES Universe.</p>\""}</span></div>
                  <div className="pl-4">{'}'}<span style={{color:'#e2e8f0'}}>);</span></div>
                  <div className="pl-4"><br /></div>
                  <div className="pl-4"><span className="text-gray-500">{'// Move player to a specific position'}</span></div>
                  <div className="pl-4"><span className="text-purple-400">WA.player</span>.<span className="text-blue-300">moveTo</span>(<span className="text-orange-300">200</span>, <span className="text-orange-300">300</span>);</div>
                  <div>{'}'}<span style={{color:'#e2e8f0'}}>);</span></div>
                  <div><br /></div>
                  <div><span className="text-gray-500">{'// Save state across sessions'}</span></div>
                  <div><span className="text-purple-400">WA.state</span>.<span className="text-blue-300">saveVariable</span>(<span className="text-green-300">'visitor_count'</span>, <span className="text-orange-300">42</span>, {'{'}</div>
                  <div className="pl-4 text-purple-400">public: <span className="text-yellow-300">true</span>,</div>
                  <div className="pl-4 text-purple-400">persist: <span className="text-yellow-300">true</span></div>
                  <div>{'}'}<span style={{color:'#e2e8f0'}}>);</span></div>
                </div>
              </code>
            </pre>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/map-scripting/events.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 font-semibold text-sm inline-flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              Browse full scripting documentation
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card rounded-2xl aspect-video flex items-center justify-center border border-purple-500/10">
                <span className="material-symbols-outlined text-6xl text-purple-400/30">cable</span>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Scripting Events</h2>
              <p className="text-white/60">Reactive patterns to build living environments.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-400 text-lg">login</span>
                  </div>
                  <div>
                    <code className="text-purple-300 font-mono font-bold">onEnter</code>
                    <p className="text-white/50 text-sm mt-0.5">Fires when a player enters a map or a specific zone. Great for welcome messages, tutorials, and entrance effects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-400 text-lg">logout</span>
                  </div>
                  <div>
                    <code className="text-purple-300 font-mono font-bold">onLeave</code>
                    <p className="text-white/50 text-sm mt-0.5">Trigger cleanup actions when a user departs a defined spatial area.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-400 text-lg">bolt</span>
                  </div>
                  <div>
                    <code className="text-purple-300 font-mono font-bold">onEvent</code>
                    <p className="text-white/50 text-sm mt-0.5">The generic listener for custom inter-script messaging. Send targeted events between scripts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variables */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Persistent Variables</h2>
              <p className="text-white/60">Store and synchronize state across all players in a room. Variables persist between sessions and can be public or private.</p>
              <div className="glass-card rounded-2xl overflow-hidden border border-purple-500/20">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-4 text-xs text-white/40 font-mono">state.ts</span>
                </div>
                <pre className="p-4 font-mono text-sm leading-relaxed overflow-x-auto max-h-48"><code>
                  <div className="space-y-1 text-white/80">
                    <div><span className="text-gray-500">{'// Save a public variable'}</span></div>
                    <div><span className="text-purple-400">WA.state</span>.<span className="text-blue-300">saveVariable</span>(<span className="text-green-300">'score'</span>, <span className="text-orange-300">100</span>, {'{'}</div>
                    <div className="pl-4 text-purple-400">public: <span className="text-yellow-300">true</span>,</div>
                    <div className="pl-4 text-purple-400">persist: <span className="text-yellow-300">true</span></div>
                    <div>{'}'}<span style={{color:'#e2e8f0'}}>);</span></div>
                    <div><br /></div>
                    <div><span className="text-gray-500">{'// Listen for changes'}</span></div>
                    <div><span className="text-purple-400">WA.state</span>.<span className="text-blue-300">onVariableChange</span>(<span className="text-green-300">'score'</span>)</div>
                    <div className="pl-4">.<span className="text-blue-300">subscribe</span>(<span className="text-yellow-300">(newValue)</span> <span className="text-blue-300">=&gt;</span> {'{'}</div>
                    <div className="pl-8"><span className="text-purple-400">console</span>.<span className="text-blue-300">log</span>(<span className="text-green-300">'Score:'</span>, newValue);</div>
                    <div className="pl-4">{'}'}<span style={{color:'#e2e8f0'}}>);</span></div>
                  </div>
                </code></pre>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold text-white mb-3">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-white/60">
                    <span className="material-symbols-outlined text-purple-400 text-base flex-shrink-0">check_circle</span>
                    Cross-user synchronization — everyone sees the same state
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/60">
                    <span className="material-symbols-outlined text-purple-400 text-base flex-shrink-0">check_circle</span>
                    Persistent variables survive room reloads
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/60">
                    <span className="material-symbols-outlined text-purple-400 text-base flex-shrink-0">check_circle</span>
                    Public or scoped visibility controls
                  </li>
                  <li className="flex items-start gap-3 text-sm text-white/60">
                    <span className="material-symbols-outlined text-purple-400 text-base flex-shrink-0">check_circle</span>
                    Real-time subscriptions to value changes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/features/map-editor" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-purple-500/40 transition-all group">
              <span className="material-symbols-outlined text-purple-400 text-3xl">edit_square</span>
              <h3 className="font-bold text-white">Inline Map Editor</h3>
              <p className="text-white/50 text-sm">Modify your universe in real-time with our browser-based editor.</p>
              <span className="text-purple-400 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </Link>
            <Link href="/features/area-zones" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-purple-500/40 transition-all group">
              <span className="material-symbols-outlined text-purple-400 text-3xl">widgets</span>
              <h3 className="font-bold text-white">Area Zones</h3>
              <p className="text-white/50 text-sm">Define interactions based on geographic proximity and room logic.</p>
              <span className="text-purple-400 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </Link>
            <a href="https://github.com/BAWES-Universe/workadventure-universe/tree/universe/docs/developer/map-scripting" target="_blank" rel="noopener noreferrer" className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-purple-500/40 transition-all group">
              <span className="material-symbols-outlined text-purple-400 text-3xl">menu_book</span>
              <h3 className="font-bold text-white">Full Docs</h3>
              <p className="text-white/50 text-sm">Complete scripting documentation on GitHub.</p>
              <span className="text-purple-400 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read docs <span className="material-symbols-outlined text-base">open_in_new</span></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
