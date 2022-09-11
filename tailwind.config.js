module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'weather': "url('/bg-1.jpg')",
        'advice': "url('/bg-2.jpg')",
      }
    },
  },
  plugins: [],
}