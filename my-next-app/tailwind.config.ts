/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '33%': { transform: 'scale(1.1) translate(-10px, 10px)' },
          '66%': { transform: 'scale(0.9) translate(10px, -10px)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}