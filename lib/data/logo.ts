import { getMockLogo, mockLogoList, type MockLogo } from "@/lib/mock-data";

/** 로고는 배포 설정 값이다(DB 테이블 없음) — 게이트웨이는 목업 시드를 단일 출처로 쓴다. */
export type Logo = MockLogo;

export async function listLogo(): Promise<Logo[]> {
  return [...mockLogoList];
}

export async function getLogo(id: string): Promise<Logo | null> {
  return getMockLogo(id) ?? null;
}
