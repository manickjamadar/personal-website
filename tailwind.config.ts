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
          "50": "#f0f2fd",
          "100": "#e4e7fb",
          "200": "#ced3f7",
          "300": "#b0b6f1",
          "400": "#9091e9",
          "500": "#7c75df",
          DEFAULT: "#6655d0",
          "600": "#6655d0",
          "700": "#5b4ab8",
          "800": "#4b3e95",
          "900": "#252537",
          "950": "#1E1E25",
        },
      },
    },
  },
  plugins: [],
};
export default config;
