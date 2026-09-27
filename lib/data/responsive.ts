import {
  getMockResponsiveSetting,
  mockResponsiveSettingList,
  type MockResponsiveSetting,
} from "@/lib/mock-data";

/** 반응형 지원 항목은 빌드 설정 값이다(DB 테이블 없음). */
export type ResponsiveSetting = MockResponsiveSetting;

export async function listResponsiveSetting(): Promise<ResponsiveSetting[]> {
  return [...mockResponsiveSettingList];
}

export async function getResponsiveSetting(id: string): Promise<ResponsiveSetting | null> {
  return getMockResponsiveSetting(id) ?? null;
}
