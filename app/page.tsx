/* cbv-live-placeholder — Cubivora 제작 중 임시 화면.
   에이전트에게: 이 파일은 생성 진행 상황을 보여주려고 심어 둔 자리표시자다.
   실제 화면을 만들 때 **파일 전체를 버리고 새로 써라.** 여기 있는 내용을 참고하거나
   남겨 두지 마라. 커밋 직전에는 우리가 회수하므로 사용자 레포에도 남지 않는다. */

const STEPS: { label: string; state: "done" | "active" | "todo" }[] = [{"label": "타입 정의", "state": "done"}, {"label": "API·시드 데이터", "state": "done"}, {"label": "UI 블록", "state": "active"}, {"label": "화면 조립", "state": "todo"}];

const DOT: Record<string, { border: string; background: string }> = {
  done: { border: "#e4e4e7", background: "#e4e4e7" },
  active: { border: "#38bdf8", background: "transparent" },
  todo: { border: "#3f3f46", background: "transparent" },
};

const TEXT: Record<string, string> = {
  done: "#e4e4e7",
  active: "#fafafa",
  todo: "#71717a",
};

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "#e4e4e7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 560 }}>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#71717a",
          }}
        >
          {"제작 중"}
        </p>
        <h1
          style={{
            margin: "12px 0 0",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.35,
            color: "#fafafa",
          }}
        >
          {"랜딩 페이지 생성를 만들고 있어요"}
        </h1>
        <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.7, color: "#a1a1aa" }}>
          {"화면과 코드를 순서대로 만들고 있어요. 한 단계가 끝날 때마다 이 화면이 갱신됩니다."}
        </p>

        <ul
          style={{
            listStyle: "none",
            margin: "28px 0 0",
            padding: "20px 20px 20px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            border: "1px solid #27272a",
            borderRadius: 10,
            background: "#111113",
          }}
        >
          {STEPS.map((step) => (
            <li
              key={step.label}
              style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14 }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  flexShrink: 0,
                  borderRadius: "50%",
                  border: "1px solid " + DOT[step.state].border,
                  background: DOT[step.state].background,
                }}
              />
              <span style={{ color: TEXT[step.state] }}>{step.label}</span>
            </li>
          ))}
        </ul>

        <p style={{ margin: "20px 0 0", fontSize: 12, lineHeight: 1.7, color: "#52525b" }}>
          {"이 화면은 제작 과정을 보여주는 임시 화면입니다. 만들기가 끝나면 실제 서비스 화면으로 바뀌고, 이 화면은 코드에 남지 않습니다."}
        </p>
      </div>
    </main>
  );
}
