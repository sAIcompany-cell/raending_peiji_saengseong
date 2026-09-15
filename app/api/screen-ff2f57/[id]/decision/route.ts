import { mockTestimonialList } from "@/lib/mock-data";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function POST(
  _request: Request,
  context: RouteContext,
): Promise<Response> {
  const { id } = await context.params;
  const testimonial = mockTestimonialList.find((item) => item.id === id);

  if (!testimonial) {
    return Response.json(
      { error: "판정할 사용자 후기를 찾을 수 없어요." },
      { status: 404 },
    );
  }

  return Response.json(testimonial);
}
