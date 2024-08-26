/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "maggiore-green": "#253831",
        "maggiore-verde": {
          50: "#f4f9f6",
          100: "#dcebe3",
          200: "#b8d7c8",
          300: "#8cbca6",
          400: "#649d84",
          500: "#4a826a",
          600: "#3a6755",
          700: "#315446",
          800: "#2b443b",
          900: "#253831",
          950: "#12211b",
        },

        "maggiore-brown": "#AEA181",
        "maggiore-dourado": {
          50: "#f8f7f4",
          100: "#efeee5",
          200: "#dedaca",
          300: "#c8c1a9",
          400: "#aea181",
          500: "#a1906e",
          600: "#948062",
          700: "#7c6952",
          800: "#655647",
          900: "#53473b",
          950: "#2c251e",
        },
        "gazzola-gold": "#DBB662",
        "gazzola-blue": "#112F5B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
