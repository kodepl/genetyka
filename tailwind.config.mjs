import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      colors: {
        genome: {
          950: "#042f2e",
          900: "#064e3b",
          800: "#065f46",
          700: "#0d6b5c",
          600: "#0f8a74",
          100: "#d7efe8",
          50: "#f3f7f4",
        },
      },
    },
  },
  plugins: [typography],
};
