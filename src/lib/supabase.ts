import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || "";
const supabaseServiceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || supabaseAnonKey;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseUrl.startsWith("http") &&
    supabaseAnonKey &&
    supabaseAnonKey.length > 20
);

// Client-side Supabase instance (uses anon key)
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Server-side Supabase instance (uses service role key if available for administrative writes/reads)
export function getServerSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  return createClient(supabaseUrl, supabaseServiceRoleKey || supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
