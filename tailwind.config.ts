import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: { DEFAULT: "#003366", deep: "#001f3f" },
        amarelo: "#FFC72C",
        vermelho: { DEFAULT: "#D4213D", hover: "#B81B34" },
        cinza: "#F4F4F4",
        grafite: "#333333",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-lato)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      boxShadow: {
        panel: "0 24px 50px rgba(0,32,63,0.28)",
        card: "0 16px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
