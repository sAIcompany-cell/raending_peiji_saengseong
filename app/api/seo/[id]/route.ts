import { mockSeoMetadataList } from "@/lib/mock-data";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(
  _request: Request,
  context: RouteContext,
): Promise<Response> {
  const { id } = await context.params;
  const metadata = mockSeoMetadataList.find((item) => item.id === id);

  if (!metadata) {
    return Response.json(
      { error: "요청한 SEO 메타 정보를 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return Response.json(metadata);
}
