import { AlertCircle, AlertTriangle, CheckCircle2, Monitor, Smartphone, Tablet, XCircle, type LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { DeviceType, ResponsiveSetting, SupportLevel } from "@/types";

const deviceIcon: Record<DeviceType, LucideIcon> = { mobile: Smartphone, tablet: Tablet, desktop: Monitor };

const supportMeta: Record<SupportLevel, { label: string; icon: LucideIcon; className: string }> = {
  supported: { label: "지원", icon: CheckCircle2, className: "text-brand" },
  partial: { label: "일부 지원", icon: AlertTriangle, className: "text-foreground" },
  unsupported: { label: "미지원", icon: XCircle, className: "text-muted-foreground" },
};

interface ResponsiveSupportListProps {
  items: ResponsiveSetting[];
  loading?: boolean;
  error?: string | null;
  className?: string;
}

export function ResponsiveSupportList({ items, loading, error, className }: ResponsiveSupportListProps) {
  return (
    <div data-cbv-src="components/features/responsive-support-list.tsx:27" data-feat-id="feat_fd435a7f2" className={cn("flex flex-col gap-6", className)}>
      <div data-cbv-src="components/features/responsive-support-list.tsx:28" className="flex flex-col gap-1">
        <h2 data-cbv-src="components/features/responsive-support-list.tsx:29" className="font-heading text-xl font-semibold text-foreground">어떤 화면에서도 같은 흐름으로 비교하세요</h2>
        <p data-cbv-src="components/features/responsive-support-list.tsx:30" className="text-sm text-muted-foreground">휴대폰·태블릿·PC 어디서 열어도 내용과 버튼이 잘리지 않습니다.</p>
      </div>

      {loading ? (
        <div data-cbv-src="components/features/responsive-support-list.tsx:34" className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-40 w-full" />
          ))}
        </div>
      ) : error ? (
        <div data-cbv-src="components/features/responsive-support-list.tsx:40" role="alert">
          <EmptyState icon={<AlertCircle className="size-8" aria-hidden="true" />} title="지원 정보를 불러오지 못했어요" description={error} />
        </div>
      ) : items.length === 0 ? (
        <EmptyState icon={<Monitor className="size-8" aria-hidden="true" />} title="표시할 화면 구간이 없어요" description="지원 구간이 등록되면 여기에 보입니다." />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = deviceIcon[item.device];
            const support = supportMeta[item.support];
            const SupportIcon = support.icon;
            return (
              <StaggerItem key={item.id} className="h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div data-cbv-src="components/features/responsive-support-list.tsx:55" className="flex items-center justify-between gap-2">
                      <span data-cbv-src="components/features/responsive-support-list.tsx:56" className="inline-flex size-10 items-center justify-center rounded-md bg-accent text-brand">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span data-cbv-src="components/features/responsive-support-list.tsx:59" className={cn("inline-flex items-center gap-1 text-xs font-medium", support.className)}>
                        <SupportIcon className="size-3.5" aria-hidden="true" />
                        {support.label}
                      </span>
                    </div>
                    <div data-cbv-src="components/features/responsive-support-list.tsx:64" className="flex flex-col gap-1">
                      <h3 data-cbv-src="components/features/responsive-support-list.tsx:65" className="font-heading text-lg font-semibold text-foreground">{item.label}</h3>
                      <p data-cbv-src="components/features/responsive-support-list.tsx:66" className="text-xs tabular-nums text-muted-foreground">
                        {item.minWidth}px{item.maxWidth !== null ? ` ~ ${item.maxWidth}px` : " 이상"} · {item.columns}열
                      </p>
                      <p data-cbv-src="components/features/responsive-support-list.tsx:69" className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                    <div data-cbv-src="components/features/responsive-support-list.tsx:71" className="mt-auto flex flex-wrap gap-1.5">
                      {item.browsers.map((browser) => (
                        <Badge key={browser} variant="outline">
                          {browser}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      )}
    </div>
  );
}
