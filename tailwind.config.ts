import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        klaro: {
          bg: "#0B0E14",
          surface: "#141824",
          accent: "#6C5CE7",
          accent2: "#00D9C0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
