"use client";

import { useCallback, useEffect, useState } from "react";
import { CircleAlert, CircleCheck, MessageSquareQuote, Quote, RotateCw } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { listTestimonials } from "@/lib/api-client";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <Quote className="h-6 w-6 text-brand" aria-hidden="true" />
        <blockquote data-cbv-src="components/features/testimonial-list.tsx:20" className="flex-1 text-base leading-relaxed break-keep text-foreground">
          {item.quote}
        </blockquote>
        {item.result ? (
          <p data-cbv-src="components/features/testimonial-list.tsx:24" className="flex items-start gap-2 rounded-md bg-muted p-3 text-sm break-keep text-foreground">
            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span data-cbv-src="components/features/testimonial-list.tsx:26">
              <span data-cbv-src="components/features/testimonial-list.tsx:27" className="sr-only">결과: </span>
              {item.result}
            </span>
          </p>
        ) : null}
        {item.author ? (
          <div data-cbv-src="components/features/testimonial-list.tsx:33" className="flex items-center gap-3">
            <span data-cbv-src="components/features/testimonial-list.tsx:34"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-heading text-sm font-semibold text-foreground"
              aria-hidden="true"
            >
              {item.author.slice(0, 1)}
            </span>
            <span data-cbv-src="components/features/testimonial-list.tsx:40" className="text-sm font-medium text-foreground">{item.author}</span>
            <Badge variant="secondary" className="ml-auto">
              구매 고객
            </Badge>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

/**
 * 사용자 후기 목록. testimonials 를 넘기면 그대로 쓰고, 없으면 스스로 불러온다.
 */
export function TestimonialList({
  testimonials,
  title,
  subtitle,
  limit,
  className,
}: {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
}) {
  const [items, setItems] = useState<Testimonial[] | null>(testimonials ?? null);
  const [loading, setLoading] = useState<boolean>(!testimonials);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await listTestimonials();
      if (result.ok) setItems(result.data);
      else setError("후기를 불러오지 못했어요.");
    } catch {
      setError("네트워크 연결을 확인하고 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (testimonials) {
      setItems(testimonials);
      setLoading(false);
      return;
    }
    void load();
  }, [testimonials, load]);

  const visible = (items ?? []).slice(0, limit ?? undefined);

  return (
    <section data-cbv-src="components/features/testimonial-list.tsx:97" data-feat-id="feat_feat-ff2f57" className={cn("flex flex-col gap-8", className)}>
      {title || subtitle ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:99" className="flex flex-col gap-3">
          {title ? (
            <h2 data-cbv-src="components/features/testimonial-list.tsx:101" className="font-heading text-xl font-semibold tracking-tight break-keep text-foreground sm:text-3xl">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p data-cbv-src="components/features/testimonial-list.tsx:106" className="max-w-2xl text-base break-keep text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
      ) : null}

      {loading ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:112" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((key) => (
            <Skeleton key={key} className="h-56 w-full rounded-lg" />
          ))}
        </div>
      ) : error ? (
        <div data-cbv-src="components/features/testimonial-list.tsx:118" className="flex flex-col items-start gap-3 rounded-lg border border-border p-6">
          <p data-cbv-src="components/features/testimonial-list.tsx:119" role="alert" className="flex items-center gap-2 text-sm text-destructive">
            <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            {error}
          </p>
          <Button variant="outline" size="sm" onClick={() => void load()} className="gap-2">
            <RotateCw className="h-4 w-4" aria-hidden="true" />
            다시 불러오기
          </Button>
        </div>
      ) : visible.length === 0 ? (
        <EmptyState
          icon={<MessageSquareQuote className="h-6 w-6" aria-hidden="true" />}
          title="아직 등록된 후기가 없어요"
          description="잠시 후 다시 확인하면 가구를 비교해 본 분들의 이야기를 볼 수 있어요."
          action={
            <Button variant="outline" size="sm" onClick={() => void load()} className="gap-2">
              <RotateCw className="h-4 w-4" aria-hidden="true" />
              다시 불러오기
            </Button>
          }
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <StaggerItem key={item.id ?? index} className="h-full">
              <TestimonialCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
