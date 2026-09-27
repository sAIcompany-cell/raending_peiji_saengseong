-- Cubivora Studio auto-generated schema + Row Level Security
-- 사용법: 이 파일 **전체**를 Supabase → SQL Editor → New query 에 붙여넣고 Run 하세요.
--        테이블 생성과 행 단위 보안 정책이 함께 적용됩니다. 여러 번 실행해도 안전합니다.
-- 주의: 이 파일은 코드 생성 때마다 다시 만들어집니다. 직접 쓴 SQL 은 별도 파일에 두세요.
--
-- 정책 요약 (테이블 : 규칙)
--   landingpagesection   누구나 읽기 · 쓰기는 로그인 사용자 본인 행만
--   testimonial          누구나 읽기 · 쓰기는 로그인 사용자 본인 행만
--   analyticsevent       누구나 읽기 · 쓰기는 로그인 사용자 본인 행만

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.landingpagesection (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  type text,
  title text,
  content text,
  order numeric
);

CREATE TABLE IF NOT EXISTS public.testimonial (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  quote text,
  author text,
  result text
);

CREATE TABLE IF NOT EXISTS public.analyticsevent (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text,
  pagepath text,
  occurredat timestamptz
);

-- ── Row Level Security ─────────────────────────────────────────────
-- 정책이 없는 명령은 거부된다. 아래 정책이 곧 이 앱의 접근 규칙이다.

ALTER TABLE public.landingpagesection ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 — 기획서의 API/기능이 로그인 없이 이 데이터를 보여준다.
DROP POLICY IF EXISTS "landingpagesection_select_public" ON public.landingpagesection;
CREATE POLICY "landingpagesection_select_public" ON public.landingpagesection
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "landingpagesection_insert_own" ON public.landingpagesection;
CREATE POLICY "landingpagesection_insert_own" ON public.landingpagesection
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "landingpagesection_update_own" ON public.landingpagesection;
CREATE POLICY "landingpagesection_update_own" ON public.landingpagesection
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "landingpagesection_delete_own" ON public.landingpagesection;
CREATE POLICY "landingpagesection_delete_own" ON public.landingpagesection
  FOR DELETE USING (auth.uid() = user_id);

ALTER TABLE public.testimonial ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 — 기획서의 API/기능이 로그인 없이 이 데이터를 보여준다.
DROP POLICY IF EXISTS "testimonial_select_public" ON public.testimonial;
CREATE POLICY "testimonial_select_public" ON public.testimonial
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "testimonial_insert_own" ON public.testimonial;
CREATE POLICY "testimonial_insert_own" ON public.testimonial
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "testimonial_update_own" ON public.testimonial;
CREATE POLICY "testimonial_update_own" ON public.testimonial
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "testimonial_delete_own" ON public.testimonial;
CREATE POLICY "testimonial_delete_own" ON public.testimonial
  FOR DELETE USING (auth.uid() = user_id);

ALTER TABLE public.analyticsevent ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 — 기획서의 API/기능이 로그인 없이 이 데이터를 보여준다.
DROP POLICY IF EXISTS "analyticsevent_select_public" ON public.analyticsevent;
CREATE POLICY "analyticsevent_select_public" ON public.analyticsevent
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "analyticsevent_insert_own" ON public.analyticsevent;
CREATE POLICY "analyticsevent_insert_own" ON public.analyticsevent
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "analyticsevent_update_own" ON public.analyticsevent;
CREATE POLICY "analyticsevent_update_own" ON public.analyticsevent
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "analyticsevent_delete_own" ON public.analyticsevent;
CREATE POLICY "analyticsevent_delete_own" ON public.analyticsevent
  FOR DELETE USING (auth.uid() = user_id);
