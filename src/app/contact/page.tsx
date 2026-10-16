"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { ScrollReveal, TextReveal } from "@/components/motion/ScrollMotion";

const topics = [
  "A project for my business",
  "A VOwn product",
  "Working together",
  "Something else",
];

function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "fallback" | "error"
  >("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [fallback, setFallback] = useState("");
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);
    const payload = {
      name: String(fields.get("name") || "").trim(),
      email: String(fields.get("email") || "").trim(),
      service: String(fields.get("service") || ""),
      message: String(fields.get("message") || "").trim(),
    };

    if (payload.name.length < 2 || payload.message.length < 10) {
      setStatus("error");
      setFeedback(
        "Please add your name and a little more detail about what you need (at least 10 characters).",
      );
      return;
    }

    setStatus("sending");
    setFeedback("");
    setFallback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error || "We could not send your message. Please try again.",
        );
      }

      if (data.status === "delivered") {
        setStatus("idle");
        setShowSuccessModal(true);
        form.reset();
      } else {
        setStatus("fallback");
        setFeedback(
          "Your message has not been sent. Open your email app to send it, or write to admin@vown.site.",
        );
        setFallback(
          data.data?.mailtoFallback ||
            `mailto:admin@vown.site?subject=${encodeURIComponent(payload.service)}&body=${encodeURIComponent(payload.message)}`,
        );
      }
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please email admin@vown.site.",
      );
    }
  }

  return (
    <div className="shell contact-layout">
      <div className="contact-copy">
        <TextReveal>
          <h1>
            What do you
            <br />
            <span className="serif-word">have in mind?</span>
          </h1>
        </TextReveal>
        <ScrollReveal delay={0.15}>
          <p>
            A new website? A task you are tired of doing by hand? A question about
            one of our products? Tell us a little about it.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.25} className="direct-contact">
          <span className="eyebrow">Prefer direct email?</span>
          <a href="mailto:admin@vown.site">
            admin@vown.site <ArrowUpRight size={20} />
          </a>
          <button
            className="text-link"
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText("admin@vown.site");
                setCopied(true);
              } catch {
                setFeedback("Please copy this address: admin@vown.site");
              }
            }}
          >
            {copied ? (
              <>
                <Check size={15} /> Copied
              </>
            ) : (
              "Copy email address"
            )}
          </button>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2} className="contact-form-wrap">
        <form className="contact-form" onSubmit={submit}>
          <div className="form-pair">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                placeholder="Your name"
              />
            </label>
            <label>
              Your email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            What is this about?
            <select
              key={params.get("topic") || "project"}
              name="service"
              defaultValue={
                params.get("topic") === "product" ? topics[1] : topics[0]
              }
            >
              {topics.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </label>
          <label>
            Tell us about it
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              placeholder="What would you like to build or improve? If you already use tools, tell us which ones."
            />
          </label>
          <p className="form-note">
            You do not need the right technical words. Just explain it your way.
          </p>
          <button
            className="action"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <ArrowUpRight size={18} />
          </button>

          {feedback && status === "error" && (
            <div
              role="status"
              aria-live="polite"
              className="form-feedback"
            >
              {feedback}
            </div>
          )}

          {status === "fallback" && fallback && (
            <div role="status" aria-live="polite" className="form-feedback">
              {feedback}
              <a className="text-link" href={fallback}>
                Open email app <ArrowUpRight size={18} />
              </a>
            </div>
          )}
        </form>
      </ScrollReveal>

      {/* SENT CONFIRMED DIALOG BOX */}
      {showSuccessModal && (
        <div
          className="dialog-backdrop"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="contact-confirm-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-confirm-icon">
              <Check size={28} />
            </div>
            <h2>Sent Confirmed</h2>
            <p>
              Thank you for reaching out. We have received your message and{" "}
              <strong>we will reach you ASAP</strong>.
            </p>
            <button
              type="button"
              className="action contact-confirm-btn"
              onClick={() => setShowSuccessModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={<div className="shell page-intro">Loading contact form…</div>}
    >
      <ContactForm />
    </Suspense>
  );
}
