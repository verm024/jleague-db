import type { Config } from "tailwindcss";

const toBeSafelistedHex = ["#FEFAF6", "#EEEDEB", "#151515", "#EE4E4E", "#5AB2FF", "#FFC100", "#A1DD70"]
const hexSafelist: string[] = []
toBeSafelistedHex.forEach((hex) => {
  hexSafelist.push(`bg-[${hex}]`)
  hexSafelist.push(`text-[${hex}]`)
})

const config: Config = {
  safelist: [
    ...hexSafelist,
    { pattern: /text-(xs|sm|base|lg|xl|2xl)/ },
    { pattern: /font-(extralight|light|normal|medium|semibold|bold)/ }
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
