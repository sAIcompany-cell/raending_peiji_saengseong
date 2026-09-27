import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * 본문 폭·좌우 여백의 단일 기준. 화면마다 max-w 를 다시 정하면 폭이 제각각이 된다.
 * 페이지 최상위를 이걸로 감싼다.
 */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
}) {
  const width =
    size === "narrow" ? "max-w-2xl" : size === "wide" ? "max-w-7xl" : "max-w-5xl";
  return (
    <div data-cbv-src="components/ui/container.tsx:20" className={cn("mx-auto w-full px-4 sm:px-6", width, className)}>{children}</div>
  );
}
