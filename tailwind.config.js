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
    keyframes: {
      move: {
        "0%, 100%": { transform: "translate(-10px,-10px)" },
        "50%": { transform: "translate(10px, 10px)" },
      },
      move2: {
        "0%, 100%": { transform: "translate(-3px,-3px)" },
        "50%": { transform: "translate(3px, 3px)" },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(1.5)",
          opacity: "0",
          border: "0px solid #1A1A1A",
        },
      },
      spin: {
        "0%, 100%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      diagonalMove: "move 5s ease-in-out infinite",
      diagonalMove2: "move2 3s ease-in-out infinite",
      ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      spin: "spin 10s linear infinite",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      raleway: ["Raleway", "sans-serif"],
      dmsans: ["DM sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        guideBg: 'url("/images/guide-bg.png")',
      },
      backgroundColor: {
        main: "#020710",
        darkBlue: "#3772FF",
        lightGreen: "#2CBCA5",
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
        lightGreen: "#2CBCA5",
      },
    },
  },
  plugins: [],
};
