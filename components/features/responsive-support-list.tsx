"use client";

import { CheckCircle2, MonitorSmartphone } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { mockResponsiveSettingList, type MockResponsiveSetting } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export type ResponsiveSetting = MockResponsiveSetting;

/** 모바일/PC 반응형 지원 항목 (feat_fd435a7f2). */
export function ResponsiveSupportList({
  items = mockResponsiveSettingList,
  heading = "어떤 화면에서도 같은 흐름으로",
  loading = false,
  className,
}: {
  items?: ResponsiveSetting[];
  heading?: string;
  loading?: boolean;
  className?: string;
}) {
  return (
    <section data-feat-id="feat_fd435a7f2" className={cn("flex flex-col gap-[var(--density-gap)] py-12", className)}>
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-muted text-brand">
          <MonitorSmartphone className="size-4" aria-hidden="true" />
        </span>
        <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">{heading}</h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-lg" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={<MonitorSmartphone className="size-6" aria-hidden="true" />}
          title="지원 화면 정보가 아직 없어요"
          description="모바일과 PC 어디서든 같은 흐름으로 가구를 비교할 수 있어요."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground">{item.name}</h3>
                    <Badge variant="outline" className="inline-flex items-center gap-1 border-brand text-brand">
                      <CheckCircle2 className="size-3" aria-hidden="true" />
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.breakpoint}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
