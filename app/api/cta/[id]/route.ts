import { NextResponse } from "next/server";
import { parseBody, requireUser } from "@/lib/api/guard";
import { ctaUpdateSchema } from "@/lib/schema";
import { getCta, updateCta } from "@/lib/data/cta";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cta = await getCta(id);
  if (!cta) return NextResponse.json({ error: "CTA를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(cta);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireUser();
  if (!guard.ok) return guard.response;
  const parsed = await parseBody(request, ctaUpdateSchema);
  if (!parsed.ok) return parsed.response;
  const { id } = await params;
  const cta = await updateCta(id, parsed.data);
  if (!cta) return NextResponse.json({ error: "CTA를 찾을 수 없어요." }, { status: 404 });
  return NextResponse.json(cta);
}
