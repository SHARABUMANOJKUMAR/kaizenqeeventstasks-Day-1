/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          DEFAULT: '#6C63C7',
        },
        secondary: {
          DEFAULT: '#6FA8DC',
          light: '#E8F3FF',
        },
        accent: {
          DEFAULT: '#FFB899',
          light: '#FFF0E6',
        },
        success: {
          DEFAULT: '#4ADE80',
          light: '#E7F7EF',
        },
        warning: {
          DEFAULT: '#FBBF24',
          light: '#FFF7D6',
        },
        background: {
          DEFAULT: '#F8FAFF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
        },
        text: {
          main: '#26324A',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(108, 99, 199, 0.1)',
        'soft-lg': '0 20px 50px -10px rgba(108, 99, 199, 0.15)',
      }
    },
  },
  plugins: [],
}
