/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'lora':     ['Lora', 'Georgia', 'serif'],
        'dancing':  ['"Dancing Script"', 'cursive'],
        'crimson':  ['"Crimson Pro"', 'Georgia', 'serif'],
      },
      colors: {
        sakura: {
          50:  '#FFF0F5',
          100: '#FFE0EC',
          200: '#FFC2D9',
          300: '#FF94BB',
          400: '#FF5C96',
          500: '#FF2D77',
          600: '#E0005A',
          700: '#B30048',
          800: '#80003A',
          900: '#4D0024',
        },
        lavender: {
          50:  '#F5F0FF',
          100: '#EDE0FF',
          200: '#D9BFFF',
          300: '#C49EFF',
          400: '#A875FF',
          500: '#8B4FE8',
          600: '#6D2FCC',
          700: '#5020A0',
          800: '#371575',
          900: '#1F0A4A',
        },
      },
      boxShadow: {
        'soft':    '0 4px 20px rgba(255,45,119,.12)',
        'soft-lg': '0 8px 40px rgba(255,45,119,.18)',
        'card':    '0 2px 12px rgba(139,79,232,.10)',
      },
      animation: {
        'float':    'float 5s ease-in-out infinite',
        'fade-up':  'fadeUp 0.6s ease-out forwards',
        'heartbeat':'heartbeat 1.2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%':     { transform: 'translateY(-12px) rotate(1deg)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heartbeat: {
          '0%,100%': { transform: 'scale(1)' },
          '50%':     { transform: 'scale(1.18)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        luubut9: {
          'primary':         '#FF2D77',
          'primary-content': '#FFF0F5',
          'secondary':       '#8B4FE8',
          'accent':          '#FFB3D1',
          'neutral':         '#3D1530',
          'base-100':        '#FFF8FB',
          'base-200':        '#FFE8F2',
          'base-300':        '#FFD0E6',
          'base-content':    '#3D1530',
        },
      },
    ],
  },
};
