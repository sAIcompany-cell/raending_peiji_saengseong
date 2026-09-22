import { mockSeoMetadataList } from "@/lib/mock-data";
import type { ApiListResponse, SeoMetadata } from "@/types";

export async function GET(): Promise<Response> {
  const response: ApiListResponse<SeoMetadata> = {
    items: mockSeoMetadataList,
    total: mockSeoMetadataList.length,
  };

  return Response.json(response);
}
