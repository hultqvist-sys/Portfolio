/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Chivo', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1.1' }],
        'h1': ['48px', { lineHeight: '1.2' }],
        'h2': ['32px', { lineHeight: '1.3' }],
        'h3': ['16px', { lineHeight: '1.5', letterSpacing: '0.15em', textTransform: 'uppercase' }],
        'body-lg': ['24px', { lineHeight: '1.5' }],
        'body-reg': ['20px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
      },
      colors: {
        // Loader colors
        'loader-red': '#AE2E24',
        'loader-orange': '#FCA700',
        'loader-purple': '#803FA5',
        'loader-blue': '#669DF1',
        'loader-dark': '#292A2E',
        // Text colors
        'text-dark': '#18181B',
        'text-light': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
