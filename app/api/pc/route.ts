import { mockResponsiveSettingList } from "@/lib/mock-data";
import type { ApiListResponse, ResponsiveSetting } from "@/types";

export async function GET(): Promise<Response> {
  const response: ApiListResponse<ResponsiveSetting> = {
    items: mockResponsiveSettingList,
    total: mockResponsiveSettingList.length,
  };

  return Response.json(response);
}
