import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Stagger, StaggerItem } from "@/components/motion";
import type { LandingPageSection } from "@/types";

function iconFor(id?: string) {
  if (id?.includes("mobile")) return Smartphone;
  if (id?.includes("tablet")) return Tablet;
  return Monitor;
}

/**
 * 모바일/PC 반응형 지원(feat_fd435a7f2) 내용 표시 블록.
 * 화면 폭별 노출 규칙을 한 열 → 두 열 → 세 열로 넓히며 보여준다.
 */
export function ResponsiveSupportList({
  items,
  title = "모바일과 PC에서 같은 흐름으로",
  description = "화면 폭이 달라져도 콘텐츠와 CTA의 노출 순서를 유지합니다.",
}: {
  items: LandingPageSection[];
  title?: string;
  description?: string;
}) {
  return (
    <section data-feat-id="feat_fd435a7f2" className="py-12 sm:py-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      </div>

      <div className="mt-8">
        {items.length === 0 ? (
          <EmptyState
            icon={<Monitor aria-hidden="true" className="h-6 w-6" />}
            title="반응형 설정이 아직 없어요"
            description="화면 폭별 규칙이 등록되면 여기에 표시됩니다."
          />
        ) : (
          <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const Icon = iconFor(item.id);
              return (
                <StaggerItem key={item.id ?? `responsive-${index}`} className="h-full">
                  <Card className="h-full">
                    <CardHeader>
                      <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
                      <CardTitle className="text-base">{item.title ?? "화면"}</CardTitle>
                      {item.content ? (
                        <CardDescription>{item.content}</CardDescription>
                      ) : null}
                    </CardHeader>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        )}
      </div>
    </section>
  );
}
