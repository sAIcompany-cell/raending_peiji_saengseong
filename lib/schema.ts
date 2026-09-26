import { z } from "zod";

export const landingPageSectionInputSchema = z
  .object({
    type: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
    order: z.number().finite().optional(),
  })
  .strict();

export type LandingPageSectionInput = z.infer<
  typeof landingPageSectionInputSchema
>;

export const testimonialInputSchema = z
  .object({
    quote: z.string().optional(),
    author: z.string().optional(),
    result: z.string().optional(),
  })
  .strict();

export type TestimonialInput = z.infer<typeof testimonialInputSchema>;

export const analyticsEventInputSchema = z
  .object({
    name: z.string().optional(),
    pagePath: z.string().optional(),
    occurredAt: z.string().datetime().optional(),
  })
  .strict();

export type AnalyticsEventInput = z.infer<typeof analyticsEventInputSchema>;
