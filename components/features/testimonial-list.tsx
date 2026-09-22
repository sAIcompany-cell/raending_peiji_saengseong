"use client";

import { useEffect, useState } from "react";
import { AlertCircle, MessageSquareQuote, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { decideTestimonial, listTestimonials } from "@/lib/api-client";
import { cn } from "@/lib/utils";
import type { Testimonial, TestimonialDecision } from "@/types";

interface TestimonialListProps {
  /** 주입된 후기 목록. 없으면 스스로 불러온다. */
  items?: Testimonial[];
  loading?: boolean;
  error?: string | null;
  /** 검토 대기 후기에 승인/반려 버튼 표시 */
  moderation?: boolean;
  title?: string;
  description?: string;
  className?: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`별점 ${rating}점 (5점 만점)`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={cn("size-4", n <= rating ? "fill-brand text-brand" : "text-border")}
        />
      ))}
    </span>
  );
}

export function TestimonialList({
  items,
  loading,
  error,
  moderation = false,
  title = "먼저 비교해 본 분들의 이야기",
  description = "가격을 비교하고 매장 방문을 줄인 실제 경험입니다.",
  className,
}: TestimonialListProps) {
  const selfLoad = items === undefined;
  const [own, setOwn] = useState<Testimonial[]>([]);
  const [ownLoading, setOwnLoading] = useState(selfLoad);
  const [ownError, setOwnError] = useState<string | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    if (!selfLoad) return;
    let cancelled = false;
    setOwnLoading(true);
    listTestimonials().then((result) => {
      if (cancelled) return;
      if (result.ok) setOwn(result.data.items);
      else setOwnError(result.error);
      setOwnLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [selfLoad]);

  const list = selfLoad ? own : items;
  const isLoading = selfLoad ? ownLoading : Boolean(loading);
  const errorMessage = selfLoad ? ownError : error ?? null;
  const visible = list.filter((t) => t.status === "approved" || (moderation && t.status === "pending"));

  async function decide(id: string, decision: TestimonialDecision) {
    setPendingId(id);
    setActionError(null);
    const result = await decideTestimonial(id, { decision });
    if (result.ok) {
      const updated = result.data;
      setOwn((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    } else {
      setActionError(result.error);
    }
    setPendingId(null);
  }

  return (
    <section data-feat-id="feat_feat-ff2f57" aria-labelledby="testimonial-title" className={cn("flex flex-col gap-8", className)}>
      <FadeIn className="flex flex-col gap-2">
        <h2 id="testimonial-title" className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-xl text-muted-foreground">{description}</p>
      </FadeIn>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-52 w-full" />
          ))}
        </div>
      ) : errorMessage ? (
        <div role="alert">
          <EmptyState
            icon={<AlertCircle className="size-8" aria-hidden="true" />}
            title="후기를 불러오지 못했어요"
            description={errorMessage}
          />
        </div>
      ) : visible.length === 0 ? (
        <EmptyState
          icon={<MessageSquareQuote className="size-8" aria-hidden="true" />}
          title="아직 등록된 후기가 없어요"
          description="가구를 비교해 본 경험을 첫 번째로 남겨 주세요."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <StaggerItem key={t.id} className="h-full">
              <Card className="flex h-full flex-col">
                <CardContent className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between gap-2">
                    <Stars rating={t.rating} />
                    {t.status === "pending" ? <Badge variant="outline">검토 대기</Badge> : null}
                  </div>
                  <blockquote className="text-pretty text-base leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <Badge variant="accent" className="w-fit text-brand">
                    {t.result}
                  </Badge>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3 border-t border-border p-6 pt-4">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-muted font-heading text-sm font-semibold text-foreground"
                    >
                      {t.author.slice(0, 1)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">{t.author}</span>
                      <span className="text-xs text-muted-foreground">{t.authorContext}</span>
                    </div>
                  </div>
                  {moderation && t.status === "pending" ? (
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" disabled={pendingId === t.id} onClick={() => decide(t.id, "approve")}>
                        <ThumbsUp aria-hidden="true" /> 승인
                      </Button>
                      <Button size="sm" variant="outline" disabled={pendingId === t.id} onClick={() => decide(t.id, "reject")}>
                        <ThumbsDown aria-hidden="true" /> 반려
                      </Button>
                    </div>
                  ) : null}
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      {actionError ? (
        <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4" aria-hidden="true" />
          {actionError}
        </p>
      ) : null}
    </section>
  );
}
