import type {
  AnalyticsEvent,
  AnalyticsEventInput,
  AnalyticsEventName,
  LandingPageRoute,
  LandingPageSection,
  LandingPageSectionType,
  Testimonial,
} from "../types";

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isOptionalNonEmptyString(value: unknown): value is string | undefined {
  return value === undefined || isNonEmptyString(value);
}

export function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function isIsoDateTime(value: unknown): value is string {
  if (!isNonEmptyString(value)) {
    return false;
  }

  return Number.isFinite(Date.parse(value));
}

export function isLandingPageSectionType(
  value: unknown,
): value is LandingPageSectionType {
  return (
    value === "hero" ||
    value === "problem" ||
    value === "service" ||
    value === "benefits" ||
    value === "testimonial" ||
    value === "cta"
  );
}

export function isAnalyticsEventName(
  value: unknown,
): value is AnalyticsEventName {
  return value === "page_visit" || value === "cta_click";
}

export function isLandingPageRoute(value: unknown): value is LandingPageRoute {
  return (
    value === "/hero" ||
    value === "/screen" ||
    value === "/screen-2" ||
    value === "/screen-3" ||
    value === "/cta"
  );
}

export function parseLandingPageSection(
  raw: unknown,
): LandingPageSection | null {
  if (!isRecord(raw)) {
    return null;
  }

  if (!isOptionalNonEmptyString(raw.id)) {
    return null;
  }

  if (raw.type !== undefined && !isLandingPageSectionType(raw.type)) {
    return null;
  }

  if (!isOptionalNonEmptyString(raw.title)) {
    return null;
  }

  if (!isOptionalNonEmptyString(raw.content)) {
    return null;
  }

  if (raw.order !== undefined && !isFiniteNumber(raw.order)) {
    return null;
  }

  const section: LandingPageSection = {};

  if (typeof raw.id === "string") {
    section.id = raw.id;
  }
  if (isLandingPageSectionType(raw.type)) {
    section.type = raw.type;
  }
  if (typeof raw.title === "string") {
    section.title = raw.title;
  }
  if (typeof raw.content === "string") {
    section.content = raw.content;
  }
  if (typeof raw.order === "number") {
    section.order = raw.order;
  }

  return section;
}

export function parseTestimonial(raw: unknown): Testimonial | null {
  if (!isRecord(raw)) {
    return null;
  }

  if (
    !isOptionalNonEmptyString(raw.id) ||
    !isOptionalNonEmptyString(raw.quote) ||
    !isOptionalNonEmptyString(raw.author) ||
    !isOptionalNonEmptyString(raw.result)
  ) {
    return null;
  }

  const testimonial: Testimonial = {};

  if (typeof raw.id === "string") {
    testimonial.id = raw.id;
  }
  if (typeof raw.quote === "string") {
    testimonial.quote = raw.quote;
  }
  if (typeof raw.author === "string") {
    testimonial.author = raw.author;
  }
  if (typeof raw.result === "string") {
    testimonial.result = raw.result;
  }

  return testimonial;
}

export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (!isRecord(raw)) {
    return null;
  }

  if (raw.name !== undefined && !isAnalyticsEventName(raw.name)) {
    return null;
  }

  if (!isOptionalNonEmptyString(raw.pagePath)) {
    return null;
  }

  if (raw.occurredAt !== undefined && !isIsoDateTime(raw.occurredAt)) {
    return null;
  }

  const event: AnalyticsEvent = {};

  if (isAnalyticsEventName(raw.name)) {
    event.name = raw.name;
  }
  if (typeof raw.pagePath === "string") {
    event.pagePath = raw.pagePath;
  }
  if (typeof raw.occurredAt === "string") {
    event.occurredAt = raw.occurredAt;
  }

  return event;
}

export function parseAnalyticsEventInput(
  raw: unknown,
): AnalyticsEventInput | null {
  if (!isRecord(raw)) {
    return null;
  }

  if (
    !isAnalyticsEventName(raw.name) ||
    !isNonEmptyString(raw.pagePath) ||
    !isIsoDateTime(raw.occurredAt)
  ) {
    return null;
  }

  return {
    name: raw.name,
    pagePath: raw.pagePath,
    occurredAt: raw.occurredAt,
  };
}
