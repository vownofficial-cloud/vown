import { NextResponse } from "next/server";
import {
  getAllMessages,
  updateMessageStatus,
  deleteMessage,
} from "@/lib/messagesStore";

export async function GET() {
  try {
    const { messages, isSupabase } = await getAllMessages();
    return NextResponse.json({
      success: true,
      messages,
      isSupabaseConnected: isSupabase,
    });
  } catch (error) {
    console.error("Admin Messages GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !["unread", "read", "archived"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid parameters" },
        { status: 400 }
      );
    }
    await updateMessageStatus(id, status);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin Messages PATCH Error:", error);
    return NextResponse.json(
      { error: "Failed to update message" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing message ID" }, { status: 400 });
    }
    await deleteMessage(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin Messages DELETE Error:", error);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
