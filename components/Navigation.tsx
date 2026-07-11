'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DropdownItem {
  label: string
  href: string
  description?: string
}

interface NavDropdown {
  label: string
  icon: string
  items: DropdownItem[]
}

const dropdowns: NavDropdown[] = [
  {
    label: 'Communication',
    icon: 'cell_tower',
    items: [
      { label: 'Overview', href: '/communication', description: 'All communication features' },
      { label: 'Proximity Chat', href: '/features/proximity-chat', description: 'Spatial voice chat' },
      { label: 'Text Chat', href: '/features/text-chat', description: 'Real-time messaging' },
      { label: 'Matrix Chat', href: '/features/matrix-chat', description: 'Federated chat protocol' },
      { label: 'Meeting Rooms', href: '/features/meeting-rooms', description: 'Video conferencing' },
      { label: 'Screen Sharing', href: '/features/screen-sharing', description: 'Share your screen' },
      { label: 'Megaphone', href: '/features/megaphone', description: 'Broadcast announcements' },
      { label: 'Broadcasting & Events', href: '/features/broadcasting', description: 'Live event streaming' },
      { label: 'Play Audio', href: '/features/play-audio', description: 'Music & sound effects' },
      { label: 'Follow', href: '/features/follow', description: 'Navigate together' },
      { label: 'Lock & Moderate', href: '/features/lock-discuss', description: 'Manage conversations' },
    ],
  },
  {
    label: 'AI Bots',
    icon: 'psychology',
    items: [
      { label: 'Overview', href: '/ai-bots', description: 'All AI bot features' },
      { label: 'Bot Avatars', href: '/features/bot-avatars', description: 'Custom bot appearance' },
      { label: 'Bot Behaviors', href: '/features/bot-behaviors', description: 'Bot actions & logic' },
      { label: 'Bot Editor', href: '/features/bot-editor', description: 'Configure bot settings' },
      { label: 'Bot Emotions', href: '/features/bot-emotions', description: 'Moods & personality' },
      { label: 'Bot Greetings', href: '/features/bot-greetings', description: 'Welcome interactions' },
      { label: 'Bot Memory', href: '/features/bot-memory', description: 'Persistent memory' },
      { label: 'Bot Provider Config', href: '/features/bot-provider-config', description: 'AI model selection' },
      { label: 'Bot Streaming', href: '/features/bot-streaming', description: 'Real-time responses' },
      { label: 'Bot Tools', href: '/features/bot-tools', description: 'Function calling' },
      { label: 'Recursive Bots', href: '/features/recursive-bots', description: 'Bots that build bots' },
    ],
  },
  {
    label: 'Build',
    icon: 'construction',
    items: [
      { label: 'Overview', href: '/build', description: 'All build tools' },
      { label: 'Maps', href: '/features/maps', description: 'Design interactive maps' },
      { label: 'Map Editor', href: '/features/map-editor', description: 'Edit maps in-browser' },
      { label: 'Map Templates', href: '/features/map-templates', description: 'Pre-built templates' },
      { label: 'Area Zones', href: '/features/area-zones', description: 'Interactive zones' },
      { label: 'Entity Editor', href: '/features/entity-editor', description: 'Place & configure objects' },
      { label: 'Scripting API', href: '/features/scripting', description: 'Custom game logic' },
      { label: 'Teleport & Portals', href: '/features/teleport', description: 'Link rooms & worlds' },
      { label: 'Searchable', href: '/features/searchable', description: 'Full-text discovery' },
      { label: 'User Directory', href: '/features/user-directory', description: 'Browse users' },
      { label: 'Avatar Platform', href: '/features/avatar-platform', description: 'Custom avatar system' },
    ],
  },
  {
    label: 'Platform',
    icon: 'cloud',
    items: [
      { label: 'Overview', href: '/platform', description: 'All platform features' },
      { label: 'Self-Hosting', href: '/features/self-hosting', description: 'Deploy on your infra' },
      { label: 'Admin API', href: '/features/admin-api', description: 'REST API management' },
      { label: 'OIDC Auth', href: '/features/oidc-auth', description: 'Single sign-on' },
      { label: 'White Label', href: '/features/white-label', description: 'Custom branding' },
      { label: 'Technology Stack', href: '/features/tech-stack', description: 'Open source tech' },
      { label: 'Orbit Operator', href: '/features/orbit-operator', description: 'Admin dashboard' },
      { label: 'Woka Avatars', href: '/features/woka-avatars', description: 'Avatar system' },
      { label: 'MCP Integration', href: '/mcp-integration', description: 'Model Context Protocol' },
    ],
  },
  {
    label: 'Use Cases',
    icon: 'cases',
    items: [
      { label: 'Overview', href: '/features-overview', description: 'What you can build with Universe' },
      { label: 'For Work', href: '/use-cases/work', description: 'Team spaces, focus rooms, collaboration' },
      { label: 'For Learning', href: '/use-cases/learning', description: 'Study rooms, digital campuses' },
      { label: 'For Community', href: '/use-cases/community', description: 'Events, gaming, casual meetups' },
      { label: 'For Commerce', href: '/market', description: 'Shops, services, marketplaces' },
    ],
  },
  {
    label: 'About',
    icon: 'info',
    items: [
      { label: 'Overview', href: '/about', description: 'About BAWES Universe' },
      { label: 'How It Works', href: '/how-it-works', description: 'Platform deep dive' },
      { label: 'The Team', href: '/team', description: 'Meet the creators' },
      { label: 'Manifesto', href: '/manifesto', description: 'Our philosophy' },
      { label: 'Open Source', href: '/open-source', description: 'MIT license & repos' },
      { label: 'WorkAdventure Fork', href: '/workadventure-fork', description: 'Our open source roots' },
      { label: 'The Empty Seat', href: '/empty-seat', description: 'A thought experiment' },
      { label: 'Legal', href: '/legal', description: 'Terms & policies' },
    ],
  },
]

