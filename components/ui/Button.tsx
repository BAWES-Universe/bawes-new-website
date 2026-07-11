'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'lg' | 'sm'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  href, 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '', 
  type,
  disabled 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30',
    secondary: 'bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20',
    outline: 'border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </>
  )

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} onClick={onClick} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type || 'button'} 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {content}
    </motion.button>
  )
}

