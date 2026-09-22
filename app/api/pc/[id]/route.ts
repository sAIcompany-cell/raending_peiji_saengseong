import { mockResponsiveSettingList } from "@/lib/mock-data";
import type { ApiError } from "@/types";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext): Promise<Response> {
  const { id } = await context.params;
  const setting = mockResponsiveSettingList.find((item) => item.id === id);

  if (!setting) {
    const error: ApiError = {
      code: "not_found",
      message: "요청한 반응형 설정을 찾을 수 없어요.",
    };
    return Response.json(error, { status: 404 });
  }

  return Response.json(setting);
}
