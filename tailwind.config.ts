
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2196f3", // blue-600
          lighter: "#bbdefb", // blue-100
          dark: "#1769aa",
          foreground: "#fff",
        },
        accent: {
          DEFAULT: "#00bcd4", // cyan-500
          lighter: "#e0f7fa",
          dark: "#008ba3",
        },
        gold: {
          DEFAULT: "#ffb300", // accent gold
          light: "#fff8e1",
        },
        neutral: {
          light: "#f9fafb",
          DEFAULT: "#f5f7fa",
          dark: "#212121",
        },
        background: "#ffffff",
        text: "#111827",
        muted: "#6b7280",
        border: "#e3e8ee",
      },
      borderRadius: {
        lg: "1.2rem",
        md: "0.75rem",
        sm: "0.425rem",
      },
      boxShadow: {
        card: "0 0.5rem 2rem 0 rgba(33, 150, 243, 0.07)",
        gold: "0 2px 8px 0 rgba(255, 179, 0, 0.12)",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
