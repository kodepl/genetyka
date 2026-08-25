import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        genome: {
          950: "#042f2e",
          900: "#064e3b",
          800: "#065f46",
          700: "#047857",
          600: "#059669",
          100: "#d1fae5",
          50: "#ecfdf5",
        },
      },
    },
  },
  plugins: [typography],
};
