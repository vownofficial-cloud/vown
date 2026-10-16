"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Inbox,
  Mail,
  Search,
  RotateCw,
  Trash2,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  Archive,
  RefreshCw,
  LogOut,
  FileSpreadsheet,
} from "lucide-react";
import { ContactMessage } from "@/lib/messagesStore";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import "./admin.css";

export default function AdminInboxPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isSupabase, setIsSupabase] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read" | "archived">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [messageToDelete, setMessageToDelete] = useState<ContactMessage | null>(null);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
        setIsSupabase(data.isSupabaseConnected);
      }
    } catch (err) {
      console.error("Failed to load messages", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.replace("/admin/login");
  };

  useEffect(() => {
    let isMounted = true;

    async function checkAuthAndLoad() {
      if (!isSupabaseConfigured || !supabase) {
        router.replace("/admin/login");
        return;
      }

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          router.replace("/admin/login");
          return;
        }

        if (isMounted) {
          setUserEmail(session.user?.email || "Admin");
          setAuthChecking(false);
        }

        const res = await fetch("/api/admin/messages");
        const data = await res.json();
        if (isMounted && data.success) {
          setMessages(data.messages || []);
          setIsSupabase(data.isSupabaseConnected);
          setSelectedId((current) => {
            if (!current && data.messages && data.messages.length > 0) {
              return data.messages[0].id;
            }
            return current;
          });
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        router.replace("/admin/login");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    checkAuthAndLoad();

    const {
      data: { subscription },
    } = supabase
      ? supabase.auth.onAuthStateChange((_event, session) => {
          if (!session) {
            router.replace("/admin/login");
          } else if (isMounted) {
            setUserEmail(session.user?.email || "Admin");
          }
        })
      : { data: { subscription: null } };

    return () => {
      isMounted = false;
      subscription?.unsubscribe();
    };
  }, [router]);

  const handleStatusChange = async (
    id: string,
    newStatus: "unread" | "read" | "archived"
  ) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
    );
    try {
      await fetch("/api/admin/messages", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
    } catch (err) {
      console.error("Failed to update status", err);
      handleRefresh();
    }
  };

  const handleDelete = async (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selectedId === id) {
      const remaining = messages.filter((m) => m.id !== id);
      setSelectedId(remaining.length > 0 ? remaining[0].id : null);
    }
    try {
      await fetch(`/api/admin/messages?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete", err);
      handleRefresh();
    }
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleExportExcel = () => {
    if (!messages || messages.length === 0) {
      alert("No messages to export.");
      return;
    }

    const headers = [
      "ID",
      "Date & Time",
      "Sender Name",
      "Email Address",
      "Service / Topic",
      "Status",
      "Message Content",
    ];

    const rows = messages.map((m) => [
      m.id,
      new Date(m.created_at).toLocaleString(),
      m.name,
      m.email,
      m.service,
      m.status.toUpperCase(),
      m.message.replace(/\r?\n/g, " "),
    ]);

    const csvContent = [
      headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(","),
      ...rows.map((row) =>
        row
          .map((cell) => `"${String(cell || "").replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\r\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateStr = new Date().toISOString().split("T")[0];
    link.href = url;
    link.setAttribute("download", `vown-inbox-messages-${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      const matchesFilter =
        filter === "all" ? m.status !== "archived" : m.status === filter;
      const term = search.toLowerCase();
      const matchesSearch =
        !term ||
        m.name.toLowerCase().includes(term) ||
        m.email.toLowerCase().includes(term) ||
        m.service.toLowerCase().includes(term) ||
        m.message.toLowerCase().includes(term);
      return matchesFilter && matchesSearch;
    });
  }, [messages, filter, search]);

  const activeMessage = useMemo(() => {
    return messages.find((m) => m.id === selectedId) || null;
  }, [messages, selectedId]);

  const unreadCount = useMemo(
    () => messages.filter((m) => m.status === "unread").length,
    [messages]
  );

  if (authChecking) {
    return (
      <div className="admin-auth-loading">
        <RefreshCw size={24} className="spin" />
        <span>Verifying admin authentication...</span>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      {/* EXCLUSIVE ADMIN TOPBAR */}
      <header className="admin-topbar">
        <div className="admin-topbar-left">
          <Link href="/" className="admin-logo-mark">
            VOWN
          </Link>
          <span className="admin-console-tag">Studio Admin</span>
        </div>

        <div className="admin-topbar-center">
          <div className={`supabase-badge ${isSupabase ? "connected" : ""}`}>
            <span className="pulse-dot" />
            <span>{isSupabase ? "Supabase Live" : "Local Storage Mode"}</span>
          </div>
        </div>

        <div className="admin-topbar-right">
          {userEmail && (
            <div className="admin-user-pill" title="Signed in as">
              <span>{userEmail}</span>
            </div>
          )}

          <button
            className="admin-signout-btn"
            onClick={handleSignOut}
            title="Sign Out"
          >
            <LogOut size={13} />
            <span>Sign Out</span>
          </button>

          <button
            className="admin-refresh-btn"
            onClick={handleRefresh}
            title="Refresh inbox"
            aria-label="Refresh inbox"
          >
            <RotateCw size={15} className={loading ? "spin" : ""} />
          </button>

          <Link href="/" target="_blank" className="admin-top-link">
            <span>View Website</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </header>

      {/* DASHBOARD CONTAINER */}
      <main className="admin-container">
        {/* SUBHEADER & STATS */}
        <div className="admin-subbar">
          <div className="admin-heading-group">
            <h1>Messages Inbox</h1>
            <p>Direct inquiries and contact form submissions from your clients.</p>
          </div>
          <div className="admin-subbar-actions">
            <div className="admin-stats-pills">
              <span className="stat-chip">Total: {messages.length}</span>
              {unreadCount > 0 && (
                <span className="stat-chip unread">{unreadCount} Unread</span>
              )}
            </div>
            <button
              type="button"
              className="export-excel-btn"
              onClick={handleExportExcel}
              title="Download all messages as Excel spreadsheet (.csv)"
            >
              <FileSpreadsheet size={15} />
              <span>Export to Excel</span>
            </button>
          </div>
        </div>

        {/* CONTROLS: TABS & SEARCH */}
        <div className="admin-controls-bar">
          <div className="filter-pills">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Messages
              <span className="pill-count">{messages.filter(m => m.status !== "archived").length}</span>
            </button>
            <button
              className={`filter-btn ${filter === "unread" ? "active" : ""}`}
              onClick={() => setFilter("unread")}
            >
              Unread
              {unreadCount > 0 && <span className="pill-count">{unreadCount}</span>}
            </button>
            <button
              className={`filter-btn ${filter === "read" ? "active" : ""}`}
              onClick={() => setFilter("read")}
            >
              Read
              <span className="pill-count">{messages.filter(m => m.status === "read").length}</span>
            </button>
            <button
              className={`filter-btn ${filter === "archived" ? "active" : ""}`}
              onClick={() => setFilter("archived")}
            >
              Archived
              <span className="pill-count">{messages.filter(m => m.status === "archived").length}</span>
            </button>
          </div>

          <div className="search-box">
            <Search size={15} />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="search-clear-btn"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* INBOX MASTER-DETAIL LAYOUT */}
        <div className="admin-inbox-grid">
          {/* LEFT COLUMN: LIST */}
          <div className="inbox-list-column">
            {loading && messages.length === 0 ? (
              <div className="inbox-empty-view">
                <RefreshCw size={22} className="spin" />
                <span>Loading messages...</span>
              </div>
            ) : filteredMessages.length === 0 ? (
              <div className="inbox-empty-view">
                <Inbox size={30} />
                <strong>No messages found</strong>
                <span>{search ? "Try clearing your search keyword." : "Your inbox is currently clear."}</span>
              </div>
            ) : (
              filteredMessages.map((msg) => {
                const isSelected = msg.id === selectedId;
                const dateStr = new Date(msg.created_at).toLocaleDateString(
                  undefined,
                  {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                );

                return (
                  <div
                    key={msg.id}
                    className={`message-card ${isSelected ? "selected" : ""} ${
                      msg.status === "unread" ? "unread-item" : ""
                    }`}
                    onClick={() => {
                      setSelectedId(msg.id);
                      if (msg.status === "unread") {
                        handleStatusChange(msg.id, "read");
                      }
                    }}
                  >
                    <div className="message-card-header">
                      <div className="sender-name-group">
                        {msg.status === "unread" && (
                          <span className="item-unread-dot" title="Unread" />
                        )}
                        <strong>{msg.name}</strong>
                      </div>
                      <span className="message-date">{dateStr}</span>
                    </div>

                    <div className="message-card-topic">{msg.service}</div>

                    <p className="message-card-preview">{msg.message}</p>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT COLUMN: DETAIL VIEW */}
          <div className="inbox-detail-column">
            {activeMessage ? (
              <div className="detail-view-card">
                {/* HEADER */}
                <div className="detail-view-header">
                  <span className="detail-topic-badge">
                    {activeMessage.service}
                  </span>
                  <h2>{activeMessage.name}</h2>
                  <div className="detail-meta-row">
                    <span className="detail-meta-email">
                      {activeMessage.email}
                    </span>
                    <button
                      className="detail-copy-email-btn"
                      onClick={() => copyEmail(activeMessage.email)}
                      title="Copy email to clipboard"
                    >
                      {copiedEmail === activeMessage.email ? (
                        <>
                          <Check size={12} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy Email
                        </>
                      )}
                    </button>
                    <span className="detail-meta-time">
                      {new Date(activeMessage.created_at).toLocaleString(
                        undefined,
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }
                      )}
                    </span>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="detail-actions-row">
                    <a
                      className="action-btn-primary"
                      href={`mailto:${activeMessage.email}?subject=${encodeURIComponent(
                        `Re: Your inquiry to VOwn - ${activeMessage.service}`
                      )}&body=${encodeURIComponent(
                        `Hi ${activeMessage.name},\n\nThank you for reaching out to VOwn regarding "${activeMessage.service}".\n\n\nBest regards,\nVOwn Studio`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Mail size={15} /> Reply via Email
                    </a>

                    {activeMessage.status === "unread" ? (
                      <button
                        className="action-btn-secondary"
                        onClick={() =>
                          handleStatusChange(activeMessage.id, "read")
                        }
                      >
                        <CheckCircle2 size={15} /> Mark as Read
                      </button>
                    ) : (
                      <button
                        className="action-btn-secondary"
                        onClick={() =>
                          handleStatusChange(activeMessage.id, "unread")
                        }
                      >
                        Mark as Unread
                      </button>
                    )}

                    {activeMessage.status !== "archived" ? (
                      <button
                        className="action-btn-secondary"
                        onClick={() =>
                          handleStatusChange(activeMessage.id, "archived")
                        }
                        title="Archive this message"
                      >
                        <Archive size={15} /> Archive
                      </button>
                    ) : (
                      <button
                        className="action-btn-secondary"
                        onClick={() =>
                          handleStatusChange(activeMessage.id, "read")
                        }
                      >
                        Restore to Inbox
                      </button>
                    )}

                    <button
                      className="action-btn-danger"
                      onClick={() => setMessageToDelete(activeMessage)}
                      title="Delete message"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* MESSAGE BODY */}
                <div>
                  <span className="detail-message-label">Client Message</span>
                  <div className="detail-message-box">
                    {activeMessage.message}
                  </div>
                </div>
              </div>
            ) : (
              <div className="detail-empty-selection">
                <Inbox size={42} />
                <h3>Select a message to read</h3>
                <p>Choose any message from the left to view the complete details and reply.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* CUSTOM CONFIRMATION MODAL */}
      {messageToDelete && (
        <div
          className="dialog-backdrop"
          onClick={() => setMessageToDelete(null)}
        >
          <div
            className="dialog-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-icon-circle">
              <Trash2 size={22} />
            </div>
            <h3>Delete this message?</h3>
            <p>
              This will permanently remove the inquiry from{" "}
              <strong>{messageToDelete.name}</strong> ({messageToDelete.email}).
              This action cannot be undone.
            </p>
            <div className="dialog-actions">
              <button
                type="button"
                className="dialog-btn-cancel"
                onClick={() => setMessageToDelete(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="dialog-btn-confirm"
                onClick={() => {
                  const id = messageToDelete.id;
                  setMessageToDelete(null);
                  handleDelete(id);
                }}
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
