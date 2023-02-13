/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgd: "#040C18",
        textgd:"#031B34",
        subtext:"#81AFDD",
        footerbg:"#031B34"
      }
    },
  },
  plugins: [],
}