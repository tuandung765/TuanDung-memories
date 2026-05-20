/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'lora': ['Lora', 'Georgia', 'serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
        'crimson': ['"Crimson Pro"', 'Georgia', 'serif'],
      },
      colors: {
        parchment: {
          50:  '#FDFAF3',
          100: '#FDF6E3',
          200: '#F9EDD0',
          300: '#F2E0B3',
          400: '#E8CC8A',
          500: '#D4A853',
          600: '#B8882A',
          700: '#8B6914',
          800: '#5E460D',
          900: '#3A2B08',
        },
        ink: {
          50:  '#F5F0EB',
          100: '#E8DDD5',
          200: '#C9B5A6',
          300: '#A88D7A',
          400: '#7A5C47',
          500: '#5C3D2E',
          600: '#4A2E22',
          700: '#3D2318',
          800: '#2E1A10',
          900: '#1A0D07',
        },
      },
      boxShadow: {
        'paper': '0 2px 8px rgba(139, 105, 20, 0.15), 0 1px 3px rgba(139, 105, 20, 0.08)',
        'paper-lg': '0 8px 32px rgba(139, 105, 20, 0.18), 0 2px 8px rgba(139, 105, 20, 0.10)',
        'vintage': '4px 4px 0px rgba(139, 105, 20, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(1deg)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
        luubut: {
          'primary':         '#8B6914',
          'primary-content': '#FDF6E3',
          'secondary':       '#C96B6B',
          'accent':          '#D4A853',
          'neutral':         '#3D2318',
          'base-100':        '#FDF6E3',
          'base-200':        '#F9EDD0',
          'base-300':        '#F2E0B3',
          'base-content':    '#3D2B1F',
        },
      },
    ],
  },
};
