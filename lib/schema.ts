import type { LandingPageSection, Testimonial, AnalyticsEvent } from '@/types';

export function parseLandingPageSection(raw: unknown): LandingPageSection | null {
  if (typeof raw !== 'object' || raw === null) return null;
  const obj = raw as Record<string, unknown>;
  
  if (
    typeof obj.id !== 'string' ||
    typeof obj.type !== 'string' ||
    typeof obj.title !== 'string' ||
    typeof obj.content !== 'string' ||
    typeof obj.order !== 'number'
  ) {
    return null;
  }
  
  return {
    id: obj.id,
    type: obj.type,
    title: obj.title,
    content: obj.content,
    order: obj.order,
  };
}

export function parseTestimonial(raw: unknown): Testimonial | null {
  if (typeof raw !== 'object' || raw === null) return null;
  const obj = raw as Record<string, unknown>;
  
  if (
    typeof obj.id !== 'string' ||
    typeof obj.quote !== 'string' ||
    typeof obj.author !== 'string' ||
    typeof obj.result !== 'string'
  ) {
    return null;
  }
  
  return {
    id: obj.id,
    quote: obj.quote,
    author: obj.author,
    result: obj.result,
  };
}

export function parseAnalyticsEvent(raw: unknown): AnalyticsEvent | null {
  if (typeof raw !== 'object' || raw === null) return null;
  const obj = raw as Record<string, unknown>;
  
  if (
    typeof obj.name !== 'string' ||
    typeof obj.pagePath !== 'string' ||
    !(obj.occurredAt instanceof Date || typeof obj.occurredAt === 'string')
  ) {
    return null;
  }
  
  const occurredAt = typeof obj.occurredAt === 'string' 
    ? new Date(obj.occurredAt)
    : obj.occurredAt;
  
  if (isNaN(occurredAt.getTime())) {
    return null;
  }
  
  return {
    name: obj.name,
    pagePath: obj.pagePath,
    occurredAt,
  };
}
