/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-soft": "var(--ink-soft)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        "accent-gold": "var(--accent-gold)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "serif"],
        body: ['"Inter Tight"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        DEFAULT: '2px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
        '3xl': '2px',
      }
    },
  },
  plugins: [],
}
