import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001B35",
          50: "#E6EBF1",
          900: "#001B35",
        },
        gold: {
          DEFAULT: "#C9941A",
          light: "#E0B454",
          dark: "#A37810",
        },
        ink: "#0F1A2A",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Libre Caslon Text"', "Georgia", "serif"],
        sans: ['Inter', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
        62: "15.5rem",
      },
      letterSpacing: {
        widestx: "0.3em",
      },
      borderRadius: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
