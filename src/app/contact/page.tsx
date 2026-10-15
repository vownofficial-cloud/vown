"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { MotionWrap } from "@/components/motion/MotionWrap";
import {
  Mail,
  Copy,
  Check,
  Send,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Info,
  Clock,
  ArrowUpRight,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "Automate repetitive tasks";

  const getServiceLabel = (param: string) => {
    switch (param) {
      case "ai-automation":
        return "Automate repetitive tasks";
      case "business-integrations":
        return "Connect my business tools";
      case "website-development":
        return "Build or redesign a website";
      default:
        return "Automate repetitive tasks";
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: getServiceLabel(initialService),
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "delivered" | "dev_mode" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const serviceParam = searchParams.get("service");
  const [prevServiceParam, setPrevServiceParam] = useState(serviceParam);
  if (serviceParam !== prevServiceParam) {
    setPrevServiceParam(serviceParam);
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: getServiceLabel(serviceParam) }));
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please tell us briefly about what you need (at least a sentence).";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Inquiry from ${formData.name || "Client"} — ${formData.service}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.service}\n\nProject Details:\n${formData.message}`
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setFeedbackMessage("");
    setMailtoFallback(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      if (data.status === "delivered") {
        setStatus("delivered");
        setFeedbackMessage("Thank you! Your message has been sent directly to admin@vown.site.");
        setFormData({
          name: "",
          email: "",
          service: "Automate repetitive tasks",
          message: "",
        });
      } else {
        setStatus("dev_mode");
        setFeedbackMessage(
          "Your message is ready. Click below to send it directly to admin@vown.site using your email app."
        );
        setMailtoFallback(data.data?.mailtoFallback || buildMailtoUrl());
      }
    } catch (err: unknown) {
      setStatus("error");
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setFeedbackMessage(errorMessage);
    }
  };

  return (
    <div className="py-20 sm:py-28 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <MotionWrap delay={0.1} direction="up" className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-2xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#334155] dark:bg-slate-300" />
            <span className="text-xs font-semibold tracking-tight text-[#334155] dark:text-slate-200">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-tight mb-6">
            What&apos;s slowing you down?
            <br />
            <span className="text-[#334155] dark:text-slate-300">Let&apos;s fix it.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#64748B] dark:text-slate-300 leading-relaxed">
            Tell us about a workflow bottleneck, tools you want to connect, or a website project.
            We read every inquiry directly and reply with practical advice.
          </p>
        </MotionWrap>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <MotionWrap delay={0.15} direction="up" className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#0F172A] dark:text-white" />
              </div>

              <div className="text-xs uppercase font-mono tracking-wider text-[#64748B] dark:text-slate-400 mb-1">
                Direct Email
              </div>
              <div className="text-xl font-bold text-[#0F172A] dark:text-white font-mono break-all mb-4">
                {siteConfig.contactEmail}
              </div>

              <p className="text-sm text-[#475569] dark:text-slate-300 leading-relaxed mb-6">
                Prefer email? Drop us a line directly. Whether you have a concrete project ready to build or just want to explore what&apos;s possible, we&apos;re glad to chat.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  onClick={handleCopyEmail}
                  variant="secondary"
                  size="sm"
                  icon={
                    copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#64748B] dark:text-slate-400" />
                    )
                  }
                  iconPosition="left"
                >
                  {copiedEmail ? "Email Copied!" : "Copy Email"}
                </Button>

                <Button
                  href={`mailto:${siteConfig.contactEmail}?subject=Inquiry%20from%20vown.site`}
                  isExternal
                  variant="outline"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Open in Email App
                </Button>
              </div>
            </div>

            {/* Direct Communication Promise */}
            <div className="p-6 rounded-2xl bg-white/70 dark:bg-[#111827]/70 border border-[#E2E8F0] dark:border-slate-800 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#334155] dark:text-slate-300 shrink-0 mt-0.5" />
              <div className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-[#0F172A] dark:text-white">Quick response.</span> All emails sent to <span className="font-mono text-[#0F172A] dark:text-white">admin@vown.site</span> are read directly by our team. We usually respond within one business day.
              </div>
            </div>
          </MotionWrap>

          {/* Right Column: Contact Form */}
          <MotionWrap delay={0.2} direction="up" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-slate-800 shadow-sm">
              
              <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
                Send a Quick Note
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mb-8">
                Share a few details below and we will get back to you promptly.
              </p>

              {/* Status Notifications */}
              {status === "delivered" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-sm">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Message Sent Successfully</span>
                  </div>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                    {feedbackMessage}
                  </p>
                </div>
              )}

              {status === "dev_mode" && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-sm">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Inquiry Ready</span>
                  </div>
                  <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed mb-3">
                    {feedbackMessage}
                  </p>
                  {mailtoFallback && (
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] font-medium text-xs hover:bg-[#1E293B] dark:hover:bg-slate-100 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Click to Send via Your Email App</span>
                    </a>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm">Unable to submit form</div>
                    <div className="text-xs text-rose-700 dark:text-rose-300 mt-0.5">{feedbackMessage}</div>
                    <div className="mt-2 text-xs">
                      Please email us directly at{" "}
                      <a href={`mailto:${siteConfig.contactEmail}`} className="underline font-mono">
                        {siteConfig.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: "" });
                    }}
                    placeholder="e.g. Maya Robinson"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0B0F17] focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-slate-400 focus:border-transparent transition-all"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-rose-500">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                    }}
                    placeholder="e.g. maya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0B0F17] focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-slate-400 focus:border-transparent transition-all"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-rose-500">{formErrors.email}</p>
                  )}
                </div>

                {/* Area of Interest */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                    What can we help you with?
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 text-sm text-[#0F172A] dark:text-white focus:bg-white dark:focus:bg-[#0B0F17] focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-slate-400 focus:border-transparent transition-all"
                  >
                    <option value="Automate repetitive tasks">Automate repetitive tasks</option>
                    <option value="Connect my business tools">Connect my business tools</option>
                    <option value="Build or redesign a website">Build or redesign a website</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                    What are you looking to do? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                    }}
                    placeholder="Tell us what you're working on, what feels slow, or what you'd like to build..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-[#E2E8F0] dark:border-slate-800 text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0B0F17] focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-slate-400 focus:border-transparent transition-all resize-y"
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-500">{formErrors.message}</p>
                  )}
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:flex-1 justify-center"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>

                  <a
                    href={buildMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#E2E8F0] dark:border-slate-700 bg-white dark:bg-[#0B0F17] text-sm font-medium text-[#334155] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 transition-colors"
                  >
                    <span>Send via Email App</span>
                    <ArrowUpRight className="w-4 h-4 text-[#64748B] dark:text-slate-400" />
                  </a>
                </div>

                <div className="text-[11px] text-[#94A3B8] dark:text-slate-500 text-center pt-2">
                  Delivered directly to{" "}
                  <span className="font-mono text-[#64748B] dark:text-slate-400">admin@vown.site</span>.
                </div>
              </form>

            </div>
          </MotionWrap>

        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-28 text-center text-sm font-mono text-[#64748B] dark:text-slate-400">
          Loading contact page...
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
