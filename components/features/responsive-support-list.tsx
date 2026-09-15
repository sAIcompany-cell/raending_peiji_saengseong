import { Smartphone, Tablet, Monitor, LayoutGrid } from "lucide-react";
import type { LandingPageSection } from "@/types";
import { Stagger, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";

interface ResponsiveSupportListProps {
  items: LandingPageSection[];
}

function iconFor(type?: string) {
  if (type === "mobile") return Smartphone;
  if (type === "tablet") return Tablet;
  if (type === "desktop") return Monitor;
  return LayoutGrid;
}

/** 모바일·태블릿·PC 에서 어떻게 보이는지 안내하는 카드 목록. */
export function ResponsiveSupportList({ items }: ResponsiveSupportListProps) {
  const sorted = [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div data-cbv-src="components/features/responsive-support-list.tsx:23" data-feat-id="feat_fd435a7f2">
      {sorted.length === 0 ? (
        <EmptyState
          icon={<LayoutGrid className="size-8" />}
          title="표시할 화면 정보가 없어요"
          description="모바일과 PC 어디서든 같은 흐름으로 비교할 수 있어요."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((item) => {
            const Icon = iconFor(item.type);
            return (
              <StaggerItem key={item.id ?? item.title}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-3 p-6">
                    <span data-cbv-src="components/features/responsive-support-list.tsx:38" className="flex size-10 items-center justify-center rounded-md bg-muted text-brand">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <p data-cbv-src="components/features/responsive-support-list.tsx:41" className="text-base font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p data-cbv-src="components/features/responsive-support-list.tsx:44" className="text-sm leading-relaxed text-muted-foreground">
                      {item.content}
                    </p>
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
