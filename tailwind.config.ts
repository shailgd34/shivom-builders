import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: "#ff2600",
          live: "#127a37",
          paper: "#ffffff",
          soft: "#f2f2f2",
          dark: "#131313",
          ink: "#000000",
          body: "#4a4a4a",
          muted: "#6e6e6e",
          border: "#e4e4e4",
        },
        strukt: {
          accent: "#ff2600",
          live: "#127a37",
          paper: "#ffffff",
          soft: "#f2f2f2",
          dark: "#131313",
          glass: "rgba(38, 38, 38, 0.62)",
          glassLight: "rgba(255, 255, 255, 0.12)",
          ink: "#000000",
          body: "#4a4a4a",
          muted: "#6e6e6e",
          onDark: "#ffffff",
          onDarkMuted: "rgba(255, 255, 255, 0.55)",
          onDarkSoft: "rgba(255, 255, 255, 0.70)",
          onDarkFaint: "rgba(255, 255, 255, 0.40)",
          onDarkGhost: "rgba(255, 255, 255, 0.16)",
          lineLight: "#e4e4e4",
          lineDark: "rgba(255, 255, 255, 0.12)",
        },
      },
      borderRadius: {
        tag: "4px",
        btn: "6px",
        card: "10px",
      },
      fontFamily: {
        sans: ["Switzer", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Switzer", "Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
