import { LandingPageSection, Testimonial, AnalyticsEvent } from "../types";

export function parseLandingPageSection(raw: unknown): LandingPageSection | null {
  if (typeof raw !== "object" || raw === null) return null;
  
  const obj = raw as Record<string, unknown>;
  
  return {
    id: typeof obj.id === "string" ? obj.id : undefined,
    type: typeof obj.type === "string" ? obj.type : undefined,
    title: typeof obj.title === "string" ? obj.title : undefined,
    content: typeof obj.content === "string" ? obj.content : undefined,
    order: typeof obj.order === "number" ? obj.order : undefined,
  };
}

export function parseTestimonial(raw: unknown): Testimonial | null {
  if (typeof raw !== "object" || raw === null) return null;
  
  const obj = raw as Record<string, unknown>;
  
  return {
    id: typeof obj.id === "string" ? obj.id : undefined,
    quote: typeof obj.quote === "string" ? obj.quote : undefined,
    author: typeof obj.author === "string" ? obj.author : undefined,
    result: typeof obj.result === "string" ? obj.result : undefined,
  };
}

export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (typeof raw !== "object" || raw === null) return null;
  
  const obj = raw as Record<string, unknown>;
  
  return {
    id: typeof obj.id === "string" ? obj.id : undefined,
    name: typeof obj.name === "string" ? obj.name : undefined,
    pagePath: typeof obj.pagePath === "string" ? obj.pagePath : undefined,
    occurredAt: typeof obj.occurredAt === "string" ? obj.occurredAt : undefined,
  };
}