const topLinks = [
  { label: 'Blog', href: 'https://blog.bawes.net', external: true },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <div ref={navRef}>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 10, 20, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.15)' : '1px solid transparent',
          transition: 'background-color 0.3s, backdrop-filter 0.3s, border-color 0.3s',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0">
                <Image src="/images/bawes-logo.png" alt="BAWES" fill className="object-contain" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">BAWES</span>
                <span className="text-base sm:text-lg lg:text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 truncate">Universe</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {dropdowns.map((dd) => (
                <div
                  key={dd.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(dd.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      openDropdown === dd.label
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">{dd.icon}</span>
                    {dd.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === dd.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openDropdown === dd.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 rounded-2xl p-2 shadow-2xl border border-purple-500/20"
                        style={{
                          background: 'rgba(20, 18, 30, 0.97)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                        }}
                      >
                        <div className="grid gap-0.5">
                          {dd.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/link"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-white/80 group-hover/link:text-white transition-colors">
                                  {item.label === 'Overview' ? (
                                    <span className="flex items-center gap-1.5">
                                      <span className="material-symbols-outlined text-base text-purple-400">explore</span>
                                      {item.label}
                                    </span>
                                  ) : item.label}
                                </div>
                                {item.description && (
                                  <p className="text-xs text-white/40 mt-0.5 line-clamp-1">{item.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* Hub quick link */}
                        <Link
                          href={`/${dd.label.toLowerCase()}`}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center justify-between mt-1 px-3 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 hover:from-purple-600/20 hover:to-blue-600/20 transition-colors border border-purple-500/10"
                        >
                          <span className="text-sm font-medium text-purple-300">
                            View all {dd.label.toLowerCase()} features
                          </span>
                          <span className="material-symbols-outlined text-sm text-purple-400">arrow_forward</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {topLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* Discord Button */}
              <a
                href="https://discord.gg/CXceJWnwNT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium transition-all whitespace-nowrap ml-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
              </a>
            </div>

            {/* Mobile: Discord + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="https://discord.gg/CXceJWnwNT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 h-10 px-3 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium transition-all"
                aria-label="Discord"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                aria-label="Toggle menu"
                aria-expanded={isMobileOpen}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {isMobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col lg:hidden overflow-y-auto"
            style={{ backgroundColor: 'rgba(10, 10, 20, 0.98)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex-1 pt-24 pb-8 px-4 overflow-y-auto">
              {dropdowns.map((dd) => {
                const hubRoute = `/${dd.label.toLowerCase().replace(' ', '-')}`
                return (
                  <div key={dd.label} className="mb-4">
                    <Link
                      href={hubRoute}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 hover:from-purple-600/20 hover:to-blue-600/20 transition-all border border-purple-500/10 mb-1"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-purple-400 text-xl">{dd.icon}</span>
                        <span className="text-base font-semibold text-white">{dd.label}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-purple-300 text-xs font-medium">
                        <span>{dd.items.length} features</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </div>
                    </Link>
                    <div className="flex overflow-x-auto gap-2 px-1 pb-2 -mx-1 snap-x snap-mandatory scrollbar-hide">
                      {dd.items.slice(0, 5).map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="flex-shrink-0 snap-start px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 min-w-[130px]"
                        >
                          <div className="text-sm font-medium text-white/80 whitespace-nowrap">{item.label}</div>
                        </Link>
                      ))}
                      {dd.items.length > 5 && (
                        <Link
                          href={hubRoute}
                          onClick={() => setIsMobileOpen(false)}
                          className="flex-shrink-0 snap-start px-3.5 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors border border-purple-500/20 flex items-center gap-1 min-w-[100px]"
                        >
                          <span className="text-sm font-medium text-purple-300 whitespace-nowrap">View all</span>
                          <span className="material-symbols-outlined text-sm text-purple-400">arrow_forward</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}

              <div className="border-t border-white/10 pt-6 mt-6">
                {topLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
