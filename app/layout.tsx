import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/features/site-header";
import { Container } from "@/components/ui/container";

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
    <html data-cbv-src="app/layout.tsx:20" lang="ko">
      {/* 폰트는 app/globals.css 가 @import 로 싣는다(next/font 를 겹쳐 쓰지 마라). */}
      <body data-cbv-src="app/layout.tsx:22" className="min-h-screen bg-background font-sans text-foreground antialiased">
        <div data-cbv-src="app/layout.tsx:23" className="flex min-h-screen flex-col">
          <SiteHeader />
          <div data-cbv-src="app/layout.tsx:25" className="flex-1">{children}</div>
          <footer data-cbv-src="app/layout.tsx:26" className="border-t border-border py-8">
            <Container>
              <p data-cbv-src="app/layout.tsx:28" className="text-sm text-muted-foreground">
                가구한눈 · 가구 가격과 조건을 한곳에서 비교하는 랜딩페이지
              </p>
            </Container>
          </footer>
        </div>
        <script data-cbv-src="app/layout.tsx:34" src="/cubivora-picker.js" async />
      </body>
    </html>
  );
}
