import { NextResponse } from "next/server";
import { addMessage } from "@/lib/messagesStore";

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

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief message (at least 5 characters)." },
        { status: 400 }
      );
    }

    // Save directly to Supabase database (or local store during setup)
    const result = await addMessage({
      name,
      email,
      service: service || "General Inquiry",
      message,
    });

    return NextResponse.json({
      success: true,
      status: "delivered",
      storage: result.isSupabase ? "supabase" : "local",
      message: "Your message has been sent. We will reply to the email address you gave us.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
