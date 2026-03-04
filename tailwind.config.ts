import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void:    '#050508',
        deep:    '#09090f',
        ink:     '#0f0f18',
        panel:   '#14141f',
        surface: '#1a1a28',
        raised:  '#20202e',
        gold:    '#c8960c',
        amber:   '#e0aa20',
        'light-gold': '#f0cc60',
        ember:   '#c84820',
        crimson: '#cc1111',
        cyan:    '#00e5ff',
        electric:'#1a6bff',
        ash:     '#484858',
        fog:     '#787890',
        mist:    '#a8a8c0',
        silver:  '#c8c8dc',
        snow:    '#f0eef8',
      },
      fontFamily: {
        display: ["'Cinzel'", 'Georgia', 'serif'],
        serif:   ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans:    ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.5rem',  { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'xs':  ['0.6rem',  { lineHeight: '1.5' }],
      },
      letterSpacing: {
        ultra:    '0.5em',
        'wide-xl':'0.35em',
        'wide-lg':'0.25em',
      },
      animation: {
        'rise':       'rise 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':    'fade-in 0.7s ease both',
        'spin-slow':  'spin-slow 40s linear infinite',
        'orb-pulse':  'orb-pulse 5s ease infinite',
        'blink':      'blink 1.2s step-end infinite',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'orb-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(1)' },
          '50%':       { opacity: '0.9', transform: 'translate(-50%, -50%) scale(1.1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.15' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #e0aa20, #c8960c)',
        'gradient-gold-wide': 'linear-gradient(90deg, transparent, #c8960c, transparent)',
        'gradient-void': 'radial-gradient(ellipse at 50% 0%, rgba(200,150,12,0.08), transparent 60%)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'reading': '72ch',
        'content': '1200px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':   'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(200,150,12,0.15)',
        'gold-glow-lg': '0 0 80px rgba(200,150,12,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
