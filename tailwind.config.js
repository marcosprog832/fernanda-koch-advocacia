/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",       // preto principal, fundo
        charcoal: "#1C1C1F",  // cinza-chumbo, seções/cards
        slate: "#6E6E73",     // cinza médio, texto secundário
        paper: "#F5F4F2",     // branco quente, texto principal sobre fundo escuro
        bronze: "#C9A961",    // dourado da identidade visual — acento de texto/links (bom contraste no fundo escuro)
        forest: "#3D5C4B",    // verde-escuro do letreiro — acento decorativo em blocos/bordas maiores
        hairline: "#2E2E32",  // linhas divisórias sobre fundo escuro
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};
