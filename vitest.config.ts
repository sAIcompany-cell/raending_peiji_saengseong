import path from "node:path";
import { defineConfig } from "vitest/config";

// tsconfig 의 `jsx: preserve` 를 그대로 두고 테스트만 자동 런타임으로 변환한다(플러그인 불필요).
export default defineConfig({
  esbuild: { jsx: "automatic" },
  resolve: { alias: { "@": path.resolve(__dirname) } },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/**/*.test.{ts,tsx}"],
  },
});
