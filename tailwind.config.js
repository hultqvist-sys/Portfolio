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
        'title': ['64px', { lineHeight: '1.19', letterSpacing: '0.02em' }],
        'h1': ['48px', { lineHeight: '1.2' }],
        'stat': ['40px', { lineHeight: '1.26', letterSpacing: '0.04em' }],
        'subtitle': ['28px', { lineHeight: '1.6', letterSpacing: '0.04em' }],
        'h2-alt': ['24px', { lineHeight: '1.19', letterSpacing: '0.04em' }],
        'h2': ['32px', { lineHeight: '1.19', letterSpacing: '0.02em' }],
        'h3': ['16px', { lineHeight: '1.5', letterSpacing: '0.04em', textTransform: 'uppercase' }],
        'body-lg': ['24px', { lineHeight: '1.6', letterSpacing: '0.04em' }],
        'body-md': ['18px', { lineHeight: '1.6', letterSpacing: '0.04em' }],
        'body-reg': ['20px', { lineHeight: '1.6', letterSpacing: '0.04em' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.04em' }],
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
