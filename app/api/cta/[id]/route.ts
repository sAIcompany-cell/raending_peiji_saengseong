import { NextResponse } from "next/server";
import { parseBody, requireUser } from "@/lib/api/guard";
import { getMockCta } from "@/lib/mock-data";
import { z } from "zod";

const ctaSchema = z.object({ label: z.string().optional(), destination: z.string().optional() });

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const guard = await requireUser();
  if (!guard.ok) return guard.response;
  const parsed = await parseBody(request, ctaSchema);
  if (!parsed.ok) return parsed.response;
  const cta = getMockCta(params.id);
  if (!cta) return NextResponse.json({ error: "CTA를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json({ ...cta, ...parsed.data });
}
