import { CircleCheck, CircleMinus, Monitor, MonitorSmartphone, Smartphone, Tablet } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { mockResponsiveSettingList } from "@/lib/mock-data";

export type ResponsiveSetting = (typeof mockResponsiveSettingList)[number];

const deviceIcon = {
  mobile: Smartphone,
  tablet: Tablet,
  desktop: Monitor,
} as const;

/** 기기별 지원 상태 — 어떤 화면에서도 읽고 누를 수 있다는 안내. */
export function ResponsiveSupportList({
  items,
  loading = false,
  className,
}: {
  items: ResponsiveSetting[];
  loading?: boolean;
  className?: string;
}) {
  return (
    <section data-cbv-src="components/features/responsive-support-list.tsx:29" data-feat-id="feat_fd435a7f2" className={cn("flex flex-col gap-6", className)}>
      {loading ? (
        <div data-cbv-src="components/features/responsive-support-list.tsx:31" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((key) => (
            <Skeleton key={key} className="h-40 w-full rounded-lg" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={<MonitorSmartphone className="h-6 w-6" aria-hidden="true" />}
          title="지원 기기 정보가 아직 없어요"
          description="잠시 후 다시 확인해 주세요."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = deviceIcon[item.device as keyof typeof deviceIcon] ?? MonitorSmartphone;
            const supported = item.status === "supported";
            return (
              <StaggerItem key={item.id} className="h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div data-cbv-src="components/features/responsive-support-list.tsx:51" className="flex items-center justify-between gap-3">
                      <span data-cbv-src="components/features/responsive-support-list.tsx:52"
                        className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-brand"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <Badge variant={supported ? "outline" : "secondary"} className={cn("gap-1", supported && "border-brand text-brand")}>
                        {supported ? (
                          <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <CircleMinus className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {supported ? "지원" : "준비 중"}
                      </Badge>
                    </div>
                    <div data-cbv-src="components/features/responsive-support-list.tsx:67" className="flex flex-col gap-1">
                      <h3 data-cbv-src="components/features/responsive-support-list.tsx:68" className="font-heading text-xl font-semibold text-foreground">{item.label}</h3>
                      <p data-cbv-src="components/features/responsive-support-list.tsx:69" className="text-sm text-muted-foreground">{item.breakpoint} 기준</p>
                    </div>
                    <p data-cbv-src="components/features/responsive-support-list.tsx:71" className="text-sm leading-relaxed break-keep text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </section>
  );
}
