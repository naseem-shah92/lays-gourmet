/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          accent: '#E5A93C',
          glow: 'rgba(229, 169, 60, 0.4)',
        },
        herb: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          accent: '#2dd4bf',
        },
        yogurt: {
          light: '#F8FAFC',
          cream: '#F1F5F9',
          border: 'rgba(255, 255, 255, 0.15)',
        },
        midnight: {
          900: '#07090e',
          800: '#0c111c',
          700: '#141d2e',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        display: ['var(--font-cinzel)', 'serif'],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, rgba(12, 17, 28, 0.4) 0%, rgba(7, 9, 14, 0.95) 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #FDE68A 0%, #D97706 50%, #B45309 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(229, 169, 60, 0.35)',
        'herb-glow': '0 0 35px -5px rgba(45, 212, 191, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
};
