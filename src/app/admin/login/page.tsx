"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowUpRight, AlertCircle, RefreshCw } from "lucide-react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import "../admin.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function checkExisting() {
      if (!supabase) {
        setCheckingSession(false);
        return;
      }
      try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          router.replace("/admin");
          return;
        }
      } catch (err) {
        console.error("Session check error:", err);
      } finally {
        setCheckingSession(false);
      }
    }

    checkExisting();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!isSupabaseConfigured || !supabase) {
      setErrorMsg("Supabase is not configured yet. Please add your Supabase credentials in .env.local.");
      return;
    }

    if (!email.trim() || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMsg(error.message || "Invalid email or password.");
      } else if (data.session) {
        router.replace("/admin");
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred during sign in.");
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="admin-auth-loading">
        <RefreshCw size={24} className="spin" />
        <span>Checking admin session...</span>
      </div>
    );
  }

  return (
    <div className="admin-login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <span className="login-brand-tag">VOwn Studio</span>
          <h1>Admin Access</h1>
        </div>

        {errorMsg && (
          <div className="login-error-alert">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="admin-email">Admin Email</label>
            <div className="input-with-icon">
              <Mail size={16} />
              <input
                id="admin-email"
                type="email"
                placeholder="admin@vown.site"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="admin-password">Password</label>
            <div className="input-with-icon">
              <Lock size={16} />
              <input
                id="admin-password"
                type="password"
                placeholder="••••••••••••"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="login-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <RefreshCw size={16} className="spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div className="login-footer-links">
          <Link href="/">
            <span>Return to website</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
