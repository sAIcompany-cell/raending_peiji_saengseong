import { mockTestimonialList } from "@/lib/mock-data";
import type { ApiListResponse, Testimonial } from "@/types";

export async function GET(): Promise<Response> {
  const response: ApiListResponse<Testimonial> = {
    items: mockTestimonialList,
    total: mockTestimonialList.length,
  };

  return Response.json(response);
}
