/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-start": "#272239",
        "custom-middle": "#404070",
        "custom-end": "#343050",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #272239, #404070, #343050)",
        "custom-gradient-fade":
          "linear-gradient(to bottom, rgba(55, 52, 86, 1) 80%, rgba(55, 52, 86, 0) 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Dodaj czcionkę Inter do Tailwind
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-red": {
          textShadow: "2px 2px 4px gray", // Czerwony cień tekstu
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
