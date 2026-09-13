"use client";

import { useCallback, useEffect, useState } from "react";
import { AlertCircle, MessageSquareQuote, Quote, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Stagger, StaggerItem } from "@/components/motion";
import { listTestimonials } from "@/lib/api-client";
import type { Testimonial } from "@/types";

/**
 * 사용자 후기 섹션(feat_feat-ff2f57).
 * items 를 받으면 그대로 표시하고, 없으면 스스로 불러온다(로딩·오류·빈 상태 포함).
 */
export function TestimonialList({
  items,
  title = "먼저 사용해 본 분들의 이야기",
  description = "실제로 비교를 마친 이용자들이 남긴 후기입니다.",
}: {
  items?: Testimonial[];
  title?: string;
  description?: string;
}) {
  const controlled = items !== undefined;
  const [data, setData] = useState<Testimonial[]>(items ?? []);
  const [loading, setLoading] = useState(!controlled);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const result = await listTestimonials();
    if (result.ok) {
      setData(result.data);
    } else {
      setError(result.error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (controlled) {
      setData(items ?? []);
      setLoading(false);
      return;
    }
    void load();
  }, [controlled, items, load]);

  return (
    <section data-cbv-src="components/features/testimonial-list.tsx:54" data-feat-id="feat_feat-ff2f57" className="py-12 sm:py-16">
      <div data-cbv-src="components/features/testimonial-list.tsx:55" className="max-w-2xl">
        <Badge variant="accent" className="mb-3">
          사용자 후기
        </Badge>
        <h2 data-cbv-src="components/features/testimonial-list.tsx:59" className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p data-cbv-src="components/features/testimonial-list.tsx:60" className="mt-3 text-base text-muted-foreground">{description}</p>
      </div>

      <div data-cbv-src="components/features/testimonial-list.tsx:63" className="mt-8">
        {loading ? (
          <div data-cbv-src="components/features/testimonial-list.tsx:65" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((key) => (
              <Card key={key}>
                <CardContent className="space-y-3 py-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div data-cbv-src="components/features/testimonial-list.tsx:77"
            role="alert"
            className="flex flex-col gap-3 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-4 text-sm text-destructive sm:flex-row sm:items-center sm:justify-between"
          >
            <span data-cbv-src="components/features/testimonial-list.tsx:81" className="flex items-start gap-2">
              <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {error}
            </span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              <RefreshCw aria-hidden="true" />
              다시 불러오기
            </Button>
          </div>
        ) : data.length === 0 ? (
          <EmptyState
            icon={<MessageSquareQuote aria-hidden="true" className="h-6 w-6" />}
            title="아직 등록된 후기가 없어요"
            description="첫 후기가 등록되면 이 자리에 보여드릴게요."
            action={
              <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
                <RefreshCw aria-hidden="true" />
                새로고침
              </Button>
            }
          />
        ) : (
          <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
              <StaggerItem key={item.id ?? `testimonial-${index}`} className="h-full">
                <Card className="flex h-full flex-col transition-colors hover:border-brand">
                  <CardContent className="flex-1 py-6">
                    <Quote aria-hidden="true" className="h-5 w-5 text-brand" />
                    <p data-cbv-src="components/features/testimonial-list.tsx:109" className="mt-3 text-base leading-relaxed text-foreground">
                      {item.quote ?? "후기 내용이 없습니다."}
                    </p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-1 border-t border-border pt-4">
                    <span data-cbv-src="components/features/testimonial-list.tsx:114" className="text-sm font-medium text-foreground">
                      {item.author ?? "익명 이용자"}
                    </span>
                    {item.result ? (
                      <span data-cbv-src="components/features/testimonial-list.tsx:118" className="text-sm text-muted-foreground">{item.result}</span>
                    ) : null}
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
