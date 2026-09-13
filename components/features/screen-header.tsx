import { Container } from "@/components/ui/container";

/**
 * 화면 상단 타이틀 블록(와이어프레임의 header-main).
 * 화면당 초점 1개 — 큰 제목 + 한 문장 설명만 둔다.
 */
export function ScreenHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-background">
      <Container className="py-10 sm:py-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
