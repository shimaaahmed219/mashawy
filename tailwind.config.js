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
        Georgian:["Noto_Sans_Georgian"],
        tinos:['Tinos']

      },
      colors:{
        main:"#846a06",
        second:"#4a3700",
        categores:"#f3f2ce",
        trasnsparent:"#0000004a",
        bg:"#dad5ae",
        text:"#604b33"

      },
      screens: {
        "phon":"499px"
        
              },
    },
  },
  plugins: [],
}