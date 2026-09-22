import { mockLogoList } from "@/lib/mock-data";
import type { ApiListResponse, SiteLogo } from "@/types";

export async function GET(): Promise<Response> {
  const response: ApiListResponse<SiteLogo> = {
    items: mockLogoList,
    total: mockLogoList.length,
  };

  return Response.json(response);
}
