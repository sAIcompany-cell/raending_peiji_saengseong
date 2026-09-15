import { mockAnalyticsEventList } from "@/lib/mock-data";

export async function GET(): Promise<Response> {
  return Response.json(mockAnalyticsEventList);
}
