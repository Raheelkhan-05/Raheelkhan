/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#0f0f17',
      }
    },
  },
  plugins: [],
}