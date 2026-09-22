import { mockCtaList } from "@/lib/mock-data";
import type { ApiListResponse, CtaButton } from "@/types";

export async function GET(): Promise<Response> {
  const response: ApiListResponse<CtaButton> = {
    items: mockCtaList,
    total: mockCtaList.length,
  };

  return Response.json(response);
}
