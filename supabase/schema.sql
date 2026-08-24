-- Cubivora Studio auto-generated schema
-- Supabase SQL Editor 에 붙여넣고 Run 하세요.

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
