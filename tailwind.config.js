/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      display: ["Raleway", "sans-serif"],
      secondary: ["DM sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        main: "#020710",
        darkBlue: "#3772FF",
      },
      textColor: {
        des: "#636977",
        text: "#ffffff8c",
        lightText: "#FFFFFF7A",
        lightGreen: "#2CBCA5",
        lightPink: "#FE84F1",
        darkBlue: "#3772FF",
      },
      borderColor: {
        border: "#818A9E",
        darkBlue: "#3772FF",
        lightPink: "#FE84F1",
      },
    },
  },
  plugins: [],
};
