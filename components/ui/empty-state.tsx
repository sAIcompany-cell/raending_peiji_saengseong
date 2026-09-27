import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * 빈 상태 — 안내 문구 + 다음 행동. 목록·검색 결과가 0건일 때 반드시 쓴다.
 * (이 컴포넌트가 없어서 화면마다 다른 모양으로 매번 새로 만들어지고 있었다.)
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border px-6 py-14 text-center",
        className,
      )}
    >
      {icon ? <div className="text-muted-foreground">{icon}</div> : null}
      <p className="text-base font-medium text-foreground">{title}</p>
      {description ? (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
