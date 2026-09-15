import { mockResponsiveSettingList } from "@/lib/mock-data";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(
  _request: Request,
  context: RouteContext,
): Promise<Response> {
  const { id } = await context.params;
  const setting = mockResponsiveSettingList.find((item) => item.id === id);

  if (!setting) {
    return Response.json(
      { error: "요청한 반응형 설정을 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return Response.json(setting);
}
