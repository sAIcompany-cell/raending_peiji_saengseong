import { AlertCircle, MessageSquareQuote, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { Stagger, StaggerItem } from "@/components/motion";
import type { Testimonial } from "@/types";

/**
 * 사용자 후기 섹션 (feat_feat-ff2f57)
 * 데이터는 props 로 주입받는다.
 */
export function TestimonialList({
  items,
  loading = false,
  error = null,
  emptyAction,
}: {
  items: Testimonial[];
  loading?: boolean;
  error?: string | null;
  emptyAction?: React.ReactNode;
}) {
  return (
    <section data-feat-id="feat_feat-ff2f57" aria-labelledby="testimonial-heading">
      <div className="flex flex-wrap items-center gap-3">
        <h2
          id="testimonial-heading"
          className="font-display text-xl font-semibold tracking-tight"
        >
          사용자 후기
        </h2>
        <Badge variant="accent" className="gap-1.5 py-1">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span>실제 사용 경험</span>
        </Badge>
      </div>

      {loading ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((key) => (
            <Card key={key}>
              <CardContent className="space-y-3 p-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2 rounded-lg border border-border p-6 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      ) : items.length === 0 ? (
        <EmptyState
          className="mt-6"
          icon={<MessageSquareQuote className="h-6 w-6" aria-hidden="true" />}
          title="아직 등록된 후기가 없어요"
          description="첫 비교를 시작하면 이곳에 사용자 경험이 쌓입니다."
          action={emptyAction}
        />
      ) : (
        <Stagger className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <StaggerItem key={item.id ?? `testimonial-${index}`}>
              <Card className="h-full transition-colors hover:border-brand/40">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <MessageSquareQuote
                    className="h-5 w-5 text-brand"
                    aria-hidden="true"
                  />
                  <blockquote className="text-sm leading-relaxed text-foreground">
                    {item.quote ?? "후기 내용이 준비 중입니다."}
                  </blockquote>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-foreground">
                      {item.author ?? "익명 사용자"}
                    </p>
                    {item.result ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.result}
                      </p>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
