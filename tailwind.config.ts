import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712',
          900: '#070d1e',
          850: '#0c152e',
          800: '#111d3d',
          700: '#1d2b56',
        },
        starlight: {
          cyan: '#22d3ee',
          violet: '#a855f7',
          amber: '#fbbf24',
          emerald: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 25px -5px rgba(168, 85, 247, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;

