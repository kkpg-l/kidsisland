// Supabase client and authenticated data-access helpers for KidsIsland.
// Configuration is loaded from config.local.js, a browser-safe deployment file.

const SUPABASE_CONFIG = (typeof window !== "undefined" && window.KIDSISLAND_CONFIG) || {};
const SUPABASE_URL = SUPABASE_CONFIG.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = SUPABASE_CONFIG.SUPABASE_ANON_KEY || "";

let supabaseClient = null;

function getSupabase() {
  if (!supabaseClient && typeof supabase !== "undefined" && SUPABASE_URL && SUPABASE_ANON_KEY) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (error) {
      console.warn("Supabase initialization failed", error);
    }
  }
  return supabaseClient;
}

function requireSupabaseClient() {
  const client = getSupabase();
  if (!client) throw new Error("Supabase is not configured for this deployment.");
  return client;
}

async function signInWithGoogle() {
  try {
    const client = requireSupabaseClient();
    const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const redirectTo = isLocalhost ? window.location.origin : "https://kids.yuzikong.love";
    const { error } = await client.auth.signInWithOAuth({ provider: "google", options: { redirectTo } });
    if (error) throw error;
    return true;
  } catch (error) {
    console.warn("Google sign-in failed", error);
    if (typeof showToast === "function") showToast("Google sign-in could not be started. Please try again.");
    return false;
  }
}

async function signOutUser() {
  const client = requireSupabaseClient();
  const { error } = await client.auth.signOut();
  if (error) throw error;
  return true;
}

async function syncUserProfileDB(userId) {
  if (!userId) return null;
  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("profiles")
    .select("id, display_name, avatar_url, native_lang, streak_days, gold_stars")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function ensureUserProfileDB(userId, profileData) {
  if (!userId) return null;
  const client = requireSupabaseClient();
  const { error } = await client
    .from("profiles")
    .upsert(
      {
        id: userId,
        display_name: profileData.userName || "Explorer",
        native_lang: profileData.langBase || "en",
        avatar_url: profileData.userAvatarUrl || "",
      },
      { onConflict: "id", ignoreDuplicates: true }
    );
  if (error) throw error;
}

async function saveUserProfileDB(userId, profileData) {
  if (!userId) return;
  const client = requireSupabaseClient();
  const { error } = await client
    .from("profiles")
    .update({
      display_name: profileData.userName || "Explorer",
      native_lang: profileData.langBase || "en",
      avatar_url: profileData.userAvatarUrl || "",
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId);
  if (error) throw error;
}

async function loadLearningProgressDB(userId) {
  if (!userId) return [];
  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("user_progress")
    .select("vocab_id")
    .eq("user_id", userId)
    .eq("mastered", true);
  if (error) throw error;
  return (data || []).map((row) => row.vocab_id).filter(Number.isInteger);
}

async function saveLearningProgressDB(userId, vocabId) {
  if (!userId || !Number.isInteger(vocabId)) return;
  const client = requireSupabaseClient();
  const { error } = await client
    .from("user_progress")
    .upsert(
      {
        user_id: userId,
        vocab_id: vocabId,
        mastered: true,
        reviewed_count: 1,
        last_reviewed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,vocab_id" }
    );
  if (error) throw error;
}

async function loadCheckinStateDB(userId) {
  if (!userId) return { week: 1, claimedDays: [] };
  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("daily_checkins")
    .select("week_number, claimed_day")
    .eq("user_id", userId)
    .order("week_number", { ascending: false })
    .order("claimed_day", { ascending: true });
  if (error) throw error;
  if (!data || !data.length) return { week: 1, claimedDays: [] };

  const week = data[0].week_number;
  return { week, claimedDays: data.filter((row) => row.week_number === week).map((row) => row.claimed_day) };
}

async function claimDailyRewardDB() {
  const client = requireSupabaseClient();
  const { data, error } = await client.rpc("claim_daily_reward");
  if (error) throw error;
  return Array.isArray(data) ? data[0] : data;
}
