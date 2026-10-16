import fs from "fs";
import path from "path";
import { getServerSupabase, isSupabaseConfigured } from "./supabase";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: "unread" | "read" | "archived";
  created_at: string;
}

const LOCAL_DATA_DIR = path.join(process.cwd(), ".data");
const LOCAL_MESSAGES_FILE = path.join(LOCAL_DATA_DIR, "messages.json");

// Default initial message (from the user's recent inquiry)
const INITIAL_SEED_MESSAGES: ContactMessage[] = [
  {
    id: "seed-msg-1",
    name: "Anu Shri",
    email: "anupinnacle20@gmail.com",
    service: "A project for my business",
    message:
      "A question about one of our products? Tell us a little about it.",
    status: "unread",
    created_at: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
  },
];

function ensureLocalStore(): ContactMessage[] {
  try {
    if (!fs.existsSync(LOCAL_DATA_DIR)) {
      fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LOCAL_MESSAGES_FILE)) {
      fs.writeFileSync(
        LOCAL_MESSAGES_FILE,
        JSON.stringify(INITIAL_SEED_MESSAGES, null, 2),
        "utf-8"
      );
      return INITIAL_SEED_MESSAGES;
    }
    const raw = fs.readFileSync(LOCAL_MESSAGES_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Local store read error:", err);
    return INITIAL_SEED_MESSAGES;
  }
}

function writeLocalStore(messages: ContactMessage[]) {
  try {
    if (!fs.existsSync(LOCAL_DATA_DIR)) {
      fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(
      LOCAL_MESSAGES_FILE,
      JSON.stringify(messages, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error("Local store write error:", err);
  }
}

export async function getAllMessages(): Promise<{
  messages: ContactMessage[];
  isSupabase: boolean;
}> {
  const supabase = getServerSupabase();

  if (supabase && isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase fetch error, falling back to local:", error.message);
      } else if (data) {
        return { messages: data as ContactMessage[], isSupabase: true };
      }
    } catch (err) {
      console.error("Supabase connection exception:", err);
    }
  }

  // Fallback to local storage if Supabase is not yet configured or errored
  const localMessages = ensureLocalStore().sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return { messages: localMessages, isSupabase: false };
}

export async function addMessage(payload: {
  name: string;
  email: string;
  service?: string;
  message: string;
}): Promise<{ message: ContactMessage; isSupabase: boolean }> {
  const supabase = getServerSupabase();
  const newMessage: ContactMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: payload.name.trim(),
    email: payload.email.trim(),
    service: payload.service?.trim() || "General Inquiry",
    message: payload.message.trim(),
    status: "unread",
    created_at: new Date().toISOString(),
  };

  if (supabase && isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("messages")
        .insert([
          {
            name: newMessage.name,
            email: newMessage.email,
            service: newMessage.service,
            message: newMessage.message,
            status: "unread",
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Supabase insert error, saving locally:", error.message);
      } else if (data) {
        return { message: data as ContactMessage, isSupabase: true };
      }
    } catch (err) {
      console.error("Supabase insert exception:", err);
    }
  }

  // Fallback to local file store
  const existing = ensureLocalStore();
  const updated = [newMessage, ...existing];
  writeLocalStore(updated);
  return { message: newMessage, isSupabase: false };
}

export async function updateMessageStatus(
  id: string,
  status: "unread" | "read" | "archived"
): Promise<boolean> {
  const supabase = getServerSupabase();

  if (supabase && isSupabaseConfigured) {
    try {
      const { error } = await supabase
        .from("messages")
        .update({ status })
        .eq("id", id);
      if (!error) return true;
    } catch (err) {
      console.error("Supabase update error:", err);
    }
  }

  // Fallback to local store
  const existing = ensureLocalStore();
  const updated = existing.map((m) => (m.id === id ? { ...m, status } : m));
  writeLocalStore(updated);
  return true;
}

export async function deleteMessage(id: string): Promise<boolean> {
  const supabase = getServerSupabase();

  if (supabase && isSupabaseConfigured) {
    try {
      const { error } = await supabase.from("messages").delete().eq("id", id);
      if (!error) return true;
    } catch (err) {
      console.error("Supabase delete error:", err);
    }
  }

  // Fallback to local store
  const existing = ensureLocalStore();
  const updated = existing.filter((m) => m.id !== id);
  writeLocalStore(updated);
  return true;
}
