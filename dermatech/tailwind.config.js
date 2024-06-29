/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ligth-gray': '#A6A6A6',
        'dark-gray': '#545454',
        'pink': '#BB7272',
        'pink-light':'#dfaea6',
        'pink-medium':'#CD9898',
        'deep-blue': '#293f73',
        'yellow': '#ffc82c',
        'purple-blue': '#3639ae',
        'gray-super-light': '#d3dce6'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      opacity: {
        70: "0.7",
        50: "0.5",
      },
      scale: {
        95: "0.95",
        90: "0.9",
      },
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
      transitionDuration: {
        500: "500ms",
      },
    },
    plugins: [],
  }
};