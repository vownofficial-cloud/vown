"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { MotionWrap } from "@/components/motion/MotionWrap";
import { Button } from "@/components/ui/Button";
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
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Automation",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [backendNotice, setBackendNotice] = useState<string | null>(null);
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

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
      errors.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please write a message of at least 10 characters.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Inquiry from ${formData.name || "Client"} — ${formData.service}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setFeedbackMessage("");
    setBackendNotice(null);

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

      setStatus("success");
      setFeedbackMessage(data.message || "Thank you! We received your message.");

      if (data.status === "dev_received") {
        setBackendNotice(
          "Notice: Because this site is running in development/preview mode without an external email API key configured, click below to send this inquiry directly to admin@vown.site via your email app."
        );
        setMailtoFallback(data.data?.mailtoFallback || buildMailtoUrl());
      } else {
        // Form submitted and dispatched through email provider
        setFormData({
          name: "",
          email: "",
          service: "AI Automation",
          message: "",
        });
      }
    } catch (err: unknown) {
      setStatus("error");
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setFeedbackMessage(errorMessage);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <MotionWrap delay={0.1} direction="up">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#334155]" />
              Start a Conversation
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Have an idea? Let&apos;s build it.
            </h2>
            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              Tell us what you&apos;re working on and explore how VOwn can help.
            </p>
          </MotionWrap>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Inquiries Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#0F172A]" />
              </div>

              <div className="text-xs uppercase font-mono tracking-wider text-[#64748B] mb-1">
                Official Email
              </div>
              <div className="text-xl font-bold text-[#0F172A] font-mono break-all mb-4">
                {siteConfig.contactEmail}
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Whether you need AI automation, systems integration, a new website, or want to discuss a venture collaboration, you can reach us directly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  onClick={handleCopyEmail}
                  variant="secondary"
                  size="sm"
                  icon={
                    copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#64748B]" />
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

            {/* Clear explanation of how inquiries are handled */}
            <div className="p-6 rounded-2xl bg-white/70 border border-[#E2E8F0] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#334155] shrink-0 mt-0.5" />
              <div className="text-xs text-[#475569] leading-relaxed">
                <span className="font-semibold text-[#0F172A]">Direct communication.</span> All inquiries sent to <span className="font-mono text-[#0F172A]">admin@vown.site</span> are reviewed directly by our core team. We typically reply within one business day.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
              
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-8">
                Fill out the form below or send an email directly to{" "}
                <span className="font-mono text-[#0F172A]">{siteConfig.contactEmail}</span>.
              </p>

              {/* Feedback Alert for Success / Dev Mode */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-sm">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Inquiry Ready</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                    {feedbackMessage}
                  </p>

                  {backendNotice && (
                    <div className="p-3 rounded-xl bg-white/80 border border-emerald-300 text-xs text-slate-700 mb-3 flex items-start gap-2">
                      <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{backendNotice}</span>
                    </div>
                  )}

                  {mailtoFallback && (
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] text-white font-medium text-xs hover:bg-[#1E293B] transition-colors shadow-2xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Click to Send via Your Email App</span>
                    </a>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm">Could not submit form</div>
                    <div className="text-xs text-rose-700 mt-0.5">{feedbackMessage}</div>
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
                  <label htmlFor="name" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
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
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-rose-500">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
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
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-rose-500">{formErrors.email}</p>
                  )}
                </div>

                {/* Inquiry Type / Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    What can we help you with?
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[#E2E8F0] text-sm text-[#0F172A] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all"
                  >
                    <option value="AI Automation">AI Automation (Workflows &amp; Tasks)</option>
                    <option value="Business Integrations">Business Integrations (Connecting Software &amp; Tools)</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Venture / Chennai VOwn">Ventures &amp; Chennai VOwn</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                    How can we help? <span className="text-rose-500">*</span>
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
                    placeholder="Briefly describe what you're working on, your goals, or your questions..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all resize-y"
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-500">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full sm:flex-1 justify-center"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {status === "loading" ? "Processing..." : "Send Inquiry"}
                  </Button>

                  <a
                    href={buildMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#E2E8F0] bg-white text-sm font-medium text-[#334155] hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    <span>Send via Email App</span>
                    <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
                  </a>
                </div>

                {/* Honest Delivery Disclaimer */}
                <div className="text-[11px] text-[#94A3B8] text-center pt-2">
                  Inquiries are delivered directly to{" "}
                  <span className="font-mono text-[#64748B]">admin@vown.site</span>.
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
