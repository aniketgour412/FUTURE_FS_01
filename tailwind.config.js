/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#020207',
        'secondary': '#a1a1aa',
        'muted': '#71717a',
        'accent': '#3b82f6',
        'accent-purple': '#8b5cf6',
        'accent-warm': '#f43f5e',
        'accent-rose': '#ec4899',
        'accent-teal': '#14b8a6',
        'dark-obsidian': '#020207',
        'dark-surface': '#09090b',
        'dark-card': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.8rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '800' }],
        'title': ['clamp(1.6rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.05), 0 12px 36px rgba(0,0,0,0.10)',
        'glow': '0 0 0 3px rgba(45,91,227,0.15)',
        'glow-accent': '0 8px 32px rgba(45,91,227,0.28)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
