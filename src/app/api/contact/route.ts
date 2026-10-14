import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  service?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, service, message } = body;

    // Strict validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief message describing your project (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Backend dispatch check
    // If a service like Resend or SendGrid is configured via environment variable:
    const resendApiKey = process.env.RESEND_API_KEY;
    const isBackendConfigured = Boolean(resendApiKey);

    // Log the inquiry for operational audit
    console.log("[VOwn Contact Inquiry Received]:", {
      name,
      email,
      service: service || "General Inquiry",
      message,
      timestamp: new Date().toISOString(),
      backendDispatchConfigured: isBackendConfigured,
    });

    if (isBackendConfigured) {
      // If RESEND_API_KEY is present, send using Resend API:
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "VOwn Website <contact@vown.site>",
            to: ["admin@vown.site"],
            reply_to: email,
            subject: `[VOwn Inquiry] New message from ${name} (${service || "General"})`,
            text: `Name: ${name}\nEmail: ${email}\nService: ${service || "General"}\n\nMessage:\n${message}`,
          }),
        });

        if (!res.ok) {
          throw new Error(`Resend API returned status ${res.status}`);
        }

        return NextResponse.json({
          success: true,
          status: "delivered",
          message: "Thank you! Your message has been sent directly to admin@vown.site.",
        });
      } catch (sendErr) {
        console.error("Failed to send via Resend:", sendErr);
        // Fall back to recorded status
      }
    }

    // When no third-party email provider key is configured in .env.local:
    // Inform the user honestly as required by the VOwn guidelines.
    return NextResponse.json({
      success: true,
      status: "dev_received",
      message:
        "Your message was recorded locally in the VOwn backend. To automatically dispatch real-time emails to admin@vown.site, set RESEND_API_KEY in your deployment environment.",
      data: {
        name,
        email,
        service: service || "General",
        mailtoFallback: `mailto:admin@vown.site?subject=${encodeURIComponent(
          `Inquiry from ${name} - ${service || "VOwn"}`
        )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`,
      },
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message. Please email admin@vown.site directly." },
      { status: 500 }
    );
  }
}
