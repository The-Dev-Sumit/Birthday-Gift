// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        Plat: ["Platypi", 'serif'],
        Kanit: ["Kanit", "sans-serif"],
        Koulen: ["Koulen", "sans-serif"],
        Lemon: ["Lemon", "sans-serif"],
        Yatra: ["Yatra One", "sans-serif"],
        Rowdies: ["Rowdies", "sans-serif"],
        Maamli: ["Ga Maamli", "sans-serif"],
        Anton: ["Anton SC", "sans-serif"],
        DaysOne: ["Days One", "sans-serif"],
        Righteous: ["Righteous", "sans-serif"],
        Mania: ["Metal Mania", "sans-serif"],

      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}


