/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Brand Evolution Tokens
        primary: {
          DEFAULT: '#f2ca50',
          container: '#d4af37',
          fixed: '#ffe088',
          'fixed-dim': '#e9c349',
          on: '#3c2f00',
          'on-container': '#554300',
        },
        'primary-container': '#d4af37',
        'primary-fixed': '#ffe088',
        'primary-fixed-dim': '#e9c349',
        'on-primary': '#3c2f00',
        'on-primary-container': '#554300',
        'shimmer-gold': '#F59E0B',
        'monolith-black': '#020617',
        'sand-white': '#F8FAFC',
        'glass-border': 'rgba(255, 255, 255, 0.1)',

        // Surface Tones
        background: '#0c1324',
        surface: {
          DEFAULT: '#0c1324',
          lowest: '#070d1f',
          low: '#151b2d',
          container: '#191f31',
          high: '#23293c',
          highest: '#2e3447',
          variant: '#2e3447',
        },
        'surface-container-lowest': '#070d1f',
        'surface-container-low': '#151b2d',
        'surface-container': '#191f31',
        'surface-container-high': '#23293c',
        'surface-container-highest': '#2e3447',
        'surface-variant': '#2e3447',

        // Text & On-Colors
        'on-background': '#dce1fb',
        'on-surface': '#dce1fb',
        'on-surface-variant': '#d0c5af',
        secondary: '#bec6e0',
        tertiary: '#c3cee6',

        // Surfaces & Backwards Compatibility
        bg: '#0c1324',
        'surface-2': '#191f31',
        dark: '#0c1324',
        ink: '#dce1fb',
        muted: '#d0c5af',
        subtle: '#8c97ad',
        line: '#2e3447',
        light: '#f8fafc'
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        headline: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body: ['"Libre Baskerville"', 'Georgia', 'serif'],
        mono: ['"Libre Baskerville"', 'Georgia', 'serif']
      },
      letterSpacing: {
        tightest: '-0.035em'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'ticker': 'ticker 40s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)',
        card: '0 6px 20px -10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.25)',
        ring: '0 0 0 1px rgba(255,255,255,0.06) inset',
        glow: '0 0 20px rgba(16, 185, 129, 0.15)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.15)'
      },
      backgroundImage: {
        'grid-lines':
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '28px 28px',
      }
    },
  },
  plugins: [],
}
