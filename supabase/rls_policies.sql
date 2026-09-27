-- Cubivora Studio auto-generated RLS policies
-- schema.sql 에 같은 정책이 이미 들어 있다. 정책만 다시 적용할 때 이 파일을 쓴다.
-- Supabase SQL Editor 에 붙여넣고 Run 하세요. 코드 생성 때마다 다시 만들어집니다.

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
