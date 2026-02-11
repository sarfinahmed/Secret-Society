/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        'gold-light': '#FFE55C',
        'deep-black': '#050505',
        'rich-purple': '#1a0b2e',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
}