/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryColor : 'rgba(var(--primary-color))',
        secondaryColor : 'rgba(var(--secondary-color))',
        backgroundPrimary : 'rgba(var(--background-primary-color))',
        backgroundSecondary : 'rgba(var(--background-secondary-color))',
        borderColor : 'rgba(var(--border-color))',
        errorColor : 'rgba(var(--error-color))'
      }
    },
  },
  plugins: [],
}