import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "mine-shaft": "#212121",
        "thunder": "#2f2f2f",
        "white-smoke": "#f4f4f4",
        "ironside-grey": "#676767",
        "silver": "#c4c6c6",
        "harp": "#e7edf2",
        "mountain-mist": "#8f9599",
        "charcoal-grey": "#424242",
        "dark-grey": "#393939",
      }
    },
  },
  plugins: [],
};
export default config;
