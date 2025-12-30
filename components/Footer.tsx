'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bawes-gold/30 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bawes-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-bawes-orange/5 rounded-full blur-3xl" />
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
                <Image 
                  src="/images/bawes-logo.png" 
                  alt="BAWES" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">BAWES</span>
                <span className="text-xl font-light bawes-gradient-text">Universe</span>
              </div>
            </Link>
            <p className="text-white/50 mb-8 max-w-md leading-relaxed">
              We are not building an app. We are building a universe. A fully integrated, people-first universe designed to help you think, act, build, and grow.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://discord.gg/bawes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bawes-gold/20 transition-colors group"
              >
                <svg className="w-5 h-5 text-white/50 group-hover:text-bawes-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
                <h3 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider">Navigate</h3>
                <ul className="space-y-3">
                  {['How It Works', 'Market', 'Work', 'Manifesto'].map((item) => (
                    <li key={item}>
                      <Link 
                        href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                        className="text-white/50 hover:text-bawes-orange transition-colors text-sm"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider">Philosophy</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/manifesto" className="text-white/50 hover:text-bawes-orange transition-colors text-sm">
                      Manifesto
                    </Link>
                  </li>
                  <li>
                    <Link href="/empty-seat" className="text-white/50 hover:text-bawes-orange transition-colors text-sm">
                      The Empty Seat
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" className="text-white/50 hover:text-bawes-orange transition-colors text-sm">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="https://discord.gg/bawes" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-bawes-orange transition-colors text-sm">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} BAWES Universe. Open by default.
          </p>
        </div>
      </div>
    </footer>
  )
}
