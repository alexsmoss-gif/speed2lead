import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        speed: {
          red: "#D7131A",
          gold: "#FFD23C",
          ink: "#111116",
          charcoal: "#34343A",
          mist: "#F4F5F7",
        },
        ginger: {
          orange: "#FF6600",
          yellow: "#FFCC00",
          ink: "#151515",
          charcoal: "#333333",
          mist: "#F2F2F2",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Arial", "sans-serif"],
        body: ["var(--font-figtree)", "Arial", "sans-serif"],
      },
      boxShadow: {
        crisp: "0 24px 70px rgba(21, 21, 21, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
