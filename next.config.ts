import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cubivora 프리뷰(https://<포트>-<샌드박스>.e2b.app)가 dev 서버의 HMR 웹소켓·폰트를
  // 읽을 수 있게 한다. Next 16 은 이 목록에 없는 출처의 /_next/*·/__nextjs* 요청을 403 으로
  // 막고, HMR 소켓이 안 붙으면 프리뷰가 하이드레이션되지 않는다(정적 껍데기). 배포에는 무관.
  allowedDevOrigins: ["**.e2b.app", "**.e2b.dev"],
};

export default nextConfig;
