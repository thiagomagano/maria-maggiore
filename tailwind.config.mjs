/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "maggiore-green": "#253831",
        "maggiore-brown": "#AEA181",
        "gazzola-gold": "#DBB662",
        "gazzola-blue": "#112F5B",
      },
    },
  },
  plugins: [],
};
