import { mockCtaList } from "@/lib/mock-data";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(
  _request: Request,
  context: RouteContext,
): Promise<Response> {
  const { id } = await context.params;
  const cta = mockCtaList.find((item) => item.id === id);

  if (!cta) {
    return Response.json(
      { error: "요청한 CTA를 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return Response.json(cta);
}
