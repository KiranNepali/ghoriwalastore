import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#BFBFBF",
          300: "#999999",
          400: "#4D4D4D",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        secondary: {
          50: "#FDF2F4",
          100: "#FAE6E8",
          200: "#F3C0C6",
          300: "#EC9AA4",
          400: "#DE4E5F",
          500: "#D0021B",
          600: "#BB0218",
          700: "#7D0110",
          800: "#5E010C",
          900: "#3E0108",
        },
      },
    },
  },
  plugins: [],
};
export default config;
