import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sync Energy brand palette
        brand: {
          primary: "#1A7A4A", // deep forest green
          accent: "#2ECC71", // vibrant energy green
          dark: "#111827", // charcoal — navbar, headings
          offwhite: "#F7F9F5", // section backgrounds
          amber: "#F5A623", // CTA highlights, stat numbers
        },
      },
      fontFamily: {
        // Wired up via next/font in app/layout.tsx
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(17, 24, 39, 0.08)",
        "card-hover": "0 16px 40px -8px rgba(17, 24, 39, 0.18)",
      },
      keyframes: {
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        bounceArrow: "bounceArrow 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
