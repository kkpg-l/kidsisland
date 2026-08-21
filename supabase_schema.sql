-- KidsIsland Chinese Learning — Supabase schema and access policies
-- Run this migration in the Supabase SQL Editor before deploying the matching frontend.

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  display_name TEXT DEFAULT 'Explorer',
  avatar_url TEXT,
  native_lang TEXT DEFAULT 'en',
  streak_days INT DEFAULT 5,
  gold_stars INT DEFAULT 180,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.user_progress (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  vocab_id INT NOT NULL,
  mastered BOOLEAN DEFAULT FALSE,
  reviewed_count INT DEFAULT 1,
  last_reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  UNIQUE(user_id, vocab_id)
);

CREATE TABLE IF NOT EXISTS public.daily_checkins (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  week_number INT NOT NULL DEFAULT 1,
  claimed_day INT NOT NULL CHECK (claimed_day BETWEEN 1 AND 7),
  claimed_date DATE NOT NULL DEFAULT (timezone('utc'::text, now())::date),
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Upgrade existing installations that used a per-user/day unique constraint.
ALTER TABLE public.daily_checkins
  ADD COLUMN IF NOT EXISTS week_number INT NOT NULL DEFAULT 1;
ALTER TABLE public.daily_checkins
  ADD COLUMN IF NOT EXISTS claimed_date DATE NOT NULL DEFAULT (timezone('utc'::text, now())::date);
ALTER TABLE public.daily_checkins
  DROP CONSTRAINT IF EXISTS daily_checkins_user_id_claimed_day_key;
ALTER TABLE public.daily_checkins
  DROP CONSTRAINT IF EXISTS daily_checkins_user_week_day_key;
ALTER TABLE public.daily_checkins
  ADD CONSTRAINT daily_checkins_user_week_day_key UNIQUE(user_id, week_number, claimed_day);
ALTER TABLE public.daily_checkins
  DROP CONSTRAINT IF EXISTS daily_checkins_user_id_claimed_date_key;
ALTER TABLE public.daily_checkins
  ADD CONSTRAINT daily_checkins_user_id_claimed_date_key UNIQUE(user_id, claimed_date);

-- Restrict browser roles to the minimum operations the application needs.
REVOKE ALL ON TABLE public.profiles FROM anon, authenticated;
REVOKE ALL ON TABLE public.user_progress FROM anon, authenticated;
REVOKE ALL ON TABLE public.daily_checkins FROM anon, authenticated;

GRANT SELECT, INSERT ON TABLE public.profiles TO authenticated;
GRANT UPDATE (display_name, native_lang, avatar_url, updated_at) ON TABLE public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON TABLE public.user_progress TO authenticated;
GRANT SELECT ON TABLE public.daily_checkins TO authenticated;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_checkins ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT TO authenticated
  USING ((select auth.uid()) = id);
CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = id);
CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Users can view their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can insert/update their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON public.user_progress;
CREATE POLICY "Users can view their own progress"
  ON public.user_progress FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);
CREATE POLICY "Users can insert their own progress"
  ON public.user_progress FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);
CREATE POLICY "Users can update their own progress"
  ON public.user_progress FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can manage their own checkins" ON public.daily_checkins;
DROP POLICY IF EXISTS "Users can view their checkin status" ON public.daily_checkins;
DROP POLICY IF EXISTS "Users can view their own checkins" ON public.daily_checkins;
DROP POLICY IF EXISTS "Users can insert their own checkins" ON public.daily_checkins;
CREATE POLICY "Users can view their own checkins"
  ON public.daily_checkins FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

-- Claim one reward per UTC calendar day through a transactional, server-side function.
CREATE OR REPLACE FUNCTION public.claim_daily_reward()
RETURNS TABLE (week_number INT, claimed_day INT, reward_stars INT, total_stars INT, streak_days INT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  current_user_id UUID := auth.uid();
  today_utc DATE := timezone('utc'::text, now())::date;
  prior_checkins INT;
  reward INT;
  updated_profile public.profiles%ROWTYPE;
BEGIN
  IF current_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.daily_checkins
    WHERE user_id = current_user_id AND claimed_date = today_utc
  ) THEN
    RAISE EXCEPTION 'Today''s reward was already claimed';
  END IF;

  SELECT COUNT(*) INTO prior_checkins
  FROM public.daily_checkins
  WHERE user_id = current_user_id;

  week_number := (prior_checkins / 7) + 1;
  claimed_day := (prior_checkins % 7) + 1;
  reward := CASE WHEN claimed_day = 7 THEN 170 ELSE claimed_day * 10 END;

  INSERT INTO public.daily_checkins (user_id, week_number, claimed_day, claimed_date)
  VALUES (current_user_id, week_number, claimed_day, today_utc);

  UPDATE public.profiles
  SET
    gold_stars = COALESCE(gold_stars, 0) + reward,
    streak_days = COALESCE(streak_days, 0) + 1,
    updated_at = timezone('utc'::text, now())
  WHERE id = current_user_id
  RETURNING * INTO updated_profile;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  reward_stars := reward;
  total_stars := updated_profile.gold_stars;
  streak_days := updated_profile.streak_days;
  RETURN NEXT;
END;
$$;

REVOKE ALL ON FUNCTION public.claim_daily_reward() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_daily_reward() TO authenticated;

-- Create a profile safely for every Auth user. Metadata belongs in raw_user_meta_data.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name, avatar_url)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', 'Explorer'),
    COALESCE(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
