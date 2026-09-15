import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockLandingPageSectionList } from "@/lib/mock-data";
import { ScreenShell, findSection } from "@/components/features/screen-shell";
import { ScreenHeader } from "@/components/features/screen-header";
import { SectionPanel, type SectionPoint } from "@/components/features/section-panel";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const points: SectionPoint[] = [
  {
    title: "한눈에 보기 어려운 가격",
    description:
      "마음에 드는 가구를 찾아도 제품별 가격을 비교하려면 여러 곳을 따로 확인해야 합니다.",
  },
  {
    title: "계속 늘어나는 매장 방문",
    description:
      "내게 맞는 제품인지 알아보려 여러 매장을 오가는 데 많은 시간과 수고가 듭니다.",
  },
];

export default function ProblemPage() {
  const section = findSection(mockLandingPageSectionList, "section-problem");

  return (
    <ScreenShell currentPath="/screen">
      <ScreenHeader title={section.title ?? ""} description={section.content} />
      <section data-cbv-src="app/screen/page.tsx:30" className="py-12 sm:py-16">
        <Container>
          <SectionPanel
            points={points}
            status="지금 겪는 불편"
            actions={
              <Link
                href="/screen-2"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                계속
                <ArrowRight aria-hidden="true" />
              </Link>
            }
          />
        </Container>
      </section>
    </ScreenShell>
  );
}
