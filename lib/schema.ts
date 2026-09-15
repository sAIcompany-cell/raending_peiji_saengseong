import type {
  AnalyticsEvent,
  LandingPageSection,
  Testimonial,
} from "../types";

export function parseLandingPageSection(
  raw: unknown,
): LandingPageSection | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }

  const value = raw as Record<string, unknown>;

  if (value.id !== undefined && typeof value.id !== "string") {
    return null;
  }
  if (value.type !== undefined && typeof value.type !== "string") {
    return null;
  }
  if (value.title !== undefined && typeof value.title !== "string") {
    return null;
  }
  if (value.content !== undefined && typeof value.content !== "string") {
    return null;
  }
  if (
    value.order !== undefined &&
    (typeof value.order !== "number" || !Number.isFinite(value.order))
  ) {
    return null;
  }

  const section: LandingPageSection = {};

  if (typeof value.id === "string") section.id = value.id;
  if (typeof value.type === "string") section.type = value.type;
  if (typeof value.title === "string") section.title = value.title;
  if (typeof value.content === "string") section.content = value.content;
  if (typeof value.order === "number") section.order = value.order;

  return section;
}

export function parseTestimonial(raw: unknown): Testimonial | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }

  const value = raw as Record<string, unknown>;

  if (value.id !== undefined && typeof value.id !== "string") {
    return null;
  }
  if (value.quote !== undefined && typeof value.quote !== "string") {
    return null;
  }
  if (value.author !== undefined && typeof value.author !== "string") {
    return null;
  }
  if (value.result !== undefined && typeof value.result !== "string") {
    return null;
  }

  const testimonial: Testimonial = {};

  if (typeof value.id === "string") testimonial.id = value.id;
  if (typeof value.quote === "string") testimonial.quote = value.quote;
  if (typeof value.author === "string") testimonial.author = value.author;
  if (typeof value.result === "string") testimonial.result = value.result;

  return testimonial;
}

export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }

  const value = raw as Record<string, unknown>;

  if (value.id !== undefined && typeof value.id !== "string") {
    return null;
  }
  if (
    value.name !== undefined &&
    value.name !== "page_view" &&
    value.name !== "cta_click"
  ) {
    return null;
  }
  if (value.pagePath !== undefined && typeof value.pagePath !== "string") {
    return null;
  }
  if (
    value.occurredAt !== undefined &&
    (typeof value.occurredAt !== "string" ||
      Number.isNaN(Date.parse(value.occurredAt)))
  ) {
    return null;
  }

  const event: AnalyticsEvent = {};

  if (typeof value.id === "string") event.id = value.id;
  if (value.name === "page_view" || value.name === "cta_click") {
    event.name = value.name;
  }
  if (typeof value.pagePath === "string") event.pagePath = value.pagePath;
  if (typeof value.occurredAt === "string") {
    event.occurredAt = value.occurredAt;
  }

  return event;
}
