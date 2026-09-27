import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    // E2B 프리뷰는 샌드박스 **밖**에서 들어온다 — 루프백 바인딩이면 아무도 못 붙는다.
    host: '0.0.0.0',
    port: 5173,
    // Vite 8 의 Host 헤더 검사. 없으면 `<포트>-<샌드박스>.e2b.app` 요청이 403 으로 막혀
    // 시스템은 "준비 완료", 사용자 화면은 "Blocked request" 가 된다.
    allowedHosts: true,
    // 프리뷰는 HTTPS(443)로 프록시된다. 기본값(dev 포트로 ws://)은 연결되지 않는다.
    hmr: { protocol: 'wss', clientPort: 443 },
  },
})
