/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      colors: {
        accent: { DEFAULT: '#FFB951', dark: '#CC8F00', light: '#FFF8E6', border: '#FFE4A0' },
        dark: { bg: '#0D0D1A', card: '#141414', nav: '#111111', border: '#1E1E1E' },
      },
    },
  },
  plugins: [],
}
