'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden" style={{ background: '#0a0a14' }}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/images/bawes-logo.png" alt="BAWES" fill className="object-contain" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">BAWES</span>
                <span className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Universe</span>
              </div>
            </Link>
            <p className="text-white/50 mb-8 max-w-md leading-relaxed">
              A shared digital universe where people explore, AI agents coexist, and communities build together.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://discord.gg/CXceJWnwNT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 transition-colors group"
                aria-label="Discord"
              >
                <svg className="w-5 h-5 text-white/50 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="https://github.com/BAWES-Universe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-colors group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider">Explore</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Communication', href: '/communication' },
                    { label: 'AI Bots', href: '/ai-bots' },
                    { label: 'Build & Create', href: '/build' },
                    { label: 'Platform', href: '/platform' },
                    { label: 'About', href: '/about' },
                    { label: 'How It Works', href: '/how-it-works' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="group inline-flex items-center gap-1.5 text-white/50 hover:text-purple-400 transition-colors text-sm">
                        {item.label}
                        <span className="material-symbols-outlined text-[14px] text-white/20 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200">chevron_right</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider">Community</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Market', href: '/use-cases/market' },
                    { label: 'Blog', href: 'https://blog.bawes.net', external: true },
                    { label: 'Discord', href: 'https://discord.gg/CXceJWnwNT', external: true },
                    { label: 'GitHub', href: 'https://github.com/BAWES-Universe', external: true },
                    { label: 'Contact', href: '/contact' },
                  ].map((item) => (
                    <li key={item.label}>
                      {item.external ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-white/50 hover:text-blue-400 transition-colors text-sm">
                          {item.label}
                          <span className="material-symbols-outlined text-[14px] text-white/20 group-hover:text-blue-400 transition-all duration-200">open_in_new</span>
                        </a>
                      ) : (
                        <Link href={item.href} className="group inline-flex items-center gap-1.5 text-white/50 hover:text-blue-400 transition-colors text-sm">
                          {item.label}
                          <span className="material-symbols-outlined text-[14px] text-white/20 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200">chevron_right</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider">More</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Open Source', href: '/open-source' },
                    { label: 'Manifesto', href: '/manifesto' },
                    { label: 'The Team', href: '/team' },
                    { label: 'Legal', href: '/legal' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="group inline-flex items-center gap-1.5 text-white/50 hover:text-purple-400 transition-colors text-sm">
                        {item.label}
                        <span className="material-symbols-outlined text-[14px] text-white/20 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-200">chevron_right</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} BAWES Universe. Open by default.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/30">
              <Link href="/terms-of-use" className="group inline-flex items-center gap-1 hover:text-white/50 transition-colors">
                Terms of Use
                <span className="material-symbols-outlined text-[12px] text-white/20 group-hover:text-white/50 transition-colors">chevron_right</span>
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/privacy-policy" className="group inline-flex items-center gap-1 hover:text-white/50 transition-colors">
                Privacy Policy
                <span className="material-symbols-outlined text-[12px] text-white/20 group-hover:text-white/50 transition-colors">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
