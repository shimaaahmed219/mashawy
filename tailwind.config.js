/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        domine:["Domine"],
        Anek:["Anek Gurmukhi"],
        Georgian:["Noto_Sans_Georgian"]
      },
      colors:{
        main:"#846a06"
      },
      screens: {
        "phon":"499px"
        
              },
    },
  },
  plugins: [],
}