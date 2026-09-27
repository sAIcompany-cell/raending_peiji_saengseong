import type { Metadata } from "next";
import "./globals.css";

// 문서 메타는 결정론적으로 심는다. 프롬프트 지시로만 두면 스캐폴드가 만들어 둔
// 기본 제목이 그대로 배포까지 나가는 일이 생긴다 — 브라우저 탭·검색 결과·공유
// 카드에 전부 찍히는, 사용자가 가장 먼저 보는 실수다.
export const metadata: Metadata = {
  title: "랜딩 페이지 생성",
  description: "방문자가 서비스를 빠르게 이해하고 CTA 버튼을 눌러 신청/문의까지 이어지게 하는 랜딩페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* 폰트는 app/globals.css 가 @import 로 싣는다(next/font 를 겹쳐 쓰지 마라). */}
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
