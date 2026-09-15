import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { ScreenHeader } from "@/components/features/screen-header";
import {
  SectionNote,
  SectionPanel,
  type SectionPoint,
} from "@/components/features/section-panel";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const points: SectionPoint[] = [
  {
    title: "원하는 가구 찾기",
    description: "필요한 가구와 원하는 조건을 기준으로 살펴보세요.",
  },
  {
    title: "가격 비교하기",
    description: "여러 제품의 가격을 한눈에 비교해 보세요.",
  },
  {
    title: "알맞은 제품 고르기",
    description: "조건과 가격을 함께 살펴보고 나에게 맞는 제품을 선택하세요.",
  },
];

export default function ServicePage() {
  const section = findSection(mockLandingPageSectionList, "section-service");

  return (
    <ScreenShell currentPath="/screen-2">
      <ScreenHeader title={section.title ?? ""} description={section.content} />
      <section className="py-12 sm:py-16">
        <Container>
          <SectionPanel
            points={points}
            status="이렇게 도와드려요"
            actions={
              <Link
                href="/screen-3"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                계속
                <ArrowRight aria-hidden="true" />
              </Link>
            }
          >
            <SectionNote>
              여러 매장을 직접 둘러보는 번거로움을 줄이고 합리적인 구매를 돕습니다.
            </SectionNote>
          </SectionPanel>
        </Container>
      </section>
    </ScreenShell>
  );
}
