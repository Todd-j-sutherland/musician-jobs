import type { Config } from "tailwindcss";

const config = {
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
      colors: {
        border: "#eaeaea",
        input: "#e2e2e2",
        ring: "#c4c4c4",
        background: "#f8f9fa",
        foreground: "#212529",
        primary: {
          DEFAULT: "#ff007a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#007bff",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#dc3545",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#6c757d",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#17a2b8",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#212529",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#212529",
        },
        text: {
          primary: "#222222",
          secondary: "#6c757d",
          white: "#ffffff",
          link: "#007bff",
          linkHover: "#0056b3",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.875rem",
        sm: "0.75rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
