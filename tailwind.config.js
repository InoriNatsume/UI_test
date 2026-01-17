/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",          // Root files (App.tsx, index.tsx, etc.)
    "./components/**/*.{js,ts,jsx,tsx}", // Component files
    "./data/**/*.{js,ts,jsx,tsx}",       // Data files
    "./services/**/*.{js,ts,jsx,tsx}",   // Service files
    "./types.ts"                         // Type definitions
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
}