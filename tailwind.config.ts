
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {


      fontFamily:{
        JetBrains_Mono:["JetBrains Mono Variable" , "monospace"],
        Jockey_One:["Jockey One" , "sans serif"]
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#FFD700",
        secondary:"#403063",
        dark:"#000000",
        light:"#FFFFFF"
      },
    },
  },
  plugins: [],
};
export default config;
