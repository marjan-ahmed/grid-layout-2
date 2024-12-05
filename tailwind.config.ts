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
        lightviolet: '#8A76E3',
        darkviolet: '#755CDB',
        lightseagreen:'#3AD4CC',
        darkseagreen: '#2EB3AD',
        lightblue: '#23A4FA',
        darkgrey: '#353842'

      },
    },
  },
  plugins: [],
};
export default config;
