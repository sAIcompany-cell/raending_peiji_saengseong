"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * 런타임 오류 화면. 없으면 Next 기본 개발자용 오버레이가 사용자에게 그대로 보인다.
 * 기술적 스택트레이스 대신 사람 말과 다음 행동을 준다.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 px-4 py-24 text-center"
    >
      <h1 className="text-2xl font-semibold text-foreground">
        문제가 생겨 화면을 불러오지 못했어요
      </h1>
      <p className="text-sm text-muted-foreground">
        잠시 후 다시 시도해 주세요. 계속 같은 화면이 보이면 처음 화면으로 돌아가 주세요.
      </p>
      <div className="mt-2 flex gap-2">
        <Button onClick={() => reset()}>다시 시도</Button>
        <Button
          variant="outline"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.href = "/";
            }
          }}
        >
          처음으로
        </Button>
      </div>
    </main>
  );
}
