/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:  {
        xxs: "0.6rem"
      },
      fontFamily: {
        dmsarin: "DM Sans"
      },
      colors: {
       sky: "#B6B3F3",
       "custom-gray":"#A0A0A0",
       "border-grey-color":"#71767B",
      }
    },
  },
  plugins: [],
}