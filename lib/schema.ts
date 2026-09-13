import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "@/types";

function isRecord(raw: unknown): raw is Record<string, unknown> {
  return typeof raw === "object" && raw !== null;
}

function str(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function num(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

export function parseLandingPageSection(raw: unknown): LandingPageSection | null {
  if (!isRecord(raw)) return null;
  return {
    id: str(raw.id),
    type: str(raw.type),
    title: str(raw.title),
    content: str(raw.content),
    order: num(raw.order),
  };
}

export function parseTestimonial(raw: unknown): Testimonial | null {
  if (!isRecord(raw)) return null;
  return {
    id: str(raw.id),
    quote: str(raw.quote),
    author: str(raw.author),
    result: str(raw.result),
  };
}

export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (!isRecord(raw)) return null;
  return {
    name: str(raw.name),
    pagePath: str(raw.pagePath),
    occurredAt: str(raw.occurredAt),
  };
}
