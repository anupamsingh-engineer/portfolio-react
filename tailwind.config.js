/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Theme-aware tokens — actual RGB values swap per [data-theme] in
        // index.css, so these utilities repaint automatically on toggle.
        ink: {
          950: 'rgb(var(--ink-950) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          850: 'rgb(var(--ink-850) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
        },
        mist: {
          50: 'rgb(var(--mist-50) / <alpha-value>)',
          100: 'rgb(var(--mist-100) / <alpha-value>)',
          200: 'rgb(var(--mist-200) / <alpha-value>)',
          300: 'rgb(var(--mist-300) / <alpha-value>)',
          400: 'rgb(var(--mist-400) / <alpha-value>)',
          500: 'rgb(var(--mist-500) / <alpha-value>)',
        },
        // Base color for translucent "glass" borders/surfaces (white on
        // dark, ink on light) — used as `border-edge/10`, `bg-surface/[0.03]`.
        edge: 'rgb(var(--edge) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        accent: 'rgb(var(--accent-label) / <alpha-value>)',
        'bold-violet': 'rgb(var(--bold-violet) / <alpha-value>)',
        'bold-cyan': 'rgb(var(--bold-cyan) / <alpha-value>)',
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        amber: {
          400: '#fbbf24',
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgb(var(--grid-line) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid-line) / 0.05) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(139,92,246,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.4)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 1.5s infinite',
        'marquee': 'marquee 28s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
