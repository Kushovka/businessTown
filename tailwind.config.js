/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey10: "#1A1A1A",
        grey08: "#141414",
        grey15: "#262626",
        grey60: "#999999",
        grey30: "#4D4D4D",
        grey40: "#666666",
        purple60: "#703BF7",
        white90: "#E4E4E7",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      boxShadow: {
        even: "0 0 20px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
