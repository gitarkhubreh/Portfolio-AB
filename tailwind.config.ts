import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0ea5e9',
        tertiary: '#ec4899',
      },
      fontFamily:{
        logo:["Playwrite AU VIC Guides", "serif"],
        primary:["Merriweather", "serif"]
      },
    },
  },
  plugins: [],
};
export default config;
