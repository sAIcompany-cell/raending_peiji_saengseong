import { Monitor, Smartphone, Tablet, MonitorSmartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Stagger, StaggerItem } from "@/components/motion";
import type { ResponsiveSetting } from "@/types";

const deviceMeta: Record<
  ResponsiveSetting["device"],
  { label: string; icon: typeof Monitor }
> = {
  mobile: { label: "모바일", icon: Smartphone },
  tablet: { label: "태블릿", icon: Tablet },
  desktop: { label: "PC", icon: Monitor },
};

/**
 * 어떤 화면에서 보고 있어도 같은 순서로 읽힌다는 것을 보여주는 목록.
 */
export function ResponsiveSupportList({
  settings,
  title = "휴대폰에서도, PC에서도 그대로 비교하세요",
  description = "이동 중에 훑어보고, 집에서 큰 화면으로 다시 비교할 수 있습니다.",
}: {
  settings: ResponsiveSetting[];
  title?: string;
  description?: string;
}) {
  return (
    <section data-feat-id="feat_fd435a7f2" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>

      {settings.length === 0 ? (
        <EmptyState
          icon={<MonitorSmartphone className="size-6" aria-hidden="true" />}
          title="지원 화면 정보를 아직 불러오지 못했습니다"
          description="잠시 후 다시 시도하면 지원 화면 폭이 표시됩니다."
        />
      ) : (
        <Stagger className="grid grid-cols-1 gap-[var(--density-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {settings.map((setting) => {
            const meta = deviceMeta[setting.device];
            const Icon = meta.icon;
            return (
              <StaggerItem key={setting.id} className="h-full">
                <Card className="h-full">
                  <CardContent className="flex h-full items-start gap-4 p-6">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-brand">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex min-w-0 flex-col gap-1">
                      <p className="text-sm font-medium text-foreground">
                        {meta.label} · {setting.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        가로 <span className="font-semibold text-brand">{setting.breakpoint}</span>
                        px 부터 이 배치로 보입니다
                      </p>
                    </div>
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
