import { mockTestimonialList } from "@/lib/mock-data";
import type { ApiError, TestimonialDecisionInput } from "@/types";

interface RouteContext {
  params: Promise<{ id: string }>;
}

function isDecisionInput(value: unknown): value is TestimonialDecisionInput {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as { decision?: unknown; note?: unknown };
  const validDecision = candidate.decision === "approve" || candidate.decision === "reject";
  const validNote = candidate.note === undefined || typeof candidate.note === "string";
  return validDecision && validNote;
}

export async function POST(request: Request, context: RouteContext): Promise<Response> {
  const { id } = await context.params;
  const testimonial = mockTestimonialList.find((item) => item.id === id);

  if (!testimonial) {
    const error: ApiError = {
      code: "not_found",
      message: "판정할 후기를 찾을 수 없어요.",
    };
    return Response.json(error, { status: 404 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    const error: ApiError = {
      code: "invalid_payload",
      message: "후기 판정 내용을 확인해 주세요.",
    };
    return Response.json(error, { status: 400 });
  }

  if (!isDecisionInput(payload)) {
    const error: ApiError = {
      code: "invalid_payload",
      message: "판정은 승인 또는 반려 중 하나여야 해요.",
    };
    return Response.json(error, { status: 400 });
  }

  if (testimonial.status !== "pending") {
    const error: ApiError = {
      code: "conflicting_state",
      message: "이미 판정이 완료된 후기예요.",
    };
    return Response.json(error, { status: 409 });
  }

  testimonial.status = payload.decision === "approve" ? "approved" : "rejected";
  testimonial.decidedAt = new Date().toISOString();

  return Response.json(testimonial);
}
