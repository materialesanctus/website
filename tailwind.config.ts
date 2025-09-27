import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sanctus: {
          dark: "#171718",
          light: "#F0F0F0", 
          brown: "#A26D46",
          gray: "#1B1C1C",
          beige: "#EAE8E6",
          lightgray: "#F7F7F7"
        }
      },
      fontFamily: {
        'baskerville': ['Baskerville', 'serif'],
        'poppins': ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;