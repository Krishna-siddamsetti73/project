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
            50: '#fbe9e9',
          100: '#f7d3d3',
          200: '#efa7a7',
          300: '#e77b7b',
          400: '#df4f4f',
          500: '#D22B2B', // red main
          600: '#a82222',
          700: '#7e1a1a',
          800: '#541111',
          900: '#2a0808',
        },
        secondary: {
          50: '#fbe9e9',
          100: '#f7d3d3',
          200: '#efa7a7',
          300: '#e77b7b',
          400: '#df4f4f',
          500: '#D22B2B', // red main
          600: '#a82222',
          700: '#7e1a1a',
          800: '#541111',
          900: '#2a0808',
        },
        accent: {
          50: '#f9f9e8',
          100: '#f4f4d1',
          200: '#e9e9a3',
          300: '#dfdf75',
          400: '#d4d447',
          500: '#c9c919',
          600: '#a1a114',
          700: '#79790f',
          800: '#50500a',
          900: '#282805',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}