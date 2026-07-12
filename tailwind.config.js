/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0814',     // deep indigo (warmer than #0a0a14)
          tint: '#d0bcff',
          dim: '#15121b',
          glass: 'rgba(255,255,255,0.03)',
          glassHover: 'rgba(139,92,246,0.06)',
          high: 'rgba(20,18,30,0.8)',
          bright: 'rgba(255,255,255,0.04)',
          'container-lowest': 'rgba(10,8,20,0.5)',
          'container-low': '#15121b',
        },
        accent: {
          purple: '#a78bfa',
          amber: '#f59e0b',
          blue: '#93c5fd',
          green: '#34d399',
          pink: '#ec4899',
        },
        'text': {
          primary: '#ffffff',
          secondary: 'rgba(255,255,255,0.7)',
          muted: 'rgba(255,255,255,0.45)',
          'low-emphasis': 'rgba(255,255,255,0.4)',
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          DEFAULT: 'rgba(255,255,255,0.06)',
          accent: 'rgba(139,92,246,0.15)',
          ambert: 'rgba(245,158,11,0.2)',
        },
        // Legacy aliases (keep for backward compat)
        'surface-tint': '#d0bcff',
        'on-surface': '#e7e0ed',
        'border-purple': 'rgba(139,92,246,0.2)',
        'background': '#0a0814',
        'orb-purple': 'rgba(139,92,246,0.15)',
        'orb-blue': 'rgba(59,130,246,0.1)',
        'primary': '#a78bfa',
        'primary-container': '#7c3aed',
        'on-primary': '#3c0091',
        'secondary': '#adc6ff',
        'secondary-container': '#0566d9',
        'tertiary': '#ffb869',
        'tertiary-container': '#ca801e',
        'text-secondary': 'rgba(255,255,255,0.7)',
        'text-low-emphasis': 'rgba(255,255,255,0.4)',
        'divider': 'rgba(255,255,255,0.06)',
        'surface-glass': 'rgba(255,255,255,0.03)',
        'background-page': '#0a0814',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        'display-hero': ['Space Grotesk', 'Inter', 'sans-serif'],
        'headline-section': ['Space Grotesk', 'Inter', 'sans-serif'],
        'headline-card': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-navigation': ['Inter', 'sans-serif'],
        'caption': ['Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['64px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-hero-mobile': ['48px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-section': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-card': ['24px', { lineHeight: '1.2', letterSpacing: '0', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'label-navigation': ['14px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '400' }],
      },
      spacing: {
        'section-padding-v': '100px',
        'container-max': '1280px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'card-padding': '2rem',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 50%, #a78bfa 100%)',
        'gradient-cta': 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'drift': 'orbit-drift 40s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-dot': {
          '0%,100%': { opacity: '1', boxShadow: '0 0 6px rgba(34,197,94,0.5)' },
          '50%': { opacity: '0.6', boxShadow: '0 0 12px rgba(34,197,94,0.8)' },
        },
        'orbit-drift': {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(60px, -40px) scale(1.1)' },
        },
      },
      borderRadius: {
        'bento': '20px',
        'pill': '100px',
      },
    },
  },
  plugins: [],
}
