import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion";

const DEVICES = [
  {
    key: "mobile",
    label: "모바일",
    description: "한 손으로 읽고 누를 수 있는 단일 열 구성, 전체 폭 CTA.",
  },
  {
    key: "tablet",
    label: "태블릿",
    description: "2열 배치로 핵심 콘텐츠와 CTA 노출 순서를 유지합니다.",
  },
  {
    key: "desktop",
    label: "PC",
    description: "넓은 여백과 3열 배치로 내용이 겹치거나 잘리지 않습니다.",
  },
] as const;

const ICONS = {
  mobile: Smartphone,
  tablet: Tablet,
  desktop: Monitor,
} as const;

/**
 * 모바일/PC 반응형 지원 (feat_fd435a7f2)
 * 지원 환경과 그 환경에서의 표시 방식을 설명한다.
 */
export function ResponsiveSupport() {
  return (
    <section
      data-feat-id="feat_fd435a7f2"
      aria-labelledby="responsive-heading"
    >
      <h2
        id="responsive-heading"
        className="font-display text-xl font-semibold tracking-tight"
      >
        모바일·PC 어디서나 동일한 흐름
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        화면 너비가 달라져도 콘텐츠와 CTA의 순서가 유지되고, 가로 스크롤 없이 읽을 수
        있습니다.
      </p>

      <Stagger className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DEVICES.map((device) => {
          const Icon = ICONS[device.key];
          return (
            <StaggerItem key={device.key}>
              <Card className="h-full transition-colors hover:border-brand/40">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-base font-medium">{device.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {device.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
