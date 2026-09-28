/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070710',
          900: '#0a0a14',
          850: '#0e0e1c',
          800: '#131325',
          700: '#1b1b33',
          600: '#262649',
        },
        accent: {
          blue: '#38bdf8',
          cyan: '#22d3ee',
          purple: '#a855f7',
        },
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 0%, rgba(56,189,248,0.12), transparent 45%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.12), transparent 45%), radial-gradient(circle at 50% 100%, rgba(34,211,238,0.08), transparent 50%)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(56,189,248,0.18) 0%, rgba(168,85,247,0.14) 50%, rgba(34,211,238,0.12) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
