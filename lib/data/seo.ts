import { getMockSeoMetadata, mockSeoMetadataList, type MockSeoMetadata } from "@/lib/mock-data";

/** SEO 메타는 페이지별 정적 설정이다(DB 테이블 없음). */
export type SeoMetadata = MockSeoMetadata;

export async function listSeoMetadata(): Promise<SeoMetadata[]> {
  return [...mockSeoMetadataList];
}

export async function getSeoMetadata(id: string): Promise<SeoMetadata | null> {
  return getMockSeoMetadata(id) ?? null;
}
