/**
 * Tailwind 설정 — **값의 진실은 app/globals.css 다.**
 *
 * 이 스캐폴드는 Tailwind v4(CSS-first)라 `@theme inline` 블록이 곧 설정이다. 이 파일은
 * 그 토큰을 v3 형태 도구(플러그인·에디터 확장·마이그레이션)가 읽을 수 있게 **CSS 변수로
 * 가리키기만** 한다. hex 값을 여기에 복제하지 마라 — 두 곳에 적힌 색은 반드시 어긋난다.
 *
 * // 축: 측정 없음(중립)
 */

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "card": "var(--card)",
        "card-foreground": "var(--card-foreground)",
        "primary": "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "secondary": "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "accent": "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        "destructive": "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        "border": "var(--border)",
        "input": "var(--input)",
        "ring": "var(--ring)",
        "brand": "var(--brand)",
        "brand-foreground": "var(--brand-foreground)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      spacing: {
        gutter: "var(--density-gap)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-heading)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
