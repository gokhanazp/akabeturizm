import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marka rengi: logodan alınan bordo/kırmızı
        maroon: {
          50: "#fbf3f3",
          100: "#f7e3e3",
          200: "#efc7c8",
          300: "#e29ea0",
          400: "#d06b6e",
          500: "#bb4549",
          600: "#a5302f",
          700: "#8a2526", // ana bordo
          800: "#6e1f20",
          900: "#581d1e",
          950: "#300d0d",
        },
        // Altın aksanlar
        gold: {
          50: "#fbf8ef",
          100: "#f5edd3",
          200: "#ead8a4",
          300: "#dfbe6f",
          400: "#d4a64a",
          500: "#c79030", // ana altın
          600: "#b07726",
          700: "#925a22",
          800: "#794922",
          900: "#673d20",
          950: "#3b2010",
        },
        ink: {
          DEFAULT: "#1b1a19",
          soft: "#4a4744",
        },
        cream: "#f8f8f6",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(23, 19, 17, 0.18)",
        card: "0 4px 24px -8px rgba(23, 19, 17, 0.15)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-22px) translateX(8px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.08)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        glow: "glow 7s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(48,13,13,0.72) 0%, rgba(48,13,13,0.55) 45%, rgba(23,19,17,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
