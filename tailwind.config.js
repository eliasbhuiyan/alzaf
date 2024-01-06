/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: '16px'
      },
      colors:{
        primary: '#2E2E2E',
        secondary: '#F0F1F1',
        brand: '#F97316'
      },
    },
    fontFamily: {
      'primary': ['Inter', 'sans-serif',],
    }
  },
  plugins: [],
}
